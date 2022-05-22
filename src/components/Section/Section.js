import React from "react";
import axios from "axios";
import FooterSection from "../Footer/Footer";
import { useParams } from "react-router-dom";

import '../Catalog/styles.css'

export default function Section() {

    let { idFilm } = useParams();
    console.log(idFilm);

    // const [filmInfo, setFilmInfo] = React.useState({});

    // React.useEffect((() => {
    //     const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`);
    //     promise.then(ansewerBack => setFilmInfo({...ansewerBack.data}));
    // }), []);

    // console.log(filmInfo);

    return (
        <>
            <div className='catalog'>
                <div className="section-info">
                    <h3>Selecione o horário</h3>
                    <h4>Quinta-Feira - 24/06/2021</h4>
                    <button className="btn-Horario">16:30</button>
                    <button className="btn-Horario">19:30</button>
                </div>

            </div>
            <FooterSection />
        </>


    )
}