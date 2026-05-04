import './Pelicula.css'

function PeliculaCard({poster, año, titulo, tipo, id}){
    const handleDetalle = () => {
        console.log("Hiciste click en la pelicula " + id)
    }
    return(
        <div className = "pelicula-card">
            <img src={poster} alt="" />
            <button onClick = {handleDetalle} type = "button">{titulo}</button>
            <h2>{año}</h2>
            <h4>{tipo}</h4>
        </div>
    )
}

export default PeliculaCard