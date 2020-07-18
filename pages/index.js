import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

import Navbar from "components/navbar";
import SideMenu from "components/side-menu";
import Carousel from "components/carousel";
import MovieList from "components/movie-list";
import Footer from "components/footer";
import { readMovies } from "store/movies/movies.action";

const SectionStyled = styled.section`
  padding-top: 80px;
`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async function handleMoviesAsync() {
      try {
        const moviesData = await readMovies();
        setMovies(moviesData);
      } catch (error) {
        setErrorMessage(error);
      }
    })();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <SectionStyled>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu appName="Movie DB" />
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
      </SectionStyled>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
