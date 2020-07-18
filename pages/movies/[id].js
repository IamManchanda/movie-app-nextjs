import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const MovieByIdPage = () => {
  const { query: { id } = {} } = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Movie: {id} | Movie App</title>
      </Head>
      <div className="container">
        <h1>Movie with ID: {id}</h1>
      </div>
    </Fragment>
  );
};

export default MovieByIdPage;
