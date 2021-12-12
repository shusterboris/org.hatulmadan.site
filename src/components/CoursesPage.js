import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
export default class CoursesPage extends Component {
    state = {};

    render() {
        return ( <Panel>
            <div  className="p-text-center p-orange p-pt-3 " >
                <h3>Список курсов </h3>
            </div>
            <div className="p-grid p-pl-3 p-pr-6">
                <div className="p-col-4">
                  <p> <img src="assets/images/mainCat.jpg"  width ="90%" alt="maincat"/></p>
                  <h5 className="p-orange">Для взрослых: </h5>
                   <p > <a className="p-mylink p-text-bold" href="#c1">Тестирование программного обеспечения</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c2">QA для продвинутых</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c3">Иврит для IT</a></p>
                   <h5 className="p-orange">Для детей: </h5>
                   <p > <a className="p-mylink p-text-bold" href="#c4">Программирование на Python</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c5">Программирование на Scratch</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c6">Занимательная математика</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c7">Английский язык</a></p>
                   <h5 className="p-orange">Также есть  индивидуальные занятия для взрослых и детей разной степени подготовленности </h5>
                </div>
                <div className="p-col-8">
                    <Card id="c1" title="QA для начинающих" subTitle="Тестирование программного обеспечения " >
                    <div className="p-m-0" style={{lineHeight: '1.5'}}>
                        <p>Продолжительность курса - 12 мес. Язык обучения - русский.
                        </p>
                        Программа  :
                                <h5> Часть 1</h5>
                                                <ui> Основы IT: 
                                    <li>Понятие об архитектуре приложений. FrontEnd и BackEnd.</li> 
                                <li>Введение в  Web-технологии. </li>
                                <li>HTML, CSS, JavaScript  </li>
                                <li>Протоколы обмена данными между клиентом и сервером </li>
                                <li>Базы данных. Представление о SQL и noSQL базах данных </li>
                                <li>Запросы к БД. Язык SQL </li>
                                <li> Основы программирования на JavaScript </li></ui>
                                <ui>  Основы ручного тестирования:
                                <li>  Жизненный цикл разработки ПО </li>
                                <li> Чек-листы  </li>
                                <li>   Тест-кейсы  </li>
                                <li>      Классы эквивалентности и граничные значения </li>
                                <li>   Тест-анализ </li>
                                <li>   Баг-трекинг  </li>
                                <li>  Исследовательское тестирование </li>
                                <li> Нефункциональное тестирование </li>
                                <li> Изучение работы с Postman.</li></ui>
                                <h5>Часть 2</h5>
                                <p> Язык программирования JavaScript,  <b>DOM</b> (Document Object Model), основы автоматизации тестирования с использованием Selenium 
                                </p>
                                Основа нашего курса - практика. Уже с первых занятий мы начинаем разбирать реальные задачи с собеседований, 
                    квалификационных тестов и т.д. участвовать в реальных проектах. 
                    По окончанию курса те, кто будет все это делать, выйдут реальными тестировщиками с приличным опытом .
                    После 3-4 месяцев занятий можно начинать работать фрилансером-тестировщиком. Покажем и расскажем как, введем "за руку" желающих в мир QA
                                                                          
                           <p className="p-text-bold"> <a className="p-mylink" href="/news#n1">подробнее</a>
                           </p>
                           <p><a className="p-mylink" href="https://youtu.be/8YugjIeIeu4" target="_blank">Запись первого занятия </a></p>
                    </div>
                   </Card>
                 <Card id="c2" title="Автоматизация тестирования web-приложений на языке Java" subTitle="Тестирование программного обеспечения ">
                        <div className="p-m-0"style={{lineHeight: '1.5'}} >
                        <p>Язык обучения: русский, английский. Продолжительность курса - 6 мес</p>
                            <p>Курс предназначен для обучения 
                                написанию автоматизированных тестов для web-приложений на языке Java.
                            Мы начнем с самых азов автоматизации и закончим построением полноценной системы автотестов, которую вы впоследствии, сможете использовать в своих проектах. 
                            </p>
                                <p><ui>
                                В ходе обучения, вы сможете научиться: 
                                <li>установке и настройке используемого стека автоматизации (Java, Selenium, TestNG)</li>
                                <li>как обращаться к элементам пользовательского интерфейса web-приложений и взаимодействовать с ними с помощью Selenium </li>
                                <li> строить правильную архитектуру автотестов с использованием фреймворка TestNG </li>
                                <li> научитесь использовать наиболее востребованные для построения автотестов конструкции языка Java </li>
                                <li> познакомитесь со вспомогательными библиотеками и типовыми шаблонами проектирования, необходимыми тестировщику автоматизатору</li>
                                <li>научитесь работать с кодом, используя систему версионного хранения Git и хостинг GitHub</li>
                                <li> запускать автотесты из командной строки и с помощью Jenkins.</li>
                                </ui></p>
                                Наша цель - дать вам необходимые знания, чтобы вы могли начать автоматизировать процесс тестирования ваших веб-приложений через пользовательский интерфейс с нуля .
                                Требуемый уровень подготовки - понимание принципов программирования, на уровне школьной программы. Все базовые конструкции языка Java, необходимые для построения нашей системы автотестов, будут разобраны на курсе. Но, данный курс не является общим курсом обучения программированию на Java. Здесь сделан акцент именно на ознакомлении с основными шаблонами и подходами, используемыми при построении автотестов.
                        </div>
                    </Card> 
              
                  <Card id="c3" title="Иврит для IT"  subTitle="Подготовка к собеседованиям" >
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
                {/* </div>
                <div className="p-col-4 p-text-center">
                 <img src="assets/images/red1.jpg" width ="50%" alt="картинка с котом"/> 
                </div>
                <div className="p-col-8">
                */}      <Card id="c4" title="Программирование на Python"  subTitle="Для детей 12-15 лет" >
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
                        <p > <a className="p-mylink" href="/news#n9">Почему мы выбрали Python</a></p>
                        </p>
                    </Card>
                    <Card id="c5" title="Программирование на Scratch" 
                    subTitle="Для детей 7-10 лет" >
                        <p className="p-m-0 " style={{lineHeight: '1.5'}} >
                            Дети начинают с самых простых проектов и в ходе обучения делают все более и более сложные игры. 
                            Сейчас учится одновременно несколько групп. Если ребенок раньше изучал Scratch, то он сможет присоединиться к группе подходящего для себя  уровня.
                         Есть группы на русском языке и на иврите</p>
                         <p>Для занятий ученику необходимо хорошо владеть компьютером: уметь пользоваться браузером, открывать новые вкладки, 
                           хорошо знать раскладку клавиатуры, печатать, уверенно держать мышку в руках.
                        </p> 
                        <p>
                        <ui>Начальный уровень: 
                            <li>Знакомство со средой scratch</li>
                            <li>Построение первой программы по образцу</li>
                            <li>Логика программы,последовательное выполнение действий</li>
                        </ui>
                        <ui>Продолжающий уровень: 
                        <li>Координатная плоскость и изменение координат спрайта</li>
                        <li>Знакомство с блоками "движение" и "внешний вид"</li>
                        <li>Условия и простейший цикл повтора</li>
                        <li>Обработка событий нажатия клавиш, касаний цвета или спрайта</li>
                        <li>Блоки события: начало программы, передача и получение сообщений</li>
                        <li>Переменные</li>
                        <li>Использование звуков в программе</li>
                        </ui>
                        <ui>Продвинутый  уровень:
                            <li>Знакомство со списками</li>
                            <li>Блок "перо" </li>
                            <li>Знакомство с клонами</li>
                        </ui>
                       </p>
                        <p>
                            После окончания курса (примерно год), дети постарше могут попробовать изучение Python. Им это дается намного легче чем новичкам.
                        </p>
                         <p className="p-text-bold"> <a className="p-mylink" href="/news#n2">подробнее</a>
                           </p>
                           <p><a className="p-mylink" href="https://scratch.mit.edu/projects/410988460" target="_blank">Пример проекта </a> </p>
                        </Card> 
                    <Card id="c6" title="Занимательная математика" 
                    subTitle="Для детей 10-12 лет" >
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                            Авторский курс. Интересные задачи, интересные факты. Дети учатся понимать математику а не просто решать задачи. Дополнительно:
                             скорая помощь по школьным заданиям всех стран и континентов.
                            Занятия на русском языке </p>
                        </Card> 
                   <Card id="c7" title="Английский язык" 
                     subTitle="Для детей 10-12 лет" >
                        Загадки, детективные истории, спасенные принцессы. Авторский курс. Учение без мучения и зубрежки.
                        <p className="p-text-bold"> <a className="p-mylink" href="/news#n8">Пример задания</a>
                           </p>
                   </Card> 
                   </div>
             
            </div>      
            </Panel>)
    }
}