import React, { Component } from 'react';
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
              
        <div className="p-d-flex p-flex-column p-flex-md-row ">
            <div >
                 <img src="assets/images/welcomeCat.jpg" className='p-page-img' alt="картинка с котом"/>
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
            <div  className="p-pt-4 p-pl-4">
         
                    <div  className="p-text-center p-red"> FAQ</div>
                    <Tag className="p-mr-2" severity="warning" value="Как?" rounded></Tag>
                    <div id="f1" className="p-text-bold"> Как проходят занятия? </div>
                    <div className="p-m-0 p-text-justify" style={{lineHeight: '1.5'}}> 
                    <p>Занятия проходят on-line, в удобное для всех время, обычно вечером. 
                        Группы не более 10 человек, обычно 5-6, поэтому каждому ученику обеспечен индивидуальный подход. </p> <p>Продолжительность занятий для взрослых - полтора часа. Для детей - 1 час.
                        </p><p>После занятия учащимся всегда высылается видеозапись урока и дополнительные материалы: презентации, тексты программ и т.д.
                        Предусмотрены  домашние задания. 
                        По домашним заданиям можно дополнительно консультироваться с преподавателями. 
                        Вся информация предоставляется в группах в WhatsApp и  Telegram  </p> 
                     </div>
                     <Tag className="p-mr-2" severity="warning" value="Зачем?" rounded></Tag>
                    <div id="f2" className="p-text-bold"> Зачем учить детей программированию ?  </div>
                    <div className="p-m-0 p-text-justify" style={{lineHeight: '1.5'}}> 
                      <p>Мир сейчас стал информационным. 
                        Раньше родители рассказывали детям о повадках зайцев, лисичек, волков и медведей. 
                        Потом наступил век пара и электричества. Мир стал состоять из заводов, шахт, паровозов и пароходов. 
                        Современного ребенка уже окружают не зайцы, и не паровозы. 
                        Вокруг него есть компьютерные игры, мобильные телефоны, социальные сети, интернет-магазины. 
                        Нужно объяснить ребенку, как это устроено, как сориентироваться в этом мире и как найти занятие по душе.
                         </p>
                    </div>
                   <Tag className="p-mr-2" severity="warning" value="Как?" rounded></Tag>
                    <div  id="f3" className="p-text-bold"> Как учить детей программированию ?         </div>
                    <div className="p-m-0 p-text-justify" style={{lineHeight: '1.5'}}>  
                    <p>Мы предлагаем начинать обучение детей с языка Scratch. 
                        Это язык программирования для детей, разработанный в Media Lab при Массачусетском технологическом институте. Он базируется на цветных блоках, 
                        напоминающих «Лего», и каждый блок представляет собой кодовую команду. Используя блочные «сцепления», дети пишут код и создают анимацию, игры, рассказы и многое другое. 
                         А кроме того, они могут рисовать персонажей для своих проектов или записывать звуки, которые потом будут использовать.
                         Скретч - идеальный язык для начинающих. Здесь в приятной форме можно познакомиться со всеми базовыми понятиями программирования: вводом-выводом, переменными, циклами, условиями, списками.
                         <p>Изучение программирования помогает детям развивать масштабное мышление и творческие способности, воспитывает умение вникать в суть проблемы и решать ее, учит работать в команде, 
                        а также прививает чувство удовлетворения от выполненного.</p>
                        </p>
                    </div>
                    <Tag className="p-mr-2" severity="warning" value="Диплом?" rounded></Tag>
                        <div id="f5"  className="p-text-bold">  Даете ли вы диплом об окончании курсов QA?</div>
                        <div className="p-m-0 p-text-justify" style={{lineHeight: '1.5'}}> 
                         <p> Да. Это - диплом нашей школы программирования "Хатуль Мадан". 
                            Но, нужно понимать, что работодателя в первую очередь интересуют ваши знания и практические навыки, а также реальный опыт. 
                            Сам по себе диплом на собеседованиях спрашивают крайне редко, и его значение при трудоустройстве невелико.
                         </p> 
                         <p>На протяжении курса все желающие смогут получить практику в реальных проектах и стартапах,  в том числе и в израильских. 
                         </p>
                    </div>
                    <Tag className="p-mr-2" severity="warning" value="Перспективы?" rounded></Tag>
                        <div id="f6"  className="p-text-bold"> Перспективы трудоустройства после курса QA?</div>
                        <div className="p-m-0 p-text-justify" style={{lineHeight: '1.5'}}>  
                        <p> Профессия "Manual tester"(специалист в области QA) находится в списке самых востребованных на сегодня согласно исследованиям рынка труда в Израиле. 
                            Исследование проведено платформой The Marker </p>
                                <p>Эта специальность иногда считается одной из самых простых на рынке хай-тека, 
                                но она требует кропотливости, внимания  и умения общаться с людьми. 
                                Тестировщик программного обеспечения проверяет программы и приложения до того, 
                                как они станут доступны конечному пользователю.</p>
                                <p>
                                "Задача тестировщика программного обеспечения - определить возможные сценарии использования ПО, похожие на те, с которыми столкнется конечный пользователь и протестировать их. 
                                Если это компьютерная игра, он начнет играть в нее и изучит различные этапы и персонажей в игре", 
                                - объясняет Яэль Примак, директор по управлению карьерой в AllJobs.</p>
                                <p>Тому, как работает трудоустройство в IT индустрии Израиля мы посвятим в конце курса несколько занятий.</p>
                                
                                </div> 
                    <Tag className="p-mr-2" severity="warning" value="Язык?" rounded></Tag>
                    <div className="p-text-bold" > На каком языке ведется преподавание?  </div>
                    <div className="p-m-0 p-text-justify" style={{lineHeight: '1.5'}}> На русском языке и иврите. Техническая терминология дается на английском языке </div>
                    <Tag className="p-mr-2" severity="warning" value="Кому?" rounded></Tag>
                    <div id="f4" className="p-text-bold"> На какой уровень знаний учащихся рассчитаны курсы  QA ? </div>
                    <div className="p-m-0 p-text-justify" style={{lineHeight: '1.5'}}> Достаточно быть уверенным пользователем компьютера </div>
            </div>
            
        </div>
       
        </Panel>
       )     
    }
}