import { Fragment } from "react";

const Modal = ({ children }) => {
  let closeButton = null;
  const handleSubmitModal = () => {
    alert("Submitting Modal");
    closeButton.click();
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#categoriesModal"
      >
        Create Movie
      </button>

      <div
        className="modal fade"
        id="categoriesModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="categoriesModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="categoriesModalLabel">
                Create Movie
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                ref={(elem) => (closeButton = elem)}
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmitModal}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
