import { Router } from "express";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  verifyOtp,
  resendOtpVerificationCode,
} from "../controllers/admin.controller.js";

const router = Router();

router.route("/register").post(registerAdmin);

router.route("/login").post(loginAdmin);

router.route("/logout").post(logoutAdmin);
router.route("/verifyOtp").post(verifyOtp);
router.route("/resendOtpVerificationCode").post(resendOtpVerificationCode);

export default router;
