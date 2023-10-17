import {useState, useEffect} from 'react'
import styles from './UI.module.css'
import Piece1 from './assets/1.png'
import Piece2 from './assets/2.png'
import Piece3 from './assets/3.png'
import Piece4 from './assets/4.png'
import Piece5 from './assets/5.png'
import Piece6 from './assets/6.png'
import Piece7 from './assets/7.png'
import Piece8 from './assets/8.png'

const pieceImages = [
  {src: Piece1, matched: false},
  {src: Piece2, matched: false},
  {src: Piece3, matched: false},
  {src: Piece4, matched: false},
  {src: Piece5, matched: false},
  {src: Piece6, matched: false},
  {src: Piece7, matched: false},
  {src: Piece8, matched: false},
]

export default function Puzzle(props) {
  // create some state and setter to store our shuffled cards
  const [pieces, setPieces] = useState([])

  // Keep track of our choices
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shufflePieces = () => {
    // spread all of our card images 2x so we have duplicated to match!
    const shuffledPieces = [...pieceImages]
      // add a sort function which randomly arranges pieceImages such that each piece only appears once
      .sort(() => Math.random() - 0.5)
      // now we map to add another function to add an ID to each item in our new array
      // first we spread the current properties, then we add an ID
      .map((piece) => ({...piece, id: Math.random()}))
    setPieces(shuffledPieces)
  }

  // handleChoice
  const handleChoice = (piece) => {
    // setChoiceOne if choiceOne does not exist, setChoiceTwo if it does exist
    choiceOne ? setChoiceTwo(piece) : setChoiceOne(piece)
  }

  useEffect(() => {
    // first lets make sure we have both choices
    if (choiceOne && choiceTwo) {
      // Map through our pieces and swap the two cards
      setPieces((prevPieces) => {
        return prevPieces.map((piece) => {
          // if the piece is choiceOne, return choiceTwo
          if (piece === choiceOne) {
            return choiceTwo
          } else if (piece === choiceTwo) {
            // if the piece is choiceTwo, return choiceOne
            return choiceOne
          } else {
            // otherwise return the piece
            return piece
          }
        })
      })
      resetTurn()
    }
  }, [choiceOne, choiceTwo])

  console.log(choiceOne, choiceTwo)

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  return (
    <>
      <button onClick={shufflePieces}>New Game</button>
      <div className={styles.container}>
        <div className={styles.grid}>
          {pieces.map((piece) => (
            <Piece
              key={piece.id}
              piece={piece}
              handleChoice={handleChoice}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function Piece(props) {
  const {piece, handleChoice} = props

  // When you click on a piece perform handleChoice
  const handleClick = (event) => {
    handleChoice(piece)
  }

  return (
      <div onClick={handleClick}>
        <img src={piece.src} alt="swap piece" />
      </div>
  )
}