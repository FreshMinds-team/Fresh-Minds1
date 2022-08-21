import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import ScrollToBottom from "react-scroll-to-bottom"
import io from "socket.io-client"
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const url = 'https://rshishir.pythonanywhere.com/'
const socket = io.connect("https://socket-fresh-minds.herokuapp.com/");
const Chat = () => {
    let { authTokens, logoutUser, user } = useContext(AuthContext)
    let [friends, setFriends] = useState([])
    const [authUser, setAuthUser] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [room, setRoom] = useState();
    const [me, setMe] = useState('');
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [userid, setUserid] = useState('')
    let [currentFriend, setCurrentFriend] = useState(null)
    let [toggleChat, setToggleChat] = useState(true)

    useEffect(() => {
        getFriends()
    }, [])

    useEffect(() => {
        if (currentFriend !== null) {
            const users = [user.username, currentFriend.username].sort();
            setRoom(users[0] + '-' + users[1])
        }
    }, [friends])

    useEffect(() => {
        if (currentFriend !== null) {
            const users = [user.username, currentFriend.username].sort();
            setRoom(users[0] + '-' + users[1])
        }
        console.log(currentFriend)
    }, [currentFriend])

    useEffect(() => {
        joinRoom()
        getChats()
    }, [room])


    useEffect(() => {
        socket.on("receive_message", (data, data_id) => {
            setUserid(data_id)
            setMessageList((list) => [...list, data]);

        });
    }, [socket]);

    const joinRoom = () => {
        socket.emit("join_room", room);
        socket.on('me', (id) => {
            setMe(id)
        });
    };

    const sendMessage = async (event) => {
        if (currentMessage !== "") {
            const messageData = {
                user: user.user_id,
                receiver: currentFriend.username,
                message: currentMessage,
                room: room,
                author: user.username,
                time: (new Date().toISOString()),
            };
            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);

            let response = await fetch('https://rshishir.pythonanywhere.com/api/chats/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                },
                body: JSON.stringify(messageData)
            })

            if (response.status !== 200) {
                alert('Something went wrong!')
            }

            setCurrentMessage("");
        }
    };
    let getFriends = async () => {
        let response = await fetch('https://rshishir.pythonanywhere.com/api/doctor/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setFriends(data)
            if (data.length >= 1) {
                setCurrentFriend(data[0])
            } else {
                setCurrentFriend(user)
            }
        } else if (response.statusText === 'Unauthorized') {
            logoutUser()
        }
    }

    let getChats = async () => {
        if (room !== undefined) {
            let response = await fetch('https://rshishir.pythonanywhere.com/api/chat/' + room, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            let data = await response.json()
            if (response.status === 200) {
                setMessageList(data)
            } else if (response.statusText === 'Unauthorized') {
                logoutUser()
            }
        }
    }

    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="chat-window">
                            {toggleChat ? (
                                <div className="chat-cont-left">
                                    <div className="chat-header">
                                        <span>Chats</span>
                                    </div>
                                    <div className="chat-users-list">
                                        <div className="chat-scroll">
                                            {
                                                friends.map((friend) => {
                                                    return (
                                                        <a className="media read-chat" key={friend.id} onClick={() => {
                                                            setCurrentFriend(friend)
                                                            setToggleChat(false)
                                                        }} >
                                                            <div className="media-img-wrap">
                                                                <div className={friend.active ? "avatar avatar-online" : "avatar avatar-offline"}>
                                                                    <img src={url + friend.profilepic} alt="User Image" className="avatar-img rounded-circle" />
                                                                </div>
                                                            </div>

                                                            <div className="media-body">
                                                                <div>
                                                                    <div className="user-name">{user.username === friend.username ? 'Me' : friend.first_name + ' ' + friend.last_name}</div>
                                                                    <div className="user-last-chat">Say Hello!!! </div>
                                                                </div>
                                                                <div>
                                                                    <div className="last-chat-time block"></div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    )
                                                })
                                            }


                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="chat-cont-right">
                                    <div className="chat-header">
                                        <div className="media">
                                            <div>
                                                <a id="back_user_list" className="back-user-list" onClick={() => {
                                                    setToggleChat(true)
                                                }}>
                                                    <i className="material-icons">chevron_left</i>
                                                </a>
                                            </div>
                                            <div className="media-img-wrap">
                                                <div className={currentFriend.active ? "avatar avatar-online" : "avatar avatar-offline"}>
                                                    <img src={url + currentFriend.profilepic} alt="User Image" className="avatar-img rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <div className="user-name">{user.username === currentFriend.username ? 'Me' : (<span>{currentFriend.first_name} {currentFriend.last_name}</span>)}</div>
                                                <div className="user-status">{currentFriend.active ? 'Online' : 'Offline'}</div>
                                            </div>
                                        </div>
                                        <div className="chat-options">
                                            <Link to={"/videochat"} state={{ room: room, username: user.username, friend:currentFriend }} data-toggle="modal" data-target="#video_call">
                                                <i className="material-icons">videocam</i>
                                            </Link>
                                            <a data-toggle="modal" data-target="#voice_call">
                                                <i className="material-icons">local_phone</i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="chat-body">
                                        <ScrollToBottom className="chat-scroll">
                                            <ul className="list-unstyled">
                                                {messageList.map((messages, index) => {
                                                    if (messages.author !== user.username) {
                                                        return (
                                                            <li className="media received">
                                                                <div className="avatar">
                                                                    <img src={url + currentFriend.profilepic} alt="User Image" className="avatar-img rounded-circle" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="msg-box">
                                                                        <div>
                                                                            <p>{messages.message}</p>
                                                                            <ul className="chat-msg-info">
                                                                                <li>
                                                                                    <div className="chat-time">
                                                                                        <span><Moment fromNow ago>{messages.time}</Moment></span>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    } else {
                                                        return (
                                                            <li className="media sent">
                                                                <div className="media-body">
                                                                    <div className="msg-box">
                                                                        <div>
                                                                            <p>{messages.message}</p>
                                                                            <ul className="chat-msg-info">
                                                                                <li>
                                                                                    <div className="chat-time">
                                                                                        <span><Moment fromNow ago>{messages.time}</Moment></span>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    }
                                                }
                                                )
                                                }



                                            </ul>
                                        </ScrollToBottom>
                                    </div>
                                    <div className="chat-footer">
                                        <div className="input-group">
                                            <input type="text" className="input-msg-send form-control" placeholder="Type something" value={currentMessage}
                                                onKeyPress={(event) => {
                                                    event.key === "Enter" && sendMessage();
                                                }}
                                                onChange={(event) => {
                                                    setCurrentMessage(event.target.value);
                                                }} />
                                            <div className="input-group-append">
                                                <button type="button" className="btn msg-send-btn"><i className="fab fa-telegram-plane" onClick={sendMessage}></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}



                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Chat