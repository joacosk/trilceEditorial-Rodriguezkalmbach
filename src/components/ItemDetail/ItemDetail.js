import "./ItemDetail.css"
import { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { listadoProductos } from "../../Data/publicaciones.js";
import { Link } from "react-router-dom"

import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext";

// HACER FUNCION QUE NOS PERMITA TRAER INFORMACIÓN DEL Item Count

function ItemDetail({itemProp}) {

    const [count,setCount] = useState("")
    // Recibir por parametro la info de ItemCount
    const saveDataHandler = (add) =>{
        const countData = add // Genera una nueva variable, trayendo TODO lo que viene de count
            //id: Math.random().toString()
        ;
        setCount(countData)
    }

    // ############################# CARTCONTEXT #############################
    const {addToCart} = useContext(CartContext);
  return (
    <div className="item-detail">
        <div className="item-detail-title"><h3>{itemProp.title}</h3></div>
        <div className="item-detail-body">
            <div className="item-detail-body-image">
                <img src={itemProp.pictureUrl} alt={itemProp.title} className="item-detail-body-image-left"/>
            </div>
            <div  className="item-detail-body-right">
            
            <div className="item-detail-body-right-description">
                <p className="item-detail-text">{itemProp.descripcion}</p>
            </div>    
            <div className="item-detail-body-right-price">
                {itemProp.price}
            </div>
            <div>
            {count === "" ? <ItemCount itemProp={itemProp} stock="6" initial="1" onSaveData={saveDataHandler}/> : "Elejiste "+ count + " productos"}
            </div>
            <div className="item-detail-body-right-btns">
            <Link to={`/Cart`}>
             <button >compra</button>
             </Link>
            
            </div>
         
            </div>
        </div>
    </div>
    
  ) 
}

export default ItemDetail;
