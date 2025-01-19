import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';
import '../styles/showcase.css';
import '../styles/tools.css';

// Tax calculation helper function
const calculateCorporateTax = (income, expenses) => {
    const taxableIncome = income - expenses;
    
    // UAE Corporate Tax Rules (as of 2024):
    // - 0% for taxable income up to AED 375,000
    // - 9% for taxable income above AED 375,000
    if (taxableIncome <= 375000) {
        return 0;
    } else {
        return taxableIncome * 0.09;
    }
};

// Error reporting function
const reportError = (error) => {
    console.error('Tax calculation error:', error);
    // You can add more error reporting logic here
};

export default function TaxCalculator() {
    const [income, setIncome] = React.useState('');
    const [expenses, setExpenses] = React.useState('');
    const [result, setResult] = React.useState(null);
    const [error, setError] = React.useState(null);

    const calculateTax = () => {
        try {
            setError(null);
            if (!income || !expenses) return;
            
            const numericIncome = parseFloat(income);
            const numericExpenses = parseFloat(expenses);
            
            // Input validation
            if (isNaN(numericIncome) || isNaN(numericExpenses)) {
                throw new Error('Please enter valid numbers');
            }
            if (numericIncome < 0 || numericExpenses < 0) {
                throw new Error('Values cannot be negative');
            }
            if (numericExpenses > numericIncome) {
                throw new Error('Expenses cannot exceed income');
            }
            
            const tax = calculateCorporateTax(numericIncome, numericExpenses);
            
            setResult({
                taxableIncome: numericIncome - numericExpenses,
                taxAmount: tax,
                effectiveRate: ((tax / (numericIncome - numericExpenses)) * 100).toFixed(2)
            });
        } catch (error) {
            reportError(error);
            setError(error.message);
            setResult(null);
        }
    };

    return (
        <div data-name="tax-calculator" className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Corporate Tax Calculator</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Annual Income</label>
                    <input
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border rounded"
                        placeholder="Enter annual income"
                        min="0"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Total Expenses</label>
                    <input
                        type="number"
                        value={expenses}
                        onChange={(e) => setExpenses(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border rounded"
                        placeholder="Enter total expenses"
                        min="0"
                    />
                </div>
                {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                )}
                <button
                    onClick={calculateTax}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    disabled={!income || !expenses}
                >
                    Calculate Tax
                </button>
                {result && (
                    <div className="mt-4 p-4 bg-gray-50 rounded">
                        <p>Taxable Income: AED {result.taxableIncome.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <p>Tax Amount: AED {result.taxAmount.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                        <p>Effective Tax Rate: {result.effectiveRate}%</p>
                    </div>
                )}
                <div className="text-xs text-gray-500 mt-2">
                    Note: UAE Corporate Tax is 0% for taxable income up to AED 375,000 and 9% for taxable income above AED 375,000
                </div>
            </div>
        </div>
    );
}