import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'components/Utils/Api';
import css from './Movies.module.css';
import MoviesList from 'components/MoviesList/MoviesList';


const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    const queryParam = searchParams.get('query');
    if (!queryParam) return;

    const handleSearch = async () => {
      setIsLoading(true);
      setHasSearched(true);
      try {
        const searchResults = await fetchMovieSearch(queryParam);
        setMovies(searchResults);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearch();
  }, [searchParams]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

const handleSearch = () => {
    searchParams.set('query', query);
    setSearchParams(searchParams);
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