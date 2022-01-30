import React, { useState } from "react";
import { FormInput } from "../Form-Input/FormInput";
import { CustomButton } from "../Custom-Button/CustomButton";
import "./SignInStyles.scss";

import { auth, signInWithGoogle } from "../../firebase/FireBaseUtils";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
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
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="sign-in">
      <h1>Sign in to your account</h1>
      <span>use Email OR Google sign-in</span>

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
