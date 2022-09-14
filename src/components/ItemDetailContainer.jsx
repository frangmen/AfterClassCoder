import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productos from "./productos";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setloading] = useState(true);

  const { id } = useParams();
  console.log(id);

  const customFetch = (products) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          resolve(productos.find((item) => item.id == id));
        } else resolve(products);
      }, 2000);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      customFetch(id)
        .then((data) => {
          setItem(data);
        })
        .finally(() => setloading(false));
    }, 2000);
  }, [id]);

  console.log(item);

  return <>{loading ? <Loader /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
