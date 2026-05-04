import PeliculaCard from "../Pelicula/Pelicula.jsx"
import './Listado.css'

function Listado({peliculas}){
    return(
        <section className = "peliculas-container">
        <ul>
            {console.log(peliculas)}
            {peliculas.map((pelicula)=>(
                console.log(pelicula),
                <PeliculaCard 
                poster = {pelicula.Poster}
                año = {pelicula.Year}
                titulo = {pelicula.Title}
                tipo = {pelicula.Type}
                key = {pelicula.imdbID}
                id = {pelicula.imdbID}
                />
            ))}
        </ul>
        </section>
    )
}

export default Listado;