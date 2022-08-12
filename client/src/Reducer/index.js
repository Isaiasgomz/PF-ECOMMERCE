
const initialState = {
    Products:[],
    Detail:[]
}

export default function rootReducer(state= initialState, action){
    switch (action.type) {
        case '  GET_PRODUCTS':
            return {
                ...state,
                product: action.payload
                }
        
        default:
            return state
    }
}