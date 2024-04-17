import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "×",
  O: "o",
};


const Square = ({children, updateBoard, index}) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill('o'))


  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square 
              key={index} 
              index={index}>
                {board[index]}
            </Square>
          )
        })}
      </section>
    </main>
  );
}

export default App;
