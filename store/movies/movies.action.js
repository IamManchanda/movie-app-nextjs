import MOVIES_DATA from "fixtures/movies.data";

export const readMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading movies");
      resolve(MOVIES_DATA);
    }, 1000);
  });
};
