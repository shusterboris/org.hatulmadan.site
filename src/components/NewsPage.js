import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
export default class CoursesPage extends Component {
    state = {};
    constructor(props) {
        super(props);
    }

    render() {
        return ( <Panel>
            <div className="p-grid">
                <div className="p-col-4">
                 <img src="assets/images/welcomeCat.jpg" width ="80%" alt="fignya"/>
                </div>
                <div className="p-col-8">
                    <Card title="Программирование на Scratch" >
                       <p>Для детей 7-10 лет</p>
                    </Card> 
                    <Card title="Программа курса QA" ><p>
                    <ui> <li>Понятие об архитектуре приложений. FrontEnd и BackEnd.</li> Введение в  Web-технологии.
                            HTML, CSS, JavaScript примеры использования
                            Протоколы обмена данными между клиентом и сервером
                             Базы данных. Представление о SQL и noSQL базах данных
                            Запросы к БД. Язык SQL
                            Основы программирования на JavaScript
                           По тестированию:
                            Введение в тестирование ПО. 
                           Жизненный цикл разработки ПО
                            Чек-листы
                            Тест-кейсы
                            Классы эквивалентности и граничные значения
                            Тест-анализ
                            Баг-трекинг
                            Исследовательское тестирование
                            Нефункциональное тестирование
                            Практикум :  реальные задачи, фриланс - платформы, практика в различных стартапах...
                            </ui></p>    
                            </Card>    
                </div>
            </div>
            </Panel>)
    }
}