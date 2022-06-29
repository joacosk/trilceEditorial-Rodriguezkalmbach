import "./ItemDetail.css"



function ItemDetail({itemProp}) {
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
