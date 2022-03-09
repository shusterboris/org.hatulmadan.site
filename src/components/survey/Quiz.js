import React from 'react';
import { useState } from 'react';
import useFetch from 'react-fetch-hook';
import { Panel } from 'primereact/panel';
import '../../hatul.css';
import { ProgressSpinner } from 'primereact/progressspinner';

 
export const Quiz = (props) => {
   let call='http://localhost:8080/survey/byId/'+props.id;
  const {isLoading, data, error} = useFetch(call);

const allQuestions=(q)=>{
   return(
      <div>
        <p>{q.name}</p>
        {q.questionIds}</div>
    )
  } 
    return( 
              <div> 
                куку
                  {isLoading && <ProgressSpinner/>}
                     <p>{error && error.status }</p>
                     {data && allQuestions(data)} 
             </div>
            ) 

}