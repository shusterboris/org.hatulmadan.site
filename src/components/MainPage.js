import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import '../hatul.css';
import { Tag } from 'primereact/tag';
import { Divider } from 'primereact/divider';
import { Chip } from 'primereact/chip';
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
                 
         <div className="p-grid p-align-top vertical-container"> 
                       <div className="p-col-5 p-pl-4 p-pt-6">
                       <h3 className="p-orange">Вас приветствует школа Хатуль мадан </h3>
                   <h5>Наша миссия - ввести взрослых и детей в мир высоких технологий. Рассказываем просто о сложном </h5>
                <h3 className="p-orange"> Мы предлагаем: </h3> 
                 <h5 >   <Tag className="p-mr-2" severity="warning" value="Детям:" rounded></Tag>  программирование на <b>Python</b> , 
                 а для самых маленьких на <b>Scratch</b>,   
                   создание игр разной степени сложности. Научим детей проводить время за компьютером с пользой</h5>
                 <h5>  <Tag className="p-mr-2" severity="warning" value="Взрослым:" rounded></Tag> ручное и автоматическое  <b>тестирование</b>, тренинги по подготовке к <b>собеседованиям</b>,
                 программирование на  <b>python, java</b> , технический английский и многое другое. Курсы для взрослых рассчитаны на занятых людей, которые хотят сменить сферу деятельности. Поэтому занятия проводятся вечером,  
                 в выходные и праздничные дни. В ходе обучения предлагаем работать с реальными проектами, которые ведет наша компания</h5>
                
            </div>
            <div className="p-col-4">
                    <img src="assets/images/globalCat.jpg" width ="80%" alt="globalCat"/>
            </div>
            <div  className="p-col-3  p-pt-6" >
                    <div className="p-text-center p-red">  Объявления </div>            
                    <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                    <div>Приглашаем на курс "Технический иврит"</div>      
                
                    <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                    <div>Приглашаем на курс "программирование на Пайтон"для детей 13-15 лет. 
                    </div>
                    
                    <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                    <div>Приглашаем на курс "тестирование программного обеспечения (QA)" </div>
            </div>
      <div  className="p-col-8 p-pl-4">
            <Divider align="left" type="dashed"> </Divider>
                    <div  className="p-text-center p-red"> ЧАсто задаваемые ВОпросы</div>
                    <Tag className="p-mr-2" severity="warning" value="Как?" rounded></Tag>
                    <div className="p-text-bold"> Как проходят занятия? </div>
                    <div className="p-text-justify"> Занятия проходят on-line, в удобное для всех время, обычно вечером. Дополнительно даются домашние задания. По домашним заданиям можно lополнительно консультироваться с преподпаптелями </div>
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
     </div>  
          </Panel>
       )     
    }
}