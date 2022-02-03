import React from "react";
import { Link } from "react-router-dom";

//redux imports
import { connect } from "react-redux";

//selector imports
import { selectCartHidden } from "../../Redux/Cart/CartSelectors";
import { selectCurrentUser } from "../../Redux/User/UserSelectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./HeaderStyles.scss";
import { auth } from "../../firebase/FireBaseUtils";
import CartIcon from "../Cart-Component/Cart";
import CartDropDown from "../Cart-DropDown/Cart-DropDown";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGNOUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGNIN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

//how to connect state to Header prop
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});

//use connect higher order function anywhere where we need
//properties from our state
export default connect(mapStateToProps)(Header);
