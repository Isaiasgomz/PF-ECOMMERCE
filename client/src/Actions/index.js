import axios from 'axios'

export function getProducts(){
    return async function(dispatch){
        const allData = await axios.get('http://localhost:3001/products')
        return dispatch({type:'GET_PROSUCTS', payload: allData.data})
    }
}

export function postProduct(product){
    return async function (dispatch){
       const newProduct = await axios.post('http://localhost:3001/products',product)
        return newProduct
    }
}

export function postCustomer(customer){
    return async function (dispatch){
        const newCustomer = await axios.post('http://localhost:3001/customers',customer)
        return newCustomer
    }
}