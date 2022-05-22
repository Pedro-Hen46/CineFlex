import React from 'react';
import '../Catalog/styles.css'

export default function SectionInfo({ weekday, id, date, showtimes }) {

    
    return (
        <div className='section-info'>

            <h6>{weekday} - {date}</h6>
            <div className='buttons-horarios'>
                {showtimes.map((value, index) => <button key={index} className="btn-Horario"><span>{value.name}</span></button>)}
            </div>


        </div>
    );
}