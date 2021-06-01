import "../../styles/user/UserDetail.css";
import { Input } from "./Input.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = ( {purchaseHandler}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

/*
  const formHandler = (id, value) => {
    if (id ==.= "userName") {
      setUserName(value);
    }
    if (id === "Password") {
      setPassword(value);
    }
  };
*/
  return (
    <div></div>
  /* <div className="UserDetail card rounded">
      <h3 className="title">Client Information</h3>
      <Input
        id="userName"
        type="mail"
        label="Mail"
        onChange={() =>formHandler}
      ></Input>
      <Input
        id="Password"
        type="password"
        label="Password"
        onChange={ formHandler}
      ></Input>
      < Link to="/" className="btn btn-danger end-btn" onClick={() => purchaseHandler({userName,phone,mail})}>
        Sign In
      </ Link>
    </div>*/
  );
};
