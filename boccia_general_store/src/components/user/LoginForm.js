import "../../styles/user/UserDetail.css";
import { Input } from "./Input.js";
import { useState } from "react";

export const LoginForm = ({ loginHandler, goBackHandler, msgError }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (id, value) => {
    setUserName(value);
  };

  const passwordHandler = (id, value) => {
    setPassword(value);
  };

  return (
    <div className=" UserDetail">
      {msgError != null ? (
        <div className="alert alert-danger mt-2">{msgError}</div>
      ) : (
        <span></span>
      )}
      <Input
        id="userName"
        type="mail"
        label="Mail"
        onChange={userNameHandler}
      ></Input>
      <Input
        id="Password"
        type="password"
        label="Password"
        onChange={passwordHandler}
      ></Input>
      <button
        className="btn btn-danger end-btn"
        onClick={() => loginHandler({ userName, password })}
      >
        Sign In
      </button>
      <button
        className="btn btn-outline-danger end-btn"
        onClick={() => goBackHandler()}
      >
        Go back
      </button>
    </div>
  );
};
