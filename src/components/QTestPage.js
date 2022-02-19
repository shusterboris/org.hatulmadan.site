import React from 'react';
import useFetch from 'react-fetch-hook';
import { ProgressSpinner } from 'primereact/progressspinner';

export const Survey = (props) => {
    const {isLoading, data, error} = useFetch('http://localhost:8080/survey/byId/1')

    return(<div>
        <h2>Начните опрос</h2>
        <p>{isLoading && <ProgressSpinner/>}</p>
        <p>{error && error.status }</p>
        <p>{data && data.name}</p>
    </div>)

}