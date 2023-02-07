import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import Nav from "./Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import {auth} from "./firebase";

function App() {

    //2. login auth de la route
    const user = null;
    //2.1
    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if(userAuth) {
                //logged in
                console.log(userAuth)
            } else {
                //logged out
            }
        })
       return unsubscribe();
    }, []);

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
