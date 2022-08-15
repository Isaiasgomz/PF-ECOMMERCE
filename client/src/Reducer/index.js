
const initialState = {
    Products: [],
    Detail: [],
    productDetail:{},
    reviews:[]
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                product: action.payload
            }

        case ' POST_PRODUCT':
            return {
                ...state
            }

        case 'POST_ CUSTOMER':// VER
            return {
                ...state
            }
        case 'PRODUCT_DETAIL':
            return {
                ...state,
                productDetail: action.payload,
                reviews: action.payload.reviews
            }
            
        default:
            return state
    }
}