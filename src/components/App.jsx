import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const Movie = lazy(() => import('./Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
