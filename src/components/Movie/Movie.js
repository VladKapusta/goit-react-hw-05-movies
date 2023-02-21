import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovie } from 'components/FetchMovies/fetchMovies';

export const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id).then(r => setMovie(r));
  }, [id]);

  return (
    <>
      {movie && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
              return <p key={a.id}>{a.name}</p>;
            })}
          </div>
        </div>
      )}

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
