import axios from 'axios';

export function getProducts() {
    return async function (dispatch) {
        const allData = await axios.get('/products')
        return dispatch({ type: 'GET_PRODUCTS', payload: allData.data })
    }
}

export function getProductsByName(name) {
    return async function (dispatch) {
        const allData = await axios.get(`/products?name=${name}`)
        return dispatch({ type: 'GET_PRODUCTS_BY_NAME', payload: allData.data })
    }
}

export function clearSearch(){
   return { type: "CLEAR_SEARCH", payload: []}
}

export function postProduct(product) {
    return async function (dispatch) {
        const newProduct = await axios.post('/products/create',product)
        return newProduct
    }
}

export function postUser(user) {
    return async function (dispatch) {
        const newUser = await axios.post('/user', {user})
        .catch(error => alert(error.response.data))
        return dispatch({ type: 'ACTUAL_USER', payload: newUser.data })
    }
}

export function getProductDetail(id) {
    return async function (dispatch) {
        const productDetail = await axios.get(`/products/${id}`)
        return dispatch({ type: 'PRODUCT_DETAIL', payload: productDetail.data })
    }
}

export function getUserDetail(email) {
    return async function (dispatch) {
        const userDetail = await axios.get(`/user/${email}`)
        return dispatch({ type: 'USER_DETAIL', payload: userDetail.data })
    }
}

export function getFavourite(email) {
    return async function (dispatch) {
        const result = await axios.get(`/user/${email}`)
        return dispatch({ type: 'USER_FAVOURITE', payload: result.data.Products })
    }
}

export function getShoppingCart(PurchaseOrderOrderN) {
    return async function (dispatch) {
        const shoppingCart = await axios.get(`/cart/${PurchaseOrderOrderN}`)
        return dispatch({ type: 'SHOPPING_CART', payload: shoppingCart.data })
    }
}

export function createReview(obj) {
    return async function () {
        console.log(obj)

        return axios.post(`/review`,  obj )
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

export function buildPC(arr){
    return{
        type: "BUILD_PC",
        payload:arr
    }
}

export function buildPerif(arr){
    return{
        type: "BUILD_PERIF",
        payload:arr
    }
}

export function clearPC(){
    return{
        type: "CLEAR_PC",
        payload:[]
    }
}

export function clearDetail(){
    return{
        type: "CLEAR_DETAIL",
        payload:{}
    }
}


export function getNorder(email){
    return async function (dispatch) {
        const order = await axios.post(`/purchases`, {email})
        return dispatch({type: 'GET_ORDER', payload: order.data})
    } 
}     

export function postNorder(email,orderN,totalP){
    return async function () {
        return axios.post(`/purchases`, {email,orderN,totalP})
            .then(data => console.log('numero de orden enviado'))
            .catch(error => alert(error.response.data))
    }

}

export function postShoppingCart(cart){
    console.log("aaaaaaaaaaa", cart)
    return async function () {
        return axios.post(`/cart`, cart)
            .then(data => console.log('carrito guardado'))
            .catch(error => alert(error.response.data))
    }
}

export function clearAddress(){
    return { type: "CLEAR_ADDRESS" }
 }

 export function deleteFavourite(email,idProduct){
    return async function (dispatch) {
        await axios.delete(`/user/deleteFavourite/${email}/${idProduct}`)
        return dispatch({type: 'DELETE_FAVOURITE', payload: idProduct})
    } 
}

export function postUserData(email,data) {

    return async function (dispatch) {
        const newUser = await axios.post(`/user/${email}/personalData`,data)
        .catch(error => console.log(error.response.data))
        return dispatch({ type: 'USER_DATA', payload:data })
    }
}


export function getAdminProducts() {
    return async function (dispatch) {
        const allProductsAdmin = await axios.get('/admin/products')
        return dispatch({ type: 'GET_ADMIN_PRODUCTS', payload: allProductsAdmin.data })
    }
}

export function getAdminProductByName(name) {
    return async function (dispatch) {
        const productAdmin = await axios.get(`/admin/products?name=${name}`)
        return dispatch({ type: 'GET_ADMIN_PRODUCTS_BY_NAME', payload: productAdmin.data })
    }
}


export function productDisabled(id,data) {
    return async function (dispatch) {
         await axios.put(`/products/update/${id}`,data)
        .catch(error => console.log(error.response.data))

        return dispatch({ type: 'PRODUCT_DISABLED' })
    }
}

export function getProductDetailAdmin(id) {
    return async function (dispatch) {
        const productDetailAdmin = await axios.get(`/admin/product/${id}`);
        return dispatch({ type: 'PRODUCT_DETAIL_ADMIN', payload: productDetailAdmin.data })
    }
}


export function getUsersAdmin() {
    return async function (dispatch) {
        const usersAdmin = await axios.get(`/admin/users`);
        return dispatch({ type:'GET_USERS_ADMIN', payload: usersAdmin.data })
    }
}

export function userDisabled(email,data) {
    return async function (dispatch) {
         await axios.put(`/admin/disabledUser/${email}`,data)
        .catch(error => console.log(error.response.data))
        return dispatch({ type: 'USER_DISABLED' })
    }
}

export function updateUserData(email, data) {
    return async function (dispatch) {

        await axios.put(`/user/${email}/updatePersonalData`,data)
        .catch(error => console.log(error.response.data))
        return dispatch({ type: 'UPDATE_PERSONAL_DATA'})
    }
}

export function postNewAdmin(data) {
    return async function (dispatch) {
         await axios.post(`/user`,data)
        .catch(error => console.log(error.response.data))
        return dispatch({ type: 'NEW_ADMIN' })
    }
}

export function postUserAddress(email, data) {
    return async function (dispatch) {
        await axios.post(`/user/${email}/shippingAddress`,data)
        .catch(error => console.log(error.response.data))
        return dispatch({ type: 'SHIPPING_ADDRESS', payload: data})
    }
}

export function getAddress(payload) {
    return{
        type: 'GET_ADDRESS',
        payload
    }
}


export function adminProfile(picture){
    return{
        type: "ADMIN_PROFILE",
        payload:picture
    }
}


export function getAllOrders(){
    return async function (dispatch) {
        const allOrders = await axios.get(`/purchases/orders`);
        return dispatch({ type:'GET_ALL_ORDERS', payload: allOrders.data })
    }
}

export function getAllProductSold(){
    return async function (dispatch) {
        const productSold = await axios.get(`/admin/allOrders`);
        return dispatch({ type:'PRODUCT_SOLD', payload: productSold.data })
    }
}

export function updateorder(orderN, data) {
    return async function (dispatch) {
        await axios.put(`/purchases/update/${orderN}`,data)
       /*  .catch(error => console.log(error.response.data)) */
        return dispatch({ type: 'UPDATE_ORDER'})
    }
}


export function modifyStock(data) {
    return async function (dispatch) {
        console.log("data en actions: ",data);
        await axios.put(`/products/updateStock`,data)
        .catch(error => console.log(error.response.data))
        return dispatch({ type: 'UPDATE_STOCK'})
    }
}

export function updateShippingAddress(email, data) {
    console.log('data',data)
    return async function (dispatch) {
        await axios.put(`/user/${email}/updateShippingAddress`,data)
        .catch(error => console.log(error.response.data))
        return dispatch({ type: 'UPDATE_SHIPPING_ADDRESS'})
    }
}

export function addFavourite(email,idProduct){
    return async function (dispatch) {
        await axios.post(`/user/addFavourites/${email}/${idProduct}`)
        .catch(error => console.log(error.response.data))
        return dispatch({ type: 'ADD_FAVOURITES'})
    }
}



export function postDataMap(payload) {
    return{
        type: 'DATA_MAP',
        payload
    }
}

export function createQuestion(obj) {
    return async function () {
        console.log(obj)
        return axios.post(`/question`,  obj )
            .then(data => console.log('question added!'))
            .catch(error => console.log(error.response.data))
    }
}

export function getAllQuestions(){
    return async function (dispatch) {
        const allQuestions = await axios.get(`/question`);
        return dispatch({ type:'GET_ALL_QUESTIONS', payload: allQuestions.data })
        
    }
}
export function getAllAnswers(){
    return async function (dispatch) {
        const allQuestions = await axios.get(`/answer`);
        return dispatch({ type:'GET_ALL_ANSWER', payload: allQuestions.data })
        
    }
}

export function postAnswer(obj) {
    return async function () {
        console.log(obj)
        return axios.post(`/answer`,  obj )
            .then(data => console.log('question responded!'))
            .catch(error => console.log(error.response.data))
    }
}


export function updateAnswer(id,obj) {
    return async function () {
        return axios.put(`/answer/update/${id}`,  obj )
            .then(data => console.log('answer updated!'))
            .catch(error => console.log(error.response.data))
    }
}
export function updateQuestion(id,status) {
    return async function () {
        return axios.put(`/question/update/${id}`,  status )
            .then(data => console.log('question updated!'))
            .catch(error => console.log(error.response.data))
    }
}

export function updatePrice(data) {
    return async function (dispatch) {
        await axios.put(`/products/updatePrice`, data)
        .catch(error => console.log(error.response.data))
        return dispatch({ type: 'UPDATE_PRICE'})
    }
}

export function adminProduct(arr){
    return{
        type: "ADMIN_PRODUCTS",
        payload:arr
    }
}

export function clearPerif(){
    return { type: "CLEAR_PERIF", payload: []}
 }