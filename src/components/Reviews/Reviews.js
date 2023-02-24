import { useState, useEffect } from 'react';
import { fetchMovieType } from 'components/FetchMovies/fetchMovies';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    fetchMovieType(id, 'reviews').then(({ results }) =>
      setMovieReviews(results)
    );
  }, [id]);

  return (
    <>
      {movieReviews &&
        movieReviews.map(review => {
          return (
            <div key={review.id}>
              <h3>author: {review.author}</h3>
              <p>{review.content}</p>
            </div>
          );
        })}
    </>
  );
};
 
export default Reviews