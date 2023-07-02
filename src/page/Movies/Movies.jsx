import  { useState, useEffect} from 'react';
import { useNavigate,useLocation  } from 'react-router-dom';
import { fetchMovieSearch } from 'components/Utils/Api';
import css from './Movies.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

function Movies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searched, setSearched] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const searchMovies = async () => {
    const results = await fetchMovieSearch(query);
        setMovies(results);
        localStorage.setItem('searchResults', JSON.stringify(results));
        navigate(`/movies?query=${encodeURIComponent(query)}`);
        setSearched(true);
    };

    useEffect(() => {
    const storedResults = localStorage.getItem('searchResults');
        if (storedResults) {
        setMovies(JSON.parse(storedResults));
        }
      const searchParams = new URLSearchParams(window.location.search);
      const searchQuery = searchParams.get('query');
        setQuery(searchQuery || '');
  }, [location.search]);
    
    useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('searchResults');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
    
  
    useEffect(() => {
      setQuery('');
      setSearched(false);
  }, []);

    return (
    <div>
        <input  className={css.input} type="text" defaultValue={query} onChange={(e) => setQuery(e.target.value)} />
        <button className={css.button} onClick={searchMovies}>Search</button>
        {movies.length > 0 || !searched ? (
        <MoviesList movies={movies} />
      ) : (
        <p>No movies found.</p>
      )}
    </div>
    );
}

export default Movies;

