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
        const newProduct = await axios.post('http://localhost:3001/products', product)
        return newProduct
    }
}

export function postCustomer(customer) {
    return async function (dispatch) {
        const newCustomer = await axios.post('http://localhost:3001/customers', customer)
        return newCustomer
    }
}

export function getProductDetail(id) {
    return async function (dispatch) {
        const productDetail = await axios.get(`http://localhost:3001/products/${id}`)
        return dispatch({ type: 'PRODUCT_DETAIL', payload: productDetail.data })
    }
}
export function createReview(obj) {
    return async function (dispatch) {
        return axios.post(`http://localhost:3001/review`, { obj })
            .then(data => alert('Review added!'))
            .catch(error => alert(error.response.data))
    }
}

export function sortProductByPrice(array){
    return {
        type: "SORT_PRODUCT",
        payload: array
    }
}

