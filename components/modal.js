import { Fragment, Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.closeButton = null;
  }

  onCloseModalClick() {
    this.closeButton.click();
  }

  handleSubmitModal = () => {
    alert("Submitting Modal");
    handleCloseModal();
  };

  render() {
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
              <div className="modal-body">{this.props.children}</div>

              <div className="modal-footer">
                <button
                  type="button"
                  ref={(elem) => (this.closeButton = elem)}
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                {this.hasSubmit && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.props.handleSubmitModal}
                  >
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Modal;
