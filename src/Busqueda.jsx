import api from "./API.js"
import {useState} from "react"

function Busqueda({setPeliculas}){
    const[nombre, setNombre] = useState()

    const manejarBusqueda = (e) => {
        e.preventDefault()
        api.get(`/?s=${nombre}&apikey=f2885c6e`)
        .then((res) => {
            let data = res.data 
            setPeliculas(data.Search)
        })
    }


    return(
        <form onSubmit={manejarBusqueda}>
            <label htmlFor="nombre">Ingrese el nombre de la pelicula</label>
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
    )
}

export {Busqueda}