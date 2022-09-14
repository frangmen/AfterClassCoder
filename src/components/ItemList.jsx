import React from "react";
import Item from "./Item";
import './itemlist.css'

const ItemList = ({ listProducts }) => {
  console.log(listProducts)
  return (
    <div className="grilla">
      {listProducts.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
