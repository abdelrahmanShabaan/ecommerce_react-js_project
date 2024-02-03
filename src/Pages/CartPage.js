import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartPageStyle.css';
import { RemoveCartAction } from '../Store/Actions/RemoveCartAction';

const CartPage = () => {

            //call all data of products store in local storage
            const carts = JSON.parse(localStorage.getItem('carts')) || [];


               //--------handle delete movie------------//
              const dispatch = useDispatch();
                
              const handleRemove = (event, cartId) => {
                event.preventDefault(); // Prevents the default behavior of the button click
                dispatch(RemoveCartAction(cartId));
              };


  return (
    <div className='container'> 
        <h1 className="text-center text-dark texto"> Your Products Cart </h1>

      {carts.map((cart) => (
        <div key={cart.id}>
                      <div class="carderss">
                      <img class="carderss-img-top" src={ cart.thumbnail } />
                      <div class="carderss-body">
                        <p class="carderss-title texto">{cart.title}</p>
                        <p class="carderss-text texto">{cart.description}</p>
                        <p class="carderss-text texto"> Category :{cart.category}</p>
                        <button className='btn btn-danger' style={{width : '100%' }} onClick={(event) => handleRemove(event, cart.id)}>Remove</button>
                      </div>
                    </div>
    </div>

    
      ))}
</div>

  )
}

export default CartPage;
