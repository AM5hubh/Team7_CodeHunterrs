import express from 'express';
import { createArticle } from '../controllers/article.controller.js'; // Adjust the import path based on your project structure
import { upload, uploadImageToCloudinary } from '../middlewares/upload.js'; // Adjust the import path based on your project structure

const router = express.Router();

// Route for creating an article
router.post('/', upload.single('image'), uploadImageToCloudinary, createArticle);

// Export the router using named export
export default router;
