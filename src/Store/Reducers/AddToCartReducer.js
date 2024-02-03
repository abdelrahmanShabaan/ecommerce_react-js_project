
const initialFavorites = JSON.parse(localStorage.getItem('carts')) || [];

const INITIAL_VALUE = {
    cart: [],
}


const AddToCartReducer = (state=INITIAL_VALUE, action) => {

    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state, //everything
                cart: [...state.cart, action.payload]
            }

            default: 
            return state
    }
}

export default AddToCartReducer;