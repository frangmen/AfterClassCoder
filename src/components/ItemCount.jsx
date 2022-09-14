import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock }) => {

  const [contador, setContador] = useState(initial);
  
  const sumar = () => {
   if (contador < stock) {
    setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > initial) {
    setContador(contador - 1); }
  };

  const agregarAlCarro = () => {
    setContador(contador);
   
    console.log("Me agregue al carrito");
  };

  return (
    <>
      <button onClick={() => sumar()}> + </button>
      <button onClick={() => restar()}> - </button>
      <span> {contador} </span>
      <button onClick={() => agregarAlCarro()}> Agregar Al Carrito </button>
    </>
  );
};

export default ItemCount;
