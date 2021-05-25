import "../../styles/item/ItemListContainer.css";
import { useParams } from "react-router-dom";
import { UserDetail } from "./UserDetail.js";
import React, { useEffect, useState } from "react";
import { getFireStore } from "../../firebase";


export const UserDetailContainer = () => {
  //si usuario logeado 
  //pantalla continuar como 
  //sino formulario de usuario nuevo
  return (
    <div>
      <div className="ItemDetailContainer">
          <UserDetail  />
      </div>
    </div>
  );
};
