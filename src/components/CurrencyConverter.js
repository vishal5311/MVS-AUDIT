import React, { useState, useEffect } from 'react';
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';
import '../styles/showcase.css';
import '../styles/tools.css';
import '../styles/currency.css';

// Function to fetch exchange rates
async function fetchExchangeRates(baseCurrency) {
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        return null;
    }
}

// Function to convert currency
function convertCurrency(amount, fromRate, toRate) {
    return (amount / fromRate) * toRate;
}

export default function CurrencyConverter() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('AED');
    const [toCurrency, setToCurrency] = useState('USD');
    const [result, setResult] = useState(null);
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadRates = async () => {
            setLoading(true);
            setError('');
            const data = await fetchExchangeRates(fromCurrency);
            if (data) {
                setRates(data.rates);
            } else {
                setError('Could not fetch exchange rates. Please try again.');
            }
            setLoading(false);
        };
        loadRates();
    }, [fromCurrency]);

    const handleConvert = () => {
        if (!rates || !amount) {
            setError('Please ensure all fields are filled.');
            return;
        }
        try {
            const converted = convertCurrency(
                parseFloat(amount),
                rates[fromCurrency],
                rates[toCurrency]
            );
            setResult(converted.toFixed(2));
            setError('');
        } catch (err) {
            setError('Conversion failed. Please check your input.');
        }
    };

    return (
        <div className="currency-converter">
            <h1>Currency Converter</h1>
            <div>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Amount"
                />
            </div>
            <div className="currency-select">
                <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="px-4 py-2 border rounded"
                >
                    {rates && Object.keys(rates).map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
                <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="px-4 py-2 border rounded"
                >
                    {rates && Object.keys(rates).map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleConvert} className="btn-convert">
                Convert
            </button>
            {loading && <p>Loading exchange rates...</p>}
            {error && <p className="error">{error}</p>}
            {result && (
                <p>
                    {amount} {fromCurrency} = {result} {toCurrency}
                </p>
            )}
        </div>
    );
}
