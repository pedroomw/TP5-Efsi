function peliculaCard(pelicula){
    return(
        <>
            <h2>${pelicula.Title}</h2>
            <h2>${pelicula.Year}</h2>
            <h4>${pelicula.imdbID}</h4>
            <button onClick = {mostrarPelicula(pelicula.imdbID)} type = "button">Expandir</button>
        </>
    )
}

export {peliculaCard}