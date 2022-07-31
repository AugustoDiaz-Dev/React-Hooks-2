import React, { useReducer, useContext } from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {
  Call1Parent
} from './exports.js'

function App() {
  return (
    <div className="text-center">
      <Header />

      <h2>useCallback() Hook</h2>
      <Call1Parent />

      <Footer />
    </div>
  );
}

export default App;
