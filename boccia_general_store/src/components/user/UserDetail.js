import "../../styles/UserDetail.css";
import { Input } from "./Input.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export const UserDetail = ( {purchaseHandler}) => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");


  const comprar = () => {
    alert("me compraste wacho");
  };

  const formHandler = (id, value) => {
    if (id === "userName") {
      setUserName(value);
    }
    if (id === "Phone") {
      setPhone(value);
    }
    if (id === "Confirm-Mail") {
      setMail(value);
    }
  };

  return (
    <div className="UserDetail card rounded">
      <h3 className="title">Client Information</h3>
      <Input
        id="userName"
        type="text"
        label="Name and Lastname"
        onChange={() =>formHandler}
      ></Input>
      <Input
        id="Phone"
        type="text"
        label="Phone"
        onChange={ formHandler}
      ></Input>
      <Input
        id="Mail"
        type="mail"
        label="Mail"
        onChange={formHandler}
      ></Input>
      <Input
        id="Confirm-Mail"
        type="mail"
        label="Confirm-Mail"
        onChange={formHandler}
      ></Input>

      <div className="form-check">
      <Input
        id="flexCheckDefault"
        type="checkbox"
        label="Create an Account"
        onChange={formHandler}
      ></Input>
      
      </div>    
      < Link to="/" className="btn btn-danger end-btn" onClick={() => purchaseHandler({userName,phone,mail})}>
        COMPRAR
      </ Link>
    </div>
  );
};
