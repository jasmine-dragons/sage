import { socket } from "./socket"
import React, { Component } from 'react';
import Bio from './Bio.js'
import Notification from "./Notification.js";

const PAGES = {
  HOME: 0,
  FRIENDS: 1,
  BIO: 2,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: PAGES.HOME,
      call: false
    }
  }

  componentDidMount() {
    socket.on('connect', () => { socket.emit('connected', { data: 'I\'m connected!' }) });
    socket.on('new person', () => { });
    socket.on('call incoming', () => { this.setState({ call: true }) })
  }

  requestCall() {
    socket.emit('call', {});
  }

  render() {
    if (this.state.page == PAGES.BIO) {
      return <Bio></Bio>
    }
    
    let notif = null
    if (this.state.call) {
      notif = <Notification></Notification>
    }

    return (
      <div className="App">
        {notif}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={this.requestCall}>Request Call</button>
      </div>
    );
  }
}

export default App;
