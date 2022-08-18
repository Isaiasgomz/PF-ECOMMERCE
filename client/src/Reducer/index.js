
const initialState = {
    AllProducts: [],
    Products: [],
    productsByCategory: [],
    productsByBrand: [],
    productsByName: [],
    Detail: [],
    productDetail:{},
    reviews:[],
    user: {},
    productsBackUp:[],
    cart:[]

}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                AllProducts: action.payload,
                Products: action.payload,
                productsBackUp: action.payload

            }
        case "GET_PRODUCTS_BY_NAME":
            return {
                ...state,
                productsByName: action.payload,
                Products: action.payload
            }
        case "CLEAR_SEARCH":
            return {
                ...state,
                productsByBrand: action.payload
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
        case 'SORT_PRODUCT_PRICE':
            return {
                ...state,
                Products: action.payload
            }
        case 'SORT_PRODUCT_BRAND':
            return {
                ...state,
                productsByBrand: action.payload,
                Products: action.payload
            }

        case 'SORT_PRODUCT_CATEGORY':
            return {
                ...state,
                productsByCategory: action.payload,
                Products: action.payload
            }
        case "CLEAR_FILTERS":
            return {
                ...state,
                Products: [],
                productsByCategory: [],
                productsByBrand: [],
                productsByName: [],
            }

            case 'ACTUAL_USER':
            return {
                ...state,
                user: action.payload
            }

            case "SET_CART":
            return{
                ...state,
                cart: action.payload
            }

        default:
            return state
    }
}