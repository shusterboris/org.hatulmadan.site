import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import {ContextMenu} from 'primereact/contextmenu';
import Contacts from './Contacts.js';
export default class CoursesPage extends Component {
    state = {};
    course1='Тестирование ПО';
    course2='Автоматизированное тестирование' ; 
    course3='Иврит для IT';
    course4='Технический английский';
    course5='Программирование на Scratch';
    course6='Программирование на Python';
    course7='Занимательная математика';
    course8='Английский язык';
    course9='JavaSctipt и основы Web-разработки';
    
    menu =  [
             {label: this.course1,  url: '/courses#c1'},
             {label: this.course2,  url: '/courses#c2'},
             {label: this.course3,  url: '/courses#c3'},
             {label: this.course4,  url: '/courses#c8'},
        ];  
    menuAdd =  [
            {label: this.course5,  url: '/courses#c5'},
            {label: this.course6,  url: '/courses#c4'},
            {label: this.course7,  url: '/courses#c6'},
            {label: this.course8,  url: '/courses#c7'},
            {label: this.course9,  url: '/courses#c9'},
       ];    
    openImg(e){
        //const posx=e.nativeEvent.offsetX;
    }
    
    render() {
        return ( <Panel>
            
            <div className="p-grid">
                <div className="p-col-12 p-lg-4 p-md-6 p-px-3">
                  <p> <img src="assets/images/mainCat.jpg"  className='p-page-img' alt="картинка с котом-учителем"/></p>
                  <h5> <a className="p-orange p-mylink" href="#c00">Курсы для взрослых:</a> </h5>
                   <p > <a className="p-mylink p-text-bold" href="#c1">{this.course1}</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c2">{this.course2}</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c3">{this.course3}</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c8">{this.course4}</a></p>
                   <h5> <a className="p-orange p-mylink" href="#c01">Курсы для детей:</a> </h5>
                  
                   <p className="p-orange">Также есть  индивидуальные занятия для взрослых и детей разной степени подготовленности </p>
                   <Contacts/>
                </div>
                <div className="p-col-12 p-lg-8 p-md-6 p-px-3">
                    <h3 className="p-text-center p-orange p-pt-3 ">Список курсов </h3>
                    <div id="c00" className=" p-pr-6" ><h5 className="p-orange " ><p>Список курсов для взрослых построен таким образом, 
                        чтобы можно было выбрать курс согласно своему уровню знаний, 
                                    а также брать дополнительные тренинги при наличии желания и возможностей. В составе каждого курса предусмотрена практика с реальными приложениями.</p> <p>Для тех, кто прослушал основные курсы, на тренинги предоставляется скидка. </p>
                                    <p>Список курсов и тренингов постоянно обновляется. Щелкните по рисунку правой кнопкой мыши, чтобы перейти к описанию курсов.</p>
                            </h5>
                            <ContextMenu className="p-addlink" model={this.menu} ref={el => this.cm = el}></ContextMenu>                    
                            <p> <img src="assets/images/courses1.jpg"  className='p-page-img' onContextMenu={(e) => this.cm.show(e)} alt="схема курсов"/></p>
                    </div> 
             
                    <Card id="c1" title="QA для начинающих" subTitle={this.course1} >
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
                                <a className="p-addlink " href="#c0">В начало<i className="pi pi-arrow-up" ></i></a>
                                <h5>Часть 2</h5>
                                <p> Язык программирования JavaScript,  <b>DOM</b> (Document Object Model), основы автоматизации тестирования с использованием Selenium 
                                </p>
                                Основа нашего курса - практика. Уже с первых занятий мы начинаем разбирать реальные задачи с собеседований, 
                        квалификационных тестов и т.д. участвовать в реальных проектах. 
                        По окончанию курса те, кто будет все это делать, выйдут реальными тестировщиками с приличным опытом .
                        После 3-4 месяцев занятий можно начинать работать фрилансером-тестировщиком. Покажем и расскажем как, введем "за руку" желающих в мир QA
                                                                          
                           <p className="p-text-bold"> <a className="p-mylink" href="/news#n1" rel="noreferrer">подробнее</a>
                           </p>
                           <p><a className="p-mylink" href="https://youtu.be/8YugjIeIeu4" target="_blank" rel="noreferrer">Запись первого занятия </a></p>
                           
                    </div>
                    <a className="p-addlink " href="#c0">В начало<i className="pi pi-arrow-up" ></i></a>
                   </Card>
                  
                   <img src="assets/images/hatul_gold.png" width= "10%" alt="logo with gold cat"/>
                  
                    <Card id="c2" title="Автоматизация тестирования web-приложений на языке Java" subTitle={this.course2}>
                        <div className="p-m-0"style={{lineHeight: '1.5'}} >
                        <p>Язык обучения: русский, английский. Продолжительность курса - 2 мес</p>
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
                                Наша цель - дать вам необходимые знания, чтобы вы могли начать автоматизировать процесс тестирования ваших веб-приложений через пользовательский интерфейс с нуля.
                                Требуемый уровень подготовки - понимание принципов программирования, на уровне школьной программы. Все базовые конструкции языка Java, необходимые для построения нашей системы автотестов, будут разобраны на курсе. Но, данный курс не является общим курсом обучения программированию на Java. Здесь сделан акцент именно на ознакомлении с основными шаблонами и подходами, используемыми при построении автотестов.
                        </div>
                        <a className="p-addlink " href="#c0">В начало<i className="pi pi-arrow-up" ></i></a>
                  </Card> 
                    <img src="assets/images/hatul_green.png" width= "10%" alt = "логотип - зеленый кот"/>
                  <Card id="c3" title={this.course3}  subTitle="Подготовка к собеседованиям" >
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                          Продолжительность тренинга 9-10 занятий (2 месяца).
                        В программе : резюме, методика найма в израильском IT, профессиональная лексика на иврите, 
                        общение на профессиональные темы, аудирование.
                        Этот тренинг позволит уверенно и без стресса проходить как первоначальные этапы собеседований, так и последующие, вплоть до технического. Требуемая подготовка - уверенный ульпан א
                        </p>
                        <p className="p-text-bold"> <a className="p-mylink" href="/news#n3">подробнее</a>
                           </p>
                           <p><a className="p-mylink" href="https://youtu.be/zFIuOEC96ME" target="_blank" rel="noreferrer">Запись первого занятия </a> </p>
                           <a className="p-addlink " href="#c0">В начало<i className="pi pi-arrow-up" ></i></a>
                    </Card>
                    <img src="assets/images/hatul_pink.png" width= "10%" alt="логотип - пурпурный кот"/>
                  
                    <Card id="c8" title={this.course4}  subTitle="Для IT - индустрии" >
                        <div className="p-m-0" style={{lineHeight: '1.5'}}>
                        <p>Продолжтельность курса 4-5 месяца.</p>
                        <p>Тренинг для тех, кто изучал английский в школе и институте, но никогда не имел возможности применить знания в реальной жизни. 
                        Тренинг поможет развить навыки чтения технической литературы, позволит понимать и заполнять техническую документацию, 
                        уверенно общаться на профессиональные темы,
                         улучшить  языковые навыки до необходимого минимума английского для работы в сфере информационных технологий. 
                         Полученные знания позволят использовать английский в поисках работы и в будущей карьере.</p>
                        <ui>Программа курса:
                            <li>Урок 0. Фонетика и подготовка памяти. Имя существительное. Местоимения и притяжательные местоимения. Инфинитив.</li>
                        <li>Урок 1. Грамматика. Мировоззрение и построение предложений. Глаголы. Present Simple (Простое настоящее).</li>
                        <li>Урок 2. Грамматика. Неправильные глаголы. Past Simple (Прошлое простое).</li>
                        <li>Урок 3. Грамматика. Present progressive.</li>
                        <li>Урок 4. Грамматика. Past progressive. Моя легенда.</li>
                        <li>Урок 5. Грамматика. Future tenses (Будущие времена). Специальная лексика.</li>
                        <li>Урок 6. Грамматика. Типы вопросов. Глоссарий ISTQB. Специальная лексика.</li>
                        <li>Урок 7. Краткое сочинение. Почему я решил быть… Специальная лексика 2.</li>
                        <li>Урок 8. Грамматика в употреблении. Различные типы отчетов.</li>
                        <li>Урок 9. Грамматика. Passive (Пассив). Чтение научных текстов по информатике.</li>
                        <li>Урок 10. Придаточное предложение. “Если” предложения. Direct/Reported speech (Прямая/докладная речь). Present Perfect (Настоящее совершенное)</li></ui>
                        </div>
                        <a className="p-addlink " href="#c0">В начало<i className="pi pi-arrow-up" ></i></a>
                      </Card>         
               </div>
              
                <div className="p-col-12 p-lg-4 p-md-6 p-px-3">
                   <p> <img src="assets/images/red1.jpg"  className='p-news-img' alt="рисунок кота"/></p>
                   <h5> <a className="p-orange p-mylink" href="#c01"></a>Курсы для детей: </h5>
                   <p > <a className="p-mylink p-text-bold" href="#c5">{this.course5}</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c4">{this.course6}</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c6">{this.course7}</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c7">{this.course8}</a></p>
                   <p > <a className="p-mylink p-text-bold" href="#c9">{this.course9}</a></p>
                </div>
                <div className="p-col-12 p-lg-8 p-md-6 p-px-3">       
                    <div id="c01" className=" p-pr-6" ><h5 className="p-orange " ><p>Список курсов для детей построен таким образом, 
                        чтобы дети могли начать с простого визуального языка scretch, рассчитанного на самых маленьких, и постепенно перейти к настоящему программированию. 
                        </p> <p>Ученики могут взять разные дополнительные курсы. Постоянным ученикам в нашей школе есть скидки и подарки</p>
                        <p>Список курсов и тренингов постоянно обновляется. Щелкните по рисунку правой кнопкой мыши, чтобы перейти к описанию курсов.</p>
                        </h5>
                        <ContextMenu className="p-addlink" model={this.menuAdd} ref={el1 => this.cma = el1}></ContextMenu>                    
                          <p> <img src="assets/images/courses2.jpg"  className='p-page-img' onContextMenu={(e) => this.cma.show(e)} alt="схема курсов"/></p>
                    </div>     
                  
                    <Card id="c5" title={this.course5} 
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
                           <p><a className="p-mylink" href="https://scratch.mit.edu/projects/410988460" target="_blank" rel="noreferrer">Пример проекта </a> </p>
                        </Card> 
                        <img src="assets/images/hatul_gold.png" width= "10%" alt="логотип с котом"/>
                        <Card id="c4" title={this.course6}  subTitle="Для детей 12-15 лет" >
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
                        <a className="p-addlink " href="#c0">В начало<i className="pi pi-arrow-up" ></i></a>
                    </Card>
                    <img src="assets/images/hatul_purple .png" width= "10%" alt="логотип с котом"/>
                        <Card id="c9" title={this.course9}  subTitle="Для взрослых и детей от 14 лет" >
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                      Изучение языка JavaSctipt и основ программирования.  Обучение на русском языке 
                      <ui> Программа курса: 
                           <li>переменные </li>
                           <li>арифметические и логические операции</li>
                           <li>условные операторы и циклы</li>
                           <li>структуры данных</li>
                           <li>функции</li>
                           <li>классы</li>
                           <li>основы объектно-ориентироованного программирования</li>
                           <li>понятие о библиотеках и модулях</li>
                           <li>понятие о событиях </li>
                           <li>Основы Web: HTML, CSS</li>
                           <li>Document Object Module и основы Web разработки</li>
                           <li>знакомство с React и создание простых сайтов</li>
                        </ui>
                       
                        </p>
                        <a className="p-addlink " href="#c0">В начало<i className="pi pi-arrow-up" ></i></a>
                    </Card>
                        <img src="assets/images/hatul_green.png" width= "10%" alt="логотип с котом"/>
                  
                    <Card id="c6" title={this.course7} 
                    subTitle="Для детей 10-12 лет" >
                        <div className="p-m-0" style={{lineHeight: '1.5'}}>
                            <p>Авторский курс, на котором дети решают интересные задачи и узнают интересные факты. 
                                 Курс построен на идеях ученого и популяризатора науки Я.И.Перельмана, 
                            на учебниках которого выросло не одно поколение школьников.
                            Дети научатся понимать математику а не только решать задачи, а также увидят связь математики с естественными науками.</p> 
                            <p>Дополнительно:
                             скорая помощь по школьным заданиям всех стран и континентов.</p>
                            <p>Занятия на русском языке </p></div>
                        </Card> 
                        <img src="assets/images/hatul_pink.png" width= "10%" alt="логотип "/>
                  
                   <Card id="c7" title={this.course8} 
                     subTitle="Для детей 10-12 лет" >
                        Загадки, детективные истории, спасенные принцессы. Авторский курс. Учение без мучения и зубрежки.
                        <p className="p-text-bold"> <a className="p-mylink" href="/news#n8">Пример задания</a>
                           </p>
                           <a className="p-addlink " href="#c0">В начало<i className="pi pi-arrow-up" ></i></a>
                   </Card> 
                </div>
            </div> 
             
            </Panel>)
    }
}