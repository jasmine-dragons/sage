"use client";
import { useState, useEffect } from "react";
import Notification from "@/components/Notification";
import socket from "@/components/socket";
import { useRouter } from "next/router";
import React from "react";
import { Typography } from "@mui/material";
import './index.css'
import Webcam from "react-webcam";


const Home = () => {
  const router = useRouter();
  const [call, setCall] = useState({ callRequest: false, caller: "bob" });

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("connected", {});
    });
    socket.on("disconnect", () => {
      socket.emit("disconnected", {});
    });
    socket.on("call incoming", (callerID) => {
      setCall({ callRequest: true, caller: callerID });
    });
    socket.on("start call", (roomID) => {
      onStartCall(roomID);
    });
  });

  const requestCall = () => {
    socket.emit("call", {});
  };

  const answer = () => {
    socket.emit("answer call", {});
  };

  const onStartCall = (roomID) => {
    router.push(`/call/${roomID}`);
  };

  const decline = () => {
    setCall({ callRequest: false });
  };


  let body = null
  if (!call.callRequest) {
    body = (<div className="app">
      <main>
        <div className="left">
          <Typography variant="h4" color="white" style={{ flex: 1 }}>
            Here's how you look:
          </Typography>
          <div className="iconImages">
            <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-2/254000/98-512.png" width="100rem" height="100rem" />
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-zoom-4062801-3357687.png?f=webp" width="100rem" height="100rem" />
          </div>
          <Webcam style={{ flex: 4, height: "700%", borderRadius: "1.5rem" }} />
        </div>
        <div className="right">
          <div className="callButtons" style={{ backgroundColor: "#00B84A" }}>
            <Typography variant="h4" onClick={requestCall}>Request a Call</Typography>
          </div>
          <div className="callButtons" style={{ backgroundColor: "#FFF065" }}>
            <Typography variant="h4">Request Favorites Only</Typography>
          </div>
        </div>
      </main>
    </div>)
  }else{
    body = <Notification name={call.caller} answer={answer} decline={decline} />
  }

  return (
    <div className="app">
      {body}
    </div>
  );
};

export default Home;
