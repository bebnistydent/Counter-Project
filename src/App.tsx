import React, { useState } from 'react';
import { Card } from './components/Card';
import { Counter } from './components/Counter';
import { SetNumber } from './components/SetNumber';

import './App.css';


function App() {
  const [startValue, setStartValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);

  let [counter, setCounter] = useState(startValue);
      

  const setValuesHandler = (start: number, max: number) => {
    setStartValue(start);
    setMaxValue(max);
    setCounter(startValue)
  }

  return (
    <div className="App">
      <Card>
      <Counter 
      startValue={startValue} 
      maxValue={maxValue}
      counter={counter}
      setCounter={setCounter}
      />
      </Card>

      <Card>
        <h2>Set Counter Range</h2>
      <SetNumber 
      onSetValues={setValuesHandler}
      startValue={startValue}
      maxValue={maxValue}
      setStartValue={setStartValue}
      setMaxValue={setMaxValue}
      />  
      </Card>
    </div>
  );
}

export default App;
