import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovie } from 'components/FetchMovies/fetchMovies';
import noImage from '../images/NoImageFound.jpg';

import css from './Movie.module.css';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id).then(r => setMovie(r));
  }, [id]);

  return (
    <>
      {/* <Link to={'/movies'}>go back</Link> */}
      {movie && (
        <div className={css.WrapperMovie}>
          <div className={css.WrapperImg}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : noImage
              }
              alt={movie.title}
              width="240"
            />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <p>User score: {movie.popularity}</p>
            <h3>Owerview</h3>
            <p>{movie.overview}</p>
            <h3>Ganres</h3>
            {movie.genres.map(a => {
              return (
                <p key={a.id} className={css.Ganre}>
                  {a.name}
                </p>
              );
            })}
          </div>
        </div>
      )}
      <Link to="cast" className={css.Cast}>
        Cast
      </Link>
      <Link to="reviews">Reviews</Link>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movie;
