import React, { useReducer, useContext } from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {
  Call1Parent, Memo1Counter, Ref1FocusInput, Ref2ClassTimer, Ref3HookTimer, Cus1DocTitle1, Cus2DocTitle2, Cus3Counter1, Cus4Counter2, Cus5UserForm
} from './exports.js'

function App() {
  return (
    <div className="text-center">
      <Header />
      <h2>Custom Hooks</h2>
      <Cus1DocTitle1 />
      <Cus2DocTitle2 />
      <Cus3Counter1 />
      <Cus4Counter2 />
      <Cus5UserForm />

      {/* <h2>useRef() Hook</h2>
      <Ref1FocusInput />
      <Ref2ClassTimer />
      <Ref3HookTimer /> */}

      {/* <h2>useMemo() Hook</h2>
      <Memo1Counter /> */}

      {/* <h2>useCallback() Hook</h2>
      <Call1Parent /> */}

      <Footer />
    </div>
  );
}

export default App;
