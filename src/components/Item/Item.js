import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export const Item= (props) =>{
    return (
    <div className="col">
        <div className = "card cardStyle">
            <img src={props.image} alt={props.title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-body">{props.title} </h5>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <ItemCount stock="5" initial="1" onAdd="Sumado al carrito" />
            <Link to={`/detalle/${props.publicacionId}`}>
             <button className="btn btn_ver_mas" >Ver más</button>
             </Link>
            </div>
        </div>

    </div>

  );
}

export default Item;
