import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'components/Utils/Api';
import { Link, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);
    };

    fetchMovie();
  }, [movieId]);

 const handleBackClick = () => {
    window.history.back();
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className={css.title}>{movie.title}</h1>
      <button className={css.backButton} onClick={handleBackClick}>
        <svg width="24" height="24" className={css.backIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
    <path d="M14.71 17.29L13.3 15.88L8.82 12.41H20V10.41H8.82L13.3 6.94L14.71 5.53L9.47 10.77L9.46 10.78L9.47 10.77L14.71 16.01L14.72 16L14.71 16.01L9.47 21.25L9.47 21.25L9.46 21.24L9.47 21.25L14.71 17.29Z" />
  </svg> 
        Back
      </button>
      <div className= {css.box}> 
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.poster} />
        <p className={css.text}>{movie.overview}</p>
        </div>
      <p className={css.text_item}>Release Date: {movie.release_date}</p>
      <p className={css.text_item}>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
      <nav>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default MovieDetails;