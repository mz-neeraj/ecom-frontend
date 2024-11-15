import React from 'react';
import './ProductList.css';  // Importing specific CSS for ProductList

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h3>Products</h3>
      {products.length === 0 ? (
        <p>Select a category to view products</p>
      ) : (
        <ul className="product-list-items">
          {products.map((product) => (
            <li key={product._id} className="product-item">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;