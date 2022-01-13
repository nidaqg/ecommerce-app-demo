import React from "react";

//connect is a higher order function from redux
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/User-Actions";

import { Homepage } from "./Pages/Homepage/Homepage";
import { ShopPage } from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import { SignInPage } from "./Pages/SignIn/SignInPage";

import { auth, createUserProfileDoc } from "./firebase/FireBaseUtils";

import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    //decontruct for easier code
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        //set current user with the data from the firestore db
        userRef.onSnapshot((snapShot) => {
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
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/shop" element={<ShopPage />} />
              <Route exact path="/signin" element={<SignInPage />} />
            </Routes>
          </Router>
      </>
    );
  }
}

//bring in set current user action from the reducer
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
