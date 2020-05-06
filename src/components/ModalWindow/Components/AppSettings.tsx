import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className="modal-body">
                <div>
                    <Link to="/chat/userSettings">User Settings</Link>
                </div>
                <div>
                    <Link to="/chat/contacts">Contacts</Link>
                </div>
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
