import React, { useContext } from 'react'
import Moment from 'react-moment'
import AuthContext from '../../Context/AuthContext'

const Message = ({ messageList, friend }) => {
    let { user } = useContext(AuthContext)
    return (
        <>
            <div className="media-body">
                <div>
                    <div className="user-name">{user.username === friend.username ? 'Me' : friend.first_name + ' ' + friend.last_name}</div>
                    <div className="user-last-chat">Say Hello!!! </div>
                </div>
                <div>
                    <div className="last-chat-time block"></div>
                </div>
            </div>
        </>
    )
}

export default Message