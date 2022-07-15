import "./ItemDetail.css"
import { useState } from 'react'
import { Link } from "react-router-dom"

import ItemCount from "../ItemCount/ItemCount"

// HACER FUNCION QUE NOS PERMITA TRAER INFORMACIÓN DEL Item Count

function ItemDetail({itemProp}) {

    const [count,setCount] = useState(null)
    // Recibir por parametro la info de ItemCount
    const saveDataHandler = (add) =>{
        const countData = add // Genera una nueva variable, trayendo TODO lo que viene de count
            //id: Math.random().toString()
        ;
        setCount(countData)
    }


  return (
    <div className="item-detail card">
        <div className="item-detail-title "><h3>{itemProp.title}</h3></div>
        <div className="item-detail-body  cardStyle">
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
            <div className="item-detail-body-counter">
            {!count  ? 
            <ItemCount itemProp={itemProp} stock="6" initial="1" onSaveData={saveDataHandler}/> 
            : 
            "Elejiste "+ count + " productos"}
            </div>
            <div className="item-detail-body-btns">
            <Link to={`/Cart`}>
             <button type ="button" className="btn btn-outline-primary">Comprar</button>
             </Link>
            
            </div>
         
            </div>
        </div>
    </div>
    
  ) 
}

export default ItemDetail;
