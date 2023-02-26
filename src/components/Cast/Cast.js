import { useState, useEffect } from 'react';
import { fetchMovieType } from 'components/FetchMovies/fetchMovies';
import { useParams } from 'react-router-dom';
import noImage from '../images/NoImageFound.jpg';

const Cast = () => {
  const { id } = useParams();
  const [movieActors, setMovieActors] = useState(null);

  useEffect(() => {
    fetchMovieType(id, 'credits').then(({ cast }) => setMovieActors(cast));
  }, [id]);

  return (
    <>
      <ul>
        {movieActors &&
          movieActors.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : noImage
                  }
                  alt={actor.original_name}
                  width="120"
                />
                <p>{actor.original_name}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
