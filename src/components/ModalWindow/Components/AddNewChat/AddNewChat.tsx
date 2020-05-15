import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './AddNewChat.module.scss';
import Contact from '../Contacts/Contact/Contact';
import { users } from '../../../../assets/mocks/users';

const AddNewChat: React.FC = () => {
    const [contacts, setContacts] = useState(users);

    const handleSelectItem = (e) => {
        console.log(e.target.value);
    };

    return (
        <>
            <div
                className={classnames(
                    'd-flex flex-column px-3 py-2 border-bottom',
                    styles['add-new-chat'],
                )}
            >
                <div className="d-flex justify-content-around flex-fill my-2 py-2">
                    <div className="header-back">
                        <button>Back</button>
                    </div>
                    <div className="header-name">
                        <h5>Settings</h5>
                    </div>
                    <div className="header-done">
                        <button type="button" data-dismiss="modal">
                            Done
                        </button>
                    </div>
                </div>

                {contacts.map((contact) => (
                    <div className="d-flex justify-content-between">
                        <Contact name={contact.name} photo={contact.photo} />
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input
                                    type="radio"
                                    onChange={handleSelectItem}
                                    value={contact.identifier}
                                ></input>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AddNewChat;
