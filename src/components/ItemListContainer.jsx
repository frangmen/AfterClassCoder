import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import productos from "./productos";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();

  const customFetch = (facu) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categoria) {
          resolve(
            productos.filter((producto) => producto.categoria == categoria)
          );
        }
        resolve(facu);
      }, 2000);
    });
  };

  useEffect(() => {
    customFetch(productos)
      .then((data) => setListProducts(data))
      .finally(() => setLoading(false));
  }, [categoria]);    //recordar siempre llenar el array de dependencias para generar los re-render cuando nosotros querramos


  return <>{loading ? <Loader /> : <ItemList listProducts={listProducts} />}</>;
};

export default ItemListContainer;
