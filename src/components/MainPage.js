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
                       <h3 className="p-orange">Вас приветствует школа Хатуль мадан. </h3>
                   <h5>Наша миссия - ввести взрослых и детей в мир высоких технологий. Рассказываем просто о сложном. </h5>
                <h3 className="p-orange"> Мы предлагаем: </h3> 
                 <h5 >   <Tag className="p-mr-2" severity="warning" value="Детям:" rounded></Tag>  программирование на <b>python</b> , 
                 а для самых маленьких на <b>scratch</b>,   
                   создание игр разной степени сложности. Научим детей проводить время за компьютером с пользой.</h5>
                 <h5 className="p-text-justify">  <Tag className="p-mr-2" severity="warning" value="Взрослым:" rounded></Tag> ручное и автоматическое  <b>тестирование</b>, тренинги по подготовке к <b>собеседованиям</b>,
                 изучение языков <b>python, java</b>, технический английский и многое другое. 
                 Курсы для взрослых рассчитаны на занятых людей, которые хотят сменить сферу деятельности или повысить свою квалификацию. 
                 Поэтому занятия проводятся по вечерам,  в удобное для всех время. 
                 В ходе обучения предлагаем всем желающим работать с реальными проектами, которые ведет наша компания, получать практический опыт и решать реальные задачи.</h5>
                 <h5>Занятия проходят <b>онлайн</b>. Просто подключайтесь!</h5>
            </div>
            <div className="p-col-4">
                    <img src="assets/images/globalCat.jpg" width ="80%" alt="globalCat"/>
            </div>
            <div  className="p-col-3  p-pt-6 p-pr-4" >
                    <h3 className="p-text-center p-orange">  Объявления </h3>            
                    <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                    <div>Приглашаем на курс <b>"Технический иврит"</b></div>      
                
                    <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                    <div>Приглашаем на курс <b>"Программирование на python"</b> для детей 13-15 лет. 
                    </div>
                    
                    <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                    <div>Приглашаем на курс <b>"тестирование программного обеспечения (QA)</b>" </div>
            </div>
      
     </div>  
          </Panel>
       )     
    }
}