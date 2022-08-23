
const initialState = {
    AllProducts: [],
    Products: [],
    productsByCategory: [],
    productsByBrand: [],
    productsByName: [],
    Detail: [],
    productDetail: {},
    reviews: [],
    user: {},
    productsBackUp: [],
    cart: [],
    personalData: {},
    adminProducts: [],
    userDetail: [],
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

        case ' POST_PRODUCT'://???
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
                reviews: action.payload.Reviews
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
            return {
                ...state,
                cart: action.payload
            }
        case "CLEAR_DETAIL":
            return {
                ...state,
                productDetail: action.payload
            }
        case 'USER_DATA':
            return {
                ...state,
                personalData: action.payload
            }

        case 'GET_ADMIN_PRODUCTS':
            return{
                ...state,
                adminProducts: action.payload
            }

        case 'GET_ADMIN_PRODUCTS_BY_NAME':
            return{
                ...state,
                adminProducts: action.payload
            }
            
        case 'USER_DETAIL':
            return{
                ...state,
                userDetail: action.payload
            }
        default:
            return state
    }
}