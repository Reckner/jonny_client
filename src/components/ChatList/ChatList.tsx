import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './ChatList.module.scss';
import profilePhotoDaniel from '../../assets/mocks/images/daniel.jpg';
import profilePhotoRuben from '../../assets/mocks/images/ruben.jpg';
import profilePhotoVladislav from '../../assets/mocks/images/vladislav.jpg';
import ChatElement from '../ChatElement/ChatElement';
import { tsConstructorType } from '@babel/types';
import {Link} from 'react-router-dom';
import { match } from 'minimatch';

export interface ChatMock {
    id: number;
    name: string;
    message: string;
    time: string;
    photo: string;
}

interface ChatList {
    setTarget: React.Dispatch<React.SetStateAction<ChatMock | null>>
}


const ChatList: React.FC<ChatList> = ({setTarget}) => {
    const [chats, setChats] = useState<ChatMock[]>([
        {
            id: 1,
            name: 'Daniel Antonov',
            message: 'Lorem ipsum dolorasdasdasdasdasd',
            time: '10:30',
            photo: profilePhotoDaniel
        },
        {
            id: 2,
            name: 'Ruben Galoyan',
            message: 'Lorem ipsum dolordasda',
            time: '11:30',
            photo: profilePhotoRuben
        },
        {
            id: 3,
            name: 'Vladislav Jekimtsev',
            message: 'Lorem ipsum dolor',
            time: '12:30',
            photo: profilePhotoVladislav
        },
        {
            id: 4,
            name: 'Daniel Antonov',
            message: 'Lorem ipsum dolorasdasdasdasdasd',
            time: '10:30',
            photo: profilePhotoDaniel
        },
        {
            id: 5,
            name: 'Ruben Galoyan',
            message: 'Lorem ipsum dolordasda',
            time: '11:30',
            photo: profilePhotoRuben
        },
        {
            id: 6,
            name: 'Vladislav Jekimtsev',
            message: 'Lorem ipsum dolor',
            time: '12:30',
            photo: profilePhotoVladislav
        },
        {
            id: 7,
            name: 'Daniel Antonov',
            message: 'Lorem ipsum dolorasdasdasdasdasd',
            time: '10:30',
            photo: profilePhotoDaniel
        },
        {
            id: 8,
            name: 'Ruben Galoyan',
            message: 'Lorem ipsum dolordasda',
            time: '11:30',
            photo: profilePhotoRuben
        },
        {
            id: 9,
            name: 'Vladislav Jekimtsev',
            message: 'Lorem ipsum dolor',
            time: '12:30',
            photo: profilePhotoVladislav
        },
        {
            id: 10,
            name: 'Daniel Antonov',
            message: 'Lorem ipsum dolorasdasdasdasdasd',
            time: '10:30',
            photo: profilePhotoDaniel
        },
        {
            id: 11,
            name: 'Ruben Galoyan',
            message: 'Lorem ipsum dolordasda',
            time: '11:30',
            photo: profilePhotoRuben
        },
        {
            id: 12,
            name: 'Vladislav Jekimtsev',
            message: 'Lorem ipsum dolor',
            time: '12:30',
            photo: profilePhotoVladislav
        },
        {
            id: 13,
            name: 'Daniel Antonov',
            message: 'Lorem ipsum dolorasdasdasdasdasd',
            time: '10:30',
            photo: profilePhotoDaniel
        },
        {
            id: 14,
            name: 'Ruben Galoyan',
            message: 'Lorem ipsum dolordasda',
            time: '11:30',
            photo: profilePhotoRuben
        },
        {
            id: 15,
            name: 'Vladislav Jekimtsev',
            message: 'Lorem ipsum dolor',
            time: '12:30',
            photo: profilePhotoVladislav
        }
    ]);

    

    return (
        <div
            className={classnames(
                'd-flex flex-column flex-fill overflow-auto w-100 border-top border-bottom',
                styles['user-container'],
            )}
        >
        {chats.map(chat =>(
            <Link to={`/chat/${chat.id}`}>
            <ChatElement
            chats={chats}
            setTarget={setTarget}
            id={chat.id}
            avatar={chat.photo}
            name={chat.name}
            message={chat.message}
            date={chat.time}
            />
            </Link>
        ))}
        </div>
        
    );
};


export default ChatList;
