import React, { useState } from 'react'
import Boxx from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { validateQuest } from "../detailFunctions";
import { useDispatch, useSelector } from 'react-redux';
import style from "./QandA.module.css"
import { createQuestion } from '../../../Actions';
import { useAuth0 } from "@auth0/auth0-react";
import icono from "../../../imagenes/iconoPR.jpeg";

function QandA({ idProduct, email, questions }) {
    const { loginWithRedirect } = useAuth0();
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [quest, setQuest] = useState({
        email: email,
        ProductIdProduct: idProduct,
        question: ""
    })
    const [errors, setErrors] = useState({})
    /* submit del form */
    const handleSubmit = (e) => {
        /* e.preventDefault(); */
        dispatch(createQuestion(quest))
        setQuest({
            email: email,
            ProductIdProduct: idProduct,
            question: " "
        })
    }
    /* handle de select de valoracion */
    const handleChange = (e) => {

        setQuest({
            ...quest,
            [e.target.name]: e.target.value,
            email: email
        })

        setErrors(validateQuest({
            ...quest,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <React.Fragment>
            {Object.keys(user).length === 0 && questions?.length === 0 ?
                <div className={style.noNoConteiner}>
                    <div className={style.noPregNoLog}>
                        <span> No hay preguntas! sé el primero, pero antes deberías loguearte</span>
                        <span>  <button className={style.loginButton} onClick={() => loginWithRedirect()}>Iniciar Sesión</button></span>
                        <hr />

                    </div>
                </div> : Object.keys(user).length !== 0 && questions?.length === 0 ?
                    <div className={style.siNoConteiner}>
                        <Boxx
                            onSubmit={handleSubmit}
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <label>Tenés alguna pregunta? Dejalá acá!</label>

                            <TextField
                                fullWidth
                                name='question'
                                value={quest?.question}
                                onChange={handleChange}
                                id="filled-textarea"
                                label="Tu pregunta"
                                placeholder="Haz tu pregunta"
                                multiline
                                variant="filled"
                                error={errors.question?.split(" ").length > 1}
                            />
                            {
                                errors.question && (
                                    <p className={style.textError} >{errors.question}</p>)
                            }
                            <button disabled={Object.keys(errors).length > 0 || quest.question.length < 2} className={style.loginButton} type="submit" >Preguntar!</button>
                        </Boxx>
                        <hr />
                        <div className={style.noPreg}>
                            <span> No hay preguntas de este producto</span>
                        </div>
                    </div> : Object.keys(user).length === 0 && questions?.length !== 0 ?
                        <div>
                            <div className={style.noPregNoLog}>
                                <span className={style.needLogText}>Necesitas loguearte para hacer una pregunta!</span>
                                <span> <button className={style.loginButton} onClick={() => loginWithRedirect()}>Iniciar Sesión</button></span>
                            </div>
                            <hr className={style.hrAulti} />

                            <span> Últimas preguntas realizadas</span>
                            <hr />

                            {questions?.map(e => {
                                return <div key={e.id} className={style.qandAConteiner}>
                                    <div className={style.backquestcont}>
                                        <div className={style.questionConteiner}>
                                            <div className={style.iconCont}><i class="fa-solid fa-user"></i></div>
                                            <div className={style.timeandparraf}>
                                                <div className={style.questionparraf}> {e.question} </div>
                                            </div>
                                        </div>
                                        <div className={style.time}> 22/02/22 13:14</div>
                                    </div>
                                    <div className={style.answerConteiner}>
                                        <div className={style.imgCont}> 
                                        <img src={icono} className={style.icono}></img>
                                        </div>  
                                        <div className={style.answer}>{e.Answer?.answer} </div>
                                    </div>
                                    <hr className={style.hrAulti}/>
                                </div>
                            })}

                        </div>
                        : <div>
                            <div className={style.box}>
                            <Boxx
                                onSubmit={handleSubmit}
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <label>Tenés alguna pregunta? Dejalá acá!</label>

                                <TextField
                                    fullWidth
                                    name='question'
                                    value={quest?.question}
                                    onChange={handleChange}
                                    id="filled-textarea"
                                    label="Tu pregunta"
                                    placeholder="Haz tu pregunta"
                                    multiline
                                    variant="filled"
                                    error={errors.question?.split(" ").length > 1}
                                />
                                {
                                    errors.question && (
                                        <p className={style.textError} >{errors.question}</p>)
                                }
                                <button disabled={Object.keys(errors).length > 0 || quest.question.length === 0} className={style.loginButton} type="submit" >Preguntar!</button>
                            </Boxx>
                            </div>
                            <hr />
                            <span> últimas preguntas realizadas</span>
                            <hr className={style.hrAulti}/>
                            {questions?.map(e => {
                                return <div key={e.id} className={style.qandAConteiner}>
                                <div className={style.backquestcont}>
                                    <div className={style.questionConteiner}>
                                        <div className={style.iconCont}><i class="fa-solid fa-user"></i></div>
                                        <div className={style.timeandparraf}>
                                            <div className={style.questionparraf}> {e.question} </div>
                                        </div>
                                    </div>
                                    <div className={style.time}> {e.date}</div>
                                </div>
                                <div className={style.answerConteiner}>
                                    <div className={style.imgCont}> 
                                    <img src={icono} className={style.icono}></img>
                                    </div>  
                                    <div className={style.answer}>{e.Answer?.answer} </div>
                                </div>
                                <hr className={style.hrAulti}/>
                            </div>
                            })}
                        </div>}

        </React.Fragment>
    )
}

export default QandA