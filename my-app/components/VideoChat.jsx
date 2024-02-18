import React, { useState, useCallback } from "react";
import Lobby from "./Lobby";
import Room from "@/pages/Room";

const VideoChat = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const data = await fetch("/api/video", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
      });
      let body = await data.json();
      body = JSON.parse(body);
      setToken(body.token);
    },
    [username, roomName]
  );

  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);

  return (
    <div>
      {token ? (
        <Room roomName={roomName} token={token} handleLogout={handleLogout} />
      ) : (
        <Lobby
          username={username}
          roomName={roomName}
          handleUsernameChange={handleUsernameChange}
          handleRoomNameChange={handleRoomNameChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default VideoChat;
