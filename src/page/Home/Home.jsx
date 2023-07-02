import  { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'components/Utils/Api';
import css from './Home.module.css';
import MoviesList from 'components/MoviesList/MoviesList';


const Home = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending Movies</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;