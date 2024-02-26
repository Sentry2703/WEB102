import './App.css'
import Card from './components/Card'
import AliceCoachman from './assets/alice-coachman.jpg'
import AnnieLee from './assets/annie-lee-cooper.jpg'
import BayardRustin from './assets/bayard-rustin.jpg'
import BessieColeman from './assets/bessie-coleman.jpg'
import ClaudetteColvin from './assets/claudette-colvin.jpg'
import DorothyHeight from './assets/dorothy-height.jpg'
import GordonParks from './assets/gordon-parks.jpg'
import GwendolynBrooks from './assets/gwendolyn-brooks.jpg'
import JaneBolin from './assets/jane-bolin.jpg'
import JesseOwens from './assets/jesse-owens.jpg'
import MariaPWilliams from './assets/maria-p-williams.jpg'
import ShirleyChisolm from './assets/shirley-chisolm.jpg'

const App = () => {

  var leaders = [
    {name : "Alice Coachman", image : AliceCoachman, living : "(1923-2014)", link: "https://en.wikipedia.org/wiki/Alice_Coachman"},
    {name : "Annie Lee Cooper", image : AnnieLee, living : "(1910-2010)", link: "https://en.wikipedia.org/wiki/Annie_Lee_Cooper"},
    {name : "Bayard Rustin", image : BayardRustin, living : "(1912-1987)", link: "https://en.wikipedia.org/wiki/Bayard_Rustin"},
    {name : "Bessie Coleman", image : BessieColeman, living : "(1892-1926)", link: "https://en.wikipedia.org/wiki/Bessie_Coleman"},
    {name : "Claudette Colvin", image : ClaudetteColvin, living : "(1939-)",  link: "https://en.wikipedia.org/wiki/Claudette_Colvin"},
    {name : "Dorothy Height", image : DorothyHeight, living : "(1912-2010)", link: "https://en.wikipedia.org/wiki/Dorothy_Height"},
    {name : "Gordon Parks", image : GordonParks, living : "(1912-2006)", link: "https://en.wikipedia.org/wiki/Gordon_Parks"},
    {name : "Gwendolyn Brooks", image : GwendolynBrooks, living : "(1917-2000)", link: "https://en.wikipedia.org/wiki/Gwendolyn_Brooks"},
    {name : "Jane Bolin", image : JaneBolin, living : "(1908-2007)", link: "https://en.wikipedia.org/wiki/Jane_Bolin"},
    {name : "Jesse Owens", image : JesseOwens, living : "(1913-1980)", link: "https://en.wikipedia.org/wiki/Jesse_Owens"},
    {name : "Maria P. Williams", image : MariaPWilliams, living : "(1866-1932)", link: "https://en.wikipedia.org/wiki/Maria_P._Williams"},
    {name : "Shirley Chisolm", image : ShirleyChisolm, living: "(1924-2005)", link: "https://en.wikipedia.org/wiki/Shirley_Chisholm"}
  ]
  return (
    <>
      <h1>Black Leaders</h1>
      <div className = "back">
        {
          leaders.map((leader, index) => {
            return (
              <Card name = {leader.name} image = {leader.image} living = {leader.living} link = {leader.link}/>
            )
          })
        }
          
      </div>
      <h2>Credit: <a href = "https://www.oprahdaily.com/life/g25954127/african-american-historical-figures">Source</a></h2>
    </>
  )
}

export default App
