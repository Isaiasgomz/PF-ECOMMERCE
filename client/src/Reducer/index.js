
const initialState = {
    Products: [],
    productsByName: [],
    Detail: [],
    productDetail:{},
    reviews:[],
    user: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                Products: action.payload
            }
        case "GET_PRODUCTS_BY_NAME":
            return{
                ...state,
                productsByName: action.payload
            }
        case "CLEAR_SEARCH":
            return{
                ...state,
                productsByName: action.payload
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
        case 'SORT_PRODUCT':
            return {
                ...state,
                Products: action.payload
            }
            case 'ACTUAL_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}