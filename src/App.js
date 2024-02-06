import './App.css';
import currency from './currency';
import { useState } from 'react';

// Develop a currency converter application that allows users to input an amount in one currency and convert it to another. 
// For the sake of this challenge, you can use a hard-coded exchange rate. Take advantage of React state and event handlers 
// to manage the input and conversion calculations.
function App() {

  const [code, setCode] = useState(currency);
  let [amount, setAmount]= useState(0);
  let [currencyFrom, setCurrencyFrom] = useState('');
  let [currencyTo, setCurrencyTo] = useState('');

   const exchangerate = [
    {
      GBPINR : 106.12,
      AUDINR : 40 
    }
  ];

  let id = 0 ;

  function handleCurrencyFrom(event){
      setCurrencyFrom(event.target.value);
  }

  function handlecurrencyTo(event) {
    setCurrencyTo(event.target.value);
  }

  function displayAmount() {
    if (parseInt(amount) === 0) {
      alert("Please enter amount");
      return;
    }
    if(currencyFrom === "" || currencyTo === ""){
      alert("Please select currency from dropdown!")
      return;
    }
    const curr = currencyFrom.concat(currencyTo);
    const rate = exchangerate[0][curr];
    if(!rate){
      alert("Conversion rate not found!");
      return;
    }

    amount = parseFloat(amount*rate).toFixed(2);
    setAmount(amount);
  }
  return (
    <div className="App">
      <div className='currencyFromTo'>
      <p className='from'>
        <p><label htmlFor="html">From</label></p>
        <select onChange={handleCurrencyFrom} value={currencyFrom}>
          <option value="">--Select</option>
          {
            code.currency.map((c,id) => <option key={id++} value={c}>{c}</option>)
          }
        </select>
      </p>
        
      <p className='to'>
        <p><label htmlFor="html">To</label></p>
        <select onChange={handlecurrencyTo} value={currencyTo}>
          <option value="">--Select</option>
          {
            code.currency.map((c,id) => <option key={id++} value={c}>{c}</option>)
          }
        </select>
        </p>
    </div>
    <div className='amount'>
        <p>
          <input type="text" placeholder="Enter an amount" onChange={(e) => setAmount(e.target.value)}/>
        </p>
        <p>
        <input type="button" value="Convert" onClick={displayAmount} />
        </p>
        <p><label htmlFor="html">Converted amount is:</label>
        {amount > 0 &&<label htmlFor="html">{amount}</label>  }   
        </p>
      </div>    
    </div>
  );
}

export default App;
