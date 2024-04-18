/* eslint-disable */

// const inputRef = useRef()
const handleSubmit = (event) => {
  //* Evitar que el formulario recargue la página
  event.preventDefault();
  //* Obtener los datos del formulario
  //* FormData es una clase que permite crear un Set con pares clave/valor
  //* Object.fromEntries convierte un FormData en un objeto plano
  const fields = Object.fromEntries(new window.FormData(event.target));
  console.log(fields);
  const { query } = fields;
  //* Gestionando el formulario de forma "descontrolada", desde el DOM, no desde React (incluso con el uso de useRef)
};
