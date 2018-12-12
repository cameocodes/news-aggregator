import './App.css';
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Sources from './components/Sources';
import Main from './components/Main';
import Navigation from './components/Navigation';

class App extends Component {
  render(){
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Navigation/>
            <Switch>
            <Route exact path="/" component={Sources}/>
            <Route path="/stories" component={Main}/>
            </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;