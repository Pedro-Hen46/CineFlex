import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './styles.css'

export default function PedidoFinalizado({ resume }) {

    const { idPedido } = useParams();
    console.log(resume);

    return (
        <div className='Finalizado-page'>
            <h1>Pedido Feito com Sucesso!</h1>
            {resume === undefined ? ''
                : <>
                    <div className='info-pedido'>
                        <h2>Filme e sessão</h2>
                        <div>
                            <h3>{resume.movie.title}</h3>
                            <h3>{resume.day.date}</h3>
                            <h3>{resume.name}H</h3>
                        </div>
                    </div>

                    <div className='info-pedido'>
                        <h2>Ingressos</h2>
                        <div>
                            <h3>{resume.movie.title}</h3>
                        </div>
                    </div>
                    <div className='info-pedido'>
                        <h2>Comprador</h2>
                        <div>
                            <h3>{resume.movie.title}</h3>
                        </div>
                    </div>
                    <Link to='/'>
                        <button className='button-reserv'>
                            <span>Voltar para Home</span>
                        </button>
                    </Link>
                </>

            }


        </div>
    )
}