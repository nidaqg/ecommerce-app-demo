import React from "react";

//import provider and store to wrap app in so entire app has access to redux 
//store. similar to context API
import { Provider } from "react-redux";
import store from "./Redux/Store";

import { Homepage } from "./Pages/Homepage/Homepage";
import { ShopPage } from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import { SignInPage } from "./Pages/SignIn/SignInPage";

import { auth, createUserProfileDoc } from "./firebase/FireBaseUtils";

import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        //set current user with the data from the firestore db
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        //if userAuth doesn't exist, set current user to null
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Provider store={store}>
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/signin" element={<SignInPage />} />
          </Routes>
        </Router>
        </Provider>
      </>
    );
  }
}

export default App;
