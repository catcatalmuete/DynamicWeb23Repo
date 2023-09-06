// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Grab root div from HTML and made it a react root with ReactDOM
const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

// Create an app component
function App() {
  return (
    <>
      <h1>PORK ADOBO</h1>

      <img src="adobo.jpeg"></img>

      <h2> Description: A Filipino national dish of pork stewed in a marinade of vinegar,
        soy sauce, garlic, herbs, and spices
      </h2>

      <p>
        Ingredients:
        <br/>1 ½ pounds pork belly
        <br/>⅓ cup dark soy sauce
        <br/>½ cup vinegar
        <br/>1 cup water
        <br/>10-12 pieces peppercorn
        <br/>3 pieces bay leaves
        <br/>1 teaspoon brown sugar
        <br/>1 big onion
        <br/>2 tablespoons oil
        <br/>5 cloves garlic
      </p>

      <p>
        Instructions:
        <br/>1. Place pork belly in a pot. Add the soy sauce, vinegar, water, peppercorn, bay leaves, brown sugar, and onions. Bring to boil over high heat.
        <br/>2. Cover the pot with the lid and lower heat to low. Let it cook for about an hour or until the meat is really tender and liquid is reduced to half. Separate meat from the sauce.
        <br/>3. In a skillet, heat oil over medium-low and add the minced garlic. Cook garlic until golden. Remove some of the garlic from oil leaving about ½ in the pan and transfer the rest to a small bowl.
        <br/>4. Add back the meat to the skillet and cook for a minute or two. Add the sauce again and let it simmer for some minutes until the sauce is reduced some more and becomes thicker.
        <br/>5. Transfer the Pork Adobo to a serving dish and top it with the browned garlic. Serve with hot steaming rice.
      </p>
    </>
  )
}

// Render it in React root / root div element from HTML
root.render(<App />)