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


                          
            //---------------------------------- search api -----------------------------------------//  
            const API_SEARCH = "https://dummyjson.com/products/search?q="


            //new state input change of search 
            const [term , setTerm] = useState('')


            //handle submit button
            const handleSearch = (e) => {
            e.preventDefault()
            fetch(API_SEARCH + term)
            .then(res => res.json()) 
            .then(data => setproducts(data.products))
            }



                
    return (

            <>

                <div className="container">  


                {/* search */}
                <div className='search_box'>
                    <form class="form-control" onSubmit={handleSearch}>
                    <input class="form-control input_style" onChange={(e) => setTerm(e.target.value) } type="search" placeholder="Search for products" aria-label="Search"/>
                    </form>
                </div>

                        {/* map data  */}
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

