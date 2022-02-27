import React from 'react';
import useFetch from 'react-fetch-hook';
import { Panel } from 'primereact/panel';
import '../../hatul.css';

import { ProgressSpinner } from 'primereact/progressspinner';

export const Survey = (props) => {
    /* const {isLoading, data, error} = useFetch('http://localhost:8080/survey/byId/1')
     const {isLoading, data, error} = useFetch('http://localhost:8080/survey/list')
    return(<div>
        <h2>Начните опрос</h2>
        {isLoading && <ProgressSpinner/>}
        <p>{error && error.status }</p>
        <p>{data && data.name}</p>
    </div>) */
    const {isLoading, data, error} = useFetch('http://localhost:8080/survey/list')
    return(<Panel>     
        <div className="p-d-flex p-flex-column p-flex-md-row">
           <div p-d-flex p-flex-row p-flex-md-column>
                 <img src="assets/images/globalCat.jpg" alt="Кот на глобусе" className='p-page-img' />
           </div>
           <div className="p-mr-5 p-pt-6">
           <h2 className="p-orange p-text-center" style={{margin: '0.5em 0 0.5rem 0', lineHeight: '1.5'}} >
               Спасибо за регистрацию на нашем сайте!  </h2>
               <p className="p-orange p-text-center">В скором времени все кто зарегистрировался, смогут принять участие в опросах и тестах.</p>
               <p className="p-orange p-text-center">Участники курсов получат много дополнительных материалов</p>
           </div>
            </div>
            </Panel>
            ) 

}