import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

export const ProductoItem = ({
  id,
  title,
  price,
  image,
  categoria,
  ingredientes,
  cantidad,
}) => {

const value = useContext(DataContext);
const addCart = value.addCart;


  return (
    <div className="producto">
      <img src={image} alt="producto1"></img>
      <div className="caracteristicas">
        <h2 className="titulo-producto">{title}</h2>
        <p className="ingredientes">{ingredientes}</p>
        <p className="precio">{price}$</p>
      </div>
      <div className="bottom">
        <button className="agregar" onClick={() => addCart(id)}>agregar al carrito</button>
      </div>
    </div>
  );
};
