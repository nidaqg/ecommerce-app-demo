import React, { useState } from "react";
import { FormInput } from "../Form-Input/FormInput";
import { CustomButton } from "../Custom-Button/CustomButton";
import "./SignInStyles.scss";
import {useNavigate} from 'react-router-dom';

import { auth, createUserProfileDoc, signInWithGoogle } from "../../firebase/FireBaseUtils";
import { Navigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInInfo, setSignInInfo] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  
  //handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setSignInInfo({ email: email, password: password });
    console.log(signInInfo);
    SignInUser();
  };

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

  //handle value change for email or password
  const handleEmailChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(value);
    }
  };

  const handlePasswordChange = (e) => {
    const { value, name } = e.target;
    if (name === "password") {
      setPassword(value);
    }
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
          handleChange={handleEmailChange}
          required
        />
        <FormInput
          label={"Password"}
          name={"password"}
          type={"password"}
          value={password}
          handleChange={handlePasswordChange}
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
