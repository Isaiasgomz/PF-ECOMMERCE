import axios from 'axios';

export function getProducts() {
    return async function (dispatch) {
        const allData = await axios.get('http://localhost:3001/products')
        return dispatch({ type: 'GET_PRODUCTS', payload: allData.data })
    }
}

export function getProductsByName(name) {
    return async function (dispatch) {
        const allData = await axios.get(`http://localhost:3001/products?name=${name}`)
        return dispatch({ type: 'GET_PRODUCTS_BY_NAME', payload: allData.data })
    }
}

export function clearSearch(){
   return { type: "CLEAR_SEARCH", payload: []}
}

export function postProduct(product) {
    return async function (dispatch) {
        const newProduct = await axios.post('http://localhost:3001/products/create',product)
        return newProduct
    }
}

export function postUser(user) {
    return async function (dispatch) {
        const newUser = await axios.post('http://localhost:3001/user', {user})
        .catch(error => alert(error.response.data))
        return dispatch({ type: 'ACTUAL_USER', payload: newUser.data })
    }
}

export function getProductDetail(id) {
    return async function (dispatch) {
        const productDetail = await axios.get(`http://localhost:3001/products/${id}`)
        return dispatch({ type: 'PRODUCT_DETAIL', payload: productDetail.data })
    }
}

export function getUserDetail(email) {
    return async function (dispatch) {
        const userDetail = await axios.get(`http://localhost:3001/user/${email}`)
        console.log(userDetail)
        return dispatch({ type: 'USER_DETAIL', payload: userDetail.data })
    }
}

export function createReview(obj) {
    return async function () {
        console.log(obj)
        return axios.post(`http://localhost:3001/review`,  obj )
            .then(data => alert('Review added!'))
            .catch(error => alert(error.response.data))
    }
}


export function sortProductByPrice(array){
    return {
        type: "SORT_PRODUCT_PRICE",
        payload: array
    }
}

export function sortProductByBrand(array){
    return {
        type: "SORT_PRODUCT_BRAND",
        payload: array
    }
}

export function sortProductByCategory(array){
    return {
        type: "SORT_PRODUCT_CATEGORY",
        payload: array
    }
}

export function clearAllFilters(){
    return { type: "CLEAR_FILTERS" }
 }

 export function setCart(arr){
    return{
        type: "SET_CART",
        payload:arr
    }
}

export function clearDetail(){
    return{
        type: "CLEAR_DETAIL",
        payload:{}
    }
}

export function postNorder(email,orderN,totalP){
    return async function () {
        return axios.post(`http://localhost:3001/purchases`, {email,orderN,totalP})
            .then(data => console.log('numero de orden enviado'))
            .catch(error => alert(error.response.data))
    }
}

export function postShoppingCart(cart){
    return async function () {
        return axios.post(`http://localhost:3001/cart`, cart)
            .then(data => console.log('carrito guardado'))
            .catch(error => alert(error.response.data))
    }
}












export function postUserData(email,data) {
    return async function (dispatch) {
        const newUser = await axios.post(`http://localhost:3001/user/${email}/personalData`,data)
        .catch(error => console.log(error.response.data))
        return dispatch({ type: 'USER_DATA', payload:data })
    }
}


export function getAdminProducts() {
    return async function (dispatch) {
        const allProductsAdmin = await axios.get('http://localhost:3001/admin/products')
        return dispatch({ type: 'GET_ADMIN_PRODUCTS', payload: allProductsAdmin.data })
    }
}

export function getAdminProductByName(name) {
    return async function (dispatch) {
        const productAdmin = await axios.get(`http://localhost:3001/admin/products?name=${name}`)
        return dispatch({ type: 'GET_ADMIN_PRODUCTS_BY_NAME', payload: productAdmin.data })
    }
}






// export function