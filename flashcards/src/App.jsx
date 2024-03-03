import './App.css'
import FrenchFlag from './assets/frenchflag.png'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [currentCard, setCurrentCard] = useState(0)
  const [isFront, setIsFront] = useState(true)

  const flashcards = [
    {
      "Q": "pousser des marguerites",
      "T": "To push up daisies",
      "A": "This expression is a delicate way of saying that someone has passed away."
    },

    {
      "Q": "mettre la charrue avant les bœufs",
      "T": "To put the cart before the horse",
      "A": "This expression means to act prematurely, without following the logical order of things."
    },

    {
      "Q": "pédaler dans la semoule",
      "T": "Get nowhere fast",
      "A": "This euphemism means encountering difficulties or being in a complicated situation without being able to progress easily."
    },

    {
      "Q": "être dans les bras de Morphée",
      "T": "To be in the arms of Morpheus",
      "A": "A poetic way of saying that someone is sleeping."
    },

    {
      "Q": "monter sur ses grands chevaux",
      "T": "To get on one's high horse",
      "A": "This expression means to react excessively or angrily to a situation, adopting a haughty attitude."
    },

    {
      "Q": "péter les plombs",
      "T": "To blow a fuse",
      "A": "An expression that means losing one's temper, becoming furious, or exploding with anger."
    },

    {
      "Q":"passer l'arme à gauche",
      "T": "Switch the weapon to the left",
      "A": "A gentler way of saying that someone has passed away, using a military metaphor to talk about death."
    },

    {
      "Q": "faire la grasse matinée",
      "T": "To have a fat morning",
      "A": "This expression means staying in bed late in the morning, extending one's sleep beyond the usual waking hour."
    },

    {
      "Q": "tourner autour du pot",
      "T": "To beat around the bush",
      "A": "This expression means avoiding speaking directly about a subject, using detours or circumlocutions."
    },

    {
      "Q": "avoir un poil dans la main",
      "T": "have a hair in one's hand",
      "A": "This expression is used to describe a lazy person, suggesting that they prefer not to work."
    },
  ];

  return (
    <>
      <h1>French Euphemisms</h1>

      <h2>Quelle est la qualite de vos expressions francaises?</h2>

      <h3>(How good are your french idoms?) There are {flashcards.length} cards</h3>

      <img src = {FrenchFlag} alt = "French Flag" />

      
      <Card flashcards = {flashcards} currentCard = {currentCard} isFront = {isFront}  />

      <div className = "buttons">
        <button className = "mover" onClick = {() => {console.log(currentCard); if (currentCard == 0) { setCurrentCard(9) } else {setCurrentCard(currentCard - 1)}}}> Previous </button>

        <button className = "flip" onClick={() => {setIsFront(!isFront); console.log(isFront)}}>Flip</button>

        <button className = "mover" onClick = {() => {console.log(currentCard); if (currentCard == 9) { setCurrentCard(0) } else {setCurrentCard(currentCard + 1)}}}> Next </button>
      </div>
    </>
  )
}

export default App
