import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Instructions from './components/Instructions'
import Acknowledgements from './components/Acknowledgements'
import EnterUsername from './components/Enter-username'
import GameRoom from './components/Game-room'
import './components/Components.css'

function App() {
  return (
    <Home />
  );
}

export default App;
