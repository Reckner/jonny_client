import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChatMock } from '../../ChatList/ChatList';

interface RouteParams {
    id: string;
}

interface Modal {
    target: ChatMock | null;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
}

const Modal: React.FC<Modal> = ({ target, setModalLayout }) => {
    const params = useParams<RouteParams>();
    const currentUserId = target?.id;

    const showUserSettings = () => {
        setModalLayout('usersettings');
    };

    const showContacts = () => {
        setModalLayout('contacts');
    };

    const showProfile = () => {
        setModalLayout('profile');
    };


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
                <div onClick={showProfile}>Profile</div>
                <div onClick={showUserSettings}>User Settings</div>
                <div onClick={showContacts}>Contacts</div>
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
