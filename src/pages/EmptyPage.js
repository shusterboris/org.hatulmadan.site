import React from 'react';

import { Panel } from 'primereact/panel';
export const EmptyPage = () => {

    return (
        <div className="p-grid">
            <div className="p-col-4">
             <img src="assets/images/CCF_000244.jpg" width='500px' height='350px' alt="fignya"/>
            </div>
            <div className="p-col-6">
            <Card  >
                    <span className="card-title" style={{color:"#457fca"}} >
                            Зачем все
                    </span>
                   <p>Смех и радость мы приносим людям</p>
                </Card>  
               <Panel header="Зачем все" >
                   <p>Коты приносят много пользы</p>
                </Panel>            
            </div>
        </div>
    );
}
