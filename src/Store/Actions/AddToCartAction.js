
 const AddToCartAction = (payload) =>{


    //----------------start handle localstorage --------------//
    const carts = JSON.parse(localStorage.getItem('carts')) || [];
   
    const updatedCarts = [
        
        ...carts,
         payload];
         
    localStorage.setItem('carts', JSON.stringify(updatedCarts));
  


    return {
            type: "ADD_TO_CART",
            payload
    }
}

export default AddToCartAction;
