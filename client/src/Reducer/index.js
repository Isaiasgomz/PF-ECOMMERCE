
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
    userDetail: {},
    adminProducts: [],
    allAdminProducts: [],
    order: {},
    adminProductDetail: {},
    usersAdmin: [],
    shoppingCart: [],
    ShippingAddress: {},
    dataMap: {},

    questions: [],
    adminProfile: {},
    buildPCState: [],
    answers: [],
    AllOrders: [],
    allProductSold: [],
    allQuestions:[],
    allAnswers:[],

    Favourites:[],


    buildPerifState: []




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
                reviews: action.payload.Reviews,
                questions: action.payload.Questions
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
            return {
                ...state,
                adminProducts: action.payload,
                allAdminProducts: action.payload
            }

        case 'GET_ADMIN_PRODUCTS_BY_NAME':
            return {
                ...state,
                adminProducts: action.payload
            }

        case 'GET_ORDER':
            return {
                ...state,
                order: action.payload
            }

        case 'PRODUCT_DISABLED':
            return {
                ...state,
            }

        case 'PRODUCT_DETAIL_ADMIN':
            return {
                ...state,
                adminProductDetail: action.payload
            }

        case 'GET_USERS_ADMIN':
            return {
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

        case 'SHIPPING_ADDRESS':
            return {
                ...state
            }

        case 'GET_ADDRESS':
            const address = state.userDetail?.ShippingAddresses?.find((sa) =>  sa.id === Number(action.payload))
            console.log("addres reducer", state.userDetail.ShippingAddresses)
            return {
                ...state,
                ShippingAddress: address
            }

        case 'ADMIN_PROFILE':
            return {
                ...state,
                adminProfile: action.payload
            }

        case 'BUILD_PC':
            return {
                ...state,
                buildPCState: state.buildPCState.concat(action.payload)
            }

        case 'BUILD_PERIF':
            return {
                ...state,
                buildPerifState: state.buildPerifState.concat(action.payload)
            }

        case "CLEAR_PC":
            return {
                ...state,
                buildPCState: action.payload
            }

        case 'GET_ALL_ORDERS':
            return {
                ...state,
                AllOrders: action.payload
            }

        case 'UPDATE_ORDER':
            return {
                ...state,
            }

        case 'PRODUCT_SOLD':
            return {
                ...state,
                allProductSold: action.payload
            }

        case 'UPDATE_SHIPPING_ADDRESS':
            return {
                ...state
            }

        case 'CLEAR_ADDRESS':
            return {
                ...state,
                ShippingAddress: []

        }
        case "USER_FAVOURITE":
            return{
                ...state,
                Favourites: action.payload
            }
        case "DELETE_FAVOURITE":
            let filteredFavourites = state.Favourites
            filteredFavourites = filteredFavourites.filter(e=>e.idProduct !== action.payload)
            return{
                ...state,
                Favourites: filteredFavourites
            }


        case 'GET_ALL_QUESTIONS':
            return {
                ...state,
                allQuestions: action.payload
            }
        case 'GET_ALL_ANSWER':
            return {
                ...state,
                allAnswers: action.payload
            }

        case 'DATA_MAP':
            return {
                ...state,
                dataMap: action.payload
            }

        case 'UPDATE_PRICE':
            return {
                ...state,
            }

            case 'CLEAR_PERIF':
                return {
                    ...state,
                    buildPerifState: action.payload
                }
        
            case 'ADMIN_PRODUCTS':
                return {
                    ...state,
                    adminProducts: action.payload
                }

        default:
            return state
    }
}



