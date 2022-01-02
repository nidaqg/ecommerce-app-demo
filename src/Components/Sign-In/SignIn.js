import React, { useState } from "react";
import { FormInput } from "../Form-Input/FormInput";
import { CustomButton } from "../Custom-Button/CustomButton";
import "./SignInStyles.scss";
import {useNavigate} from 'react-router-dom';

import { auth, signInWithGoogle } from "../../firebase/FireBaseUtils";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  //handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    SignInUser();
  };

  //create user in firebase database
  const SignInUser = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          name={"email"}
          type={"email"}
          value={email}
          handleChange={(e)=> {setEmail(e.target.value)}}
          required
        />
        <FormInput
          label={"Password"}
          name={"password"}
          type={"password"}
          value={password}
          handleChange={(e)=> {setPassword(e.target.value)}}
          required
        />
        <div className="button-div">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
