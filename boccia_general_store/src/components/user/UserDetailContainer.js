import React, { useState} from "react";
import { LoginForm } from "./LoginForm.js";
import { getFireStore } from "../../firebase";
import "../../styles/user/UserDetailContainer.css";
import { NewAccountForm } from "./NewAccountForm.js";
import { getFireAuth } from "../../firebase/index.js";


export const UserDetailContainer = ({ purchaseHandler }) => {
  const [user, setUser] = useState();
  const [msgError, setMsgError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);


  const logoutUser = () => {
    const FireAuth = getFireAuth();
    FireAuth.signOut();
      setUser(null)
    setIsLogin(false);
  };

  const loginUser = (userName, password) => {
    const FireAuth = getFireAuth();
    FireAuth.signInWithEmailAndPassword(userName.userName, userName.password)
      .then((r) => {
        
        setMsgError(null);
        setUser(userName.userName);
        setIsLogin(true);
        setIsFormActive(false);
      })
      .catch((e) => {
        setMsgError("Mail and password entered are incorrect.");
      });
  };

  const loginHandler = () => {
    setIsLogin(false);
    setIsFormActive(true);
    setIsSignIn(true);
  };

  const createAccountHandler = () => {
    setIsSignIn(false);
    setIsLogin(false);
    setIsFormActive(true);
  };

  const logoutHandler = () => {
    logoutUser();
    setIsSignIn(true);
    setIsLogin(false);
    setIsFormActive(false);
  };

  const newAccountHandler = (user) => {
    console.log(user)
    const FireAuth = getFireAuth();
    FireAuth.createUserWithEmailAndPassword(user.mail, user.password)
      .then((r) => {
        const db = getFireStore();
        var usersRef = db.collection("users");
        user = {"name":user.userName,"phone":user.phone,"mail":user.mail}
        usersRef.add(user)
          .then(function (docRef) {
            setMsgError(null);
            setUser(user.mail);
            setIsLogin(true);
            setIsFormActive(false);
          })
          .catch(function (error) {
            setMsgError("Something went wrong, try again later");
          });
      })
      .catch((e) => {
        setMsgError("You must enter a valid email and a 6 character password");
      });
  };

  const goBackHandler = () => {
    setIsFormActive(false);
    setIsLogin(false);
  };

  return (
    <div className="UserDetailContainer card rounded">
      <h3 className="title">Client Information</h3>
      <div>
        {!isFormActive &&
          (isLogin ? (
            //"Continuar como xxxx@mail.com o cerrar sesion
            <div>
              <input
                id="Continue"
                className="btn btn-danger"
                type="button"
                value={`Continue as ${user}`}
                onClick={() => purchaseHandler(user)}
              ></input>
              <p>or</p>
              <input
                id="LogOut"
                className="btn btn-danger"
                type="button"
                value="Log Out "
                onClick={() => logoutHandler()}
              ></input>
            </div>
          ) : (
            <div>
              <input
                id="SignIn"
                className="btn btn-danger"
                type="button"
                value="Sign In"
                onClick={() => loginHandler()}
              ></input>
              <p>or</p>
              <input
                id="SignUp"
                className="btn btn-danger"
                type="button"
                value="Sign Up"
                onClick={() => createAccountHandler()}
              ></input>
            </div>
          ))}
        {isFormActive && isSignIn && (
          <LoginForm
            loginHandler={loginUser}
            goBackHandler={goBackHandler}
            msgError={msgError}
          /> //"iniciar sesion "
        )}
        {isFormActive && !isSignIn && (
          <NewAccountForm
            newAccountHandler={newAccountHandler}
            goBackHandler={goBackHandler}
            msgError={msgError}
          /> //"crear cuenta"
        )}
      </div>
    </div>
  );
};
