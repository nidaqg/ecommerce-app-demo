import React, { useState, useEffect } from "react";

import { Homepage } from "./Pages/Homepage/Homepage";
import { ShopPage } from "./Pages/ShopPage/ShopPage";
import { Header } from "./Components/Header/Header";
import { SignInPage } from "./Pages/SignIn/SignInPage";

import { auth, createUserProfileDoc } from "./firebase/FireBaseUtils";

import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    //on auth state change fires everytime the auth changes and returns the current
    //user object
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        //set current user with the data from the firestore db
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        //if userAuth doesn't exist, set current user to null
        setCurrentUser(userAuth);
      }
    });
     console.log(currentUser)

  }, []);

  return (
    <div>
      <Router>
        <Header currentuser={currentUser} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
