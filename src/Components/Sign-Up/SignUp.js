import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormInput } from "../Form-Input/FormInput";
import { CustomButton } from "../Custom-Button/CustomButton";
import { auth, createUserProfileDoc, firestore} from "../../firebase/FireBaseUtils";

import "./SignUpStyles.scss";

export const SignUp = () => {
  //set up states to hold temp values
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  //navigation
  let navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords dont match! Please try again");
      return;
    } else {
      createUser();
    }
  };

  //function to create user in the firebase auth host
  const createUser = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        createUserProfileDoc(user, {displayName})
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="sign-up">
      <h1 className="title">I do not have an account</h1>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={(e)=> {setDisplayName(e.target.value)}}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={(e)=> {setEmail(e.target.value)}}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={(e)=> {setPassword(e.target.value)}}
          label="Enter Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={(e)=> {setConfirmPassword(e.target.value)}}
          label="Re-Enter Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};
