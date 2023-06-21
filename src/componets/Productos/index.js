import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { ProductoItem} from "./ProductoItem";


export const Body = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  
  const [menu, setMenu] = useState({
    todos: false,
    hamburguesa: false,
    pollo: false,
    hotdog: false,
  });

  const [datosFiltrados, setDatosFiltrados] = useState([]);

  const filterCategorias = ("click",(e) => {
  
    setMenu({
      ...menu,
      [e.target.value]: e.target.checked,
    });
    if (e.target.checked) {
      const resultadoMenu = productos.filter(
        (item) => item.categoria === e.target.value
      );

      setDatosFiltrados([...resultadoMenu]);
    } else{
      filterCategorias(setMenu)
    }
  
  }); 



  return (
    <div className="hero">
      <div className="titulo-categorias">
        <h1 className="titulo">NUESTROS PRODUCTOS</h1>
       
      </div>
      <div className="productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            categoria={producto.categoria}
            ingredientes={producto.ingredientes}
            cantidad={producto.cantidad}
          />
        ))}
      </div>
    </div>
  );
};
