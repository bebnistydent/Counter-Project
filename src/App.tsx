import React from 'react';
import logo from './logo.svg';
import { Card } from './components/Card';
import { Counter } from './components/Counter';
import './App.css';


function App() {
  return (
    <div className="App">
      <Card>
      <Counter />
      </Card>
    </div>
  );
}

export default App;
