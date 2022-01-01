import React, {useState, useEffect} from "react";

import { Homepage } from "./Pages/Homepage/Homepage";
import { ShopPage } from "./Pages/ShopPage/ShopPage";
import { Header } from "./Components/Header/Header";
import { SignInPage } from "./Pages/SignIn/SignInPage";

import { auth } from "./firebase/FireBaseUtils";

import "./app.scss";
import { BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";


function App() {
  const [currentUser,setCurrentUser] =useState(null);


  useEffect(() => {
  auth.onAuthStateChanged(user => {
    setCurrentUser(user)
    console.log(currentUser)
    
  })
  }, [currentUser])



  return (
    <div>
      <Router>
        <Header currentuser = {currentUser}/>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/shop" element={<ShopPage/>}/>
          <Route exact path="/signin" element={<SignInPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
