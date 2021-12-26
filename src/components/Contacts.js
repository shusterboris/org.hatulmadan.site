import React, { Component } from 'react';
import '../hatul.css';
export default class Contacts extends Component {
    state = {
         value1:'',value2:'',value3:'',
    }

    render() {
        const isMobile = window.innerWidth <= 1024
        return(
            <div className="p-orange p-pt-3 p-mx-3">
                     <h5 className="p-orange p-justify-center">Контакты: </h5>
                     <div className='p-mb-3'> 
                        <i className="pi pi-phone" ></i> 
                        <a className="p-mylink" href='tel:+972536405871'> +972 53-640-5871 </a> 
                     </div>
                     <div className="p-text-nowrap p-text-truncate p-mb-3" style={{color:'#614200'}}> 
                        <i className="pi pi-facebook" ></i> 
                        <a className="p-mylink"  href="https://www.facebook.com/groups/Khatulmadan" target="_blank" rel="noreferrer"> Facebook</a>
                     </div>
                     <div className="p-text-nowrap p-text-truncate p-mb-3" style={{color:'#614200'}}> 
                        <i className="pi pi-envelope" > </i>  
                        <a className="p-mylink" href="mailto:hatul.madan.metahnet@gmail.com"> {!isMobile ? ' hatul.madan.metahnet@gmail.com' : ' Эл. почта'} </a>
                     </div>
                     <div className="p-text-nowrap p-text-truncate p-mb-3" style={{color:'#614200'}}> 
                        <i className="pi pi-telegram" > </i> 
                        <a className="p-mylink" href="https://t.me/+OqITQiK6MvIwNjJk" target="_blank" rel="noreferrer"> мы в Telegram</a>
                    </div>
                     
               </div>
         )     
    }
}