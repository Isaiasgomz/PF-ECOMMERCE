import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllQuestions, postAnswer, updateQuestion } from '../../Actions';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import style from './AdminAnswer.module.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { validateAnswer } from './validateFunc';
import toast, { Toaster } from 'react-hot-toast';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function AdminAnswer(props) {
  const dispatch = useDispatch()
  const allQuestions = useSelector(state => state.allQuestions)
  const AllProducts = useSelector(state => state.AllProducts)
  const id = props.match?.params?.id
  const [trueor,setTrueor] = useState(true)

  const [answer, setAnswer] = useState({

    QuestionId: id,
    answer: ""
  })
  const [checkbox, setCheckbox] = useState({
    status: "No vista"
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    dispatch(getAllQuestions())

  }, [trueor])

  let oneQuestion = allQuestions.find(e => e.id === Number(id))

  const product = AllProducts.find(e => Number(oneQuestion?.ProductIdProduct) === Number(e.idProduct))
  const handleSubmit = (e) => {
    /* e.preventDefault(); */
    dispatch(postAnswer(answer))
    setAnswer({
      QuestionId: id,
      answer: ""
    })
  }
  const handleChange = (e) => {
    setAnswer({
      ...answer,
      [e.target.name]: e.target.value,

    })
    setErrors(validateAnswer({
      ...answer,
      [e.target.name]: e.target.value
    }))
  }
  const handleCheck = e => {
    setCheckbox({
      ...checkbox,
      [e.target.name]: e.target.value
    })
  }

  const handleClik = e => {
    /* e.preventDefault() */
    trueor===false?setTrueor(true):setTrueor(false)
    notify()
    dispatch(updateQuestion(id,checkbox))
    setCheckbox({
      status: ""
    })
    
  }
  const notify = () => toast.success('Estado actualizado', {
    style: {
      background: "rgb(67, 160, 71)",
      color: "white"
    }
  });
  return (
    <div className={style.containerAll}>
      <div className={style.containerAdminSideBar}>
        <AdminSideBar></AdminSideBar>
      </div>

      <div className={style.prodandQACont}>
        <div className={style.productCont}>
          <div className={style.imgCont}>
            <img src={product?.image}></img>
          </div>
          <div className={style.infoProdCont}>
            <span>{product?.productName}</span>
            <span>{product?.brand}</span>
            <span>${product?.price}</span>
            <span>Stock: {product?.stock}</span>
          </div>
        </div>
        <div className={style.qAndAcont}>
          <div className={style.questionCont}>
            {oneQuestion?.question}
          </div>
          <div className={style.questionCont}>
            Realizada el {oneQuestion?.date}
          </div>
          {oneQuestion?.Answer ? <div className={style.questionCont}>
            Tu respuesta:
            <div >{oneQuestion.Answer.answer}</div>
            <div >Realizada el {oneQuestion.Answer.date}</div>
            {/* <div > Realizada el {oneQuestion.Answer.date}</div> */}
          </div> : <div className={style.answerCont}>
            <form onSubmit={handleSubmit}>
              <label>Tu respuesta</label>
              <textarea className={style.answerInput}
                name='answer'
                value={answer?.answer}
                onChange={handleChange}
              ></textarea>
              <button className={style.ton} type='submit'
              >Responder</button>
            </form>
          </div>}

        </div>
        <div className={style.estadoCont}>
          <div className={style.estado}>Estado actual: {oneQuestion?.status}</div>

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <div className={style.resp}>

              <span>
                <label>Respondida</label>
              </span>
              <span>
              <FormControlLabel 
              name='status'
              value="Respondida" 
              onChange={handleCheck}

              control={<Radio />}  />


              </span>

            </div>
            <div className={style.resp}>
              <label >En espera</label>
              <span>
              <FormControlLabel 
              name='status'
              value="En espera" 
              onChange={handleCheck}
              control={<Radio />}  />
              </span>
            </div>
          </RadioGroup>
          <button className={style.loginButton} onClick={handleClik} >Guardar estado</button>
        </div>
      </div>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  )
}

export default AdminAnswer