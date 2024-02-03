import React from 'react'
import './OneProductCartStyle.css';

function OneProductCart(props) {
  
    


 
    return(


        <>
       <div class="cards container">
       <img src={ props.thumbnail } />
                   <div class="cards-body">
                   <h5 class="cards-title">{props.title}</h5>
                   <h5 class="cards-title">{props.price}</h5>
                   <p class="cards-title">{props.discountPercentage}</p>
                   </div>
               </div>
       </>

       )



}


export default OneProductCart;