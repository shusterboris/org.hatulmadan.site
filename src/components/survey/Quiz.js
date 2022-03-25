import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../../hatul.css';
import { ProgressSpinner } from 'primereact/progressspinner';
import { axinst } from '../../axInst';
import { apiUrl } from '../../axInst';
import { useLocation } from 'react-router-dom'
//
//передаем опрос, выбираем вопросы по очереди
 
export const Quiz = (props) => {
//let call='http://localhost:8080/survey/questionById/'+ids[currentNo];
const [isLoading, setIsLoading] = useState(true)
const [quiz, setQuiz] = useState(null);
const [question, setQuestion] = useState(null);
const [currentNo, setCurrentNo] = useState(0);
const [qId, setQId] = useState(null);


 useEffect(() => {
    getSurvey()
},[]) 
const location = useLocation();
const id=(location.state.id) ;
//let quiz=null;
const showError = (err) => {
  return (<div>{JSON.stringify(err, null, 2)}</div>)
}
const getSurvey = () => {
   axinst.get(apiUrl+"survey/byId/"+id)
  .then((response) =>{            
      showQuiz(response.data)
  })
  .catch((error) =>{
      showError(error)
  })
  .finally(setIsLoading(false))
}
const getQuestion = () => {
  axinst.get(apiUrl+"survey/questionById/"+quiz.questionIds[currentNo])
 .then((response) =>{            
     showQuiz(response.data)
 })
 .catch((error) =>{
     showError(error)
 })
 .finally(setIsLoading(false))
}
const showQuiz=(data)=>{
   setQuiz(data);

  return(
  <div>
    {quiz.name}
    </div>
)
}

//let ids=props.question.questionIds;
const showquestion=(q)=>{
   return(
      <div>
        <p>{q.name}</p>
        </div>
    )  } 

   
return(
        <div className="p-card">
        Название: {quiz && quiz.name}
        </div>
)
}