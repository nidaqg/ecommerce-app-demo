import React from 'react';
import './SignUpPageStyles.scss';
import { SignUp } from '../../Components/Sign-Up/SignUp';
import { Link } from 'react-router-dom';

export const SignUpPage = () => {
    return (
        <div className='sign-up-page'>
        <SignUp/>

        <div className="switch-signup">
        <p>
          <span>Already have an account? </span>
          <span>
            <Link 
            className="signin-link"
            to="/signin">Sign In</Link>
          </span>
        </p>
      </div>
            
        </div>
    )
}