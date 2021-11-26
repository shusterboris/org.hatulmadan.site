import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Tag } from 'primereact/tag';

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
              
        <div className="p-grid" >
            
            <div className="p-col-6">
                  <h3 className="p-orange p-pt-3 p-pl-3" >Наши проекты</h3>
              <Card title="Управление деятельностью спортклуба" style={{ width: '40em' }}>
                <div>
                  Веб-приложение, предназначенное для руководства, администраторов и тренеров спортклуба с залами, бассейнами, кортами
                </div>
                <div>
                 <Tag className="p-mr-2" severity="info" value="функции" rounded></Tag>
                    <ui>  
                        <li>Планирование расписаний тренировок</li>
                        <li>Бронирование залов</li>
                        <li>Графики работы тренеров</li>
                        <li>Обслуживание клиентов</li>
                        <li>CRM</li>
                        <li>Генерация типовых договоров с клиентами</li>
                        <li>Учет посещений</li>
                        <li>Учет оплат</li>
                        </ui>
                </div>
                <div>           
                    <Tag className="p-mr-2" severity="info" value="Технологии" rounded></Tag>
                    <p><b>frontend:</b> JavaScript, React <b>backend:</b> Java, Spring Boot, MySQL</p>
                </div>
            </Card> 
            </div>
            <div className="p-col-6 p-justify-center p-pt-3">
                <img src="assets/images/projects.jpg" width ="50%" alt="fignya"/>
            </div>
        <div  className="p-col-6">
            <Card title="Управление персоналом (HR-portal)." style={{ width: '40em' }}>
                   <p>Веб-приложение, предназначенное для учета рабочего времени сотрудиков  сети магазинов</p>
                   <Tag className="p-mr-2" severity="info" value="функции" rounded></Tag>
                        <ui> 
                            <li>Графики работы персонала</li>
                            <li>Графики работы магазинов</li>
                            <li>Учет количества отработанных часов</li> 
                            <li>учет опозданий и переработок</li>
                            <li>Планирование отпусков и больничных</li>. 
                        </ui>
                        <div>
                            <Tag className="p-mr-2" severity="info" value="Технологии" rounded></Tag>
                            <p>frontend: JavaScript, React backend: Java, Spring Boot, MySQL</p>
                        </div>    
                </Card> 
        </div>
        <div  className="p-col-6">
          
                <Card title="Клуб совместных покупок  " >
                   <p>КМобильное приложение</p>
                </Card>   
                         
            </div>
        </div>
       
        </Panel>
       )     
    }
}