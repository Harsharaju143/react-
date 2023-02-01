import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

//import App from './App';
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<FavoriteColor />);
