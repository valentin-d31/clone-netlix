import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {logout, login, selectUser} from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen"; //logout>Redux

function App() {

    //2. login auth de la route
    //3.redux
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch(); //envoie vers le state

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if(userAuth) {
                //logged in
                console.log(userAuth)
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                }))
            } else {
                //logged out
                dispatch(logout)
            }
        })
       return unsubscribe();
    }, []);


  return (
    <div className="App">
        <BrowserRouter>
            <ProfileScreen/>
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
