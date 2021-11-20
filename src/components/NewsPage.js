import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
export default class CoursesPage extends Component {
    state = {};
    constructor(props) {
        super(props);
    }

    render() {
        return ( <Panel>
            <div className="p-grid">
                <div className="p-col-4">
                 <img src="assets/images/welcomeCat.jpg" width ="80%" alt="fignya"/>
                </div>
                <div className="p-col-8">
                    <Card title="Программирование на Scratch" >
                       <p>Для детей 7-10 лет</p>
                    </Card> 
                           
                </div>
            </div>
            </Panel>)
    }
}