import { Link } from 'react-router-dom';
import '../Catalog/styles.css'

export default function Film({ posterURL, id, title }) {

    return (
        <Link to={`/sessoes/${id}`} >
            <img className='filmeCapa' src={posterURL} alt={title}  />
        </Link>        
            
    )

}