interface ChatObject {
    username: string;
    imgUrl: string;
    lastMessage: string;
}

import { useEffect, useState } from 'react';

import '../styles/components/ChatList.scss'
import ChatListItem from './ChatListItem';

function ChatList() {
    const [chats, setChats] = useState<Array<ChatObject>>([]);

    async function loadChats() {
        console.log(import.meta.env.VITE_API_URL);

        const data = await fetch(`${import.meta.env.VITE_API_URL}api/chats`);

        setChats(await data.json() as Array<ChatObject>);
    }

    useEffect(() => {
        loadChats();
    }, []);

    return (
        <>
            <div className="chat-list">
                {chats.map((chat) => {
                    return (<ChatListItem username={chat.username} imgUrl={chat.imgUrl} message={chat.lastMessage} />);
                })}
            </div>
        </>
    )
}

export default ChatList;