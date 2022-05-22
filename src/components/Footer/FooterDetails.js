import React from 'react';
import '../Footer/styles.css';


export default function FooterDetails({ hora, movie, day }) {

    return (

        <div className="Footer">
            <img src={movie.posterURL} alt={movie.title} />

            <div className='legenda-footer'>
                <h3> <strong>{movie.title}</strong> </h3>
                <h3>{day.weekday} - {day.date} - <strong>{hora}H</strong></h3>

            </div>

        </div>

    )
}