import MOVIES_DATA from "fixtures/movies.data";

export const readMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIES_DATA);
      /* reject("Can't fetch movies data."); */
    }, 100);
  });
};
