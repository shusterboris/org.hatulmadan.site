import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import AppSets from '../service/AppSets';

export default class TeamPage extends Component {
    state = {
         value1:'',value2:'',value3:'',
    }

    constructor(props){
        super(props);
      
    }

      
    render() {
        const header1 = (
            <div  style={{width:132, display:'block', marginRight:'auto', marginLeft:'auto'}}>
                <img alt="Card" src="assets/images/o.jpg" />
            </div>
        );
        const header2 = (
            <img alt="Card" src="assets/images/bs.jpg"  />
        );
        const header3 = (
            <img alt="Card" src="assets/images/is.jpg"  />
        );
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
                <h3  className="p-orange">
                    Наша команда 
                </h3>           
            
            </div>
            <div className="p-col-4">
                 <img src="assets/images/teamCat.jpg" width ="70%" alt="fignya"/>
            </div>
            <div className="p-col-2">
            <Card title="Владимир Олевский" subTitle="Менеджер, администратор и организатор практических занятий" 
                    header={header1}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>специалист по QA</p>
            </Card>
            </div>    
            <div className="p-col-3">
            <Card title="<Борис Шустер" subTitle="преподаватель программирования и основ IT" style={{ width: '25em' }} header={header2}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>программист с 30-летним опытом работы</p>
            </Card>
            </div>    
            <div className="p-col-3">
            <Card title="<Инна Шустер" subTitle="разработчик учебных программ" style={{ width: '25em' }} header={header3}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>программист с 30-летним опытом работы</p>
            </Card>
            </div>    
        </div>
        </Panel>
       )     
    }
}