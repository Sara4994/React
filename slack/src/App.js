import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';


import './App.css';
import Landing from './Landing/Landing';
import Chat from './ChatComponent/ChatComponent';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Landing click={this.submitHandler}/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
