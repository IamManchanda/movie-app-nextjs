import { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

import Navbar from "components/navbar";
import SideMenu from "components/side-menu";
import Carousel from "components/carousel";
import MovieList from "components/movie-list";
import Footer from "components/footer";
import MOVIE_DATA from "fixtures/movie.data";

const SectionStyled = styled.section`
  padding-top: 80px;
`;

const HomePage = () => (
  <Fragment>
    <Head>
      <title>Home</title>
    </Head>
    <Navbar />
    <SectionStyled>
      <div className="container">
        <div className="row">
          <pre>{JSON.stringify(MOVIE_DATA[0], null, 2)}</pre>
          <div className="col-lg-3">
            <SideMenu />
          </div>
          <div className="col-lg-9">
            <Carousel />
            <div className="row">
              <MovieList />
            </div>
          </div>
        </div>
      </div>
    </SectionStyled>
    <Footer />
  </Fragment>
);

export default HomePage;
