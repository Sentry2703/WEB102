import { useState } from 'react'
import './App.css'
import Samosa from './assets/samosa.jpeg'
function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setCount(count - 10);
      setMultiplier(2);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(count - 100);
      setMultiplier(5);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(count - 1000);
      setMultiplier(10);
    }
  }

  return (
    <div className="App">
      <div className = "header">
        <h1> Samosa Selector </h1>

        <h2> Count: {count}</h2>

        <img src = {Samosa} alt="samosa" onClick = {updateCount}/>
      </div>

      <div className = "container">

        <div className = "upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p> 2x per click</p>
          <button onClick = {buyDoubleStuffed}> 10 samosas to activate </button>
        </div>

        <div className = "upgrade">
          <h3>Party Pack 🎉</h3>
          <p> 5x per click </p>
          <button onClick={buyPartyPack}> 100 samosas to activate </button>
        </div>

        <div className = "upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p> 10x per click </p>
          <button onClick = {buyFullFeast}> 1000 samosas to activate </button>
        </div>

      </div>
    </div>
  )
}

export default App
