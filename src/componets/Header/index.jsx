import React, { useContext } from "react";
import logo from "../../imagenes/logo.png";
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart] = value.cart;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav className="navbar">
        <div className="user-cart">
          <div className="btn">
            <Link to="/">
              <box-icon
                type="solid"
                name="home"
                size="30px"
                animation="tada-hover"
              ></box-icon>
            </Link>
          </div>

          <div className="btn">
            <Link to={"/User"}>
            <box-icon
              type="solid"
              name="user-x"
              size="40px"
              animation="tada-hover"
            ></box-icon>
            </Link>
          </div>
          <div className="btn" onClick={toggleMenu}>
            <box-icon
              type="solid"
              name="cart-alt"
              size="30px"
              animation="tada-hover"
            ></box-icon>
            <span className="item-total">{cart.length}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
