import React, { useState } from "react";
import "./SignInStyles.scss";

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const [signInInfo, setSignInInfo] = useState({ email: "", password: "" });

  //handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setSignInInfo({ email: email, password: password });
    console.log(signInInfo);
  };

  //handle value change for email or password
  const handleEmailChange = (e) => {
  const {value, name} = e.target;
  if (name === "email") {
  setEmail(value)
  }
  }

  const handlePasswordChange = (e) => {
    const {value, name} = e.target;
    if (name === "password") {
    setPassword(value)
    }
    }
  




  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input 
        name="email" 
        type="email" 
        value={email} 
        onChange={handleEmailChange}
        required 
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};
