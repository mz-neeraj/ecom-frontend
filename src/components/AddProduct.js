import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddProduct.css';

function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
    });
    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Fetch categories when the component loads
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            const response = await axios.post('http://localhost:5000/api/products/add', product);

            if (response.status === 201) {
                setMessage('Product added successfully!');
                setProduct({ name: '', price: '', description: '', category: '' }); // Reset form
            } else {
                setMessage('Failed to add product.');
            }
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.error || 'An error occurred on the server.');
            } else {
                setMessage('Network error. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Product Name:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Product'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddProduct;
