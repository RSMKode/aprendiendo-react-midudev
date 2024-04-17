import { useEffect, useState } from 'react'

import './App.css'

function App() {
const [enabled, setEnabled] = useState(false)
const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log(enabled)
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove',clientX, clientY)
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }

  }, [enabled])

  return (
  <main className='app'>
  <h1>Proyecto Mouse Follower</h1>
  <button onClick={() => setEnabled(!enabled)}>
    {enabled ? 'Desactivar' : 'Activar'} seguimiento del puntero
  </button>
  <div style={{ 
    position: 'absolute',
    top:'-2rem',
    left: '-2rem',
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    border: '2px solid red',
    backgroundColor: 'black',
    opacity: 0.5,
    pointerEvents: 'none',
    transform: `translate(${position.x}px, ${position.y}px)`,
   }}>

  </div>
  </main>
  )
}

export default App
