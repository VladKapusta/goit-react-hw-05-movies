import { fetchMovieByName } from 'components/FetchMovies/fetchMovies';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import noImage from '../images/NoImageFound.jpg'

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [nameMovie, setNameMovie] = useState('');
  const [movies, setMovies] = useState(null);

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    if (inputValue.trim('') === '') {
      toast.info('Pleas enter a value for search movies', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    setNameMovie(inputValue);
    setInputValue('');
  };
  useEffect(() => {
    if (nameMovie === '') {
      return;
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
                <Link to={`${movie.id}`}>
                <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : noImage
                    }
                    alt={movie.title}
                    // className={s.poster}
                  />
                  <h2>{movie.title}</h2></Link>
              </li>
            );
          })}
      </ul>
      <ToastContainer />
    </>
  );
};

export default MoviesPage;
