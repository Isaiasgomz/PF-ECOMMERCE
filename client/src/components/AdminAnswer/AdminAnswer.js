import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAnswers,
  getAllQuestions,
  postAnswer,
  updateAnswer,
  updateQuestion,
} from "../../Actions";
import style from "./AdminAnswer.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { validateAnswer } from "./validateFunc";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function AdminAnswer(props) {
  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.allQuestions);
  const allAnswers = useSelector((state) => state.allAnswers);
  const AllProducts = useSelector((state) => state.AllProducts);
  const propsID = useParams().id;
  const id = propsID;
  const [trueor, setTrueor] = useState(true);
  const [isDisable, setIsDisable] = useState(true);

  const [answer, setAnswer] = useState({
    QuestionId: id,
    answer: "",
  });
  const [checkbox, setCheckbox] = useState({
    status: "En espera",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllQuestions());
    dispatch(getAllAnswers());
    dispatch(updateQuestion(id, checkbox));
  }, [trueor]);

  let oneQuestion = allQuestions?.find((e) => e.id === Number(id));
  let theAnswer = allAnswers?.find((e) => e.QuestionId === Number(id));

  const product = AllProducts.find(
    (e) => Number(oneQuestion?.ProductIdProduct) === Number(e.idProduct)
  );
  const handleSubmit = (e) => {
    /* e.preventDefault(); */

    dispatch(postAnswer(answer));

    setAnswer({
      QuestionId: id,
      answer: "",
    });
  };
  const handleEdit = (e) => {
    /* e.preventDefault(); */
    dispatch(updateAnswer(theAnswer.id, answer));
    setAnswer({
      QuestionId: id,
      answer: "",
    });
  };
  const handleChange = (e) => {
    setAnswer({
      ...answer,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateAnswer({
        ...answer,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleCheck = (e) => {
    setCheckbox({
      ...checkbox,

      [e.target.name]: e.target.value
    })
    window.history.back();
  }


  const handleClik = (e) => {
    /* e.preventDefault() */
    trueor === false ? setTrueor(true) : setTrueor(false);
    notify();
    dispatch(updateQuestion(id, checkbox));
    setCheckbox({
      status: "",
    });
  };
  const notify = () =>
    toast.success("Estado actualizado", {
      style: {
        background: "rgb(67, 160, 71)",
        color: "white",
      },
    });

  const editButton = async (e) => {
    e.preventDefault();
    await setAnswer({
      ...answer,
      answer: oneQuestion.Answer.answer,
    });
    setIsDisable(false);
  };
  return (
    <div className={style.containerAll}>
      <div className={style.prodandQACont}>
        <div className={style.productCont}>
          <div className={style.imgCont}>
            <img src={product?.image} className={style.img}></img>
          </div>
          <div className={style.infoProdCont}>
            <div className={style.containerTitle}>
              <span>{product?.productName}</span>
            </div>

            <div className={style.containerTitle}>
              <span>{product?.brand}</span>
            </div>

            <div className={style.containerTitle}>
              <span>${product?.price}</span>
            </div>
            <div className={style.containerTitle}>
              <span>Descuento: {product?.reduction}%</span>
            </div>
            <div className={style.containerTitle}>
              <span>Stock: {product?.stock}</span>
            </div>
          </div>
        </div>
        <div className={style.qAndAcont}>
          <div className={style.questionCont2}>{oneQuestion?.question}</div>
          <div className={style.questionCont}>
            Realizada el {oneQuestion?.date}
          </div>
          <hr />
          <div className={style.tuResputesta}>
            <div> Tu respuesta</div>
          </div>
          {oneQuestion?.Answer ? (
            <form onSubmit={handleEdit}>
              <div className={style.anwserFilled}>
                <textarea
                  className={style.answerInput}
                  disabled={isDisable}
                  name="answer"
                  value={
                    answer?.answer
                      ? answer?.answer
                      : setAnswer({
                          ...answer,
                          answer: oneQuestion.Answer.answer,
                        })
                  }
                  onChange={handleChange}
                ></textarea>

                <div className={style.fecha}>
                  Realizada el {oneQuestion.Answer.date}
                </div>
              </div>
              <div className={style.buttonCont}>
                {isDisable ? (
                  <button className={style.Editton} onClick={editButton}>
                    Editar
                  </button>
                ) : (
                  <button className={style.ton} type="submit">
                    Guardar
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className={style.answerCont}>
              <form onSubmit={handleSubmit}>
                <textarea
                  className={style.answerInput}
                  name="answer"
                  value={answer?.answer}
                  onChange={handleChange}
                  placeholder={oneQuestion?.Answer}
                ></textarea>
                <div className={style.buttonCont}>
                  <button className={style.ton} type="submit">
                    Responder
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className={style.estadoCont}>
          <div className={style.estado}>Estado actual</div>

          <div className={style.actual}> {oneQuestion?.status}</div>
          <div className={style.hr} />
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
                  name="status"
                  value="Respondida"
                  onChange={handleCheck}
                  control={<Radio />}
                />
              </span>
            </div>
            {/* <div className={style.resp}>
              <label >En espera</label>
              <span>
                <FormControlLabel
                  name='status'
                  value="En espera"
                  onChange={handleCheck}
                  control={<Radio />} />
              </span>
            </div> */}
          </RadioGroup>
          <div className={style.hr} />
          <button className={style.loginButton} onClick={handleClik}>
            Guardar estado
          </button>
        </div>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
}

export default AdminAnswer;
