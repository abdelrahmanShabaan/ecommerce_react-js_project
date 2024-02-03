import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartPageStyle.css';

const CartPage = () => {

            //call all data of products store in local storage
            const carts = JSON.parse(localStorage.getItem('carts')) || [];



  return (
    <div className='container'> 
        <h1 className="text-center text-dark texto"> Your Products Cart </h1>

      {carts.map((cart) => (
        <div key={cart.id}>
            <div className="card" style={{ display: "flex", flexWrap: "wrap" }}>
            <img className='card-img' src={ cart.thumbnail } />
            <div className="card-body">
            <h1>{cart.title}</h1>
            <button className='btn btn-danger' style={{width : '100%' }}>Remove</button>
            </div>
            </div>
    </div>

    
      ))}
</div>

  )
}

export default CartPage;
