// src/models/article.js
import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

export default Article; // Make sure to use default export
