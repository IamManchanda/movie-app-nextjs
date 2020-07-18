import MOVIES_DATA from "fixtures/movies.data";

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIES_DATA);
      /* reject("Can't fetch movies data."); */
    }, 50);
  });
};

export const getIdsOfMovies = () => {
  const idsOfMovies = MOVIES_DATA.map((movie) => movie.id);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(idsOfMovies), 50);
  });
};

export const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    const movie = MOVIES_DATA.find((movie) => movie.id === id);
    setTimeout(() => resolve(movie), 50);
  });
};
