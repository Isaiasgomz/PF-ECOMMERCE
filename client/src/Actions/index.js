import axios from 'axios'

export function getProducts(){
    return async function(dispatch){
        const allData = await axios.get('http://localhost:3001/products')
        return dispatch({type:'GET_PROSUCTS', payload: allData.data})
    }
}