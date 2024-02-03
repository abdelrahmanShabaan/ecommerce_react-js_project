import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoriesPageStyle.css';
function CategoriesPage() {
    // Save data
    const [categories, setCategories] = useState([]);
    const [keyword, setKeyword] = useState("smartphones");

    // Call API
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${keyword}`)
            .then((res) => {
                setCategories(res.data.products);
            })
            .catch((err) => console.log(err));
    }, [keyword]);

    // Handle change categories
    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <>
          <div className='container'>
              {/* Handle languages */}
              <select className="form-select" aria-label="Default select example" onChange={(e) => handleChange(e)}>
                <option selected>Select Categories</option>
                <option value="smartphones">phones</option>
                <option value="laptops">laptops</option>
                <option value="fragrances">fragrances</option>
                <option value="fragrances">groceries</option>
            </select>

                {categories.map((category) => (
                    <div key={category.id}>
                        <div className="card card_box">
                        <img  className="card-img-top" src={category.thumbnail} />
                        <div className="card-body">
                            <h5 className="card-title">{category.title}</h5>
                            <p className="card-text">{category.description}</p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                        </div>
                    </div>
                ))}
          </div>
        </>
    );
}

export default CategoriesPage;
