import React from "react";

//connect is a higher order function from redux
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/User-Actions";

//import selectors
import { selectCurrentUser } from "./Redux/User/UserSelectors";

import { Homepage } from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import { SignInPage } from "./Pages/SignIn/SignInPage";
import CheckoutPage  from "./Pages/Checkout/CheckoutPage";

import { auth, createUserProfileDoc } from "./firebase/FireBaseUtils";

import "./app.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

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
            <Route path="/shop" element={<ShopPage />} />
            <Route exact path="/checkout" element={<CheckoutPage/>}/>
            <Route
              exact
              path="/signin"
              element={
                this.props.currentUser ? (
                  <Navigate replace to="/" />
                ) : (
                  <SignInPage />
                )
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

//bring in setCurrentUser action from the reducer
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

//bring in currentUser from reducer
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
