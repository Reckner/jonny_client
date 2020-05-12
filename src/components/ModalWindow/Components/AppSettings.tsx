import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ChatMock } from '../../ChatList/ChatList';
import UserSettings from './UserSettings/UserSettings';
import { AppSettings } from '.';

interface RouteParams {
    id: string
}

interface Modal {
    target: ChatMock | null;
};

const Modal: React.FC<Modal> = ({target}) => {
    const params= useParams<RouteParams>();
    const currentUserId= target?.id;

    return (
        <>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                    {target?.name}
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
                    <Link to={`/${currentUserId}/settings`}>
                        User Settings
                    </Link>
                </div>
                <div>
                    <Link to={`/`}>
                        Contacts
                    </Link>
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
