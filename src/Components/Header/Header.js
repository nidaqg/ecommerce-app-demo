import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import './HeaderStyles.scss';
import { auth } from "../../firebase/FireBaseUtils";

const Header = ({currentUser}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {
          currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGNOUT
            </div>
          ) : (
           <Link className="option" to='/signin'>
             SIGNIN
           </Link>
          )
        }
      </div>
    </div>
  );
};

//how to connect state to Header prop
const mapStateToProps = state => ({
currentUser: state.user.currentUser
})

//use connect higher order function anywhere where we need 
//properties from our state
export default connect()(Header)
