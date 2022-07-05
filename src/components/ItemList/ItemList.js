import React from "react";
import {Item} from "../Item/Item"

export const ItemList= ({listadoProductos}) =>{

    return(
        <div className="container">
            <div className="row justify-content">
                {listadoProductos.map((producto) => <Item key={producto.id} publicacionId={producto.id} title={producto.title} image={producto.pictureUrl} price={producto.price} description={producto.descripcion} />)}
            </div>
        </div>
    )
}