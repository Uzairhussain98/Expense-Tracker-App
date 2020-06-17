import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Accountsummary from './components/Accountsummary';
import Transactionlist from './components/Transactionlist';
import Addtransaction from './components/Addtransaction';
import {GlobalProvider} from './contexts/Globalstate';


function App() {
  return (
    <GlobalProvider>
      
      <Header/>
      <div className="container">
        <Balance />
        <Accountsummary/>
        <Transactionlist/>
        <Addtransaction/>
        </div>

    </GlobalProvider>
  );
}

export default App;
