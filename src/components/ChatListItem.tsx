import { useNavigate } from 'react-router-dom';

interface ChatListItemProps {
    username: string,
    imgUrl: string,
    message: string,
}

function ChatListItem({ username, imgUrl, message }: ChatListItemProps) {
    const navigate = useNavigate();

    return (
        <>
            <div className="chat-item" onClick={() => navigate(`/app/chat/${username}`)} style={{ backgroundColor: location.pathname.split('/')[3] == username ? "rgba(255, 255, 255, 0.1)" : "transparent" }}>
                <img src={imgUrl} alt={`${username}'s profile picture`} />
                <div className="info">
                    <span className="username">{username}</span>
                    <span className="message">{message}</span>
                </div>
            </div>
        </>
    )
}

export default ChatListItem;