import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFavoriteAction } from '../Store/Actions/RemoveFavoriteAction';
import './FavoriateCss.css';

const FavoritesPage = () => {


            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];


                //--------handle delete movie------------//
                const dispatch = useDispatch();
           
                
                const handleRemove = (event, favorId) => {
                    event.preventDefault(); // Prevents the default behavior of the button click
                    dispatch(RemoveFavoriteAction(favorId));
                };
       

  return (
    <div className='container'> 
            <h1 className="text-center text-dark texto"> Your Favoriate Products</h1>

      {favorites.map((favor) => (
    <div key={favor.id}>
        <div className="card_favor" style={{ display: "flex", flexWrap: "wrap" }}>
            <img className='card-img' src={favor.thumbnail } />
            <p class="card_favor-title texto">{favor.title}</p>
            <p class="card_favor-text texto">{favor.description}</p>
            <p class="card_favor-text texto"> Category :{favor.category}</p>
            <button className='btn btn-danger' style={{width : '100%' }} onClick={(event) => handleRemove(event, favor.id)}>Remove</button>
        </div>
    </div>

    
      ))}
</div>

  )
}

export default FavoritesPage;
