import React, { Component } from "react";
import "./Notification.css";

class Notification extends Component {
  render() {
    return (
      <>
        <div className="right-buttons-container">
          <button className="answer-button">Answer</button>
          <button className="decline-button">Decline</button>
        </div>
        <div className="green-container">id is calling...</div>;
      </>
    );
  }
}

export default Notification;
