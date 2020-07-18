import { Fragment } from "react";
import Head from "next/head";

import SideMenu from "components/side-menu";
import Carousel from "components/carousel";
import MoviesList from "components/movies-list";
import { getMovies, getCategories } from "store/movies/movies.actions";

const HomePage = ({ movies, images, categories }) => (
  <Fragment>
    <Head>
      <title>Home Page | Movie App</title>
    </Head>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <SideMenu categories={categories} />
        </div>
        <div className="col-lg-9">
          <Carousel images={images} />
          <div className="row">
            <MoviesList movies={movies} />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export const getStaticProps = async () => {
  const movies = await getMovies();
  const images = movies.map(({ id, name, image }) => ({
    id: `image-${id}`,
    name,
    image,
  }));
  const categories = await getCategories();
  return {
    props: {
      movies,
      images,
      categories,
    },
  };
};

export default HomePage;
