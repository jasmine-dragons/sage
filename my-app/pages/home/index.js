"use client";
import { useState, useEffect } from "react";
import Notification from "@/components/Notification";
import socket from "@/pages/socket"
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const [call, setCall] = useState({ callRequest: false, caller: "bob" });

  useEffect(() => {
    socket.on('connect', () => { socket.emit('connected', {}) });
    socket.on('disconnect', () => { socket.emit('disconnected', {}) })
    socket.on('call incoming', (callerID) => { setCall({ callRequest: true, caller: callerID }) })
    socket.on('start call', (roomID) => { onStartCall(roomID) })
  })

  const requestCall = () => {
    socket.emit('call', {});
  }

  const answer = () => {
    socket.emit("answer call", {})
  }

  const onStartCall = (roomID) => {
    router.push(`/call/${roomID}`)
  }

  const decline = () => {
    setCall({ callRequest: false });
  }

  return (
    <div className="app">
      {call.callRequest && <Notification name={call.caller} answer={answer} decline={decline} />}
      {!call.callRequest && <button type="button" onClick={requestCall}>Request Call</button>}
    </div>
  );
};

export default Home;
