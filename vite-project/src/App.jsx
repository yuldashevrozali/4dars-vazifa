import { useState } from 'react'
import Stitle from './companents/title'
import { Stitleinput,Stitleinput2,Stitleinput3 } from './companents/inputs'
import { Select,Select2,Select3,Select4 } from './companents/select'
import Snext from './companents/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="form">
        <Stitle></Stitle>
        <Stitleinput></Stitleinput>
        <Select></Select>
        <Select2></Select2>
        <Stitleinput2></Stitleinput2>
        <Select3></Select3>
        <Select4></Select4>
        <Stitleinput3></Stitleinput3><br />
        <Snext></Snext>
      </div>
    </>
  )
}

export default App
