import React, { Component } from 'react';
import Home from './components/Home';
import {PageWrap} from './App.styled';
import './App.css';

class App extends Component {
  render() {
    return (
      <PageWrap>
       <Home />
      </PageWrap>
    );
  }
}

export default App;
