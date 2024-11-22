import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './AddCategory.css'; // Import CSS

function AddCategory() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            const response = await axios.post('http://localhost:5000/api/categories/add', { name });
            
            if (response.status === 201) {
                setMessage('Category added successfully!');
                setName(''); // Clear the input field
            } else {
                setMessage('Failed to add category.');
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status code outside the range of 2xx
                setMessage(error.response.data.error || 'An error occurred on the server.');
            } else {
                // Network error or other unexpected issue
                setMessage('Network error. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Add Category</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Category Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Category'}
                </button>
            </form>
            {message && <p>{message}</p>}
            
        </div>
    );
}

export default AddCategory;
