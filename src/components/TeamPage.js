import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import AppSets from '../service/AppSets';

export default class TeamPage extends Component {
    state = {
         value1:'',value2:'',value3:'',
    }

    constructor(props){
        super(props);
      
    }

      
    render() {
        return(
        <Panel>
              
        <div className="p-grid">
            
            <div className="p-col-7">
            <div  >
                    <h3>Наша команда </h3>
                </div>  
                <Panel header="Коротко о нас" >
               Мы – команда экспертов в компьютерных технологиях и педагогов, с многолетним опытом, которая вместе работает для того, чтобы сделать обучение интересным, разносторонним и на доступном уровне.  Мы видим свою миссию в том, чтобы объяснить простыми словами сложный мир современных компьютерных технологий. Наша школа началась как волонтёрский проект весной 2020 года с первой волной карантинов
                </Panel >       
                         
            </div>
            <div className="p-col-4">
            
             <img src="assets/images/teamCat.jpg" width ="70%" alt="fignya"/>
            </div>
        </div>
        </Panel>
       )     
    }
}