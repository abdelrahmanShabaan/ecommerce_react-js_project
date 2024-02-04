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
              <p className="card-text">price :{category.price}$</p>
              {/* <button className="btn  favbut " onClick={() => addToCart()} style={{color: 'white' , background: 'black' , margin : '1px'}}>add To cart</button>
              <button className="btn  favbut"  onClick={() => addToFav()}  style={{color: 'white' , background: 'red' , margin : '1px'}} >add To <FaHeart /></button>
              {cartMessage && (   <div className="alert alert-success  error-message" role="alert" style={{textAlign : 'center' , fontSize:'10px' , height : '1px' ,  width: '100%',marginTop:'3px'}}> {cartMessage} </div>  )}
              {favMessage && (   <div className="alert alert-success error-message" role="alert" style={{textAlign : 'center' , fontSize:'10px' , height : '1px' ,  width: '100%',marginTop:'3px'}}> {favMessage} </div>  )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
