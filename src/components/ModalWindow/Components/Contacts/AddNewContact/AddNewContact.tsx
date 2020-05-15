import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './AddNewContact.module.scss';
import profilePicture from '../../../../../assets/mocks/images/ruben.jpg';
import HeaderSettings from '../../HeaderSettings/HeaderSettings';
import { ChatMock } from '../../../../ChatList/ChatList';
import axios from 'axios';
import { Contact } from '../../../../Chat/Chat';

interface AddNewContact {
    target: ChatMock | null;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
    contacts: Contact[];
    setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const AddNewContact: React.FC<AddNewContact> = ({
    target,
    setModalLayout,
    contacts,
    setContacts,
}) => {
    const [contactIdentifier, setIdentifier] = useState<string>('');

    const handleContact = async (event) => {
        const response = await axios.get(
            `http://127.0.0.1:5000/user/${contactIdentifier}`,
        );
        const { username, email, identifier } = response.data;
        const newContact: Contact = { username, email, identifier };
        setContacts([...contacts, newContact]);
    };

    return (
        <>
            <HeaderSettings target={target} headerName="Add new contact" />
            <div
                className={classnames(
                    'd-flex align-items-center flex-column px-3 py-2 border-bottom',
                    styles['add-new-contact'],
                )}
            >
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Identifier"
                        onChange={({ target: { value } }) =>
                            setIdentifier(value)
                        }
                        onKeyPress={(event) =>
                            event.key === 'Enter' ? handleContact(event) : null
                        }
                    ></input>
                </div>
            </div>
        </>
    );
};

export default AddNewContact;
