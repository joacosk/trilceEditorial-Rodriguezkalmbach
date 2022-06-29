import { useEffect, useState } from "react";
import { listadoProductos } from "../../Data/publicaciones.js";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css"


function ItemDetailContainer() {

    
    const [item, setItem] = useState({});

    const getItem = ()=>{
        return new Promise((resolve,reject)=>
        setTimeout(()=>{
            listadoProductos.length > 0
            ? resolve(listadoProductos)
            : reject("No hay datos");
        },2000)
        )
    }

    // Traemos Solamente el item de la lista en posición 0
    useEffect(()=>{
        getItem()
        .then((res)=> res[0])
        .then((data)=>setItem(data))
        .catch((err)=> console.log(err))
    },[])

  return (
    <div className="item-detail-container">
    <ItemDetail itemProp={item}/>
    </div>
  );
}

export default ItemDetailContainer;
