import React from 'react';
import { useEffect } from 'react';
import '../Catalog/styles.css'
import axios from 'axios';
import Film from '../Film/Film';

export default function Catalog() {

    const [catalog, setCatalog] = React.useState([]);

    useEffect(() => {

        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');

        promise.then(res => (
            setCatalog(res.data)
        ));

    }, []); // Isto é para nao ficar passando em loop, com o react useEffect isto roda apenas uma vez.

    return (
        <div className='catalog'>
            <h3>Selecione o filme</h3>
            
                <div className="capas">
                    {catalog.map( (value, index) => <Film title={value.title} posterURL={value.posterURL} id={value.id} key={index}/>) }
                </div>
            
        </div>
    )
}