import React from "react";
import "./Notification.css";

const Notification = ({name, answer, decline}) => {
    return (
      <>
        <div className="right-buttons-container">
          <button className="answer-button" onClick={answer}>Answer</button>
          <button className="decline-button" onClick={decline}>Decline</button>
        </div>
        <div className="green-container">{name} is calling...</div>;
      </>
    );
  }

export default Notification;
