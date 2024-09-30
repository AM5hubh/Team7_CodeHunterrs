import { v2 as cloudinary } from 'cloudinary';

import Article from '../models/article.js';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Replace with your Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY,        // Replace with your Cloudinary API key
    api_secret: process.env.CLOUDINARY_API_SECRET   // Replace with your Cloudinary API secret
});

// Create Article
// controllers/articleController.js
export const createArticle = async (req, res) => {
    try {
        const { title, content } = req.body;

        // Assuming you have an Article model to handle the database operations
        const article = new Article({
            title,
            content,
            imageUrl: req.imageUrl, // Store the Cloudinary URL
        });

        await article.save();
        res.status(201).json({ message: 'Article created successfully!', article });
    } catch (error) {
        res.status(500).json({ message: 'Error creating article', error: error.message });
    }
};
