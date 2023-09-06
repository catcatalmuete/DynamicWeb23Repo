// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Grab root div from HTML and made it a react root with ReactDOM
const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

// Create an app component
function App() {
  const name = 'Cat'
  const age = 21

  // React cannot register Booleans
  let coin = 'tails'
  let flip = Math.random()
  if (flip > 0.5) {
    coin = 'heads'
  }

  return (
    <>
      <h1>Hello React!</h1>
      <p>
        My name is {name} and I am {age} years old
      </p>
      <p>Coin flip: {coin}</p>
      <p>Coin flip: {Math.random() > 0.5 ? 'heads' : 'tails'} </p>
    </>
  )
}

// Render it in React root / root div element from HTML
root.render(<App />)
