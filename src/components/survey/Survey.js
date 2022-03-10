import React from 'react';
import { useState } from 'react';
import useFetch from 'react-fetch-hook';
import { Panel } from 'primereact/panel';
import {ListBox} from 'primereact/listbox';
import {Quiz} from './Quiz';
import '../../hatul.css';

import { ProgressSpinner } from 'primereact/progressspinner';


export const Survey = (props) => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
   const headers = {headers: {'Authorization': token}}
     const {isLoading, data, error} = useFetch('http://localhost:8080/survey/list');
    // теперь из этого надо сделать выбор и открыть окно с вопросами
    let qId=0;
    const line=(name, dbid) => {
        return( 
        <p>{name}</p>
       )  
    }

    let quizesAll=[];
    const callQuiz=(name)=>{
        setSelectedQuiz(name);
        quizesAll.forEach(element => {
        if (element.name===name){
            qId=element.id;
        }
        });

    }
    const lines=(quizesFull) => {
        quizesAll=quizesFull;
        let quizes=[];
        quizesFull.forEach(element => {
            quizes.push(element.name);
        });

        return( 
          <div>
          <ListBox  value={selectedQuiz} options={quizes} onChange={(e) => callQuiz(e.value)} />
          {qId&&<Quiz id={qId}/>}
          </div>
        )  
    } 
    return(<Panel>     
        <div className="p-d-flex p-flex-column p-flex-md-row">
           <div p-d-flex p-flex-row p-flex-md-column>
                 <img src="assets/images/globalCat.jpg" alt="Кот на глобусе" className='p-page-img' />
           </div>
           <div className="p-mr-5 p-pt-6">
           <h2 className="p-orange p-text-center" style={{margin: '0.5em 0 0.5rem 0', lineHeight: '1.5'}} >
               Спасибо за регистрацию на нашем сайте!  </h2>
               <p className="p-orange p-text-center">В скором времени все кто зарегистрировался, смогут принять участие в опросах и тестах.</p>
               <p className="p-orange p-text-center">Участники курсов получат много дополнительных материалов</p>
                     {isLoading && <ProgressSpinner/>}
                     <p>{error && error.status }</p>
                     {data && lines(data)}
                                    {/*   <p>{data && data.map((str) => str.name) }</p>    
                                         <p>{data && data.map((str) => line(str.name, str.id))}</p> */}
                     
           </div>
            </div>
            </Panel>
            ) 

}