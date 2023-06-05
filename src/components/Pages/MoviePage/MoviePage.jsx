import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import useMovies from '../MoviePage/MoviePage';
import css from './MoviePage.module.css';

const MoviesPage = () => {
  const [movies, handleSubmit, moreBtn, handleLoadMore] = useMovies();
  const location = useLocation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <button className={css.button} type="submit">
          <BiSearch size="20px" />
        </button>

        <input
          className={css.input}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <ul>
        {movies.length > 0 &&
          movies.map((movie) => {
            const { original_title, id } = movie;
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <span>{original_title}</span>
                </Link>
              </li>
            );
          })}
      </ul>
      {moreBtn && (
        <button type="button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default MoviesPage;
