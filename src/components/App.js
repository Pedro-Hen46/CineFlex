import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Header from './Header/Header';
import Catalog from './Catalog/Catalog';
import Section from "./Section/Section";
import Assentos from "./Assentos/Assentos";
import PedidoFinalizado from "./PedidoFinalizado/PedidoFinalizado";



export default function App() {

    const [resume, setResume] = React.useState({});
    const [ingresso, setIngresso] = React.useState({});
    const [comprador, setComprador] = React.useState('');
    const [cpf, setCPF] = React.useState('');

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/sessoes/:idFilme" element={<Section />} />
                <Route path="/assentos/:idSessao" element={<Assentos setResume={setResume} setIngresso={setIngresso} setComprador={setComprador} setCPF={setCPF} comprador={comprador} cpf={cpf}/>} />
                <Route path="/sucesso/:idPedido" element={<PedidoFinalizado  cpf={cpf} comprador={comprador} resume={resume}  />} />
            </Routes>
        </BrowserRouter>
    );


}