import "./ItemDetail.css"
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { listadoProductos } from "../../Data/publicaciones.js";

// MIRAR QUE PASA ACA

function ItemDetail({itemProp}) {

    const [itemFetch,setItemFetch] = useState([])

    const params = useParams() // Ejecuta hook, va a la ruta y se fija los parámetros y guarda objeto con key characterId (determinado en APP) y value determinado por usuario

    const fetchItem =()=>{
        fetch(listadoProductos)
        .then((response)=> setItemFetch(response.id))
        .then((data)=> setItemFetch(data))
    }

    // Queremos que fetchCard se renderice automaticamente
    useEffect(()=>{
        fetchItem()
    },[]) // Dejamos array vacio porque queremos que se ejecute solamente una vez
    

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
            <div className="item-detail-body-right-btns">
                <button>compra</button>
            </div>
            </div>
        </div>
    </div>
    
  );
}

export default ItemDetail;
