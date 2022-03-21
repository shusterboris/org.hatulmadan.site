import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Panel } from 'primereact/panel';
import {ListBox} from 'primereact/listbox';
import {Quiz} from './Quiz';
import '../../hatul.css';
import { axinst } from '../../axInst';
import { apiUrl } from '../../axInst';
import { ProgressSpinner } from 'primereact/progressspinner';
export const Survey = (props) => {
    // теперь из этого надо сделать выбор и открыть окно с вопросами
    
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const [selQuiz,setSelQuiz]=useState(null);
    const[qId,setQId]=useState(null);
    useEffect(() => {
        getSurveyList()
    },[])

    const showData = (d) => {
        return <p>{ JSON.stringify(d, null, 2) } </p>
    }
    const showError = (err) => {
        return (<div>{JSON.stringify(err, null, 2)}</div>)
    }
    const getSurveyList = () => {
        //axinst.get("http://localhost:8080/survey/list")
        axinst.get(apiUrl+"survey/list")
        .then((response) =>{            
            setData(response.data)
        })
        .catch((error) =>{
            showError(error)
        })
        .finally(setIsLoading(false))
    }
    let quizesAll=[];

    const callQuiz=(name)=>{
        setSelQuiz(name);
        quizesAll.forEach(element => {
        if (element.name===name){
            setQId(element.id);
        }
        });

    }
    const lines=(quizesFull) => {
        if (!quizesFull){
            return null
        }
        quizesAll=quizesFull;
       let quizes=[];
        quizesFull.forEach(element => {
            quizes.push(element.name);
        });

        return( 
          <div>

          <ListBox  value={selQuiz} options={quizes} onChange={(e) => callQuiz(e.value)} />
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
                {isLoading ? <ProgressSpinner/> : lines(data)}
                {qId&&<Quiz id={qId}/>}
             {/*   <p>{data && data.map((str) => str.name) }</p>    
               <p>{data && data.map((str) => line(str.name, str.id))}</p> */}
                     
           </div>
            </div>
            </Panel>
            ) 

}