import { Link } from 'react-router-dom'

import '../Header/styles.css'

export default function Header() {

    return (
        <Link to='/'>
            <div className="header">
                <h1>CINEFLEX</h1>
            </div>
        </Link>
    )
}