import React from 'react';
import Orders from './components/Orders';
import Customers from './components/Customers';
import './App.css';
function App() {
  return (
    <div className="App">
      <Orders />
      <Customers />
    </div>
  );
}

export default App;