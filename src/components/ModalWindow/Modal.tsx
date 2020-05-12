import React, { useState } from 'react';
import { AppSettings, UserSettings, Contacts } from './Components';
import { ChatMock } from '../ChatList/ChatList';

interface Modal {
    target: ChatMock | null;
}

const Modal: React.FC<Modal> = ({ target }) => {
    const [modalLayout, setModalLayout] = useState<string>('appsettings');

    const handleContent = () => {
        switch (modalLayout) {
            case 'appsettings':
                return (
                    <AppSettings
                        target={target}
                        setModalLayout={setModalLayout}
                    />
                );
            case 'usersettings':
                return (
                    <UserSettings
                        target={target}
                        setModalLayout={setModalLayout}
                    />
                );
            case 'profile':
                return (
                    <Contacts target={target} setModalLayout={setModalLayout} />
                );
            case 'contacts':
                return (
                    <Contacts target={target} setModalLayout={setModalLayout} />
                );
            default:
                return (
                    <AppSettings
                        target={target}
                        setModalLayout={setModalLayout}
                    />
                );
        }
    };

    return (
        <div
            className="modal fade show"
            id="exampleModalCenter"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">{handleContent()}</div>
            </div>
        </div>
    );
};

export default Modal;
