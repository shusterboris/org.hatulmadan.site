import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import '../hatul.css';

export default class MainPage extends Component {
    state = {
         value1:'',value2:'',value3:'',
    }

    constructor(props){
        super(props);
      
    }

      
    render() {
        return(
        <Panel>            
        <div className="p-grid p-align-center vertical-container">
           
            <div className="p-col-7">
            {/* style={{backgroundColor:var(--blue-500)}} */}
               <div  className=" p-card-title p-text-center"  >
                    <i className="pi pi-cog"></i>
                    <div>Вас приветствует онлайн школа Хатуль мадан</div>
                </div> 
                
                <div className="p-card-title p-orange p-text-center">
                    <i className="pi pi-cog"></i>
                    <div>Наша миссия - ввести взрослых и детей в мир высоких технологий. Рассказываем просто о сложном</div>
                </div>  
             
                <div  className="p-text-center" >
                    <i className="pi pi-cog"></i>
                   <h3> Мы предлагаем: </h3>
                   <h5>Детям: программирование на <b>Scratch</b>, программирование на <b>python</b> </h5> 
                   <h5>Взрослым: ручное и автоматическое  <b>тестирование</b>, тренинги по подготовке к <b>собеседованиям</b>,
                 программирование на  <b>python, java</b> и многое другое. В ходе обучения предлагаем работать с реальными проектами, которые ведет наша компания</h5>
                 </div>      
            </div>
            <div className="p-col-4">
                    <img src="assets/images/globalCat.jpg" width ="70%" alt="fignya"/>
            </div>
         </div>
        </Panel>
       )     
    }
}