import './PeliculaCard.css'

function PeliculaCard({poster, año, titulo, tipo, id, setDetalle}){
    return(
        <div className = "pelicula-card">
            <img src={poster} alt="" />
            <button onClick = {() => setDetalle(id)} type = "button">{titulo}</button>
            <h2>{año}</h2>
            <h4>{tipo}</h4>
        </div>
    )
}

export default PeliculaCard