import { useState , useEffect} from 'react'
import { Busqueda } from '../Busqueda/Busqueda.jsx'
import Listado from "../Listado/Listado.jsx"

function App(){

  const[peliculas, setPeliculas] = useState([])
  return(
    <>
    <Busqueda setPeliculas = {setPeliculas}/>
    <Listado peliculas = {peliculas}/>
    </>
  )
}

export default App
