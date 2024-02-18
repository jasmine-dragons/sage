import React from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import './index.css'
import { ThemeProvider } from "@mui/material/styles";
import theme from '../../theme.js';

const SignIn = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
}) => {
  return (
    <div className="app">
      <main>
        <form className="login" onSubmit={handleSubmit}>
          <Typography style={{textAlign: "center", color: "white"}}>Log In</Typography>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              // value={password}
              // onChange={handleRoomNameChange}
              required
            />
          </div>
          <ThemeProvider theme={theme}>
            <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "2rem"}}>
              <Button variant="contained" style={{width: "12rem"}} href="/home">
                Log In
              </Button>
            </div>
          </ThemeProvider>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
