import { useEffect, useState } from "react";

import "./App.css";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // -> useEffect recibe una función y un array de dependencias	
  // -> el array de dependencias es opcional
  // [] -> solo se ejecuta una vez, cuando se monta el componente
  // [enabled] -> se ejecuta cuando se monta el componente y cuando cambia la variable enabled
  // undefined -> (si no se le pasa un array de dependencias) el efecto se ejecuta en cada renderizado

  // pointer move
  useEffect(() => {
    console.log("effect", enabled);
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", clientX, clientY);
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("mousemove", handleMouseMove);
      //getEventListeners(window, 'mousemove') en la consola del navegador para controlar las suscripciones a los eventos
    }

    //cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => { // cleanup method
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, [enabled]);

  // change body className
  useEffect(() => {
    console.log("no-cursor effect", enabled)
    document.body.classList.toggle('no-cursor', enabled)
    // se hace en un efecto porque el objeto document NO existe en el servidor, por eso no se hace en el cuerpo del componente

    return () => {
      document.body.classList.remove('no-cursor')
    }

  }, [enabled]);

  return (
    <>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguimiento del puntero
      </button>
      <div
        style={{
          position: "absolute",
          top: "-2rem",
          left: "-2rem",
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
          border: "2px solid red",
          backgroundColor: "black",
          opacity: 0.5,
          pointerEvents: "none",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </>
  );
};

function App() {
  return (
    <main className="app">
      <h1>Proyecto Mouse Follower</h1>
      <FollowMouse />
    </main>
  );
}

export default App;
