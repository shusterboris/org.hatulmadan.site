import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import AppSets from '../service/AppSets';

export default class ProjPage extends Component {
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
            <div className="p-col-4">
            
             <img src="assets/images/projects.jpg" width ="70%" alt="fignya"/>
            </div>
            <div className="p-col-8">
            <div  >
                    <h3>Наши проекты</h3>
                </div>  
                 <Card title="Спортклуб" >
                   <p>Коты приносят много пользы. Они древние и неприкосновенные животные.</p>
                </Card> 
                <Card title="Управление персоналом" >
                   <p>Коты приносят много пользы. Они древние и неприкосновенные животные.</p>
                </Card> 
                <Card title="Сбор заказов " >
                   <p>Коты приносят много пользы. Они древние и неприкосновенные животные.</p>
                </Card>   
                         
            </div>
        </div>
        </Panel>
       )     
    }
}