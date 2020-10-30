import React from 'react';
import './App.css';
import  Row  from './Row';
import axios from './axios.js'

function App() {
  return (
    <div className="App">
      <h1>A great netflix clone</h1>
      <Row title="NETFLIX ORIGINALS" />
    </div>
  );
}

export default App;
