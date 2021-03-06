import React,{useEffect} from "react";

//connect is a higher order function from redux
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/User-Actions";

//import selectors
import { selectCurrentUser } from "./Redux/User/UserSelectors";
import { updateCollections } from "./Redux/Shop/ShopActions";

import { Homepage } from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import { SignInPage } from "./Pages/SignIn/SignInPage";
import { SignUpPage } from "./Pages/SignUp/SignUpPage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";

import {
  auth,
  createUserProfileDoc,
  firestore,
  convertCollectionsData,
} from "./firebase/FireBaseUtils";

import "./app.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import CollectionsOverview from "./Components/Collections-Overview/CollectionsOverview";
import CollectionsPage from "./Pages/CollectionsPage/CollectionsPage";

const App =({currentUser, setCurrentUser,updateCollections})=> {

useEffect(()=>{
  const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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
  

  return () => {
unsubscribeFromAuth();
  }
},[])

useEffect(()=> {
  //pull in shop data
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsData(snapshot);
      updateCollections(collectionsMap)
    });

},[])


    return (
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop/*" element={<ShopPage />}>
            <Route path="" element={<CollectionsOverview />} />
            <Route path=":collectionId" element={<CollectionsPage />} />
          </Route>
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route
            exact
            path="/signin"
            element={
              currentUser ? (
                <Navigate replace to="/" />
              ) : (
                <SignInPage />
              )
            }
          />
          <Route
            exact
            path="/signup"
            element={
              currentUser ? (
                <Navigate replace to="/" />
              ) : (
                <SignUpPage />
              )
            }
          />
        </Routes>
      </>
    );
  }

//bring in setCurrentUser action from the reducer
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

//bring in currentUser from reducer
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
