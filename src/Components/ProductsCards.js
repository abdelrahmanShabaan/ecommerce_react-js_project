import React, { useEffect, useState } from 'react'
import './ProductsCard.css';
import { useDispatch, useSelector } from 'react-redux';
import AddToCartAction from '../Store/Actions/AddToCartAction';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';


 function ProductsCards(props) {



    
            // Save dataname
            const [products, setproducts] = useState([])
            
            // //get data with axios
            useEffect(() => {
                axios.get(`https://dummyjson.com/products`)
                    .then((res)=> {setproducts(res.data.products)})
                    .catch((err) => console.log(err));
                },[])


                
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
            <Link to={`/cartsdata/${props.id}`}>  <button className='btn btn-priamry title_overviews'>Overview</button> </Link>
            <button className="btn btn-outline-danger favbut " onClick={() => addToCart()}>add To cart</button>

            </div>

        </div>
        </>
  )



}



export default ProductsCards;