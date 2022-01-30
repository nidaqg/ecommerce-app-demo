import React from "react";
import "./SignInPageStyles.scss";
import { SignIn } from "../../Components/Sign-In/SignIn";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div>
        <SignIn />
      </div>

      <div className="switch-signin">
        <p>
          <span>Don't have an account? </span>
          <span>
            <Link 
            className="signup-link"
            to="/signup">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
