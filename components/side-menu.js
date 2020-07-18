import { Fragment } from "react";

const SideMenu = ({ categories }) => (
  <Fragment>
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
