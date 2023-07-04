import  { useState, useEffect} from 'react';
import { fetchMovieSearch } from 'components/Utils/Api';
import css from './Movies.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const storedQuery = localStorage.getItem('movieQuery');
    const storedMovies = localStorage.getItem('movieResults');

    if (storedQuery && storedMovies) {
      setQuery(storedQuery);
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movieQuery', query);
    localStorage.setItem('movieResults', JSON.stringify(movies));
  }, [query, movies]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const storedQuery = params.get('query');
    setQuery(storedQuery || '');
  }, []);

  useEffect(() => {
    setQuery(''); // Clear the input value when the component mounts
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setHasSearched(true);

    try {
      const searchResults = await fetchMovieSearch(query);
      setMovies(searchResults);
      const params = new URLSearchParams({ query });
      window.location.href = `?${params.toString()}`;
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className={css.title}>Search Movies</h1>
      <div>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={handleInputChange}
        />
        <button className={css.button} onClick={handleSearch}>
          Search
        </button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        hasSearched && movies.length === 0 && query !== '' && <p>No movies found.</p>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;