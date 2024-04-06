import './App.css';

import {useEffect, useState} from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  // ✅ Hook is called at the top level (not conditionally)
  useEffect(() => {
    if (counter > 0) {
      console.log('hello world');
    }
  });

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        toggle loading
      </button>
      <h1>Hello world</h1>
    </div>
  );
}
