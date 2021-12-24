import React, { Component } from 'react';
import { Panel } from 'primereact/panel';
import '../hatul.css';
import { Tag } from 'primereact/tag';
export default class MainPage extends Component {
    state = {
         value1:'',value2:'',value3:'',
    }
       
    render() {
         const isMobile = window.innerWidth <= 1024
         return(<Panel>     
            <div className="p-d-flex p-flex-column p-flex-md-row">
               <div p-d-flex p-flex-row p-flex-md-column>
                     <img src="assets/images/globalCat.jpg" alt="Кот на глобусе" className='p-page-img' />
                  
                  <div className="p-orange p-pt-3 p-mx-3">
                     <h5 className="p-orange p-justify-center">Контакты: </h5>
                     <div className='p-mb-3'> 
                        <i className="pi pi-phone" ></i> 
                        <a className="p-mylink" href='tel:+972536405871'>+972 53-640-5871 </a> 
                     </div>
                     <p> <i className="pi pi-facebook" ></i> <a className="p-mylink"  href="https://www.facebook.com/groups/Khatulmadan" target="_blank" rel="noreferrer">Facebook</a></p>
                     <div className="p-text-nowrap p-text-truncate" style={{color:'#614200'}}> 
                        <i className="pi pi-envelope" > </i>  
                        <a className="p-mylink" href="mailto:hatul.madan.metahnet@gmail.com"> {!isMobile ? 'hatul.madan.metahnet@gmail.com' : 'Эл. почта'} </a>
                     </div>
                  </div>
               </div>
               <div className="p-mr-5 p-pt-6">
                  <h2 className="p-orange p-text-center" style={{margin: '0.5em 0 0.5rem 0', lineHeight: '1.5'}} >Вас приветствует школа "Хатуль мадан".</h2>
                  <h2 className="p-orange p-text-center" style={{margin: '0.5rem 0 0.5rem 0',lineHeight: '1.5'}}>Наша миссия — ввести взрослых и детей в мир высоких технологий.</h2> 
                  <h2 className="p-orange p-text-center" style={{margin: '0.5rem 0 0.5rem 0',lineHeight: '1.5'}}> Рассказываем просто о сложном. </h2>
                  <div className="p-pt-6">
                     <h5 className="p-orange p-text-center" >Мы предлагаем: </h5> 
                     <h5 className="p-text-justify"><b>Детям:</b> программирование на <a className="p-mylink" href="/courses#c4">Python</a>, 
                     а для самых маленьких  — на <a className="p-mylink" href="/courses#c5">Scratch</a> игр разной степени сложности; хитрые задачи "Занимательной математики"; путешествия в пространстве и времени с "Необыкновенным английским".  Научим детей проводить время за компьютером с пользой.</h5>
                     <h5 className="p-text-justify">  <b>Взрослым</b>: ручное и автоматическое  <a className="p-mylink" href="/courses#c1">тестирование</a>, тренинги по подготовке к собеседованиям,
                     изучение языков Python, Java, технический английский и многое другое. 
                     Курсы для взрослых рассчитаны на занятых людей, которые хотят сменить сферу деятельности или повысить свою квалификацию. 
                     Поэтому занятия проводятся по вечерам,  в удобное для всех время. 
                     В ходе обучения предлагаем всем желающим работать с реальными проектами, которые ведет наша компания, получать практический опыт и решать реальные задачи.</h5>
                     <h5>Занятия проходят <b>онлайн</b>. Просто подключайтесь! Подробнее о занятиях можно посмотреть  <a className="p-mylink" href="/faq">тут</a>. </h5>
                  </div>
            
                  <div className="p-d-flex p-flex-column p-flex-md-row">
                     <div className='p-pt-3 p-pr-2' >
                        <h5 className=" p-orange">  Объявления </h5>            
                        <p> <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                              Приглашаем на курс  <a className="p-mylink" href="/courses#c3">Иврит для IT"</a></p>      
                        <p> <Tag className="p-mr-2 " severity="new" value="Сейчас!" rounded></Tag>
                           Приглашаем на курс <a className="p-mylink" href="/courses#c4">Программирование на Python"</a> для детей. 
                        </p>
                        <p> <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                           Приглашаем на курс  <a className="p-mylink" href="/courses#c1">
                           QA для начинающих</a>
                        </p>
                        <p> <Tag className="p-mr-2" severity="new" value="Сейчас!" rounded></Tag>
                           Приглашаем на курс  <a className="p-mylink" href="/courses#c8">
                           Технический английский</a>
                        </p>
                     </div>
                     <div className='p-pt-3'>
                     <h5 className=" p-orange ">  FAQ </h5> 
                     <p><a className="p-mylink" href="/faq#f2">Зачем</a> учить детей программированию?</p>
                     <p><a className="p-mylink" href="/faq#f3">Как</a> учить детей программированию?</p>
                     <p><a className="p-mylink" href="/faq#f4">Какой</a> уровень знаний нужен для курса QA?</p>
                     <p><a className="p-mylink" href="/faq#f6">Перспективы</a> трудоустройства после курса QA?</p>
                  </div>
               </div>                            
            </div>  
         </div>
          </Panel>
       )     
    }
}