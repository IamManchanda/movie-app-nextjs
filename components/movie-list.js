import { Fragment } from "react";
import Link from "next/link";

import { shortenText } from "utils/helpers";

const MovieList = ({ movies }) => {
  return (
    <Fragment>
      {movies.map(
        ({ id, name, releaseYear, description, rating, genre, image }) => (
          <div className="col-lg-4 col-md-6 mb-4" key={id}>
            <div className="card h-100">
              <Link href={`/movies/${id}`}>
                <a>
                  <img
                    className="card-img-top"
                    src={image}
                    alt={name}
                    title={name}
                  />
                </a>
              </Link>
              <div className="card-body">
                <h4 className="card-title">
                  <Link href={`/movies/${id}`}>
                    <a>{name}</a>
                  </Link>
                </h4>
                <p className="card-text">{shortenText(description, 125)}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{rating}</small>
              </div>
            </div>
          </div>
        ),
      )}
    </Fragment>
  );
};

export default MovieList;
