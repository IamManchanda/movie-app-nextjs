import MOVIES_DATA from "fixtures/movies.data";
import CATEGORIES_DATA from "fixtures/categories.data";

export const getMovies = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(MOVIES_DATA), 50);
  });

export const getCategories = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(CATEGORIES_DATA), 50);
  });

export const getIdsOfMovies = () =>
  new Promise((resolve, reject) => {
    const idsOfMovies = MOVIES_DATA.map((movie) => movie.id);
    setTimeout(() => resolve(idsOfMovies), 50);
  });

export const getMovieById = (id) =>
  new Promise((resolve, reject) => {
    const movie = MOVIES_DATA.find((movie) => movie.id === id);
    setTimeout(() => resolve(movie), 50);
  });
