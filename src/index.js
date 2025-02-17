import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const caja={
  tipo: 'text',
  ph: 'Teclea Texto',
  link: 'https://www.google.com',
  tg: '_blank'
}
function muestraCaja(){
  return <div><input type={caja.tipo} placeholder={caja.ph}></input></div>
}

function muestraLink(){
  return <div>
    <a href={caja.link} target={caja.tg}>Google</a>
  </div>
}
const elemento = (
  <div>
  {muestraCaja()}
  {muestraLink()}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elemento);
