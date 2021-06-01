import { createContext, useState } from "react";

import { getFireAuth } from "../firebase";

export const UserContext = createContext();


export function UserProvider({ children }) {
  const [user, setUser] = useState("laconchadetumadre");

  const logoutUser = () => {
    const FireAuth =getFireAuth()


  setUser("");
  };

  const loginUser = (mail,password) => {
    mail="pepe@pepito.com"
    password="123456"
    const FireAuth =getFireAuth()
    FireAuth.signInWithEmailAndPassword(mail,password);
    var user = FireAuth.currentUser;
    console.log(user)
    setUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        logoutUser,
        loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
