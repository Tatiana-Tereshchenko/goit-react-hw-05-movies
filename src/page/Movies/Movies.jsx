import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieSearch } from 'components/Utils/Api';
import css from './Movies.module.css';

function Movies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async () => {
    const results = await fetchMovieSearch(query);
        setMovies(results);
        localStorage.setItem('searchResults', JSON.stringify(results));
          setQuery('');
    };

    useEffect(() => {
    const storedResults = localStorage.getItem('searchResults');
        if (storedResults) {
        setMovies(JSON.parse(storedResults));
        }
      
    }, []);
    
    useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('searchResults');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
    
    return (
    <div>
        <input className={css.input} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className={css.button} onClick={searchMovies}>Search</button>
        <ul className={css.item_film}>
            {movies.map((movie) => (
                <li className={css.item} key={movie.id}>
                    <Link className={css.link} to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    </div>
    );
}

export default Movies;