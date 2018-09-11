import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Item from './item.js'
import NewEvent from './new_event.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }

  getBands() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/events', true)
    xhr.onload = function() {
      let response = JSON.parse(xhr.responseText)
      console.log(response.events)
      this.setState({
        events: response.events
      })
    }.bind(this)
    xhr.send()
  }

  componentWillMount() {
    this.getBands()
  }

  getNewEvent() {
    this.getBands()
    // console.log('got a newevent from child')
  }

  handleDelete() {
    // console.log('master component recognizes something was changed')
    this.getBands()
  }

  handleUpdate() {
    this.getBands()
  }

  renderEvents() {
    if(this.state.events.length >= 1) {
      this.state.events.map((event) => {
        return (
          <Item />
        )
      })
    }
    return (
      <div>No Events Yet.</div>
    )
  }

  render() {
    let that = this
    let renderEvents = this.state.events.map(function(event) {
      return (
        <Item key={event.id} event={event} handleDelete={that.handleDelete.bind(that)} handleUpdate={that.handleUpdate.bind(this)} />
      )
    })
    return (
      <div>
        <NewEvent triggerUpdate={this.getNewEvent.bind(this)}/>
        <h1>All Events</h1>
        <div className="App container-grid">
          {renderEvents}
        </div>
      </div>
    );
  }
}

export default App;
