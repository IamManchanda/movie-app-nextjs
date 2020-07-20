import { Fragment } from "react";
import Modal from "components/modal";
import CreateMovieForm from "./create-movie-form";
import { createMovie } from "store/movies/movies.actions";

const SideMenu = ({ categories }) => {
  let modal = null;
  const handleCreateMovie = async (movie) => {
    const movies = await createMovie(movie);
    console.log(movies);
    modal.onCloseModalClick();
  };
  return (
    <Fragment>
      <div className="pt-4">
        <Modal ref={(elem) => (modal = elem)} hasSubmit={false}>
          <CreateMovieForm onFormSubmit={handleCreateMovie} />
        </Modal>
      </div>
      <h1 className="h2 my-4">Categories</h1>
      <div className="list-group">
        {categories.map(({ id, name }) => (
          <a key={id} href="#" className="list-group-item">
            {name}
          </a>
        ))}
      </div>
    </Fragment>
  );
};

export default SideMenu;
