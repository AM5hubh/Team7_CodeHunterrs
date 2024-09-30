import React, { useState } from 'react';
import axios from 'axios';

const ContributeArticle = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        tags: '',
        image: null,
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Validate required fields
        if (!formData.title || !formData.content || !formData.author || !formData.image) {
            setError('Please fill in all required fields.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('content', formData.content);
        formDataToSend.append('author', formData.author);
        formDataToSend.append('tags', formData.tags);
        formDataToSend.append('image', formData.image);

        try {
            const response = await axios.post('http://localhost:8000/api/articles', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Check for response status or data
            if (response.status === 201) {
                setSuccess('Article submitted successfully!');
                // Optionally reset the form after success
                setFormData({ title: '', content: '', author: '', tags: '', image: 'null' });
            } else {
                console.error(response); // Log error for debugging
                setError('Failed to submit article. Please try again.');
            }
        } catch (err) {
            console.error(err); // Log error for debugging
            setError('Failed to submit article. Please try again.');
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-[#ede8f5] rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-[#3d52a0] mb-2">Contribute an Article</h1>
            {error && <p className="text-red-600 text-center">{error}</p>}
            {success && <p className="text-green-600 text-center">{success}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="title">Title *</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-[#adbbda] rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="content">Content *</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-[#adbbda] rounded-md"
                        rows="6"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="author">Author Name *</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-[#adbbda] rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="tags">Tags (comma-separated)</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-[#adbbda] rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="image">Upload Image *</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-[#adbbda] rounded-md"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#7091e5] text-white rounded-md py-2 hover:bg-[#3d52a0] transition duration-300"
                >
                    Submit Article
                </button>
            </form>
        </div>
    );
};

export default ContributeArticle;
