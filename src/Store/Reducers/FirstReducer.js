
const INITIAL_STATE = {
    first: [], 
};


const FirstReducer  = (state = INITIAL_STATE, action) => {
    switch (action.type) {


        case 'FIRST_ACtion':
        return {
            ...state,
            
            
    
            };

        default:
            return state;
    }
};


export default FirstReducer;
