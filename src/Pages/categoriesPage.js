// CategoriesPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoriesPageStyle.css';

function CategoriesPage() {


                const [categories, setCategories] = useState([]);
                const [selectedCategory, setSelectedCategory] = useState("smartphones");

                useEffect(() => {
                    axios.get(`https://dummyjson.com/products/category/${selectedCategory}`)
                    .then((res) => {
                        setCategories(res.data.products);
                    })
                    .catch((err) => console.log(err));
                }, [selectedCategory]);



                const handleChange = (e) => {
                    setSelectedCategory(e.target.value);
                };

  return (
    <div className='container containerss'>
      <div className='filter-container'>
        <h1 className='filter-heading'>Categories</h1>
        {/* Left side filter */}
        <div className='category-buttons'>
          <button className={`btn ${selectedCategory === "smartphones" ? 'btn-primary' : 'btn-secondary'} category-button`} value="smartphones" onClick={handleChange}>Phones</button>
          <button className={`btn ${selectedCategory === "laptops" ? 'btn-primary' : 'btn-secondary'} category-button`} value="laptops" onClick={handleChange}>Laptops</button>
          <button className={`btn ${selectedCategory === "fragrances" ? 'btn-primary' : 'btn-secondary'} category-button`} value="fragrances" onClick={handleChange}>Fragrances</button>
          <button className={`btn ${selectedCategory === "groceries" ? 'btn-primary' : 'btn-secondary'} category-button`} value="groceries" onClick={handleChange}>groceries</button>    
          <button className={`btn ${selectedCategory === "womens-watches" ? 'btn-primary' : 'btn-secondary'} category-button`} value="womens-watches" onClick={handleChange}>womens-watches</button>
          <button className={`btn ${selectedCategory === "furniture" ? 'btn-primary' : 'btn-secondary'} category-button`} value="furniture" onClick={handleChange}>furniture</button>

        </div>
      </div>
      
      
      {/* Right side content */}
      <div className='category-content'>
        {categories.map((category) => (
          <div key={category.id} className="card card_box">
            <img className="card-img-top" src={category.thumbnail} alt={category.title} />
            <div className="card-body">
              <h5 className="card-title">{category.title}</h5>
              <p className="card-text">{category.description}</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
