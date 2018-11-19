// TODO: fix /reddit route not rendering properly
// TODO: fetch stories from FCC Medium publication
// TODO: create initial page where users can choose which sources to load

import './App.css';
import React, { Component } from 'react';
import {Navbar} from 'react-materialize';

import Sources from './components/Sources';

class App extends Component {
  render(){

    return (
      <div className="App">
        <Navbar brand='All The News 🔥' right className="grey darken-4"/>
        <Sources/>
      </div>
    );
  }
}

export default App;
