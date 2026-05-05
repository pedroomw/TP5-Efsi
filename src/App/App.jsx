import { useState , useEffect} from 'react'
import { Busqueda } from '../Busqueda/Busqueda.jsx'
import Listado from "../Listado/Listado.jsx"
import Pelicula from "../Pelicula/Pelicula.jsx"

function App(){

  const[peliculas, setPeliculas] = useState([])
  const[detalle, setDetalle] = useState("")

  return(
    <>
    <Busqueda setPeliculas = {setPeliculas}/>
    {detalle === "" ? (
        <Listado peliculas={peliculas} setDetalle={setDetalle} />
      ) : (
        <Pelicula detalle={detalle}/>
      )}
    </>
  )
}

export default App
