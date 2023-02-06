import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import Nav from "./Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {

    //2. login auth de la route
    const user = false;

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                {!user ? (
                    <Route path="/login" element={<LoginScreen/>}/>
                ) : (
                    <Route path="/" element={<HomeScreen/>}/>
                )}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
