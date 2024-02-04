import React, { useEffect, useState } from 'react';
import './OneProductCartStyle.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function OneProductCart() {
  const cartId = useParams();
  const [product, setProduct] = useState({}); // Initialize as an object

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${cartId.id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [cartId.id]);

  return (
    <>
      <div className="containerw">
        <h1 className="text-center text-dark">Product Details</h1>
        <div className="cards container">
          {Object.keys(product).length > 0 ? (
            <>
              <img src={product.thumbnail} alt={product.title} />
              <div className="cards-body">
                <h5 className="cards-title">{product.title}</h5>
                <h5 className="cards-title">{product.description}</h5>
                <p className="cards-title">Price: ${product.price}</p>
                <p className="cards-title">Discount Percentage: {product.discountPercentage} %</p>
                <p className="cards-title">Brand: {product.brand}</p>
                <p className="cards-title">Category: {product.category}</p>
                <div className="thumbnail-container">
                  {product.images.map((image, index) => (
                    <img key={index} src={image} alt={`Thumbnail ${index}`} className="thumbnail" />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default OneProductCart;
