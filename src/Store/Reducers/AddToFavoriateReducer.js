

const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const INITIAL_VALUE = {
    favoriate: [],
}


const AddToFavoriateReducer = (state=INITIAL_VALUE, action) => {

    switch(action.type){
        case 'ADD_TO_FAVORIATE':
            return{
                ...state, //everything
                favoriate: [...state.favoriate, action.payload]
            }

            default: 
            return state
    }
}

export default AddToFavoriateReducer;