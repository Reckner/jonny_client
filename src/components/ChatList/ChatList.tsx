import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './ChatList.module.scss';

import photoDaniel from '../../assets/mocks/images/daniel.jpg';
import photoRuben from '../../assets/mocks/images/ruben.jpg';
import photoVladislav from '../../assets/mocks/images/vladislav.jpg';
import photoPaul from '../../assets/mocks/images/paul.jpg';
import photoTarvo from '../../assets/mocks/images/tarvo.jpg';
import photoEmma from '../../assets/mocks/images/emma.jpg';
import photoSteve from '../../assets/mocks/images/steve.jpg';
import photoElon from '../../assets/mocks/images/elon.jpg';
import photoIldar from '../../assets/mocks/images/ildar.jpg';
import photoBurunov from '../../assets/mocks/images/burunov.jpg';
import photoZuganov from '../../assets/mocks/images/genadi.jpg';
import photoAleksandr from '../../assets/mocks/images/aleksandr.jpg';
import photoSpanch from '../../assets/mocks/images/spanch.jpg';
import photoRicardo from '../../assets/mocks/images/ricardo.jpg';
import photoXAEA12 from '../../assets/mocks/images/xaea12.jpeg';

import ChatElement from '../ChatElement/ChatElement';
import { tsConstructorType } from '@babel/types';
import { Link } from 'react-router-dom';
import { match } from 'minimatch';

export interface ChatMock {
    id: number;
    name: string;
    message: string;
    time: string;
    photo: string;
}

interface ChatList {
    setTarget: React.Dispatch<React.SetStateAction<ChatMock | null>>;
}

const ChatList: React.FC<ChatList> = ({ setTarget }) => {
    const [chats, setChats] = useState<ChatMock[]>([
        {
            id: 1,
            name: 'Daniel Antonov',
            message: 'Britain is the capital of Great London',
            time: '00:00',
            photo: photoDaniel,
        },
        {
            id: 2,
            name: 'Ruben Galoyan',
            message: 'Mood is a little London today',
            time: '01:30',
            photo: photoRuben,
        },
        {
            id: 3,
            name: 'Vladislav Jekimtsev',
            message: 'Kohtla-Jarve is not Johvi',
            time: '02:20',
            photo: photoVladislav,
        },
        {
            id: 4,
            name: 'Paul Opmann',
            message: 'Keila is not a village',
            time: '03:30',
            photo: photoPaul,
        },
        {
            id: 5,
            name: 'Tarvo Treier',
            message: 'ISA4',
            time: '14:41',
            photo: photoTarvo,
        },
        {
            id: 6,
            name: 'Emma Watson',
            message: 'Emma Charlotte Duerre Watson',
            time: '04:19',
            photo: photoEmma,
        },
        {
            id: 7,
            name: 'Steve Wozniak',
            message: 'Make Apple great again',
            time: '04:53',
            photo: photoSteve,
        },
        {
            id: 8,
            name: 'Elon Musk',
            message: 'New child born',
            time: '10:10',
            photo: photoElon,
        },
        {
            id: 9,
            name: 'Ildar Nurzuev',
            message: 'Assalamu alejkum epta',
            time: '20:20',
            photo: photoIldar,
        },
        {
            id: 10,
            name: 'Sergej Burunov',
            message: 'Communism, happiness, zbs',
            time: '18:04',
            photo: photoBurunov,
        },
        {
            id: 11,
            name: 'Genadi Zuganov',
            message: 'Kolhoz imeni Stasa',
            time: '23:33',
            photo: photoZuganov,
        },
        {
            id: 12,
            name: 'Aleksandr Maslov',
            message: 'Front-enders are programmers too',
            time: '06:55',
            photo: photoAleksandr,
        },
        {
            id: 13,
            name: 'Spanch Bob',
            message: 'Square pants',
            time: '07:07',
            photo: photoSpanch,
        },
        {
            id: 14,
            name: 'Ricardo',
            message: 'Milos',
            time: '01:13',
            photo: photoRicardo,
        },
        {
            id: 15,
            name: 'X Æ A-12 Musk',
            message: 'To Mars!',
            time: '13:31',
            photo: photoXAEA12,
        },
    ]);

    return (
        <div
            className={classnames(
                'd-flex flex-column flex-fill overflow-auto w-100 border-top border-bottom',
                styles['user-container'],
            )}
        >
            {chats.map((chat) => (
                <Link to={`/chat/${chat.id}`} className="text-decoration-none">
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
