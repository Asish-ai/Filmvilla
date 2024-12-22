import React, { useState,useEffect } from "react";
import './App.css'
import SearchIcon from './Search.svg';
import MovieCard from './MovieCard'
//350acdf7
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=350acdf7'

const movie1 = 
{
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzI0MmQyMzYtZDAzNi00ZWZiLWFjMTgtNzQwOTRjYTFlM2Y3XkEyXkFqcGc@._V1_SX300.jpg"
}

const App = () => {

const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
}



   
    useEffect(() => {
        searchMovies('Spiderman');
    }, [])
    return (
    <div className="app">
            <h1>FilmyVilla</h1>

            
        <div className="search">
            <input 
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
                />
            <img 
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            />
        </div>
            {
                movies.length > 0 ? (
            <div className="container">
                {
                    movies.map((movie) => {
                        <MovieCard movie = {movie} />
                    })
                }

            </div> 
                ) :
                (
                   <div className="empty">
                    <h3>Movie Not Found</h3>
                   </div>
                )
            }
            
        </div>
     );
    
}
export default App;