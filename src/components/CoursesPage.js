import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Tag } from 'primereact/tag';
export default class CoursesPage extends Component {
    state = {};
    constructor(props) {
        super(props);
    }

    render() {
        return ( <Panel>
            <div className="p-grid">
                <div className="p-col-6">
                 <img src="assets/images/mainCat.jpg" width ="100%" alt="fignya"/>
                </div>
                <div className="p-col-6">
                   <div >
                    <h3>Список курсов для взрослых и детей</h3>
                    </div>    
                    <Card title="Программирование на Scratch" >
                       <p>Для детей 7-10 лет</p>
                    </Card> 
                    <Card title="Программирование на Python" >
                       <p>Для детей 12-14 лет</p>
                    </Card>            
                </div>
                <div  className="p-col-6">
                <Tag className="p-mr-2" severity="warning" value="Важно" rounded></Tag>
                <div> Зачем учить детей программированию ?          </div>
                <div> Чтобы привыкали          </div>
                <Tag className="p-mr-2" severity="warning" value="Важно" rounded></Tag>
                <div> Чем вы лучше?           </div>
                <div> Потому         </div>
            </div>
            </div>
            </Panel>)
    }
}