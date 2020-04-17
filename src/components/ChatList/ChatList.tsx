import React from 'react';
import classnames from 'classnames';
import styles from './ChatList.module.scss';
import profilePhotoDaniel from './Pictures/Daniel.jpg';
import profilePhotoRuben from './Pictures/Ruben.jpg';
import profilePhotoVladislav from './Pictures/Vladislav.jpg';
import ChatElement from '../ChatElement/ChatElement';

const ChatList: React.FC = () => {
    return (
        <div
            className={classnames(
                'd-flex flex-column flex-fill overflow-auto bg-light w-100',
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
