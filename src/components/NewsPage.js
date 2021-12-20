import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
export default class CoursesPage extends Component {
    state = {};
    render() {
        return ( <Panel>
        <h3  className=" p-pt-6 p-orange p-text-center">Новости, объявления, истории, отчеты о мероприятиях    </h3>
        <div className="p-d-flex p-flex-column p-flex-md-row ">
            <div className="p-pl-4">
                <p> <img src="assets/images/mechHatul.jpeg"  className="p-page-img" alt="картинка с котом"/> </p>
                 <p > <a className="p-mylink p-text-bold" href="#n1">Открытый урок для курса QA</a></p>
                 <p > <a className="p-mylink p-text-bold" href="#n2">Как устроен Scratch</a></p>
                 <p> <a className="p-mylink p-text-bold" href="#n4">День проектов на курсе Scratch</a></p>
                 <p> <a className="p-mylink p-text-bold" href="#n8">Пример с курса английского для детей</a></p>
                 <p> <a className="p-mylink p-text-bold" href="#n9">Почему мы выбрали Python</a></p>
                 <p> <a className="p-mylink p-text-bold" href="#n6">  Наши планы </a></p>
                <p className="p-orange"> А также следите за новостями в наших группах в facebook:
                <ui><li><a className="p-mylink" href="https://www.facebook.com/groups/Khatulmadan"  target="_blank"> Khatulmadan </a> </li>
                <li><a className="p-mylink" href="https://www.facebook.com/groups/RusITIsrael"  target="_blank"> RusITIsrael </a></li></ui>
                </p>
            </div>
              
            <div >
                <Card id="n1" title="Открытый урок для курса QA" >
                    <div className="p-m-0" style={{lineHeight: '1.5'}}>
                         Состоялось очное занятие в Хайфе для одной из групп будущих тестировщиков. На него были приглашены все желающие. 
                         Преподаватели и ученики смогли наконец "развиртуализироваться", поболтать, попить кофе с плюшками. 
                         Кроме запланированной теории, прошел тренинг по технологии scrum. Группа поработала над решением задач как единая команда. 
                         <p><img src="assets/images/n1/openlesson.jpg" width ="50%" alt="1"/>  </p>
                         <p><img src="assets/images/n1/openlesson2.jpg" width ="30%" alt="2"/>  </p>
                             <img src="assets/images/n1/n1.jpg" width ="50%" alt="adjile"/>  
                 </div>
                </Card>   
                       
                <Card id="n2" title="Как устроен Scratch" >
                       <div className="p-m-0" style={{lineHeight: '1.5'}}>
                       <p>
                           На рисунке можно увидеть фрагмент программы для управления шариком.
                           Есть инструменты для управления игровым объектом. Их три: код, костюмы и звуки. 
                          <ui><li>Код (Code) — что шарик может делать;</li>
                          <li>Костюм (Sprite) — как шарик выглядит;</li>
                          <li>Звуки (Sounds) — какие звуки он умеет издавать.</li></ui>
                            Код набирается из готовых элементов, например: 
                            "пройти Х шагов", "повернуть на Х градусов", "повторить Х раз". 
                            Язык, на котором написаны названия команд, ребенок может выбирать по своему усмотрению.
                            Scratch переведен на большинство популярных языков, в том числе иврит. 
                            Простота и наглядность делают Scratch доступным для понимания детьми.
                            </p>
                           <img src="assets/images/n2/code.jpg" width ="50%" alt="code"/> 
                        </div> 
                        
                </Card> 
                <Card id="n4" title="День проектов на курсе Scratch" >
                    <div className="p-m-0" style={{lineHeight: '1.5'}}>
                       <h5>Пришельцы forever!</h5>
                       <p><img src="assets/images/n4/p1.jpg" width ="60%" alt="Фото экрана проекта"/> </p>
                       <p><img src="assets/images/n4/p2.jpg" width ="60%" alt="Фото экрана проекта"/> </p>
                       <p>А вот "обратный урок", ребята по очереди выступают в роли преподавателя.</p> 
                           Саша Ткаченко делает доклад о своем проекте. 
                           <p>Вместе разобрались, нашли ошибки и все заработало.</p>
                           <img src="assets/images/n4/lesson1.jpg" width ="60%" alt="Фото экрана проекта"/>    
                    </div>
                    </Card> 
                    <Card id="n3" title="О курсе Иврит для IT" >
                    <div className="p-m-0" style={{lineHeight: '1.5'}}>
                    <h5>Сочинение про робота Васю. Домашнее задание с использованием лексики с тренинга: </h5>
                    <p>
                    רובוט וואסיע עבד עם משימה שלו. בא מנהל שלו. הוא  היה מודאג. העור שלו היה לא ירוק אלו אפור. הזנב שלו דפק על ריצפה.  
 מנהל. שלום, וואזיע 
 וואסיע.  חשמל טוב, בוס. 
מנהל. תודה. אמנם אני לא אוכל חשמל. אני לא רוצה לשבור עת התוכנית שלך אבל יש לי שאילתה מבחינה המקצוע שלך. 
 וואסיע מה השאילתה? 
 מנהל. אני חייב לעדכן וזאת נקודה חשובה שזה סוד גדול.  
וואסיע . נו טוב .אני אעשה סיסמה בשביל המידע כזה. 
מנהל. אומרים שיש לך ניסיון גדול בתחום כזה. יש רקע ורשת...  
וואסיע. באיזה תחום? 
מנהל. פעולות לוגיות. אתה רואה, אני חייב להחליט משהו, לענות כן או לא. אתה רובוט ובשבילך חשבון בינארי זה משהו פשוט. אני כול הזמן מתלבט. 
                        </p>
                        <h5>Отзывы о курсе после 5 занятий тренинга из 9 </h5>
                            <p> <img src="assets/images/n3/part1.jpg" width ="60%" alt="Картинка с отзывом1"/> </p>
                            <p> <img src="assets/images/n3/part2.jpg" width ="60%" alt="Картинка с отзывом2"/> </p>
                            <p> <img src="assets/images/n3/part3.jpg" width ="60%" alt="Картинка с отзывом3"/>  </p> 
                            <p> <img src="assets/images/n3/part4.jpg" width ="60%" alt="Картинка с отзывом4"/>  </p> 
                                <p> Начинается набор на второй поток.</p>
                    </div>
                    </Card>    
                    <Card id="n8" title="Урок английского" >
                    <div className="p-m-0" style={{lineHeight: '1.5'}}>
                     
                       <div > 
                       <img src="assets/images/n8/text.jpg" width ="60%" alt="text"/> 
                       </div>
                       <div > 
                       <img src="assets/images/n8/paint.jpg" width ="60%" alt="paint"/> 
                       </div>
                     </div>
                     </Card>
                     <Card id="n9" title="Почему мы выбираем для обучения Python"  >
                     <div className="p-m-0" style={{lineHeight: '1.5'}}>
                     <p>Python — простой для начинающих язык. Но при этом на нем написано огромное количество библиотек, от игровых движков до нейронных сетей. 
                     Освоив основы языка, можно выбирать наиболее интересные для себя направления.</p>
                     <p>Примеры сайтов на Python:</p>
                     <p><img src="assets/images/n9/kadr1.jpg" width ="70%" alt="kadr1"/> </p>
                     <p>Пример машинного обучения. И собака и стол могут иметь 4 ноги, коричневый цвет и даже похожие размеры. Как их отличить?</p>
                     <p><img src="assets/images/n9/kadr2.jpg" width ="70%" alt="kadr2"/> </p>
                     <p>Ну и, конечно, разные игры. На экране кадр из программы для запоминания слов на разных языках.</p>
                     <p><img src="assets/images/n9/navi.jpg" width ="50%" alt="navi"/> </p>
                     </div>
                     </Card>      
                    <h3 className="p-orange">Наши планы</h3>
                    <Card id="n6" title="Летим в космос" subtitle="физика, программирование" >
                    <div className="p-m-0" style={{lineHeight: '1.5'}}>
                    <p>Курс для детей 13-15 лет</p> 
                    <p>Мы хотим предложить совсем новый формат занятий. 
                            Совместить изучение программирования  с изучением математики и физики. 
                            Звучит не очень завлекательно, правда? А если мы скажем не так, а вот так: </p>
                            <p>Полеты в космос. Сначала покрутить кеплерову задачу: вот тут у нас падение на звезду, вот тут: круговая орбита, тут эллиптическая, 
                            тут ну очень сильно вытянутая (комета).</p>
                            <p>Потом разрыв шаблона (зачеркнуто) орбиты и улетаем за пределы Солнечной системы.</p>
                            <p>    Всякие гравитационные задачи, например облетаем Землю, чтоб разогнаться на пути к Марсу (как в фильме "Марсианин").</p>
                           <p>    Анимирировать ужас всех школьников — задачу на бассейны.
                            Задачи на сообщающиеся сосуды. Сделать виртуальную модель шлюза.</p>
                    </div>
                    </Card>
                    <Card id="n7" title="Введение в ИТ" >
                    <div className="p-m-0" style={{lineHeight: '1.5'}}>
                    Курс подходит всем, желающим получить базовые знания о современных технологиях. Принципы работы социальных сетей, поисковиков.  Безопасность в Интернете.
                    </div>
                    </Card>
                </div>
            </div>
            </Panel>)
    }
}