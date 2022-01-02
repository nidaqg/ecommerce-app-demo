import React from 'react';
import './SignInPageStyles.scss';
import { SignIn } from '../../Components/Sign-In/SignIn';
import { SignUp } from '../../Components/Sign-Up/SignUp';

export const SignInPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
            
        </div>
    )
}
