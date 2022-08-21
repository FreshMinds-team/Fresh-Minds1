import React from 'react';
import Chat from '../../components/Chat/Chat'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';

function ChatPage() {
  window.scrollTo(0, 0)
  return (
    <div>
        <Header />
        <Chat />
        <Footer />
    </div>
  )
}

export default ChatPage