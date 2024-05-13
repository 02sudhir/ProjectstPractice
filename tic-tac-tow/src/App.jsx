import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'


const initialBoard =() =>  Array(9).fill(null)

function App() {
   const [board, setBoard] = useState(initialBoard());

   console.log(board);

  return (
    <>
    <div className='game'>
     <div className='status'> Player X turn</div>
     <button>Reset Game</button>
     <div className='board'> { board.map((__, index)=>{
      return <button className='cell' key={index}>X</button>
     })}</div>
     </div>  
    </>
  )
}

export default App
