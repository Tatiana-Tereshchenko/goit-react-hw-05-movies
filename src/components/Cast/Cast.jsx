import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'components/Utils/Api';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
    const fetchCast = async () => {
        const movieCast = await fetchMovieCredits(movieId);
        setCast(movieCast);
    };

    fetchCast();
    }, [movieId]);

    return (
    <div>
        <h1>Cast</h1>
        <ul>
        {cast.map(actor => (
            <li key={actor.id}>{actor.name}</li>
        ))}
        </ul>
    </div>
    );
};

export default Cast;