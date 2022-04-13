import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../../hatul.css';
import { axinst } from '../../axInst';
import { apiUrl } from '../../axInst';
import { useLocation } from 'react-router-dom'
import { Checkbox } from 'primereact/checkbox';
//передаем опрос, выбираем вопросы по очереди
import { Button } from 'primereact/button'
import { Card } from 'primereact/card' 
import { validatePhoneNumberLength } from 'libphonenumber-js';

export const Quiz = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [quiz, setQuiz] = useState(null);
  const [question, setQuestion] = useState(null);
  const [currentNo, setCurrentNo] = useState(0);
  const [qId, setQId] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [checked,setChecked]= useState(false);
  useEffect(() => {
    getSurvey()
  },[currentNo]) 

  useEffect(() => {
    getQuestion()
  },[quiz]) 

  const location = useLocation();
  const id=(location.state.id) ;
  let listItems=null;

  const showError = (err) => {
    return (<div>{JSON.stringify(err, null, 2)}</div>)
  }
  //получаем название опроса и массив вопросов
  const getSurvey = () => {
      axinst.get(apiUrl+"survey/byId/"+id)
    .then((response) =>{            
      setQuiz(response.data);   
    })
    .catch((error) =>{
      showError(error)
    })
  .finally(setIsLoading(false))
  }
 //получаем вопрос и варианты ответов
  const getQuestion = () => {
    quiz &&axinst.get(apiUrl+"survey/questionById/"+quiz.questionIds[currentNo])
    .then((response) =>{            
      setQuestion(response.data)
    })
    .catch((error) =>{
      showError(error)
    })
    .finally(setIsLoading(false))
  }

const showQuiz=()=>{
  return(
    <div>
       Название <b>{quiz.name}</b> 
    </div>
  )
}

const showQuestion=()=>{
  //listItems = question.answers.map((str) => str.text);
  listItems = question.answers.map((str)=>SingleLine(str));
  return(
      <div>
        <p>Вопрос  {currentNo+1} из {quiz.questionIds.length}</p>
        <h5 className="p-orange">{question&&question.text}</h5>
        <p>Выберите правильные ответы:</p>
        { listItems}
      </div>
    )  } 

const handleChange=(e)=> {
  let selectedAns = [...answers];

  if (e.checked)
      selectedAns.push(e.value);
  else
      selectedAns.splice(selectedAns.indexOf(e.value), 1);

  setAnswers(selectedAns);
}

const stepNext=()=> {
  setChecked(false);
  setCurrentNo(currentNo+1);
}
const stepBack=()=> {
  setChecked(false);
  (currentNo>0)&&setCurrentNo(currentNo-1);
}
const  SingleLine=(str)  =>{
 
  return(
    <div>
      <div className="p-inputgroup ">
        <Checkbox inputId={str.id} value={str.text} checked={answers.indexOf(str.text) !== -1} onChange={handleChange}  />
         <label htmlFor={str.id} className="p-checkbox-label p-px-3">{str.text}</label>
      </div>
    </div>
  )
}
//показать правильные ответы
const showRightAnswers=()=>{
 let res;
  if (checked)
    res=question.answers.map(element => {
      return(<p>{element.right&&element.text}</p>)
      })
  return (  <p>{res}</p>);
}

const hasAnswers=()=>{
  return question&&question.answers.some(value =>value.right===true)
}


return(
  <div className="p-card ">
      <div className="p-ml-5 p-mb-5" >
        <h3 className="p-orange">{quiz && showQuiz()}  </h3>
        <p>{question&&showQuestion()}</p>
      </div>
      <div className="p-ml-5 p-mb-5">
      {hasAnswers()&&<p> <Button className=" p-button-success p-button-rounded " label="Проверить" onClick={()=>setChecked(true)}></Button></p>}
        <h5 className="p-orange"> {checked&&"Правильный ответ "}</h5>
        {showRightAnswers()}
      </div>
      <div className="p-ml-5 p-mb-5 ">
       <Button className="p-button-rounded p-button-warning  p-mr-2"  icon="pi pi-arrow-left"  onClick={()=>stepBack()}></Button>
        <Button className="p-button-rounded p-button-warning "  icon="pi pi-arrow-right"  onClick={()=>stepNext()}></Button>
        <Button className="p-button-rounded p-button-warning  p-ml-3 " label="К опросам" icon="pi pi-arrow-up" onClick={()=>props.history.goBack()}></Button>
      </div>
  </div>
)     
}