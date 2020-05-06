import React from 'react';

const Modal: React.FC = () => {
    return (
        <>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                    Vladislav Jekimtsev
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
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                >
                    Close
                </button>
                <button type="button" className="btn btn-primary">
                    Save changes
                </button>
            </div>
        </>
    );
};

export default Modal;
