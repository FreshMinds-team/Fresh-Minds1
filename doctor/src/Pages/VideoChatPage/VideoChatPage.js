import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";
import { useLocation, useNavigate } from 'react-router-dom';
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2
};

const url = 'https://rshishir.pythonanywhere.com/'
const VideoChatPage = () => {
  const location = useLocation()
  let navigate = useNavigate();

  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomID = location.state?.roomID;
  const friend = location.state?.friend;
  let [runningStream, setRunningState] = useState();
  console.log(location.state)

  useEffect(() => {
    socketRef.current = io.connect("https://video-socket-fresh-minds.herokuapp.com/");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      userVideo.current.srcObject = stream;
      setRunningState(stream)
      socketRef.current.emit("join room", roomID);
      socketRef.current.on("all users", users => {
        const peers = [];
        users.forEach(userID => {
          const peer = createPeer(userID, socketRef.current.id, stream);
          peersRef.current.push({
            peerID: userID,
            peer,
          })
          peers.push(peer);
        })
        setPeers(peers);
      })

      socketRef.current.on("user joined", payload => {
        const peer = addPeer(payload.signal, payload.callerID, stream);
        peersRef.current.push({
          peerID: payload.callerID,
          peer,
        })

        setPeers(users => [...users, peer]);
      });

      socketRef.current.on("receiving returned signal", payload => {
        const item = peersRef.current.find(p => p.peerID === payload.id);
        item.peer.signal(payload.signal);
      });
    })
  }, []);

  const endCall = () => {
    runningStream.getTracks().forEach(function (track) {
      track.stop();
    });
    // window.location.reload();
    navigate("/chat")
  }

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", signal => {
      socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
    })

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    })

    peer.on("signal", signal => {
      socketRef.current.emit("returning signal", { signal, callerID })
    })

    peer.signal(incomingSignal);

    return peer;
  }
  return (
    <div>
      <Header />
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-12">
                  <div className="chat-window">
                    <div className="chat-cont-left">
                      <div className="chat-header">
                        <div className="navbar navbar-n flex-space">
                          <div className="user-details">
                            <div className="float-left user-img">
                              <div className="avatar avatar-sm mr-2">
                                <img src={url + friend.profilepic} alt="User Image" className="rounded-circle" />
                              </div>
                            </div>
                            <div className="user-info float-left">
                              <a><span>{friend.first_name} {friend.last_name}</span></a>
                              <span className="last-seen">{friend.active ? 'Online' : 'Offline'}</span>
                            </div>
                          </div>
                            <div className="end-call">
                              <a onClick={endCall}>
                                <i className="material-icons">call_end</i>
                              </a>
                            </div>
                        </div>
                      </div>
                      <div className="chat-users-list chat-height flex-row">
                        <div className="user-video">
                          {peers.map((peer, index) => {
                            return (
                              <VideoPlayer key={index} peer={peer} />
                            );
                          })}
                        </div>
                        <div>
                          <video className="img-fluid my-video" muted ref={userVideo} autoPlay playsInline></video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoChatPage