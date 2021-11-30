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
            
            <div className="p-col-7 p-pl-6 p-pr-6 p-pt-6">
                <h3  className="p-orange"> Коротко о нас </h3> 
                <h5 className="p-text-justify"> 
                Мы – команда экспертов в компьютерных технологиях и педагогов с многолетним опытом, которая вместе работает для того, 
                чтобы сделать обучение интересным, разносторонним и на доступном уровне.  
                Мы видим свою миссию в том, чтобы объяснить простыми словами сложный мир современных компьютерных технологий. 
                Наша школа началась как волонтёрский проект весной 2020 года  с первым карантином. 
                Мы постоянно развиваемся и создаем новые курсы, которые будут востребованы как взрослыми, так и детьми. 
               Поэтому Список наших курсов постоянно обновляется. Параллельно мы развиваем собственную ИТ компанию, в том числе и для того, чтобы привлекать студентов к работе над реальными проектами. 
                Таким образом они приобретают реальный опыт и в конце обучения становятся настоящими профессионалами.
                </h5>     
                <h3 className="p-orange">Контакты: </h3>
                   <div className="p-orange">
                   <p> <i className="pi pi-phone" ></i> +972 53-640-5871 </p>
                   <p> <i className="pi pi-facebook" ></i> <a className="p-orange"  href="https://www.facebook.com/groups/Khatulmadan">группа в facebook</a></p>
                   <p>  <i className="pi pi-envelope" > </i>  <a  className="p-orange" href="mailto:3803477@gmail.com">e-mail </a></p>
                  </div>
                
            </div>
            
            <div className="p-col-4">
                 <img src="assets/images/teamCat.jpg" width ="70%" alt="fignya"/>
            </div>
            <div className="p-col-12 p-pl-6 ">
            <h3  className="p-orange">
                    Наша команда 
                </h3>           
            </div>
            <div className="p-col-4 p-pl-6 ">
                    <img alt="Card" src="assets/images/o.jpg" />
                             <Card title="Владимир Олевский" subTitle="Менеджер, руководитель практических занятий" >
                              <p className="p-m-0" style={{lineHeight: '1.5'}}>Закончил Физический Факультет  Новосибирского
                               Государственного Университета,  много лет занимался развитием различных интернет-проектов. 
                               В последние годы QA стало одним из основных направлений профессиональной деятельности</p>
                            </Card>
                   
            </div>    
            <div className="p-col-4">
            <img src="assets/images/bs.jpg" alt="Фото преподавателя. Борис Шустер"/> 
            <Card title="Борис Шустер" subTitle="Преподаватель программирования и основ IT" >
                 <p className="p-m-0" style={{lineHeight: '1.5'}}>Программист с 30-летним опытом работы. Сертифицированный IBM специалист. Как ведущий разработчик принимал участие в крупных международных проектах. Проекты в 6 странах. Любит, когда все работает, как следует. </p>
            </Card>
            </div>  
               
            <div className="p-col-4 p-pr-6 ">
            <img src="assets/images/d.jpg" alt="Фото преподавателя. Александр Данковский"/> 
           <Card title="Александр Данковский" subTitle="Преподаватель математики" >
                 <p className="p-m-0" style={{lineHeight: '1.5'}}>Закончил Физико-технический факультет Харьковского университета. Много лет занимался экономической журналистикой. Также преподает детям физику, математику, а иногда даже химию и все это с эксурсом в историю. </p>
            </Card>
            </div> 
            <div className="p-col-4 p-pl-6 ">
            <img src="assets/images/a.jpg" alt="Фото преподавателя. Андрей Кудря"/> 
            <Card title="Андрей Кудря " subTitle="Преподаватель QA и английского языка" >
                 <p className="p-m-0" style={{lineHeight: '1.5'}}>Профессиональный преподаватель с многолетним опытом. Освоил профессию тестировщика и вас научит.  </p>
            </Card>
            </div>    
            <div className="p-col-4">
            <img src="assets/images/gosha.jpg" alt="Фото преподавателя. Георгий Вайнер"/> 
            <Card title="Георгий Вайнер" subTitle="Преподаватель программирования и технического иврита" >
                 <p className="p-m-0" style={{lineHeight: '1.5'}}> Студент информационного факультета  в Технионе.  </p>
            </Card>
            </div>    
            <div className="p-col-4 p-pr-6 ">
            <img src="assets/images/is.jpg" alt="Фото преподавателя. Инна Шустер"/> 
            <Card title="Инна Шустер" subTitle="Разработчик учебных программ">
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Программист с многолетним опытом работы в проектах разного масштаба. Сертифицированный IBM специалист. Консультант ВОЗ. Любимая роль в проектах - работать бритвой Оккама</p>
            </Card>
            </div> 
            <div className="p-col-12 p-pl-6 ">
            <h3  className="p-orange">
                    Кадровый резерв 
            </h3>   
            </div>  
            <div className="p-col-4 p-pl-6 ">
            <img src="assets/images/js.jpg" alt="Фото преподавателя. Евгений"/> 
            <Card title="Евгений Шустер" subTitle="Ведет индивидуальные уроки программирования">
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>
                        В настоящее время совмещает службу в ЦАХАЛ и работу в стартапе как электронщик и программист. Любит микроконтроллеры, С++ и все, что летает.</p>
            </Card>
            </div> 
            <div className="p-col-4 ">
                <img src="assets/images/anya.jpg" alt="Фото преподавателя. Аня"/> 
                <Card title="Аня Олевская" subTitle="Ведет индивидуальные уроки программирования">
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                            Ученица 6 класса. Верный помощник, когда взрослые все ушли на задание </p>
                </Card>
                </div> 
                <div className="p-col-12 p-pl-6 ">
                <h3  className="p-orange">
                        Служба технической поддержки 
                </h3>   
                <img src="assets/images/firefoxcat.jpg" width="10%" alt="Кот Файрфокс. Наш талисман"/> 
                <Card title="Файрфокс" subTitle="Работает талисманом">
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>
                        Карьера в IT! Прошел этапы: кот с помойки на цыганском поселке, участник волонтерского проекта, кот программистов  </p>
                </Card>

            </div>
        </div>
        </Panel>
       )     
    }
}