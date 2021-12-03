import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
export default class CoursesPage extends Component {
    state = {};

    render() {
        return ( <Panel>
            <div  className="p-text-center p-orange p-pt-3 " >
                <h3>Список курсов для взрослых и детей</h3>
            </div>
            <div className="p-grid">
                <div className="p-col-4">
                    <Card id="c1" title="QA для начинающих" subTitle="Тестирование программного обеспечения " style={{ width: '25em' }}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                        <div>Продолжительность курса - 6 мес. Язык обучения - русский.
                        </div>
                             <ui>Программа курса: <li>Понятие об архитектуре приложений.</li> 
                              <li>Введение в  Web-технологии.  HTML, CSS, JavaScript</li> 
                              <li> Представление о SQL и noSQL базах данных </li>
                              <li>Введение в тестирование ПО.  </li>
                              <li>Жизненный цикл разработки ПО </li>
                            Практикум :  реальные задачи, фриланс - платформы, практика в различных стартапах...
                              
                         </ui>
                         </p>
                           <p className="p-text-bold"> <a className="p-orange" href="/news#n1">подробнее</a>
                           </p>
                    </Card>
               
                </div>
                <div className="p-col-4">
                   <img src="assets/images/mainCat.jpg" width ="90%" alt="fignya"/>
                </div>
                <div className="p-col-4">
                    <Card id="c2" title="QA для продвинутых" subTitle="Автоматическое тестирование " style={{ width: '25em' }}>
                    <p className="p-m-0"style={{lineHeight: '1.5'}} >
                        Продолжительность курса - 6 мес. Язык обучения - русский.
                          Изучение  <b>DOM</b>(Document Object Model). Написание тестов на JavaScript. Использование Selenium
                            Практикум:  реальные задачи, фриланс - платформы, практика в различных стартапах...
                            </p>
                    </Card>
              
                </div> 
                
                <div className="p-col-4">
                    <Card id="c3" title="Иврит для IT"  subTitle="Подготовка к собеседованиям" style={{ width: '25em' }}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                      Техническая терминология. Разбор реальных интервью с HR-ами и техническими специалистами.
                        </p>
                        <p className="p-text-bold"> <a className="p-orange" href="/news#n3">подробнее</a>
                           </p>
                    </Card>
                </div>
                <div className="p-col-4">
                    <Card id="c4" title="Программирование на Python"  subTitle="Для детей 12-15 лет" style={{ width: '25em' }}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                      Изучение языка и основ программирования.  Далее дети делают игры на библиотеке pygame. Есть группы на русском языке и на иврите
                        </p>
                    </Card>
                </div>
                 <div className="p-col-4">
                    <Card id="c5" title="Программирование на Scratch" 
                    subTitle="Для детей 7-10 лет" style={{ width: '25em' }}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                            Дети начинают с самых простых проектов и в ходе обучения делают все более и более сложные игры. 
                        У детей развивается внимание, логическое мышление. Есть группы на русском языке и на иврите</p>
                         <p className="p-text-bold"> <a className="p-orange" href="/news#n2">подробнее</a>
                           </p>
                        </Card> 
                </div>
                <div className="p-col-4">
                    <Card id="c6" title="Занимательная математика" 
                    subTitle="Для детей 10-12 лет" style={{ width: '25em' }}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                            Авторский курс. Интересные задачи, интересные факты. И скорая помощь по школьным заданиям.
                            Занятия на русском языке </p>
                        </Card> 
                </div>
            </div>      
            </Panel>)
    }
}