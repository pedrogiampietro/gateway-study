import { useState } from 'react';

import { StripeContainer } from './components/StripeContainer';
import SpatulaImg from './assets/spatula.jpg';

import './App.css';

export function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className="App">
      <h1>The Spatula Store</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>R$ 10,00</h3>
          <img src={SpatulaImg} alt="Espatula" />
          <button onClick={() => setShowItem(true)}>Purchase</button>
        </>
      )}
    </div>
  );
}
