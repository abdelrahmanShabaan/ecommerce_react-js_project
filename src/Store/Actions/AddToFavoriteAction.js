

export const AddToFavoriteAction = (payload) =>{


    //----------------start handle localstorage --------------//
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
   
    const updatedFavorites = [
        
        ...favorites,
         payload];
         
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  


    return {
            type: "ADD_TO_FAVORIATE",
            payload
    }
}
