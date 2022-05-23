import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import FooterInf from '../Footer/FooterDetails'

import { useParams } from "react-router-dom";


import '../Catalog/styles.css'

export default function Assentos({ id, setResume, setComprador, setCPF, cpf, comprador }) {



    let { idSessao } = useParams();
    const [assento, setAssento] = React.useState(0);
    const [poltrona, setPoltrona] = React.useState(0);
    const [classButton, setclassButton] = React.useState('poltrona-livre');
    const [confirmComprador, setConfirmComprador] = React.useState(false);
    const [confirmCPF, setConfirmCPF] = React.useState(false);

    let button = false;

    useEffect((() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(ansewerBack => setAssento({ ...ansewerBack.data }));

    }), []);

    const { seats } = assento;

    function ClickPoltrona(value, index) {
        console.log(value);
        if(value.isAvailable === true) {
            setclassButton('selecionado')
        }
    }


    if (assento !== undefined) { setResume(assento) };

    let controleCPF = '';

    function InputComprador(event) {
        setComprador(event.target.value);

        if (comprador.length !== '') {
            setConfirmComprador(true);
        } else setConfirmComprador(false);
    }

    function InputCPF(event) {
        setCPF(event.target.value)

        if (cpf.length >= 10) {
            setConfirmCPF(true);
        } else setConfirmCPF(false);
    }
    function BlockCPFinput(){
        alert('Por favor, insira um valor de CPF válido.');
    }

    function ButtonDisable() {
        alert('Por favor preencha os dados e selecione pelo menos um assento para prosseguir para próxima tela.');
    }

    if (confirmComprador && confirmCPF) {
        button = true;
    } else button = false;

    return (
        <div className='section-info'>
            {assento === 0 ? ''
                :
                <div className="escolhendoAssento">
                    <h3>Selecione o(s) assento(s)</h3>

                    <div className="poltronas">
                        {seats.map((value, index) =>
                            <button onClick={() => ClickPoltrona(value, index)}
                                className={value.isAvailable === true ?
                                     classButton : 
                                     'poltrona-disable'}
                                     
                                key={index}>
                                <h6>{value.name}</h6>
                            </button>
                        )}
                    </div>

                    <div className="legendas-poltronas">
                        <div className="legenda">
                            <button className="selecionado"></button>
                            <h4>Selecionado</h4>
                        </div>
                        <div className="legenda">
                            <button className="poltrona-livre"></button>
                            <h4>Disponível</h4>
                        </div>
                        <div className="legenda">
                            <button className="poltrona-disable"></button>
                            <h4>Indisponível</h4>
                        </div>
                    </div>

                    <div className="inputs">
                        <h4>Nome do comprador:</h4>
                        <input onChange={(event) => InputComprador(event)} placeholder="Digite o seu nome..."></input>
                        <h4>CPF do comprador:</h4>
                        <input maxLength={10} onChange={(event) => { 
                            cpf.length >= 11 ? BlockCPFinput() : InputCPF(event) }} type="number" placeholder="XXX.XXX.XXX-XX"></input>
                    </div>

                    {button === true ? 
                            <Link to={`/sucesso/${idSessao}`}>
                                <button className='button-reserv'><span>Reservar assento(s)</span></button>
                            </Link>
                        :
                        <div className='button-disable' onClick={ButtonDisable}><span>Preencha os dados acima para liberar o botão...</span></div>

                    }

                    <FooterInf hora={assento.name} movie={assento.movie} day={assento.day} />
                </div>
            }

        </div>
    )
}