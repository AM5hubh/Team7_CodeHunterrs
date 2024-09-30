import express from 'express';
import { createArticle } from '../controllers/article.controller.js'; // Adjust the import path based on your project structure
import { upload, uploadImageToCloudinary } from '../middlewares/upload.js'; // Adjust the import path based on your project structure
import { getAllArticles, getArticle } from "../controllers/getarticle.controller.js"

const router = express.Router();

// Route for creating an article
router.post('/', upload.single('image'), uploadImageToCloudinary, createArticle);



// GET article by ID
router.get('/:id', getArticle);

// GET all articles
router.get('/', getAllArticles);


// Export the router using named export
export default router;
