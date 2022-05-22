import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import FooterInf from '../Footer/FooterDetails'

import { useParams } from "react-router-dom";


import '../Catalog/styles.css'

export default function Assentos({ id, setResume, setComprador }) {



    let { idSessao } = useParams();
    const [assento, setAssento] = React.useState(0);
    const [poltrona, setPoltrona] = React.useState(0);

    useEffect((() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(ansewerBack => setAssento({ ...ansewerBack.data }));

    }), []);

    const { seats } = assento;

    function ClickPoltrona(index) {
        setPoltrona(...index)
    }
    if (assento !== undefined) { setResume(assento) };


    function InputComprador(){

    }
    function InputCPF(){

    }

    return (
        <div className='section-info'>
            {assento === 0 ? ''
                :
                <div className="escolhendoAssento">
                    <h3>Selecione o(s) assento(s)</h3>

                    <div className="poltronas">
                        {seats.map((value, index) =>
                            <button onClick={() => ClickPoltrona(index + 1)}
                                className={value.isAvailable === true ? 'poltrona' : 'poltrona-disable'}
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
                            <button className="poltrona"></button>
                            <h4>Disponível</h4>
                        </div>
                        <div className="legenda">
                            <button className="poltrona-disable"></button>
                            <h4>Indisponível</h4>
                        </div>
                    </div>

                    <div className="inputs">
                        <h4>Nome do comprador:</h4>
                        <input onChange={InputComprador}placeholder="Digite o seu nome..."></input>
                        <h4>CPF do comprador:</h4>
                        <input onChange={InputCPF} type="number" placeholder="XXX.XXX.XXX-XX"></input>
                    </div>

                    <Link to={`/finalizado/${idSessao}`}>
                        <button className='button-reserv'><span>Reservar assento(s)</span></button>
                    </Link>

                    <FooterInf hora={assento.name} movie={assento.movie} day={assento.day} />
                </div>
            }

        </div>
    )
}