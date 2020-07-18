import { Fragment } from "react";

const Carousel = ({ images }) => (
  <Fragment>
    <div id="carouselMain" className="carousel slide my-4" data-ride="carousel">
      <ol className="carousel-indicators">
        {images.map(({ id }, idx) => (
          <li
            key={id}
            data-target="#carouselMain"
            data-slide-to={idx}
            className={idx === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner" role="listbox">
        {images.map(({ id, name, image }, idx) => (
          <div
            key={id}
            className={`carousel-item${idx === 0 ? " active" : ""}`}
          >
            <img className="d-block img-fluid" src={image} alt={name} />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselMain"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselMain"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </Fragment>
);

export default Carousel;
