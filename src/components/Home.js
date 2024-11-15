import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import './Home.css';  // Importing App-specific global styles

function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Electronics');
  const [products, setProducts] = useState([]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products when category is selected
  useEffect(() => {
    console.log('=====>'+selectedCategory);
    if (selectedCategory) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/products/category/${selectedCategory}`);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      fetchProducts();
    }
  }, [selectedCategory]);

  return (
    <div className="app-container">
      <CategoryList categories={categories} setSelectedCategory={setSelectedCategory} />
      <ProductList products={products} />
    </div>
  );
}

export default Home;