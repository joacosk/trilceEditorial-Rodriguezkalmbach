import React from "react"
import ItemCount from "../ItemCount/ItemCount"

export const Item= ({title,image,price,description}) =>{
    return (
    <div className="col">
        <div className = "card cardStyle">
            <img src={image} alt={title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-body">{title} </h5>
                <p>{description}</p>
                <p>{price}</p>
                <ItemCount stock="5" initial="1" onAdd="Sumado al carrito" />
            <button className="btn btn_ver_mas">Ver más</button>
            </div>
        </div>

    </div>

  );
}

export default Item;
