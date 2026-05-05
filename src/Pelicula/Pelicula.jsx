import './Pelicula.css'
import api from '../API.js'
import { useState , useEffect} from 'react'

const Pelicula = ({detalle, setDetalle}) => {
    const [pelicula, setPelicula] = useState("")
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
        <>
        <h1>{pelicula.Title}</h1>
        <h2>{pelicula.Year}</h2>
        <img src={pelicula.Poster} alt="" />
        </>
    )}
}

export default Pelicula