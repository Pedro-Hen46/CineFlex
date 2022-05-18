import '../Catalog/styles.css'

export default function Catalog({catalog}){
    
    function desenvolvimento(){
        alert('Ainda em fase desenvolvimento');
    }

    return (
        <div className='catalog'>
            <h3>Selecione o filme</h3>
            
            <div className="capas">
                {catalog.map( item => <img onClick={desenvolvimento} className='filmeCapa' src={item.posterURL} />) }
            </div>
            
        </div>
    )
}