import React, { Component } from 'react';
import { Panel } from 'primereact/panel';
import { Tag } from 'primereact/tag';

export default class ProjPage extends Component {
    state = {
         value1:'',value2:'',value3:'',
    }
      
    render() {
        return(
        <Panel>
              
        <div className="p-grid" >
            
        <div  className="p-col-8 p-pl-4">
         
                    <div  className="p-text-center p-red"> FAQ</div>
                    <Tag className="p-mr-2" severity="warning" value="Как?" rounded></Tag>
                    <div className="p-text-bold"> Как проходят занятия? </div>
                    <div className="p-text-justify"> Занятия проходят on-line, в удобное для всех время, обычно вечером. Дополнительно даются домашние задания. 
                    По домашним заданиям можно дополнительно консультироваться с преподавателями </div>
                    <Tag className="p-mr-2" severity="warning" value="Зачем?" rounded></Tag>
                    <div  className="p-text-bold"> Зачем учить детей программированию ?         </div>
                    <div className="p-text-justify"> Изучение программирования помогает детям развивать масштабное мышление и творческие способности, воспитывает умение вникать в суть проблемы и решать ее, учит работать в команде, 
                        а также прививает чувство удовлетворения от выполненного. Мы предлагаем  обучение на Scratch. 
                        Это язык программирования для детей, разработанный в Media Lab при Массачусетском технологическом институте. Он базируется на цветных блоках, 
                        напоминающих «Лего», и каждый блок представляет собой кодовую команду. Используя блочные «сцепления», дети пишут код и создают анимацию, игры, рассказы и многое другое. А кроме того, они могут рисовать персонажей для своих проектов или записывать звуки, которые потом будут использовать.
                    </div>
                    <Tag className="p-mr-2" severity="warning" value="Язык?" rounded></Tag>
                    <div className="p-text-bold"> На каком языке ведется преподавание?  </div>
                    <div> На русском языке и иврите </div>
                    <Tag className="p-mr-2" severity="warning" value="Кому?" rounded></Tag>
                    <div className="p-text-bold"> На какой уровень знаний учащихся рассчитаны курсы  QA ? </div>
                    <div> Достаточно быть уверенным пользователем компьютера </div>
            </div>
            <div className="p-col-4">
                 <img src="assets/images/welcomeCat.jpg" width ="80%" alt="fignya"/>
                </div>
        </div>
       
        </Panel>
       )     
    }
}