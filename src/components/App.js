import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './Header/Header';
import Catalog from './Catalog/Catalog';

export default function App(){

    const [catalog, setCatalog] = React.useState([]);

   React.useEffect( () => {

        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');

        promise.then( res => (
            setCatalog(res.data)
        ));

    }, []); // Isto é para nao ficar passando em loop, com o react useEffect isto roda apenas uma vez.
    

    return (
        <>
            <Header />

            <Catalog setCatalog={setCatalog} catalog={catalog}/>
            
        </>

    )
}