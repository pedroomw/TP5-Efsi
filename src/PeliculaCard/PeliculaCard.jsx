import './PeliculaCard.css'

function PeliculaCard({poster, año, titulo, tipo, id, setDetalle}){
    return(
        <div className="pelicula-card" onClick={() => setDetalle(id)}>
            <img src={poster} alt="" />
            <div>
                <h3>{titulo}</h3>
                <h2>{año}</h2>
                <h4>{tipo}</h4>
            </div>
        </div>
    )
}

export default PeliculaCard