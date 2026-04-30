import {peliculaCard} from "./Pelicula"

function Listado({peliculas}){
    return(
        <ul>
            {peliculas.map(peliculas=>(
                <peliculaCard pelicula = {peliculas[i]}/>
            ))}
        </ul>
    )
}

export default Listado;