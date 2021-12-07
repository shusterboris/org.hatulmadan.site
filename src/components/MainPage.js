import React, { Component } from 'react';
import { Panel } from 'primereact/panel';
import '../hatul.css';
import { Tag } from 'primereact/tag';
export default class MainPage extends Component {
    state = {
         value1:'',value2:'',value3:'',
    }
       
    render() {
        return(
        <Panel>     
                 
         <div className="p-grid p-align-top vertical-container"> 
                       <div className="p-col-5 p-pl-4 p-pt-6">
                       <h3 className="p-orange">Вас приветствует школа "Хатуль мадан". </h3>
                   <h5>Наша миссия - ввести взрослых и детей в мир высоких технологий. Рассказываем просто о сложном. </h5>
                <h3 className="p-orange"> Мы предлагаем: </h3> 
                 <h5 >   <Tag className="p-mr-2" severity="warning" value="Детям:" rounded></Tag>  программирование на <a className="p-mylink" href="/courses#c4">python</a> , 
                 а для самых маленьких на <a className="p-mylink" href="/courses#c5">scratch</a>,   
                   создание игр разной степени сложности. Научим детей проводить время за компьютером с пользой.</h5>
                 <h5 className="p-text-justify">  <Tag className="p-mr-2" severity="warning" value="Взрослым:" rounded></Tag> ручное и автоматическое  <a className="p-mylink" href="/courses#c1">тестирование</a>, тренинги по подготовке к <b>собеседованиям</b>,
                 изучение языков <b>python, java</b>, технический английский и многое другое. 
                 Курсы для взрослых рассчитаны на занятых людей, которые хотят сменить сферу деятельности или повысить свою квалификацию. 
                 Поэтому занятия проводятся по вечерам,  в удобное для всех время. 
                 В ходе обучения предлагаем всем желающим работать с реальными проектами, которые ведет наша компания, получать практический опыт и решать реальные задачи.</h5>
                 <h5>Занятия проходят <b>онлайн</b>. Просто подключайтесь! Подробнее о занятиях можно посмотреть  <a className="p-mylink" href="/faq">тут</a>. </h5>
            </div>
            <div className="p-col-4">
                    <img src="assets/images/globalCat.jpg" width ="80%" alt="globalCat"/>
            </div>
            <div  className="p-col-3  p-pt-6 p-pr-4" >
                    <h3 className="p-text-center p-orange">  Объявления </h3>            
                    <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                    <div>Приглашаем на курс  <a className="p-mylink" href="/courses#c3">Иврит для IT"</a></div>      
                
                    <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                    <div>Приглашаем на курс <a className="p-mylink" href="/courses#c4">Программирование на python"</a> для детей 13-15 лет. 
                    </div>
                    
                    <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                    <div>Приглашаем на курс  <a className="p-mylink" href="/courses#c1">
                     QA для начинающих</a>
                     </div>
                     <h5 className="p-text-center p-orange">  FAQ </h5> 
                     <p><a className="p-mylink" href="/faq#f2">Зачем</a> учить детей программированию?</p>
                     <p><a className="p-mylink" href="/faq#f3">Как</a> учить детей программированию?</p>
                     <p><a className="p-mylink" href="/faq#f4">Какой</a> уровень знаний нужен для курса QA?</p>
                     <p><a className="p-mylink" href="/faq#f6">Перспективы</a> трудоустройства после курса QA ?</p>
                     
            </div>
      
     </div>  
          </Panel>
       )     
    }
}