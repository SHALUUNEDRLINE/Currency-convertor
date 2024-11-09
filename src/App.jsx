import React, { useState } from 'react';
import data from './Data'; // Assuming the currency data is in Data.js

function App() {
  const [sourceCurrency, setSourceCurrency] = useState(''); // Source currency
  const [targetCurrency, setTargetCurrency] = useState(''); // Target currency
  const [amount, setAmount] = useState(''); // Amount to convert
  const [convertedAmount, setConvertedAmount] = useState(null); // Result after conversion

  // Currency selection handler
  const handleSourceCurrencyChange = (e) => setSourceCurrency(e.target.value);
  const handleTargetCurrencyChange = (e) => setTargetCurrency(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  // Conversion Logic
  const handleConversion = () => {
    if (sourceCurrency && targetCurrency && amount) {
      const sourceCurrencyData = data.find((cur) => cur.currency === sourceCurrency);
      const targetCurrencyData = data.find((cur) => cur.currency === targetCurrency);

      if (sourceCurrencyData && targetCurrencyData) {
        const conversionRate = targetCurrencyData.amount_in_inr / sourceCurrencyData.amount_in_inr;
        const converted = amount * conversionRate;
        setConvertedAmount(converted);
      }
    } else {
      setConvertedAmount(null); // Reset if input is invalid
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
      {/* Currency Converter */}
      <div className="w-full max-w-xl p-8 bg-white rounded-xl shadow-lg space-y-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 text-center">
          Currency Converter
        </h1>

        <div className="space-y-6">
          {/* Source Currency Dropdown */}
          <div>
            <label htmlFor="sourceCurrency" className="block text-sm text-gray-700 font-medium">Select Source Currency</label>
            <select
              id="sourceCurrency"
              onChange={handleSourceCurrencyChange}
              className="w-full mt-2 p-2 border-2 border-transparent bg-gradient-to-r from-green-400 to-blue-500 rounded-md focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
            >
              <option value="">Select Source Currency</option>
              {data.map((Cur, index) => (
                <option key={index} value={Cur.currency}>
                  {Cur.currency} ({Cur.country})
                </option>
              ))}
            </select>
          </div>

          {/* Target Currency Dropdown */}
          <div>
            <label htmlFor="targetCurrency" className="block text-sm text-gray-700 font-medium">Select Target Currency</label>
            <select
              id="targetCurrency"
              onChange={handleTargetCurrencyChange}
              className="w-full mt-2 p-2 border-2 border-transparent bg-gradient-to-r from-green-400 to-blue-500 rounded-md focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
            >
              <option value="">Select Target Currency</option>
              {data.map((Cur, index) => (
                <option key={index} value={Cur.currency}>
                  {Cur.currency} ({Cur.country})
                </option>
              ))}
            </select>
          </div>

          {/* Amount Input */}
          <div>
            <label htmlFor="amount" className="block text-sm text-gray-700 font-medium">Amount to Convert</label>
            <input
              id="amount"
              type="number"
              onChange={handleAmountChange}
              value={amount}
              className="w-full mt-2 p-2 border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-500 rounded-md focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500"
              placeholder="Enter Amount"
            />
          </div>

          {/* Conversion Button */}
          <div>
            <button
              onClick={handleConversion}
              className="w-full py-3 bg-gradient-to-r from-teal-400 to-cyan-600 text-white font-bold rounded-md hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-700 transition-all duration-300"
            >
              Convert
            </button>
          </div>

          {/* Conversion Result */}
          {convertedAmount !== null && (
            <div className="text-center mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Converted Amount: <strong className="text-green-500">{convertedAmount.toFixed(2)}</strong>
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
