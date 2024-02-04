// CategoriesPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoriesPageStyle.css';
import { FaHeart } from "react-icons/fa";
import { AddToFavoriteAction } from '../Store/Actions/AddToFavoriteAction';
import AddToCartAction from '../Store/Actions/AddToCartAction';
import { useDispatch, useSelector } from 'react-redux';


function CategoriesPage() {


                const [categories, setCategories] = useState([]);
                const [selectedCategory, setSelectedCategory] = useState("womens-watches");

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
          <div key={category.id} className="card card_box" style={{width: '240px' , maxHeight: '490px'}}>
            <img className="card-img-top" src={category.thumbnail} alt={category.title} />
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom : '12px', textAlign:'center'}} >{category.title}</h5>
              <p className="card-text" style={{marginBottom : '1px', textAlign:'center'}}>{category.description}</p>
              <p className="card card-text" style={{marginTop : '8px', background :'yellow' , textAlign:'center' , fontFamily : 'fantasy'}}>price:{category.price}$</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
