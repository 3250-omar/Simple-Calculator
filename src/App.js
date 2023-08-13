import { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Body } from './Components/body';
function App() {
  const [progress , setProgress] =useState([])
  const [result , setResult] =useState([])

  return (
    <div className="App">
      <div className='Calculator'>
        <Header progress={progress} result={result}/>
        <Body setProgress={setProgress} setResult={setResult} progress={progress} result={result}/>
      </div>
    </div>
  );
}

export default App;
