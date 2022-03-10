import React from 'react';
import { useState } from 'react';
import useFetch from 'react-fetch-hook';
import { Panel } from 'primereact/panel';
import '../../hatul.css';
import { ProgressSpinner } from 'primereact/progressspinner';
//
//передаем опрос, выбираем вопросы по очереди
 
export const Quiz = (props) => {
let call='http://localhost:8080/survey/questionById/'+ids[currentNo];
const {isLoading, data, error} = useFetch(call);
const [quiz, setQuiz] = useState(null);
const [question, setQuestion] = useState(null);
let currentNo=1;
let ids=props.question.questionIds;
const question=(q)=>{
   return(
      <div>
        <p>{q.name}</p>
        </div>
    )
  } 
    return( 
              <div> 
                 
                 {isLoading && <ProgressSpinner/>}
                     <p>{error && error.status }</p>
                     {data && question(data)} 
             </div>
            ) 

}