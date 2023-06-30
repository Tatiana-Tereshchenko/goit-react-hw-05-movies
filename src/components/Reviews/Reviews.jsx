import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/Utils/Api';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews);
        };

    fetchReviews();
        }, [movieId]);

    useEffect(() => {
        return () => {
        localStorage.removeItem('searchResults');
    };
    }, []);
    
    return (
        <div>
            <h1>Reviews</h1>
            {reviews.length === 0 ? (
            <p>We don't have any reviews for this movie.</p>
            ) : (
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
            ))}
        </ul>
        )}
    </div>
    );
    };

export default Reviews;