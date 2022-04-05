import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";
import ReactPlayer from 'react-player/youtube'

export const VideoViewer = (props) => {
    const location = props.location
    const state = location.state
    const history = props.history
    
    const showCardHeader = () => {
        return<div className="p-d-flex p-d-column">
                <Button icon="pi pi-arrow-left" className="p-button-rounded p-button-warning p-ml-5" 
                    tooltip="Возврат к материалам занятия"
                    onClick={()=>history.goBack()}></Button>
                <div className="p-card-title">{state.comment ? state.comment : "Видеоматериалы занятия"}</div>
        </div>
    }

    return( 
        <Card title = {showCardHeader}>
            {(state && state.youtubeLink.startsWith("https://www.youtube.com"))? 
                <ReactPlayer url = {state.youtubeLink} playing={true} volume={0.5} controls /> : 
                <div className="p-card-title"> Неправильная ссылка или проблемы с видео</div>}
        </Card> 
    )
}
