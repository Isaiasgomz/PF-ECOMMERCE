import React, {useEffect, useState}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getAllOrders, updateorder} from "../../Actions";
import style from './AdminOrderEdit.module.css'


const validate = (value) =>{

    const errors = {}
    if(!value){
        errors.name = 'Debes Ingresar Un Nombre mayor a 2 letras y no debe incluir caracteres especiales ni simbolos'
        
    }
    return errors
}


function onlyOneDifficulty(value){
    var x = document.getElementsByName('status');
    var i;
    for (i = 0; i < x.length; i++) {
      if(x[i].value !==  value) x[i].checked = false;}
    
}


function AdminOrderEdit(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrders());
    },[])

   const {AllOrders} =  useSelector(state => state)

   const oneOrder = AllOrders.filter(item => item.orderN === props.match.params.id)


   const [input, setInput] = useState('')



const [errors, setErrors] = useState({})
   
    const handleCheckBox = (e) =>{
        
        if(e.target.checked){
            setInput(e.target.value)
            setErrors(validate(e.target.value))
            onlyOneDifficulty(e.target.value)
            }
    }

    const orderUpdate ={
        status: input
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(updateorder(props.match.params.id,orderUpdate))
    }

    

  return (
    <div>
       {
        oneOrder.length === 1 && oneOrder.map(item =>(
            <div >
            <ul className={style.container}>
                    <li> NUmero de Orden: {item.orderN}</li>
                    <li>Ususario: {item.UseEmail}</li>
                    <li>Precio Total: {item.totalPrice}</li>
                    <li> Fecha: {item.date}</li>
                   

            
            <div className={style.ckeckbox}>

            
            <label> Procesando Pago
            <input className={style.season}
             type={'checkbox'}
             name={'status'}
            value={'Procesando Pago'}
            id="status"
            onChange={(e)=> handleCheckBox(e)}/>
            </label>

            <label> Preparando Envio
            <input className={style.season}
             type={'checkbox'}
            name={'status'}
            value={'Preparando Envio'}
            id="status"
            onChange={(e)=> handleCheckBox(e)}/>
            </label>

            <label> Enviado
            <input className={style.season}
            type={'checkbox'}
            name={'status'}
            value={'Enviado'}
            id="status"
            onChange={(e)=> handleCheckBox(e)}/> </label>
            <br/>

            <label className='text-input'> Completado
            <input className={style.season} type={'checkbox'}
            name={'status'}
            value={'Completado'}
            id="status"
            onChange={(e)=> handleCheckBox(e)}/>
            </label>
            </div>

            {
                errors.name && (
                    <p className='text-error'>{errors.name}</p>
                )
            }
            <br/>

            </ul>
            <button onClick={(e) =>handleSubmit(e)}>Editar</button>
        </div>
        ))
       }
    </div>
  )
}

export default AdminOrderEdit