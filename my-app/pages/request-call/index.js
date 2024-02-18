import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import Webcam from "react-webcam";
import theme from "../../theme.js";

const RequestCall = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
}) => {
  return (
    <div className="app">
      <main>
        <ThemeProvider theme={theme}>
          <div className="left">
            <Typography variant="h4" color="white" style={{ flex: 1 }}>
              Here's how you look:
            </Typography>
            <div className="iconImages">
              <img
                src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-2/254000/98-512.png"
                width="100rem"
                height="100rem"
              />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-zoom-4062801-3357687.png?f=webp"
                width="100rem"
                height="100rem"
              />
            </div>
            <Webcam
              style={{ flex: 4, height: "700%", borderRadius: "1.5rem" }}
            />
          </div>
          <div className="right">
            <div className="callButtons" style={{ backgroundColor: "#00B84A" }}>
              <Typography variant="h4">Request a Call</Typography>
            </div>
            <div className="callButtons" style={{ backgroundColor: "#FFF065" }}>
              <Typography variant="h4">Request Favorites Only</Typography>
            </div>
          </div>
        </ThemeProvider>
      </main>
    </div>
  );
};

export default RequestCall;
