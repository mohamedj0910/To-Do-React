import { useState } from 'react'
import './App.css'
import AddItem from './components/AddItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddItem />
    </>
  )
}

export default App
