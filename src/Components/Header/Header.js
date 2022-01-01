import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './HeaderStyles.scss';
import { auth } from "../../firebase/FireBaseUtils";

export const Header = ({currentuser}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {
          currentuser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGNOUT
            </div>
          ) : (
           <Link className="option" to='/signin'>
             SIGNIN
           </Link>
          )
        }
        {/* <Link 
        className="option" to="/signin">
            SIGNIN
        </Link> */}
      </div>
    </div>
  );
};
