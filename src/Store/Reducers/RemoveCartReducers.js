
const initialCart = JSON.parse(localStorage.getItem('carts')) || [];


const INITIAL_STATE = {
    cart: initialCart, 
};

const RemoveCartReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'REMOVE_FROM_CART':

            const nowRemoveCart = state.cart.filter(cart => cart.id !== action.payload);

            localStorage.setItem('carts', JSON.stringify(nowRemoveCart));

            return {
                ...state,
                deleteCart : nowRemoveCart, 
                
                
            };

        default:
            return state;
    }
};

export default RemoveCartReducers;
