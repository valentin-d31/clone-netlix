import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from "./HomeScreen";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
        <Nav/>
        <HomeScreen/>
    </div>
  );
}

export default App;
