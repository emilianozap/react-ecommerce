import React from "react";
import logo from "../../imagenes/logo.png";
import carro from "../../imagenes/carro.png";

export const Footer = () => {
  return (
    <footer className="footer ">
      <div className="contactos">
        <div className="redes-sociales">
          <div>
            <h1>Nuestras Redes Sociales</h1>
          </div>
          <div className="redes">
            <box-icon
              type="logo"
              name="whatsapp"
              size="100px"
              color="white"
              animation="tada"
            ></box-icon>
            <box-icon
              type="logo"
              name="instagram"
              size="100px"
              color="white"
              animation="tada"
            ></box-icon>
            <box-icon
              type="logo"
              name="facebook"
              size="100px"
              color="white"
              animation="tada"
            ></box-icon>
          </div>
        </div>

        <div className="maps">
          <h1>📍 Av. Gaona 2248, Ramos Mejía, Provincia de Buenos Aires</h1>
          <img className="logo" src={carro} alt="carrito" />
        </div>
      </div>
      <img className="logo" src={logo} alt="logo portafolio" />
      <p class="footer-text text-center">
        “No dejes para mañana, lo que puedes comer hoy”
      </p>
      <p class="derechos-de-autor">Creado por Emiliano Zapata (2023) &#169;</p>
    </footer>
  );
};
