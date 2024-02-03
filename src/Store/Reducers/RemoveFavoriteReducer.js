
const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];


const INITIAL_STATE = {
    favoriate: initialFavorites, 
};

const RemoveFavoriteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'REMOVE_FROM_FAVORITES':

            const nowRemoveFavorites = state.favoriate.filter(favorite => favorite.id !== action.payload);

            localStorage.setItem('favorites', JSON.stringify(nowRemoveFavorites));

            return {
                ...state,
                deletefavoriate : nowRemoveFavorites, 
                
                
            };

        default:
            return state;
    }
};

export default RemoveFavoriteReducer;
