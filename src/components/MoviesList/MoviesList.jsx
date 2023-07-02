import { Link, useLocation } from "react-router-dom";
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
    <ul className={css.item_film}>
        {movies.map((movie) => (
        <li className={css.item} key={movie.id}>
            <Link
            className={css.link}
            to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
            >
            {movie.title}
            </Link>
        </li>
        ))}
    </ul>
    );
}

export default MoviesList;