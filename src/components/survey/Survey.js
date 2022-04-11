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
import {Button} from 'primereact/button';
export const Survey = (props) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const [selQuiz,setSelQuiz]=useState(null);

    useEffect(() => {
        getSurveyList()
    },[])

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
    
    //открываем выбранный опрос
    const callQuiz=(name)=>{
        setSelQuiz(name);
        quizesAll.forEach(element => {
            if (element.name===name){
                props.history.push({pathname: '/quiz', state: {id: element.id}})
            }
        });
    }
    const lines=(quizesFull) => {
      if (!quizesFull) return null;
        quizesAll=quizesFull;
        let quizes=[];
        quizesFull.forEach(element => {
            quizes.push(element.name);
        });
        return( 
        <div>    
             <ListBox  value={selQuiz} options={quizes} onChange={(e) => callQuiz(e.value)} />        
        </div>
        )  
        
    } 
    return( <Panel>  
        <div className="p-d-flex p-flex-column p-flex-md-row">
       
           <div >
                <img src="assets/images/cabinet.jpg" alt="Кот " className='p-news-img' />
           </div>
           <div className="p-mr-5 p-pt-6">
               <h5 className="p-orange ">Выберите из списка опрос или тест</h5>
                 {isLoading ? <ProgressSpinner/> : lines(data)} 
             
            </div>
           
        </div>
        </Panel>
    ) 

}