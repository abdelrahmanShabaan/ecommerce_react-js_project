import React, { useEffect, useState } from 'react'
import './OneProductCartStyle.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function OneProductCart() {
  
            //SAVE THE USER ID From Use params
            const cartId = useParams();


              // Save dataname
              const [product, setproducts] = useState([])


              //get data with axios
                  useEffect(() => {
                    axios.get(`https://dummyjson.com/products/${cartId.id}`)
                        .then((res)=> {setproducts(res.data)})
                        .catch((err) => console.log(err));
                    },[])
      
      
          return(
              <>
                <div className="container">
                <h1 className="text-center text-dark">Product Details</h1>
                <div class="cards container">
                <img src={product.thumbnail} />
                   <div class="cards-body">
                   <h5 class="cards-title">{product.title}</h5>
                   <h5 class="cards-title">{product.description}</h5>
                   <p class="cards-title">price : {product.price}$</p>
                   <p class="cards-title">category : {product.category}</p>
                   </div>
               </div>
                      </div>
      
      
      
              
              </>
          )
      }
      
export default OneProductCart;