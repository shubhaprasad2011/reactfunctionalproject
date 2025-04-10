import './App.css';
import Header from '../src/Components/Header'
import React, { JSX } from 'react';

const App: React.FC = (): JSX.Element => {

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
};

export default App;
