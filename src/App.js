import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import Nav from "./Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "./LoginScreen";

function App() {

    //2. login auth de la route
    const user = null;

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                {!user ? (
                    <LoginScreen/>
                ) : (
                    <Route path="/" element={<HomeScreen/>}/>
                )}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
