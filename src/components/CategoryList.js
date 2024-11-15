import React from 'react';
import './CategoryList.css';  // Importing specific CSS for CategoryList

function CategoryList({ categories, setSelectedCategory }) {
  return (
    <div className="category-list">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category._id} onClick={() => setSelectedCategory(category._id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;