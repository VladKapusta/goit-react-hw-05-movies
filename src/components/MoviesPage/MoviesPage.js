import { fetchMovieByName } from 'components/FetchMovies/fetchMovies';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [nameMovie, setNameMovie] = useState('');
  const [movies, setMovies] = useState(null);

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    setNameMovie(inputValue);
    setInputValue('');
  };
  useEffect(() => {
    if(nameMovie === '') {
      return
    }
    fetchMovieByName(nameMovie).then(({ results }) => setMovies(results));
  }, [nameMovie]);

  return (
    <>
      <form onSubmit={submitForm}>
        <input value={inputValue} onChange={handleInput} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
