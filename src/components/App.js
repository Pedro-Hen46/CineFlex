import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Header from './Header/Header';
import Catalog from './Catalog/Catalog';
import Section from "./Section/Section";
import Assentos from "./Assentos/Assentos";



export default function App() {


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/sessoes/:idFilme" element={<Section />} />
                <Route path="/assentos/:idSessao" element={<Assentos />} />
            </Routes>
        </BrowserRouter>
    );


}