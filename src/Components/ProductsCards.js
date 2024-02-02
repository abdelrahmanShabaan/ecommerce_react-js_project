import React, { useEffect, useState } from 'react'
import './ProductsCard.css';
import axios from 'axios';


 function ProductsCards(props) {



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
            <button className="btn btn-outline-danger favbut ">add To cart</button>

            </div>

        </div>
        </>
  )



}



export default ProductsCards;