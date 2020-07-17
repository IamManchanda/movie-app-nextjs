import { Fragment } from "react";

const MovieList = ({ movies }) => (
  <Fragment>
    {movies.map(
      ({ id, name, releaseYear, description, rating, genre, image }) => (
        <div className="col-lg-4 col-md-6 mb-4" key={id}>
          <div className="card h-100">
            <a href="#">
              <img
                className="card-img-top"
                src={image}
                alt={name}
                title={name}
              />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">{name}</a>
              </h4>
              <p className="card-text">{description}</p>
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

export default MovieList;
