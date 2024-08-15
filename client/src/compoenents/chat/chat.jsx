import React, { useState } from 'react';
import "./chat.scss";

function Chat() {
    const [chat, setChat] = useState(true);

    const toggleChat = () => {
        setChat(prevChat => !prevChat); // Toggles between true and false
    };

    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message" onClick={toggleChat}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
                <div className="message" onClick={toggleChat}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Jade</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
                <div className="message" onClick={toggleChat}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
                <div className="message" onClick={toggleChat}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
                <div className="message" onClick={toggleChat}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
                <div className="message" onClick={toggleChat}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>Lorem, ipsum dolor sit amet consectetur...</p>
                </div>
            </div>
            {chat && (
                <div className="chat-box">
                    <div className="top">
                        <div className="user">
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            John Doe
                        </div>
                        <span className='close' onClick={toggleChat}>X</span>
                    </div>
                    <div className="center">
                        <div className="chatmessage own">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, accusamus.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmessage">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, accusamus.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmessage own">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, accusamus.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmessage">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, accusamus.</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmessage own">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, accusamus.</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea></textarea>
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chat;
