import { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

import { getIdsOfMovies, getMovieById } from "store/movies/movies.actions";

const ContentParaStyled = styled.p`
  font-size: 1rem;
`;

const MovieByIdPage = ({
  movie: {
    id,
    name,
    releaseYear,
    description,
    longDescription,
    rating,
    genre,
    image,
  } = {},
}) => (
  <Fragment>
    <Head>
      <title>Movie: {id} | Movie App</title>
    </Head>
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{name}!</h1>
        <p className="lead">{description}</p>
        <hr className="my-4" />
        <p>{genre.toUpperCase()}</p>
        <a className="btn btn-primary btn-lg" role="button">
          Learn more
        </a>
      </div>
      <ContentParaStyled>{longDescription}</ContentParaStyled>
    </div>
  </Fragment>
);

export const getStaticPaths = async () => {
  const idsOfMovies = await getIdsOfMovies();
  const paths = idsOfMovies.map((id) => ({ params: { id } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { id } = {} }) => {
  const movie = await getMovieById(id);
  return {
    props: { movie },
  };
};

export default MovieByIdPage;
