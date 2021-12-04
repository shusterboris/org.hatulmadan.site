import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
export default class CoursesPage extends Component {
    state = {};
    render() {
        return ( <Panel>
            <div className="p-grid p-pt-6">
                <div className="p-col-3 p-pl-4">
                <h3  className="p-orange">Новости, объявления, истории, отчеты о мероприятиях 
                </h3>
                <p> <img src="assets/images/red1.jpg" width ="40%" alt="fignya"/> </p>
                 <p className="p-text-bold"> <a className="p-orange" href="#n1">Программа курса QA для начинающих</a></p>
                 <p className="p-text-bold"> <a className="p-orange" href="#n2">День проектов на курсе Scratch</a></p>
                 <p className="p-text-bold"> <a className="p-orange" href="#n3">Отзывы о курсе Иврит для IT</a></p>
                </div>
              
                <div className="p-col-9">
                    
                    <Card id="n1" title="Присоединяйтесь к курсу QA для начинающих" >
                       <div className="p-grid ">
                          <div className="p-col-6 ">
                            <h5>Программа курса</h5>
                            <ui> Основы IT: 
                                    <li>Понятие об архитектуре приложений. FrontEnd и BackEnd.</li> 
                                <li>Введение в  Web-технологии. </li>
                                <li>HTML, CSS, JavaScript  </li>
                                <li>Протоколы обмена данными между клиентом и сервером </li>
                                <li>Базы данных. Представление о SQL и noSQL базах данных </li>
                                <li>Запросы к БД. Язык SQL </li>
                                <li> Основы программирования на JavaScript </li></ui>
                                <ui>  Введение в тестирование ПО:
                                <li>  Жизненный цикл разработки ПО </li>
                                <li> Чек-листы  </li>
                                <li>   Тест-кейсы  </li>
                                <li>      Классы эквивалентности и граничные значения </li>
                                <li>   Тест-анализ </li>
                                <li>   Баг-трекинг  </li>
                                <li>  Исследовательское тестирование </li>
                                <li> Нефункциональное тестирование </li></ui>
                                Практикум :  реальные задачи, фриланс - платформы, практика в различных проектах
                           </div>
                  
                            <div className="p-col-6 ">  
                                <img src="assets/images/n1.jpg" width ="80%" alt="fignya"/>  
                            </div>  
                         </div>
                        
                </Card>   
                       
               
                <Card id="n2" title="День проектов на курсе Scratch" >
                       <p>Идет "обратный урок", ребята по очереди выступают в роли преподавателя.</p> 
                           Саша Ткаченко делает доклад о своем проекте. 
                           <p>Вместе разобрались, нашли ошибки и все заработало</p>
                           <img src="assets/images/n2/lesson1.jpg" width ="60%" alt="Фото экрана проекта"/>    
                    
                    </Card> 
                    <Card id="n3" title="Отзывы о курсе Иврит для IT" >
                    Прошло 5 занятий из 9 тренинга, уже видны результаты наших усилий.
                   <p> <img src="assets/images/n3/part1.jpg" alt="Картинка с отзывом"/> </p>
                   <p> <img src="assets/images/n3/part2.jpg" alt="Картинка с отзывом"/> </p>
                   <p> <img src="assets/images/n3/part3.jpg" alt="Картинка с отзывом"/>  </p> 
                   <p> Начинается набор на второй поток</p>
                        </Card>    
                    </div>
            </div>
            </Panel>)
    }
}