import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = (props) => {
  return (
    <div className="col">
      <div className="card cardStyle">
        <img src={props.image} alt={props.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-body title">{props.title} </h5>
          <p>{props.description}</p>
          <h3>$ {props.price}</h3>
          <Link to={`/detalle/${props.publicacionId}`}>
            <button className="btn btn-outline-secondary btn_ver_mas">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
