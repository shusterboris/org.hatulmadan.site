import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../../hatul.css';
import { ProgressSpinner } from 'primereact/progressspinner';
import { axinst } from '../../axInst';
import { apiUrl } from '../../axInst';
//
//передаем опрос, выбираем вопросы по очереди
 
export const Quiz = (props) => {
//let call='http://localhost:8080/survey/questionById/'+ids[currentNo];
const [isLoading, setIsLoading] = useState(true)
const [quiz, setQuiz] = useState(null);
const [question, setQuestion] = useState(null);
const [currentNo, setCurrentNo] = useState();
const [qId, setQId] = useState(null);

 useEffect(() => {
    getSurvey()
},[qId]) 

const showError = (err) => {
  return (<div>{JSON.stringify(err, null, 2)}</div>)
}
const getSurvey = () => {
   axinst.get(apiUrl+"survey/byId/"+props.id)
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
    {!isLoading&&quiz.name}
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
setQId(props.id)  
return(
      <div>
         {!isLoading&&quiz.name} 
        </div>
)
}