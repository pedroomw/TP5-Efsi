import api from "../API.js"
import {useState} from "react"
import './Busqueda.css'

function Busqueda({setPeliculas}){
    const[nombre, setNombre] = useState()

    const manejarBusqueda = (e) => {
        e.preventDefault()
        api.get(`/?s=${nombre}&apikey=f2885c6e`)
        .then((res) => {
            let data = res.data 
            if(data.Response === "True")
            {
                setPeliculas(data.Search)
            } else { 
                alert("No se encontraron peliculas")
                setPeliculas([])
            }
            
        })
    }


    return(
        <div className = "busqueda-container">
        <form onSubmit={manejarBusqueda}>
            <label htmlFor="nombre">Ingrese el nombre de la pelicula </label>
            <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ej: Paris Texas"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} 
            required
            />
            <button type="submit">
                Buscar
            </button>
        </form>
        </div>
    )
}

export {Busqueda}