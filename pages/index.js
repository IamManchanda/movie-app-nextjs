import { Fragment } from "react";
import Head from "next/head";

import Navbar from "@/components/navbar";
import SideMenu from "@/components/side-menu";
import Carousel from "@/components/carousel";
import MovieList from "@/components/movie-list";
import Footer from "@/components/footer";
import styled from "styled-components";

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
