import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'components/FetchMovies/fetchMovies';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(r => setPopularMovies(r));
  }, []);

  if (popularMovies) {
    return (
      <>
      <h1>Trending today</h1>
        <ul>
          {popularMovies.map(popular => {
            return (
              <li key={popular.id}>
                <Link to={`movies/${popular.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${popular.poster_path}`}
                    alt={popular.title}
                    width='320'
                  />
                  <h3>{popular.title}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default HomePage;
