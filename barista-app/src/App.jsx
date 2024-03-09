import { useState } from 'react'
import './App.css'
import BaristaForm from './components/BForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='title-contianer'>
        <h1 className='title'>On My Grind</h1>
        <p>So you think you can become a barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </>
  )
}

export default App
