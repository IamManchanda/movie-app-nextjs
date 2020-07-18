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

  useEffect(() => {
    (async function handleMoviesAsync() {
      const data = await readMovies();
      setMovies(data);
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
