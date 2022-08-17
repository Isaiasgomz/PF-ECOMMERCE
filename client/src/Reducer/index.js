
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
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                AllProducts: action.payload,
                Products: action.payload
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

        default:
            return state
    }
}