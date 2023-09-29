import { useState, useEffect } from 'react';
import App from '../App';
import { movieShelf } from './Movie';
import './movie.css';
import ReviewForm from './ReviewForm'



const getMovies = () => {
    return movieShelf;
};

const MovieRepository = () => {
    console.log(getMovies());

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movies = getMovies();
        console.log("MovieRepository: useEffect: movies: ", movies);
        setMovies(movies);
    }, []);

    return (
        <>
            <div className="movie-repository">
                <h1>Movie Shelf</h1>
                <ul className="movie-shelf">
                    {movies.map(movie => (
                        <li key={movie.id} className="movie">
                            <img src={movie.poster} alt={movie.title} />
                            <div class="text-container">
                                <p>{movie.title} directed by {movie.director} and released on {movie.year}</p>
                            </div>
                            <ReviewForm />

                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MovieRepository;
