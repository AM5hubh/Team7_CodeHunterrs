import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Admin } from "../models/admin.model.js";
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import UserOtpVerification from '../models/user.otpverification.js';


const generateAccessAndRefreshTokens = async (adminId) => {
  try {
    const admin = await Admin.findById(adminId);
    const accessToken = admin.generateAccessToken();
    const refreshToken = admin.generateRefreshToken();

    admin.refreshToken = refreshToken;
    await admin.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Error generating tokens");
  }
};

const registerAdmin = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;

  // Validate input
  if (!fullname?.trim() || !email?.trim() || !password?.trim()) {
    return res.status(400).json(new ApiError(400, "All fields are required"));
  }

  // Check if admin already exists
  const existedAdmin = await Admin.findOne({ email });
  if (existedAdmin) {
    return res.status(409).json(new ApiError(409, "Admin with this email already exists"));
  }

  // Create a new Admin
  const admin = new Admin({ fullname, email, password, verified: false });
  const savedAdmin = await admin.save();

  sendOtpVerificationEmail(savedAdmin, res); // Send OTP for verification
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json(new ApiError(400, "Email and password are required"));
  }

  const admin = await Admin.findOne({ email });
  if (!admin) {
    return res.status(400).json(new ApiError(400, "Admin does not exist"));
  }

  if (!admin.verified) {
    return res.status(403).json(new ApiError(403, "Admin is not verified. Please verify your account."));
  }

  const isPasswordValid = await admin.isPasswordCorrect(password);
  if (!isPasswordValid) {
    return res.status(401).json(new ApiError(401, "Invalid credentials"));
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(admin._id);

  res
    .status(200)
    .cookie("accessToken", accessToken, { httpOnly: true, secure: true })
    .cookie("refreshToken", refreshToken, { httpOnly: true, secure: true })
    .json({ message: "Admin logged in successfully", accessToken, refreshToken });
});

const logoutAdmin = asyncHandler(async (req, res) => {
  await Admin.findByIdAndUpdate(req.admin._id, { refreshToken: undefined });

  res
    .status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json({ message: "Admin logged out successfully" });
});

const sendOtpVerificationEmail = async ({ _id, email }, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: true,
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });

  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Verify Your Admin Account",
      html: `<p>Enter <b>${otp}</b> in the app to verify your email address. This OTP expires in 1 hour.</p>`,
    };

    const hashedOtp = await bcrypt.hash(otp, 10);
    const UserOtpVerification = new UserOtpVerification({
      userId: _id,
      otp: hashedOtp,
      expiresAt: Date.now() + 3600000, // 1 hour
    });

    await UserOtpVerification.save();
    await transporter.sendMail(mailOptions);
    res.json({ status: "Pending", message: "OTP sent to email", data: { userId: _id, email } });
  } catch (error) {
    res.status(500).json(new ApiError(500, "Failed to send OTP"));
  }
};

const verifyOtp = asyncHandler(async (req, res) => {
  const { userId, otp } = req.body;

  if (!userId || !otp) {
    return res.status(400).json(new ApiError(400, "OTP and User ID are required"));
  }

  const otpRecord = await UserOtpVerification.findOne({ userId });
  if (!otpRecord) {
    return res.status(400).json(new ApiError(400, "Invalid OTP or account already verified"));
  }

  if (otpRecord.expiresAt < Date.now()) {
    await UserOtpVerification.deleteMany({ userId });
    return res.status(400).json(new ApiError(400, "OTP has expired"));
  }

  const isOtpValid = await bcrypt.compare(otp, otpRecord.otp);
  if (!isOtpValid) {
    return res.status(400).json(new ApiError(400, "Invalid OTP"));
  }

  await Admin.findByIdAndUpdate(userId, { verified: true });
  await UserOtpVerification.deleteMany({ userId });

  res.json({ status: "VERIFIED", message: "Admin verified successfully" });
});

const resendOtpVerificationCode = async(req,res) => {
    try {
      let {userId,email} = req.body;
      if(!userId || !email){
        return res.status(400).json(new ApiError(400, "Empty user details are not allowed"));
      }
      else{
        await UserOtpVerification.deleteMany({userId});
        sendOtpVerificationEmail({_id: userId,email}, res)
      }
    } catch (error) {
      res.json({
        status: "FAILED",
        message: error.message,
      })
    }
  }

export {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  sendOtpVerificationEmail,
  verifyOtp,
  resendOtpVerificationCode
};
