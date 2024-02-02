import { useEffect, useState } from 'react';
import ProductsCards from '../Components/ProductsCards';
import './HomeStyle.css';
import axios from 'axios';
import React from 'react';



function Home(){


    
        // Save dataname
        const [products, setproducts] = useState([])


        
        // //get data with axios
        useEffect(() => {
            axios.get(`https://dummyjson.com/products`)
                .then((res)=> {setproducts(res.data.products)})
                .catch((err) => console.log(err));
            },[])

            


            return (

            <>

        <div className="container">  

            <div className='products_class'>
            {products.map((product) =>
                        <ProductsCards {...product} />
                        )}
            </div>
        </div>
            
            </>
            )


}


export default Home;

