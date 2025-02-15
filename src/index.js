import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const alumnoTic={
    nombre:'Natalia',
    apodo:'naty',
    salon: '101'
}

function informacionAlumno(alumnoTic) {
    return `Alumno : ${alumnoTic.nombre} de apodo: ${alumnoTic.apodo}`
}

function salon(alumnoTic){
  return `${alumnoTic.salon}`
}

const elemento = <div>Hola {informacionAlumno(alumnoTic)} del salon {salon(alumnoTic)}</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elemento
);

