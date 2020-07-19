import { Fragment } from "react";
import Modal from "components/modal";
import CreateMovieForm from "./create-movie-form";

const SideMenu = ({ categories }) => (
  <Fragment>
    <div className="pt-4">
      <Modal>
        <CreateMovieForm />
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

export default SideMenu;
