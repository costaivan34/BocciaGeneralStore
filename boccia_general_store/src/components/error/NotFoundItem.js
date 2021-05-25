import { Link } from "react-router-dom";
import  { Fragment } from "react";

export const NotFoundItem = () => {
  return (
    <Fragment>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Home</li>
      <li className="breadcrumb-item active">Product</li>
      <li className="breadcrumb-item active"> Not Found</li>
    </ol>
  </nav>

    <div className="ItemDetail Cart card  bg-body rounded">
      <div className="cart-warning">
        <p className="title-warning">
          El articulo que estas buscando no existe
        </p>
        <Link to="/" className="btn btn-danger warning-buy">
          Volver al inicio
        </Link>
      </div>
    </div>
    </Fragment>
  );
};
