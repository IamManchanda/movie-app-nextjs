import { Fragment, useState } from "react";

const CreateMovieForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    rating: 3,
    image: "",
    longDescription: "",
    genre: "",
  });
  const handleFormInputChange = ({ target: { name, value } = {} }) =>
    setFormData({
      ...formData,
      [name]: value,
    });
  const handleGenreSelectChange = ({ target: { options } = {} }) => {
    let values = [];
    for (let idx = 0; idx < options.length; idx++) {
      const element = options[idx];
      if (element.selected) {
        values.push(element.value);
      }
    }
    setFormData({
      ...formData,
      genre: values.toString(),
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit({ ...formData });
  };
  return (
    <Fragment>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormInputChange}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Lord of the Rings"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleFormInputChange}
            className="form-control"
            placeholder="Somewhere in Middle-earth..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleFormInputChange}
            max="5"
            min="0"
            className="form-control"
            placeholder="3"
          />
          <small id="emailHelp" className="form-text text-muted">
            Max: 5, Min: 0
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleFormInputChange}
            className="form-control"
            placeholder="http://....."
          />
        </div>
        <div className="form-group">
          <label htmlFor="longDescription">Long Description</label>
          <textarea
            id="longDescription"
            name="longDescription"
            value={formData.longDescription}
            onChange={handleFormInputChange}
            className="form-control"
            rows="3"
            placeholder="Somewhere in Middle-earth there used to..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            multiple
            id="genre"
            name="genre"
            onChange={handleGenreSelectChange}
            className="form-control"
          >
            <option>drama</option>
            <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option>
          </select>
        </div>
        <div className="form-group d-flex justify-content-end my-2">
          <button type="submit" className="btn btn-primary">
            Create Movie
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default CreateMovieForm;
