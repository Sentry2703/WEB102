import './App.css'
import Card from './components/Card'

const App = () => {

  return (
    <>
      <h1>Black Leaders</h1>
      <div className = "back">
          <Card name = "Harriet Tubman" image = "../assets/alice-coachman.jpg"/>
          <Card name = "Martin Luther King Jr."/>
          <Card name = "Rosa Parks"/>
          <Card name = "Malcolm X"/>
          <Card name = "Maya Angelou"/>
          <Card name = "Thurgood Marshall"/>
      </div>
      <footer>Credit: https://www.oprahdaily.com/life/g25954127/african-american-historical-figures/</footer>
    </>
  )
}

export default App
