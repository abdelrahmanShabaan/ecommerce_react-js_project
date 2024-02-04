import React, { useEffect, useState } from 'react';
import './OneProductCartStyle.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import AddToCartAction from '../Store/Actions/AddToCartAction';
import { AddToFavoriteAction } from '../Store/Actions/AddToFavoriteAction';

function OneProductCart() {

                //handle comming param
                const cartId = useParams();
                const [product, setProduct] = useState({}); 

                useEffect(() => {
                    axios.get(`https://dummyjson.com/products/${cartId.id}`)
                    .then((res) => setProduct(res.data))
                    .catch((err) => console.log(err));
                }, [cartId.id]);

                
            //------------------------------start Handle if user is login or not ------------------------//
            const [isLoggedIn, setIsLoggedIn] = useState(false);
            // Check local storage for user credentials
           useEffect(() => {
               const storedEmail = localStorage.getItem('email');
               const storedPassword = localStorage.getItem('password');
               setIsLoggedIn(!!(storedEmail && storedPassword));
           }, []);

        

               
           //--------------------------- start handle Cart icon -------------------------------//

           const carts = useSelector((state) => state.cart.cart) 
           const dispatch = useDispatch()
           //use state of error span of cart message
           const [cartMessage, setCartMessage] = useState('');


           const addToCart = () => {
            if (isLoggedIn) {
            const isAlreadyAdded = carts.some((cart) => cart.id === product.id);
            if (isAlreadyAdded) {
                setCartMessage('This item is already in the cart!');
            } else {
                dispatch(AddToCartAction(product));

            }
            } else {
                setCartMessage('Please log in to add items to the cart.');
      
                
            }
        };

           //--------------------------- start handle favoriate icon -------------------------------//

           const favoriaters = useSelector((state) => state.favoriate.favoriate) 
           const dispatch_two = useDispatch()
         //use state of error span of favorate message
           const [favMessage, setFavMessage] = useState('');


           const addToFav = () => {
            if (isLoggedIn) {
              const isAlreadyAddedFav = favoriaters.some((favorite) => favorite.id === product.id);
              if (isAlreadyAddedFav) {
                setFavMessage('This item is already in favorites!');
            } else {
                dispatch_two(AddToFavoriteAction(product));

              }
            } else {
              setFavMessage('Please log in to add items to favorites.');

            
            }
          };
            

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
                        <button className="btn  favbut " onClick={() => addToCart()} style={{color: 'white' , background: 'black' , margin : '1px'}}>add To cart</button>
                        <button className="btn  favbut"  onClick={() => addToFav()}  style={{color: 'white' , background: 'red' , margin : '1px'}} >add To <FaHeart /></button>
                        {cartMessage && (   <div className="alert alert-success  error-message" role="alert" style={{textAlign : 'center' , fontSize:'10px' , height : '1px' ,  width: '100%',marginTop:'3px'}}> {cartMessage} </div>  )}
                        {favMessage && (   <div className="alert alert-success error-message" role="alert" style={{textAlign : 'center' , fontSize:'10px' , height : '1px' ,  width: '100%',marginTop:'3px'}}> {favMessage} </div>  )}

                        <div className="thumbnail-container">
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Thumbnail ${index}`} className="thumbnail" />
                        ))}
                        </div>
                    </div>
                    </>
                ) : (
                    <p>isloading</p>
                )}
                </div>
            </div>
            </>
  );
}

export default OneProductCart;
