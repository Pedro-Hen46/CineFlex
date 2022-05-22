import React from "react";
import axios from "axios";
import FooterSection from "../Footer/Footer";
import { useParams } from "react-router-dom";

import '../Catalog/styles.css'
import SectionInfo from "./SectionInfo";

export default function Section() {

    let { idFilme } = useParams();

    const [filmInfo, setFilmInfo] = React.useState({});
    // const [arrDate, setarrDate] = React.useState({});

    React.useEffect((() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(ansewerBack => {
            setFilmInfo({ ...ansewerBack.data }
            )
        });
    }), []);

    const { posterURL, title } = filmInfo;

    return (
        <>
            <div className='catalog'>
                <div className="section-info">

                    <h3>Selecione o horário</h3>
                    {filmInfo.days === undefined ? ''
                        :
                        filmInfo.days.map ((value, index) => <SectionInfo key={index} id={value.id} showtimes={value.showtimes} date={value.date} weekday={value.weekday}/> ) 
                    }
                </div>

            </div>
            <FooterSection title={title} posterURL={posterURL} />
        </>


    )
}