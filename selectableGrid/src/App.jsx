import { useState } from 'react'
import SelectableGrid from './componensts/SelectableGrid'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Selelctable Grid</h1>
    <SelectableGrid rows={15} cols={15} />
    </>
  )
}

export default App
