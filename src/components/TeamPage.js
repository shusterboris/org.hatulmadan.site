import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import '../hatul.css';

export default class TeamPage extends Component {
    state = {
         value1:'',value2:'',value3:'',
    }

    render() {
        return(
        <Panel>
              
        <div className="p-grid">
            <div className="p-col-4">
                 <img src="assets/images/teamCat.jpg" width ="70%" alt="teamcat"/>
                
            </div>
            <div className="p-col-7 p-pl-6 p-pr-6 p-pt-6">
                <h3  className="p-orange"> Коротко о нас </h3> 
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
                   <div className="p-orange">
                   <p> <i className="pi pi-phone" ></i> +972 53-640-5871 </p>
                   <p> <i className="pi pi-facebook" ></i> <a className="p-mylink"  href="https://www.facebook.com/groups/Khatulmadan" target="_blank">группа в facebook</a></p>
                   <p>  <i className="pi pi-envelope" > </i>  <a  className="p-mylink" href="mailto:hatul.madan.metahnet@gmail.com">hatul.madan.metahnet@gmail.com </a></p>
                   </div>
                
            </div>
            
            
            <div className="p-col-12 p-pl-6 ">
            <h3  className="p-orange">
                    Наша команда 
                </h3>           
            </div>
            <div className="p-col-4 p-pl-6 ">
              <Card title="Владимир Олевский" subTitle="Менеджер, руководитель практических занятий" >
                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                    <div className="p-grid">
                        <div className="p-col-5 ">
                              <img alt="Card" src="assets/images/o.jpg" />
                        </div>
                        <div className="p-col-7 ">
                                  Закончил Физический Факультет  Новосибирского
                               Государственного Университета.  Много лет занимался развитием различных интернет-проектов. 
                               В последние годы стал специалистом в QA. 
                        </div>
                    </div>
                </p>
              </Card>
                     
            </div>    
            <div className="p-col-4">
           
            <Card title="Борис Шустер" subTitle="Преподаватель программирования и основ IT" >
                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                 <div className="p-grid">
                    <div className="p-col-5 ">
                    <img src="assets/images/bs.jpg" alt="Фото преподавателя. Борис Шустер"/> 
                    </div> 
                    <div className="p-col-7 ">
                     Программист с 30-летним опытом работы. Сертифицированный IBM специалист. 
                     Как ведущий разработчик принимал участие в крупных международных проектах в 6 странах. 
                     Любит, когда все работает, как следует.
                     </div>
                 </div>
                  </p>
            </Card>
            </div>  
               
            <div className="p-col-4 p-pr-6 ">
          <Card title="Александр Данковский" subTitle="Преподаватель математики" >
                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                 <div className="p-grid">
                    <div className="p-col-5 ">
                        <img src="assets/images/d.jpg" alt="Фото преподавателя. Александр Данковский"/> 
                    </div>
                    <div className="p-col-7 ">
                     Закончил Физико-технический факультет Харьковского университета. 
                     Много лет занимался экономической журналистикой. 
                     Также преподает детям физику, математику, а иногда даже химию и все это с эксурсом в историю.
                     </div>
                </div> 
               </p>
            </Card>
            </div> 
            <div className="p-col-4 p-pl-6 ">
           <Card title="Андрей Кудря " subTitle="Преподаватель QA и программирования" >
                 <p className="p-m-0" style={{lineHeight: '1.5'}}>
                 <div className="p-grid">
                    <div className="p-col-5 ">
                        <img src="assets/images/andrey.jpg" alt="Фото преподавателя. Андрей Кудря"/> 
                    </div>
                    <div className="p-col-7 ">
                       Профессиональный преподаватель с многолетним опытом. 
                        Умеет учить детей и взрослых.
                        Освоил профессию тестировщика и вас научит. 
                    </div>
                 </div>
                </p>
            </Card>
            </div>    
            <div className="p-col-4">
            <Card title="Георгий Вайнер" subTitle="Преподаватель программирования и технического иврита" >
                 <p className="p-m-0" style={{lineHeight: '1.5'}}> 
                 <div className="p-grid">
                    <div className="p-col-5 ">
                     <img src="assets/images/gosha.jpg" alt="Фото преподавателя. Георгий Вайнер"/> 
                     </div>
                    <div className="p-col-7 ">
                        Студент информационного факультета  в Технионе. Имеет практический опыт работы в Израильском хайтеке
                 </div>
                </div >
              </p>
            </Card>
            </div>    
            <div className="p-col-4 p-pr-6 ">
            <Card title="Инна Шустер" subTitle="Разработчик учебных программ">
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                    <div className="p-grid">
                        <div className="p-col-5 ">
                        <img src="assets/images/is.jpg" alt="Фото преподавателя. Инна Шустер"/> 
                        </div>
                    <div className="p-col-7 ">  
                        Программист с многолетним опытом работы в проектах разного масштаба. 
                        Сертифицированный IBM специалист. Консультант ВОЗ. 
                        Любимая роль в проектах - работать бритвой Оккама
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
            <div className="p-col-4 p-pl-6 ">
            
            <Card title="Евгений Шустер" subTitle="Ведет индивидуальные уроки программирования">
               <p className="p-m-0" style={{lineHeight: '1.5'}}>
               <div className="p-grid">
                    <div className="p-col-5 ">
                    <img src="assets/images/js.jpg" alt="Фото преподавателя. Евгений"/>
                    </div>
                    <div className="p-col-7 ">
                    В настоящее время совмещает службу в ЦАХАЛ и работу в стартапе как электронщик и программист. 
                        Любит микроконтроллеры, С++ и все, что летает.       
                    </div>
                </div >
              </p>
            </Card>
            </div> 
            <div className="p-col-4 ">
                <Card title="Аня Олевская" subTitle="Ведет индивидуальные уроки программирования">
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                    <div className="p-grid">
                        <div className="p-col-5 ">
                          <img src="assets/images/anya.jpg" alt="Фото преподавателя. Аня"/> 
                          </div>
                        <div className="p-col-7 ">
                            Ученица 6 класса. Верный помощник, когда взрослые все ушли на задание 
                        </div>
                    </div >
                </p>
                </Card>
            </div>
            <div className="p-col-4 ">
                 <Card title="Василий Шушпанов" subTitle="Автор всех рисунков">
                 <div className="p-m-0" style={{lineHeight: '1.5'}}>
                    <div className="p-grid">
                        <div className="p-col-5 ">
                            <img src="assets/images/vs.jpg" alt="Фото художника"/>
                        </div>
                        <div className="p-col-7 ">
                        Замечательный художник из Санкт-Петербурга. Он не только котов умеет рисовать, поверьте 
                        <p><a href="https://www.facebook.com/BazilArts" className="p-mylink" target="_blank" >Его страница в facebook</a>
                        </p>
                        </div>
                    </div >
                   </div>
                        
                </Card>
            </div>
            <div className="p-col-4 p-pl-6 ">                  
                <h3  className="p-orange">
                        Служба технической поддержки 
                </h3>   
            
                <Card title="Файрфокс" subTitle="Работает талисманом">
                        <div className="p-m-0" style={{lineHeight: '1.5'}}>
                        <div className="p-grid">
                         <div className="p-col-7 ">
                           <img src="assets/images/k.jpg"  alt="Кот Файрфокс."/>
                           </div>
                        <div className="p-col-5 ">
                        Успешная карьера в IT!  
                        <p><ui> Прошел этапы: 
                            <li>кот с помойки на цыганском поселке, </li> 
                             <li>участник волонтерского проекта, </li> 
                             <li>кот программистов </li> </ui>
                             </p>
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