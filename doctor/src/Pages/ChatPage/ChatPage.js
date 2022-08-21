import React from 'react'
import ChatView from '../../Components/ChatView/ChatView'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

const ChatPage = () => {
  return (
    <div className='page-wrapper'>
        <Header />
        <Sidebar />
        <ChatView />
    </div>
  )
}

export default ChatPage