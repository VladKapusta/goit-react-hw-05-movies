import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.Header}>
        <nav className={css.Nav}>
          <NavLink className={css.NavLink} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.NavLink} to="movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
