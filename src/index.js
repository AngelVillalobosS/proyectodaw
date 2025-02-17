import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const dinero = 300;

const producto1 = {
  nombre: "Pelotas",
  costo: 300,
};

const producto2 = {
  nombre: "casas",
  costo: 100,
};

function mealcanza(money) {
  if (money >= 300) {
    return (
      <h1>
        Si me alcanza para {producto1.nombre} de {producto1.costo}
      </h1>
    );
  } else {
    return (
      <h1>
        Solo me alcanza para {producto2.nombre} de {producto2.costo}
      </h1>
    );
  }
}

const elemento = (
  <div>
    <h1>Mi dinero es de: {dinero}</h1>
    <div>{mealcanza(dinero)}</div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elemento);
