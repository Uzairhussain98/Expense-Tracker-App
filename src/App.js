import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Accountsummary from './components/Accountsummary';
import Transactionlist from './components/Transactionlist';
import Addtransaction from './components/Addtransaction';


function App() {
  return (
    <div>
      
      <Header/>
      <div className="container">
        <Balance />
        <Accountsummary/>
        <Transactionlist/>
        <Addtransaction/>
        </div>

    </div>
  );
}

export default App;
