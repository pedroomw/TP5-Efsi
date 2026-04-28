import { useState , useEffect} from 'react'
import { Busqueda } from './Busqueda.jsx'
import api from "./API.js"

async function App(){
  const[peliculas, setPeliculas] = useState([])
  const[nombre, setNombre] = useState()
  const[search, setSearch] = useState(false)
  
  useEffect(() => {
    if(search = true)
    {
      api.get(`/?s=${nombre}&apikey=f2885c6e`)
      .then((res) => {
        let data = res.data 
        console.log(data)
        setPeliculas(data.Search)
      })
    }
  })
  
}

return(
  <Busqueda setNombre = {setNombre}></Busqueda>
)


export default App
