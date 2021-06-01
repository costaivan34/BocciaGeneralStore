import "../../styles/user/UserDetailContainer.css";
import { NewAccountForm } from "./NewAccountForm.js";
import { LoginForm } from "./LoginForm.js";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext.js";
import { Input } from "./Input.js";

export const UserDetailContainer = (isSignIn) => {

  return (
    <div className="UserDetailContainer card rounded">
      <h3 className="title">Client Information</h3>
      <div>
        {isSignIn ? (
          <LoginForm /> //"iniciar sesion "
        ) : (
          <NewAccountForm /> //"crear cuenta"
        )}
      </div>
    </div>
  );
};
