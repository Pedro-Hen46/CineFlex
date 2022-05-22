import { useEffect } from "react";
import React from "react";
import axios from "axios";
import FooterInf from '../Footer/FooterDetails'

import { useParams } from "react-router-dom";


import '../Catalog/styles.css'

export default function Assentos({ id }) {

    let { idSessao } = useParams();

    const [assento, setAssento] = React.useState(0);

    useEffect((() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(ansewerBack => setAssento({ ...ansewerBack.data }));

    }), []);

    return (
        <div className='section-info'>
            {assento === 0 ? ''
                :
                <div className="escolhendoAssento">
                    <h3>Selecione o(s) assento(s)</h3>

                    <div className='poltronas'>
                        
                    </div>

                    <button className='button-reserv'><span>Reservar assento(s)</span></button>
                    <FooterInf hora={assento.name} movie={assento.movie} day={assento.day} />
                </div>
            }

        </div>
    )
}