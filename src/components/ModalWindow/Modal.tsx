import React from 'react';

const Modal: React.FC = () => {
    return (
        <div
            className="modal fade show"
            id="exampleModalCenter"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
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
                            <button className="btn btn-primary">
                                Edit profile
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary">
                                Notifications
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary">
                                Privacy and Security
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary">
                                Chat Settings
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary">
                                Advanced
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary">
                                Language
                            </button>
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
                </div>
            </div>
        </div>
    );
};

export default Modal;
