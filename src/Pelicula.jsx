function peliculaCard(){
    return(
        <>
            <h2>${search[i].Title}</h2>
            <h2>${search[i].Year}</h2>
            <h4>${search[i].imdbID}</h4>
            <button onClick = {mostrarPelicula()} type = "button">Expandir</button>
        </>
    )
}