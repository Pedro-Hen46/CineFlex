import '../Catalog/styles.css'

export default function Catalog({catalog}){
    

    return (
        <div className='catalog'>
            <h3>Selecione o filme</h3>
            
            <div className="capas">
                {catalog.map( item => <img className='filmeCapa' src={item.posterURL} />) }
            </div>
            
        </div>
    )
}