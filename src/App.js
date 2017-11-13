import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Youtube from './Youtube'
import Amazon from './Amazon'

class App extends Component {
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h1 className="App-title">Video & Amazon Genie</h1>
            </header>
            <Youtube />
            <Amazon />
         </div>
      )
   }
}

export default App
