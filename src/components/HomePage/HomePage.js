import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'components/FetchMovies/fetchMovies';

export const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(r => setPopularMovies(r));
  }, []);

  return (
    <>
      <ul>
        {popularMovies &&
          popularMovies.map(popular => {
            return (
              <li key={popular.id}>
                <Link to={`movies/${popular.id}`}>{popular.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
