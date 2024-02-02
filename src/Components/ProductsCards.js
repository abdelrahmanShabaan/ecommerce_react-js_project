import React, { useEffect, useState } from 'react'
import './ProductsCard.css';
import axios from 'axios';


 function ProductsCards(props) {

                    // Save dataname
                    const [products, setproducts] = useState([])


                            
                    // //get data with axios
                    useEffect(() => {
                        axios.get(`https://dummyjson.com/products`)
                            .then((res)=> {setproducts(res.data)})
                            .catch((err) => console.log(err));
                        },[])


  return (

        <>
        <div className="card">
            <div className='poster'>
                <img src={props.thumbnail} />
            </div>    
            <div className='info'>
              <p className='title'>{props.title}</p> 
                <p className='vote'>Price:{props.price}</p>
            </div>
        </div>
        </>
  )



}



export default ProductsCards;