import './Pelicula.css'
import api from '../API.js'
import { useState , useEffect} from 'react'

const Pelicula = ({detalle, setDetalle}) =>  {
    const [pelicula, setPelicula] = useState("")
    console.log(detalle)
    useEffect(() => {
        api.get(`/?i=${detalle}&apikey=f2885c6e`)
        .then((res) => {
            setPelicula(res.data)
        })
    }, [])

    if(pelicula === ""){
        return ( <h1>Cargando</h1> )
    } else{
        return(
        <div className = "detalleContainer">
        <button className="btn-volver" onClick={() => setDetalle("")}>← Volver</button>
        <h1>{pelicula.Title}</h1>
        <h2 className="Titulo"> Año:</h2>
        <h2 className="Info">{pelicula.Year}</h2>
        <h2 className="Titulo"> Genero:</h2>
        <h2 className="Info"> {pelicula.Genre}</h2>
        <h2 className="Titulo">Director:</h2>
        <h2 className="Info">{pelicula.Director}</h2>
        <h2 className="Titulo">Elenco:</h2>
        <h2 className="Info">{pelicula.Actors}</h2>
        <h2 className="Titulo">Pais de origen:</h2>
        <h2 className="Info">{pelicula.Country}</h2>
        <h2>⭐{pelicula.imdbRating }⭐</h2>
        <img src={pelicula.Poster} alt="" />
        </div>
    )}
}

export default Pelicula