import React from 'react';
import '../Catalog/styles.css'
import { Link } from 'react-router-dom';

export default function SectionInfo({ weekday, id, date, showtimes }) {


    return (
        <div className='section-info'>

            <h6>{weekday} - {date}</h6>
            <div className='buttons-horarios'>
                {showtimes.map((value, index) =>
                    <Link to={`/assentos/${value.id}`} key={index}  >
                        <button key={id} className="btn-Horario" >    <span>{value.name}</span>   </button>
                    </Link>
                )}

            </div>


        </div>
    );
}