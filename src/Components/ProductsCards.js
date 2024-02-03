import React, { useEffect, useState } from 'react'
import './ProductsCard.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import AddToCartAction from '../Store/Actions/AddToCartAction';


 function ProductsCards(props) {



                
            //--------------------------- start handle Cart icon -------------------------------//

            const carts = useSelector((state) => state.cart.cart) 

            const dispatch = useDispatch()

            const addToCart = () =>{
                // //dispatch action with action name useDispatch
                const isAlreadyAdded = carts.some((cart) => cart.id === props.id);

                //if condition if it's added 
                if (isAlreadyAdded) {
                    alert("This item is already in favorites!");
                } else {
                    // Dispatch action to add the item to favorites
                    dispatch(AddToCartAction(props))
                }
                
            }



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


            <div className='oveview'>
            <button className='btn btn-danger title_overview'>Overview</button> 
            <button className="btn btn-outline-danger favbut " onClick={() => addToCart()}>add To cart</button>

            </div>

        </div>
        </>
  )



}



export default ProductsCards;