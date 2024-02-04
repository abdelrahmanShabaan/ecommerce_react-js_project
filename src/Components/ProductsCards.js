import React, { useEffect, useState } from 'react'
import './ProductsCard.css';
import { useDispatch, useSelector } from 'react-redux';
import AddToCartAction from '../Store/Actions/AddToCartAction';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import { AddToFavoriteAction } from '../Store/Actions/AddToFavoriteAction';



 function ProductsCards(props) {



    
            // Save dataname
            const [products, setproducts] = useState([])

               
            // //get data with axios
            useEffect(() => {
                axios.get(`https://dummyjson.com/products`)
                    .then((res)=> {setproducts(res.data.products)})
                    .catch((err) => console.log(err));
                },[])


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


            // const addToCart = () =>{
            //     // //dispatch action with action name useDispatch
            //     const isAlreadyAdded = carts.some((cart) => cart.id === props.id);

            //     //if condition if it's added 
            //     if (isAlreadyAdded) {
            //         alert("This item is already in favorites!");
            //     } else {
            //         // Dispatch action to add the item to favorites
            //         dispatch(AddToCartAction(props))
            //     }
                
            // }
                            
                const addToCart = () => {
                    if (isLoggedIn) {
                    const isAlreadyAdded = carts.some((cart) => cart.id === props.id);
                    if (isAlreadyAdded) {
                        setCartMessage('This item is already in the cart!');
                    } else {
                        dispatch(AddToCartAction(props));

                    }
                    } else {
                        setCartMessage('Please log in to add items to the cart.');
                        // Alternatively, you can redirect the user to the login page
                    // history.push('/login');
                    }
                };


              //--------------------------- start handle favoriate icon -------------------------------//

              const favoriaters = useSelector((state) => state.favoriate.favoriate) 
              const dispatch_two = useDispatch()
            //use state of error span of favorate message
              const [favMessage, setFavMessage] = useState('');

  
            //   const addToFav = () =>{
            //       // //dispatch action with action name useDispatch
            //       const isAlreadyAddedFav = favoriaters.some((favorite) => favorite.id === props.id);
  
            //       //if condition if it's added 
            //       if (isAlreadyAddedFav) {
            //           alert("This item is already in favorites!");
            //       } else {
            //           // Dispatch action to add the item to favorites
            //           dispatch_two(AddToFavoriteAction(props))
            //       }
                  
            //   }
            const addToFav = () => {
                if (isLoggedIn) {
                  const isAlreadyAddedFav = favoriaters.some((favorite) => favorite.id === props.id);
                  if (isAlreadyAddedFav) {
                    setFavMessage('This item is already in favorites!');
                } else {
                    dispatch_two(AddToFavoriteAction(props));

                  }
                } else {
                  setFavMessage('Please log in to add items to favorites.');

                  // Alternatively, you can redirect the user to the login page
                  // history.push('/login');
                }
              };
                



  return (

        <>

        <div className="card">
            <div className='poster'>
                <img src={props.thumbnail} />
            </div>    
            <div className='info'>
              <p className='titles'>{props.title}</p> 
                <p className='vote'>Price:{props.price}</p>
                <p className='vote'>discount:{props.discountPercentage}</p>
                <p className='vote'>brand:{props.brand}</p>
            </div>

            <div className='oveview' style={{background : 'black'}}>
            <Link to={`/cartsdata/${props.id}`}>  <button className='btn btn-priamry title_overviews' style={{color: 'black' , background: 'Yellow'}}>Overview</button> </Link>
            <button className="btn btn-outline-primary favbut " onClick={() => addToCart()}  style={{color: 'white' , background: 'blackwhite'}}>add To cart</button>
            <button className="btn btn-outline-primary favbut" onClick={() => addToFav()} style={{color: 'white' , background: 'red' , marginTop : '10px'}} >add To <FaHeart /></button>
            {cartMessage && (   <div className="alert alert-success  error-message" role="alert" style={{textAlign : 'center' , fontSize:'10px' , height : '1px' ,  width: '100%',marginTop:'3px'}}> {cartMessage} </div>  )}
            {favMessage && (   <div className="alert alert-success error-message" role="alert" style={{textAlign : 'center' , fontSize:'10px' , height : '1px' ,  width: '100%',marginTop:'3px'}}> {favMessage} </div>  )}

            </div>

        </div>
        </>
  )



}



export default ProductsCards;