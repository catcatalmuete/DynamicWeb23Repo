import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './routes/Homepage';
import Dog from './routes/Dog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/:name" element={<Dog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
