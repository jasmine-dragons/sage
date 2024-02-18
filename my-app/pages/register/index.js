import React from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import './index.css'
import { ThemeProvider } from "@mui/material/styles";
import theme from '../../theme.js';

const Register = ({
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
          <Typography style={{textAlign: "center", color: "white"}}>Sign In</Typography>
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

          <div>
            <label htmlFor="password">Confirm Password</label>
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
              <Button color="secondary" variant="contained" style={{width: "12rem"}} href="/request-call">
                Create Account
              </Button>
            </div>
          </ThemeProvider>
        </form>
      </main>
    </div>
  );
};

export default Register;
