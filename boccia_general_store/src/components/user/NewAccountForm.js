import "../../styles/user/UserDetail.css";
import { Input } from "./Input.js";
import { useState } from "react";

export const NewAccountForm = ({
  newAccountHandler,
  goBackHandler,
  msgError,
}) => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (id, value) => {
    setUserName(value);
  };

  const passwordHandler = (id, value) => {
    setPassword(value);
  };

  const phoneHandler = (id, value) => {
    setPhone(value);
  };

  const mailHandler = (id, value) => {
    setMail(value);
  };

  return (
    <div className="UserDetail">
      {msgError != null ? (
        <div className="alert alert-danger mt-2">{msgError}</div>
      ) : (
        <span></span>
      )}
      <Input
        id="userName"
        type="text"
        label="Name and Lastname"
        onChange={userNameHandler}
      ></Input>
      <Input id="Mail" type="mail" label="Mail" onChange={mailHandler}></Input>
      <Input
        id="Phone"
        type="text"
        label="Phone"
        onChange={phoneHandler}
      ></Input>
      <Input
        id="Password"
        type="password"
        label="Password"
        onChange={passwordHandler}
      ></Input>
      <button
        className="btn btn-danger "
        onClick={() => newAccountHandler({ userName, phone, mail, password })}
      >
        Create Account
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
