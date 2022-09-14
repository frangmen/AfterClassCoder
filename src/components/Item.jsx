import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'

const Item = ({ product }) => {
  return (
    <>
      <div class="container">
        <div class="card">
          <img src={product.img} alt="noimage" width={150} />
          <h4>{product.nombre}</h4>
          <p>{product.detail}</p>
          <ItemCount initial={1} stock={10} />
          <Link to={`/item/${product.id}`}>
            <button>Detalle de Item</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
