import React, { useEffect } from "react";
//350acdf7
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=350acdf7'

const App = () => {
const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
}

   
    useEffect(() => {
        searchMovies('Spiderman');
    }, [])
    return (
        App
     );
    
}
export default App;