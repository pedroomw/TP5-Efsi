import PeliculaCard from "../PeliculaCard/PeliculaCard.jsx"
import './Listado.css'

function Listado({peliculas, setDetalle}){
    return(
        <section className = "listado-grid">
        <ul>
            {peliculas.map((pelicula)=>(
                <PeliculaCard 
                poster = {pelicula.Poster}
                año = {pelicula.Year}
                titulo = {pelicula.Title}
                tipo = {pelicula.Type}
                key = {pelicula.imdbID}
                id = {pelicula.imdbID} 
                setDetalle = {setDetalle}
                />
            ))}
        </ul>
        </section>
    )
}

export default Listado;