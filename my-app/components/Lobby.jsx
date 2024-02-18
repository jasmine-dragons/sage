import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme.js";
// import logoImage from "/assets/logo.png";

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
      <img
        src="/assets/logo.png"
        alt="Logo"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "1rem",
        }}
      />

      {/* <ThemeProvider theme={theme}> */}
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}>Sage</h1>
          <div style={{ textAlign: "center" }}>
            connecting generations one meeting at a time
          </div>
          <Button
            variant="contained"
            href="/sign-in"
            style={{ marginTop: "2rem" }}
          >
            Log In
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" color="secondary" href="/register">
            New User
          </Button>
        </div>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="field"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div>
          <label htmlFor="room">
            <body
              style={{
                color: "white",
              }}
            ></body>
            Room Name
          </label>
          <input
            type="text"
            id="room"
            value={roomName}
            onChange={handleRoomNameChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </ThemeProvider>
    </form>
  );
};

export default Lobby;
