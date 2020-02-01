import React, { useState , useMemo } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const expFunc = (count) => {


    let k = 0;

    for (let i = 0; i < 1000000000; i++) {


      k++;

    }

    return count * 90;

  }

  const resCount = useMemo(() => {
    return expFunc(count)
  }, [count])

  return (
    <>
      Count: {resCount}
      <input type="text" onChange={(e) => setCount(e.target.value)} placeholder="Set Count" />
    </>
  )
}

export default App;
