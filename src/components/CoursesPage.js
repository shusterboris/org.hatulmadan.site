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
                        <p>Продолжительность курса - 6 мес. Язык обучения - русский.
                        </p>
                             <ui>Программа курса: <li>Понятие об архитектуре приложений.</li> 
                              <li>Введение в  Web-технологии.  HTML, CSS, JavaScript</li> 
                              <li> Представление о SQL и noSQL базах данных </li>
                              <li>Введение в тестирование ПО.  </li>
                              <li>Жизненный цикл разработки ПО </li>
                            Практикум :  реальные задачи, фриланс - платформы, практика в различных стартапах...
                         </ui>
                         
                           <p className="p-text-bold"> <a className="p-mylink" href="/news#n1">подробнее</a>
                           </p>
                           <p><a className="p-mylink" href="https://youtu.be/8YugjIeIeu4" target="_blank">Запись первого занятия </a></p>
                    </p>
                   </Card>
               
                </div>
                <div className="p-col-4">
                   <img src="assets/images/mainCat.jpg" width ="90%" alt="fignya"/>
                </div>
                <div className="p-col-4">
                    <Card id="c2" title="QA для продвинутых" subTitle="Автоматическое тестирование " style={{ width: '25em' }}>
                    <p className="p-m-0"style={{lineHeight: '1.5'}} >
                    Язык обучения - русский. Продолжительность курса - 6 мес. </p> 
                         <p> <ui>Программа
                          <li>Изучение программирования на JavaScript.</li>
                          <li>Изучение  <b>DOM</b>(Document Object Model). </li>
                          <li>Написание тестов на JavaScript. </li>
                          <li>Использование Selenium.</li>
                          <li>Основы методологий разработки ПО.</li>
                            </ui>
                           Практикум:  реальные задачи, фриланс - платформы, практика в различных стартапах...
                            </p>
                    </Card>
              
                </div> 
                
                <div className="p-col-4">
                    <Card id="c3" title="Иврит для IT"  subTitle="Подготовка к собеседованиям" style={{ width: '25em' }}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                          Продолжительность тренинга 9-10 занятий (2 месяца).
                        В программе : резюме, методика найма в израильском IT, профессиональная лексика на иврите, 
                        общение на профессиональные темы, аудирование.
                        Это тренинг позволит уверенно и без стресса проходить как первоначальные этапы собеседований, так и последующие, вплоть до технического. Требуемая подготовка - уверенный ульпан א
                        </p>
                        <p className="p-text-bold"> <a className="p-mylink" href="/news#n3">подробнее</a>
                           </p>
                           <p><a className="p-mylink" href="https://youtu.be/zFIuOEC96ME" target="_blank">Запись первого занятия </a> </p>
                    </Card>
                </div>
                <div className="p-col-4">
                    <Card id="c4" title="Программирование на python"  subTitle="Для детей 12-15 лет" style={{ width: '25em' }}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                      Изучение языка и основ программирования.  Далее дети делают игры на библиотеке pygame. Есть группы на русском языке и на иврите
                      <ui> Программа курса: 
                           <li>переменные </li>
                           <li>арифметические и логические операции</li>
                           <li>условные операторы и циклы</li>
                           <li>структуры данных</li>
                           <li>функции</li>
                           <li>классы</li>
                           <li>основы объектно-ориентироованного программирования</li>
                           <li>понятие о библиотеках и модулях</li>
                           <li>принципы работы библиотеки pygame</li>
                           <li>понятие о событиях и коллизиях</li>
                           <li>работа с индивидуальными проектами</li>
                           <li>написание telegram-бота и другие интересные программы</li>
                        </ui>

                        </p>
                    </Card>
                </div>
                 <div className="p-col-4">
                    <Card id="c5" title="Программирование на scratch" 
                    subTitle="Для детей 7-10 лет" style={{ width: '25em' }}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                            Дети начинают с самых простых проектов и в ходе обучения делают все более и более сложные игры. 
                            Сейчас учится одновременно несколько групп. Если ребенок раньше изучал scratch, то он сможет присоединиться к группе подходящего для себя  уровня.
                         Есть группы на русском языке и на иврите</p>
                         <p className="p-text-bold"> <a className="p-mylink" href="/news#n2">подробнее</a>
                           </p>
                           <p><a className="p-mylink" href="https://scratch.mit.edu/projects/410988460" target="_blank">Пример проекта </a> </p>
                        </Card> 
                </div>
                <div className="p-col-4">
                    <Card id="c6" title="Занимательная математика" 
                    subTitle="Для детей 10-12 лет" style={{ width: '25em' }}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                            Авторский курс. Интересные задачи, интересные факты. Дети учатся понимать математику а не просто решать задачи. Дополнительно:
                             скорая помощь по школьным заданиям всех стран и континентов.
                            Занятия на русском языке </p>
                        </Card> 
                </div>
                <div className="p-col-4">
                    <Card id="c7" title="Английский язык" 
                     subTitle="Для детей 10-12 лет" style={{ width: '25em' }}>
                        Загадки, детективные истории, спасенные принцессы. Авторский курс. Учение без мучения и зубрежки.
                   </Card> 
                   </div>
            </div>      
            </Panel>)
    }
}