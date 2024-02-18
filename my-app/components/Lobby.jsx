import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme.js";

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
}) => {
  return (
    <form className="login" onSubmit={handleSubmit}>
      {/* <h2>Enter a room</h2> */}
      <div
        style={{
          backgroundColor: "#D9D9D9",
          margin: "auto auto",
          width: "14rem",
          height: "14rem",
          opacity: "100%",
          borderRadius: "1rem",
        }}
      >
        logo here
      </div>
      {/* <ThemeProvider theme={theme}> */}
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Button variant="contained" href="/sign-in">
            Log In
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Button variant="contained" color="secondary" href="/register">
            New User
          </Button>
        </div>
      </ThemeProvider>

      {/* </ThemeProvider> */}

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>

      <div>
        <label htmlFor="room">Room name:</label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Lobby;
