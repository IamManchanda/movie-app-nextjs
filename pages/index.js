import { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

import SideMenu from "components/side-menu";
import Carousel from "components/carousel";
import MovieList from "components/movie-list";
import { readMovies } from "store/movies/movies.action";

const HomePage = ({ movies, errorMessage }) => (
  <Fragment>
    <Head>
      <title>Home Page | Movie App</title>
    </Head>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <SideMenu />
        </div>
        <div className="col-lg-9">
          <Carousel />
          <div className="row">
            {errorMessage && (
              <div className="col-lg-12">
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              </div>
            )}
            <MovieList movies={movies} />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export const getStaticProps = async () => {
  let movies = [];
  let errorMessage = "";
  try {
    movies = await readMovies();
  } catch (error) {
    errorMessage = error;
  }
  return {
    props: {
      movies,
      errorMessage,
    },
  };
};

export default HomePage;
