
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

        case ' POST_PRODUCT':{
            return {
                ...state
            }
        }

        case 'POST_ CUSTOMER':
            return {
                ...state
            }
            
        default:
            return state
    }
}