import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'components/Utils/Api';
import css from './Home.module.css';


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
      {movies && movies.length > 0 ? (
        <ul className={css.item_film}>
          {movies.map((movie) => (
            <li className={css.item} key={movie.id}>
              <Link className={css.link} to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default Home;