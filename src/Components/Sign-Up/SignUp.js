import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormInput } from "../Form-Input/FormInput";
import { CustomButton } from "../Custom-Button/CustomButton";
import { auth, createUserProfileDoc } from "../../firebase/FireBaseUtils";

import "./SignUpStyles.scss";

export const SignUp = () => {
  //set up states to hold temp values
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  //navigation
  let navigate = useNavigate();

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
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleDisplayNameChange = (e) => {
    const { value, name } = e.target;
    if (name === "displayName") {
      setDisplayName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    } else {
      setUserInfo({
        displayName: displayName,
        email: email,
        password: password,
      });
      createUser();
    }
  };

  const createUser = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
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
    <div className="sign-up">
      <h1 className="title">I do not have an account</h1>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleDisplayNameChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleEmailChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handlePasswordChange}
          label="Enter Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handlePasswordChange}
          label="Re-Enter Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};
