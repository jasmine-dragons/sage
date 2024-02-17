import { socket } from "./socket"
import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    socket.on('connect', () => { socket.emit('connected', { data: 'I\'m connected!' }) });
    socket.on('new person', () => {alert("new")});
  }
  requestCall(){
    socket.emit('call', {});
  }
  render() {
    return (
      
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={requestCall}>Request Call</button>
      </div>
    );
  }
}

export default App;
