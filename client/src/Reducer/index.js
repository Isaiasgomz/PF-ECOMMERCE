
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
    userDetail: [],
    adminProducts: [],
    allAdminProducts: [],
    order:{},
    adminProductDetail: {},
    usersAdmin:[],
    shoppingCart: [],
    buildPCState: []
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

        case 'POST_CUSTOMER':// VER
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
                adminProducts: action.payload,
                allAdminProducts: action.payload
            }

        case 'GET_ADMIN_PRODUCTS_BY_NAME':
            return{
                ...state,
                adminProducts: action.payload
            }

        case 'GET_ORDER':
            return{
                ...state,
                order: action.payload
            }

        case 'PRODUCT_DISABLED':
            return{
                ...state,
            }

         case 'PRODUCT_DETAIL_ADMIN':
            return{
                ...state,
                adminProductDetail: action.payload
            }

        case 'GET_USERS_ADMIN':
            return{
                ...state,
                usersAdmin: action.payload
            }

        case 'USER_DISABLED':
            return {
                ...state,
            }

        case 'NEW_ADMIN':
            return {
                ...state,
            }

        case 'USER_DETAIL':
            console.log(action.payload)
            return{
                ...state,
                userDetail: action.payload
            }
        case 'UPDATE_PERSONAL_DATA':
            return {
                ...state
            }

        case 'SHOPPING_CART':
            return {
                ...state,
                shoppingCart: action.payload
            }

        case 'BUILD_PC':
                return{
                    ...state,
                    buildPCState: state.buildPCState.concat(action.payload)
                }
        case "CLEAR_PC":
                    return {
                        ...state,
                        buildPCState: action.payload
                    }

        default:
            return state
    }
}