import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

export const Cart = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;
  const [total] = value.total;

  const toggleFalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carts show" : "carts";
  const show2 = menu ? "cart show" : "cart";

  const restarCantidad = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCart([...cart]);
    });
  };

  const sumaCantidad = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCart([...cart]);
    });
  };

  const deleteProduct = (id) => {
    if (window.confirm("¿deseas eliminar el producto?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  const pagar = () => {
    if (window.confirm("¿deseas finalizar tu compras?")) {
      alert("gracias por tu compra");
    }
    setCart([]);
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="cart-close" onClick={toggleFalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2 className="titulo-carts">TUS COMPRAS </h2>
        <div className="cart-center">
          {cart.length === 0 ? (
            <h2 className="carro-vacio">su carro esta vacio 😟</h2>
          ) : (
            <>
              {cart.map((producto) => (
                <div className="cart-item" key={producto.id}>
                  <img src={producto.image} alt="imagen compra" />
                  <div>
                    <h3 className="titulo-cart">{producto.title}</h3>
                    <p className="precio-cart">{producto.price}</p>
                  </div>
                  <div className="icons-cantidad">
                    <box-icon
                      name="up-arrow"
                      type="solid"
                      onClick={() => sumaCantidad(producto.id)}
                    ></box-icon>
                    <p className="cantidad">{producto.cantidad}</p>
                    <box-icon
                      name="down-arrow"
                      type="solid"
                      onClick={() => restarCantidad(producto.id)}
                    ></box-icon>
                  </div>
                  <div
                    className="delete"
                    onClick={() => deleteProduct(producto.id)}
                  >
                    <box-icon name="trash" size="3rem"></box-icon>
                  </div>
                </div>
              ))}
            </>
          )}

          <div className="cart-footer">
            <h3>total: ${total}</h3>
            <button className="pagar" onClick={pagar}>
              pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
