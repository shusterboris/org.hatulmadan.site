import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Tag } from 'primereact/tag';
import '../hatul.css';
export default class ProjPage extends Component {
    state = {
         value1:'',value2:'',value3:'',
    }

    render() {
        const isMobile = window.innerWidth <= 1024
        return(
        <Panel>
              
        <div className="p-d-flex p-flex-column p-flex-md-row" >
            <div className="p-justify-center p-pt-3">
                <img src="assets/images/projects.jpg" className='p-page-img' alt="projects"/>
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
                     <div className="p-text-nowrap p-text-truncate" style={{color:'#614200'}}> 
                     <i className="pi pi-telegram" > </i> 
                     <a className="p-mylink" href="https://t.me/+OqITQiK6MvIwNjJk" target="_blank" rel="noreferrer"> мы в Telegram</a></div>
                  </div>
            </div>
            <div className="p-pl-4 p-pr-4">
                  <h3 className="p-orange p-pt-3 p-pl-3" >Наши проекты</h3>
              <Card title="Управление деятельностью спортклуба" subTitle="Веб-приложение" >
                <div>
                  Предназначено для руководства, администраторов и тренеров спортклуба с залами, бассейнами, кортами
                </div>
                <div>
                 <Tag className="p-mr-2" severity="info" value="функции" rounded></Tag>
                    <ui>  
                        <li>Планирование расписаний тренировок;</li>
                        <li>Бронирование залов;</li>
                        <li>Графики работы тренеров;</li>
                        <li>Обслуживание клиентов;</li>
                        <li>CRM;</li>
                        <li>Генерация типовых договоров с клиентами;</li>
                        <li>Учет посещений;</li>
                        <li>Учет оплат.</li>
                        </ui>
                </div>
                <div>           
                    <Tag className="p-mr-2" severity="info" value="Технологии" rounded></Tag>
                    <p><b>frontend:</b> JavaScript, React <b>backend:</b> Java, Spring Boot, MySQL</p>
                </div>
            </Card> 
          
            <Card title="Управление персоналом (HR-portal)"
                   subTitle="Веб-приложение">
                   <p>Предназначено для учета рабочего времени сотрудников  сети магазинов</p>
                   <Tag className="p-mr-2" severity="info" value="функции" rounded></Tag>
                        <ui> 
                            <li>Графики работы персонала;</li>
                            <li>Графики работы магазинов;</li>
                            <li>Учет количества отработанных часов;</li> 
                            <li>Учет опозданий и переработок;</li>
                            <li>Планирование отпусков и больничных.</li>. 
                        </ui>
                        <div>
                            <Tag className="p-mr-2" severity="info" value="Технологии" rounded></Tag>
                            <p>frontend: JavaScript, React backend: Java, Spring Boot, MySQL</p>
                        </div>    
                </Card> 
        
                <Card title="Клуб совместных покупок" subTitle="Мобильное приложение и Telegram-бот">
                   <p>Содержит каталог товаров, доступных для заказа,
                        список поставщиков и заказчиков. </p>
                        <Tag className="p-mr-2" severity="info" value="функции" rounded></Tag>
                        <ui>
                            <li>Каталог товаров с функциями поиска</li>
                            <li>Сбор заказов на товары</li>
                            <li>Организация доставки товаров</li>
                            <li>Отслеживание оплат от заказчиков</li>
                        </ui>
                        <Tag className="p-mr-2" severity="info" value="Технологии" rounded></Tag> Java, Android
                        Telegram-бот для  сбора заказов Python
                        <p> <b>backend:</b> Java, Spring Boot, MySQL</p>
                </Card> 
              
                <Card title="Обучающие программы для детей" >
                    <ui>
                        <li>Популярные игры с графикой и звуком</li>
                        <li>Тренажер слов. Могут использоваться разные словари разных языков, слова дополняются картинками и звуком</li>
                        </ui>
                    <Tag className="p-mr-2" severity="info" value="Технологии" rounded></Tag> Python
                    </Card>
            </div>
        </div>
       
        </Panel>
       )     
    }
}