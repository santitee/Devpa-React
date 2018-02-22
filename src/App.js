import React, { Component } from 'react'
import GoogleMapAPI from './components/API_GoogleMap'


class App extends Component {
  
  render() {
      return (
        <div>
          <h1>Welcome to Devpa-React</h1>
          <GoogleMapAPI />
        </div>
      )
  }
}

export default App