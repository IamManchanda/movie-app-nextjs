import { Fragment, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import Navbar from "components/navbar";
import SideMenu from "components/side-menu";
import Carousel from "components/carousel";
import MovieList from "components/movie-list";
import Footer from "components/footer";
import MOVIES_DATA from "fixtures/movies.data";

const SectionStyled = styled.section`
  padding-top: 80px;
`;

const HomePage = () => {
  const [movies] = useState(MOVIES_DATA);
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
