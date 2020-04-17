import React from 'react';
import classnames from 'classnames';
import styles from './ChatList.module.scss';
import profilePhotoDaniel from '../../assets/mocks/images/daniel.jpg';
import profilePhotoRuben from '../../assets/mocks/images/ruben.jpg';
import profilePhotoVladislav from '../../assets/mocks/images/vladislav.jpg';
import ChatElement from '../ChatElement/ChatElement';

const ChatList: React.FC = () => {
    return (
        <div
            className={classnames(
                'd-flex flex-column flex-fill overflow-auto w-100 border-top border-bottom',
                styles['user-container'],
            )}
        >
            <ChatElement
                avatar={profilePhotoDaniel}
                name="Daniel Antonov"
                message="Lorem ipsum dolorasdasdasdasdasd"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoRuben}
                name="Ruben Galoyan"
                message="Lorem ipsum dolordasda"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoVladislav}
                name="Vladislav Jekimtsev"
                message="Lorem ipsum dolor"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoDaniel}
                name="Daniel Antonov"
                message="Lorem ipsum dolorasdasdasdasdasd"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoRuben}
                name="Ruben Galoyan"
                message="Lorem ipsum dolordasda"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoVladislav}
                name="Vladislav Jekimtsev"
                message="Lorem ipsum dolor"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoDaniel}
                name="Daniel Antonov"
                message="Lorem ipsum dolorasdasdasdasdasd"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoRuben}
                name="Ruben Galoyan"
                message="Lorem ipsum dolordasda"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoVladislav}
                name="Vladislav Jekimtsev"
                message="Lorem ipsum dolor"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoDaniel}
                name="Daniel Antonov"
                message="Lorem ipsum dolorasdasdasdasdasd"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoRuben}
                name="Ruben Galoyan"
                message="Lorem ipsum dolordasda"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoVladislav}
                name="Vladislav Jekimtsev"
                message="Lorem ipsum dolor"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoDaniel}
                name="Daniel Antonov"
                message="Lorem ipsum dolorasdasdasdasdasd"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoRuben}
                name="Ruben Galoyan"
                message="Lorem ipsum dolordasda"
                date="12:20"
            />
            <ChatElement
                avatar={profilePhotoVladislav}
                name="Vladislav Jekimtsev"
                message="Lorem ipsum dolor"
                date="12:20"
            />
        </div>
    );
};

export default ChatList;
