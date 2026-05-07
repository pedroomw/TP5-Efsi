import PeliculaCard from "../PeliculaCard/PeliculaCard.jsx"
import './Listado.css'

function Listado({peliculas, setDetalle}){
   return(
    <section className="listado-grid">
        {peliculas.map((pelicula)=>(
            <PeliculaCard
                poster={pelicula.Poster}
                año={pelicula.Year}
                titulo={pelicula.Title}
                tipo={pelicula.Type}
                key={pelicula.imdbID}
                id={pelicula.imdbID}
                setDetalle={setDetalle}
            />
        ))}
    </section>
)
}

export default Listado;