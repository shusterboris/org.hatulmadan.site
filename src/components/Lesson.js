import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';

export const Lesson = (props) => {
    const location = useLocation();

    useEffect(()=>{
        console.log(location.state)
    },[])

    return(<div>
        Урок
    </div>)
}