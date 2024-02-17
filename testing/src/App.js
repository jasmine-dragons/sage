import { socket } from "./socket"
import React, { Component } from 'react';
import Bio from './Bio.js'

const PAGES = {
  HOME: 0,
  FRIENDS: 1,
  BIO: 2,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: PAGES.BIO
    }
  }

  componentDidMount() {
    socket.on('connect', () => { socket.emit('connected', { data: 'I\'m connected!' }) });
    socket.on('new person', () => { alert("new") });
  }

  requestCall() {
    socket.emit('call', {});
  }

  render() {
    if (this.state.page == PAGES.BIO) {
      return <Bio></Bio>
    }

    return (
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={this.requestCall}>Request Call</button>
      </div>
    );
  }
}

export default App;
