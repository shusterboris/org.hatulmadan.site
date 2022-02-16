import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import '../hatul.css';
import Contacts from './Contacts.js';

export default class TeamPage extends Component {
    state = {
         value1:'',value2:'',value3:'',
    }

    render() {
        const isMobile = window.innerWidth <= 1024
        console.log(window.innerWidth);
        return(<Panel>
        <div className="p-d-flex p-flex-column p-flex-md-row">
            <div >
                 <img src="assets/images/teamCat.jpg" alt="Кот с контрабасом" className='p-page-img' />
                 
                           
            </div>
            <div className="p-orange p-pt-3 p-mx-3">
                <h3  className="p-orange p-text-center"> Коротко о нас </h3> 
                <h5 className="p-text-justify"> 
                    Мы – команда экспертов в компьютерных технологиях и педагогов с многолетним опытом, которая вместе работает для того, 
                    чтобы сделать обучение интересным, разносторонним и на доступном уровне.  
                    Мы видим свою миссию в том, чтобы объяснить простыми словами сложный мир современных компьютерных технологий. 
                    Наша школа началась как волонтёрский проект весной 2020 года  с первым карантином. 
                    Мы постоянно развиваемся и создаем новые курсы, которые будут востребованы как взрослыми, так и детьми. 
                    Поэтому cписок наших курсов постоянно обновляется. Параллельно мы развиваем собственную ИТ компанию, в том числе и для того, чтобы привлекать студентов к работе над реальными проектами. 
                    Таким образом они приобретают реальный опыт и в конце обучения становятся настоящими профессионалами.
                </h5>     
                <h3 className="p-orange">Контакты: </h3>
                <Contacts/>          
            </div>
        </div>    
        <div className="p-grid">
            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6">
                <Card title="Владимир Олевский" subTitle="Менеджер, руководитель практических занятий" >
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                        <div className="p-d-flex p-flex-column p-flex-sm-row">
                            <div className='p-ml-2'>
                                <img alt="Фото преподавателя. Владимир" src="assets/images/o.jpg" />
                            </div>
                            <div className='p-mx-2 p-text-justify'>
                                Закончил Физический Факультет Новосибирского
                                Университета.  Много лет занимался развитием различных интернет-проектов. 
                                В последние годы стал специалистом в QA. 
                            </div>
                        </div>
                    </p>
                </Card>
                     
            </div>    

            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6">           
                <Card title="Борис Шустер" subTitle="Преподаватель программирования и основ IT" >
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                        <div className="p-d-flex p-flex-column p-flex-sm-row">
                            <div className="p-ml-2">
                                <img src="assets/images/bs.jpg" alt="Фото преподавателя. Борис Шустер"/> 
                            </div> 
                            <div className="p-mx-2 p-text-justify">
                                Программист с 30 - летним опытом работы. Серт. IBM специалист. 
                                Как ведущий разработчик принимал участие в крупных международных проектах в 6 странах. 
                                Любит, когда все работает, как следует.
                            </div>
                        </div>
                    </p>
                </Card>
            </div>  
               
            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6 ">
                <Card title="Александр Данковский" subTitle="Преподаватель математики" >
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                        <div className="p-d-flex p-flex-column p-flex-sm-row">
                            <div className="p-ml-2">
                                <img src="assets/images/d.jpg" alt="Фото преподавателя. Александр Данковский"/> 
                            </div>
                            <div className="p-mx-2 p-text-justify">
                                Закончил Физико-технический факультет Харьковского университета. 
                                Много лет занимался экономической журналистикой. 
                                Также преподает детям физику, математику, а иногда даже химию и все это с эксурсом в историю.
                            </div>
                        </div> 
                    </p>
                </Card>
            </div> 
            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6">
                <Card title="Андрей Кудря " subTitle="Преподаватель QA и программирования" >
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                        <div className="p-d-flex p-flex-column p-flex-sm-row">
                            <div className="p-ml-2">
                                <img src="assets/images/andrey.jpg" alt="Фото преподавателя. Андрей Кудря"/> 
                            </div>
                            <div className="p-mx-2 p-text-justify">
                            Преподаватель с огромным опытом и инженер QA.  Более 8 лет участия в технических проектах.
                             25-летний опыт преподавания и репетиторства по английскому языку 
                            </div>
                        </div>
                    </p>
                </Card>
            </div>    
            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6">
                <Card title="Георгий Вайнер" subTitle="Преподаватель программирования и технического иврита" >
                    <p className="p-m-0" style={{lineHeight: '1.5'}}> 
                        <div className="p-d-flex p-flex-column p-flex-sm-row">
                            <div className="p-ml-2">
                                <img src="assets/images/gosha.jpg" alt="Фото преподавателя. Георгий Вайнер"/> 
                            </div>
                            <div className="p-mx-2 p-text-justify">
                                Студент IT - факультета  в Технионе. Имеет практический опыт работы в Израильском хайтеке
                            </div>
                        </div >
                    </p>
                </Card>
            </div>    
            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6">
                <Card title="Инна Шустер" subTitle="Разработчик учебных программ">
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                    <div className="p-d-flex p-flex-column p-flex-sm-row">
                        <div className="p-ml-2">
                            <img src="assets/images/is.jpg" alt="Фото преподавателя. Инна Шустер"/> 
                        </div>
                        <div className="p-mx-2 p-text-justify">  
                            Программист с многолетним опытом работы в проектах разного масштаба. 
                            Серт. IBM специалист. Консультант ВОЗ. 
                            Любимая роль в проектах - работать бритвой Оккама
                        </div>
                    </div >
                    </p>
                </Card>
            </div> 
            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6">
                <Card title="Марина Абрашкина" subTitle="Преподаватель автоматизированного тестирования">
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                    <div className="p-d-flex p-flex-column p-flex-sm-row">
                        <div className="p-ml-2">
                            <img src="assets/images/marina.jpg" alt="Фото преподавателя. Марина"/> 
                        </div>
                        <div className="p-mx-2 p-text-justify">  
                        QA специалист и аналитик с большим практическим опытом. 
                        Специализируется на ручном и автоматизированном тестировании более 20 лет. 
                        Большой опыт наставничества в проектах и обучения QA инженеров. 
                        Любит изучать новые инструменты, оптимизировать работу и избавляться от рутины.
                        </div>
                    </div >
                    </p>
                </Card>
            </div> 
            <div className="p-col-12 p-pl-6 ">
            <h3  className="p-orange">
                Кадровый резерв 
            </h3>   
            </div>  
            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6 ">
                <Card title="Евгений Шустер" subTitle="Ведет индивидуальные уроки программирования">
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                        <div className="p-d-flex p-flex-column p-flex-sm-row">
                            <div className="p-ml-2">
                                <img src="assets/images/js.jpg" alt="Фото преподавателя. Евгений"/>
                            </div>
                            <div className="p-mx-2 p-text-justify">
                                В настоящее время совмещает службу в ЦАХАЛ и работу в стартапе как электронщик и программист. 
                                Любит микроконтроллеры, С++ и все, что летает.       
                            </div>
                        </div >
                    </p>
                </Card>
            </div> 
            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6">
                <Card title="Аня Олевская" subTitle="Ведет индивидуальные уроки Scratch">
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                        <div className="p-d-flex p-flex-column p-flex-sm-row">
                            <div className="p-ml-2">
                                <img src="assets/images/anya.jpg" alt="Фото преподавателя. Аня"/> 
                            </div>
                            <div className="p-mx-2 p-text-justify">
                                Ученица 6 класса. Верный помощник, когда взрослые все ушли на задание 
                            </div>
                        </div >
                    </p>
                </Card>
            </div>
            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6">
                 <Card title="Василий Шушпанов" subTitle="Автор всех рисунков">
                    <div className="p-m-0" style={{lineHeight: '1.5'}}>
                        <div className="p-d-flex p-flex-column p-flex-sm-row">
                            <div className="p-ml-2">
                                <img src="assets/images/vs.jpg" alt="Фото художника"/>
                            </div>
                            <div className="p-mx-2 p-text-justify">
                                Замечательный художник из Санкт-Петербурга. Он не только котов умеет рисовать, поверьте 
                                <p><a href="https://www.facebook.com/BazilArts" className="p-mylink" target="_blank" rel="noreferrer">Его страница в facebook</a></p>
                            </div>
                        </div >
                    </div>                        
                </Card>
            </div>
            <div className="p-col-12 p-lg-4 p-md-6 p-pl-6">                  
                <h3  className="p-orange">
                        Служба технической поддержки 
                </h3>   
                <Card title="Файрфокс" subTitle="Работает талисманом">
                    <div className="p-m-0" style={{lineHeight: '1.5'}}>
                        <div className="p-d-flex p-flex-column p-flex-sm-row">
                            <div className="p-ml-2">
                                <img src="assets/images/k.jpg"  alt="Кот Файрфокс."/>
                            </div>
                        <div className="p-mx-2">
                            Успешная карьера в IT!  
                            <p><ui> Прошел этапы: 
                                <li>кот с помойки на цыганском поселке, </li> 
                                <li>участник волонтерского проекта, </li> 
                                <li>кот программистов </li> 
                            </ui></p>
                        </div>
                        </div >
                    </div>
                </Card>
            </div>
        </div>
        </Panel>
       )     
    }
}