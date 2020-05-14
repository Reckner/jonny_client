import React from 'react';
import classnames from 'classnames';
import styles from './AddNewContact.module.scss';
import profilePicture from '../../../../../assets/mocks/images/ruben.jpg';
import HeaderSettings from '../../HeaderSettings/HeaderSettings';
import { ChatMock } from '../../../../ChatList/ChatList';

interface AddNewContact{
    target: ChatMock | null;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
}

const AddNewContact: React.FC<AddNewContact> = ({target, setModalLayout}) => {
    return (
        <>
        <HeaderSettings target={target} headerName="Add new contact"/>
        <div
                className={classnames(
                    'd-flex align-items-center flex-column px-3 py-2 border-bottom',
                    styles['add-new-contact'],
                )}
            >
                
            <div className="form-group">
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First name"></input>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last name"></input>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Phone number"></input>
            </div>
        </div>
        </>
    );
};

export default AddNewContact;
