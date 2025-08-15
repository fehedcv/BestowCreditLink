import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown, CheckCircle, Info } from 'lucide-react';

const RatesPage = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [selectedLoan, setSelectedLoan] = useState('home');

  const loanRates = [
    {
      type: 'home',
      name: 'Home Loan',
      rate: '8.5% - 12.0%',
      processing: '0.5% - 2.0%',
      features: ['No prepayment charges', 'Tax benefits', 'Flexible tenure']
    },
    {
      type: 'personal',
      name: 'Personal Loan',
      rate: '10.5% - 24.0%',
      processing: '1.0% - 3.0%',
      features: ['No collateral', 'Quick disbursal', 'Flexible usage']
    },
    {
      type: 'vehicle',
      name: 'Vehicle Loan',
      rate: '9.2% - 15.0%',
      processing: '0.5% - 2.5%',
      features: ['Up to 90% funding', 'Insurance facility', 'Quick approval']
    },
    {
      type: 'business',
      name: 'Business Loan',
      rate: '11.0% - 20.0%',
      processing: '1.5% - 3.5%',
      features: ['Working capital', 'Equipment finance', 'Overdraft facility']
    }
  ];

  const lenders = [
    {
      name: 'HDFC Bank',
      homeRate: '8.50%',
      personalRate: '10.75%',
      vehicleRate: '9.25%',
      businessRate: '11.50%',
      rating: 4.5
    },
    {
      name: 'ICICI Bank',
      homeRate: '8.70%',
      personalRate: '11.25%',
      vehicleRate: '9.50%',
      businessRate: '12.00%',
      rating: 4.3
    },
    {
      name: 'SBI',
      homeRate: '8.60%',
      personalRate: '11.50%',
      vehicleRate: '9.30%',
      businessRate: '11.75%',
      rating: 4.2
    },
    {
      name: 'Axis Bank',
      homeRate: '8.75%',
      personalRate: '12.00%',
      vehicleRate: '9.75%',
      businessRate: '12.25%',
      rating: 4.1
    }
  ];

  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi;
  };

  const emi = calculateEMI();
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - loanAmount;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Interest Rates & Calculator</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Compare competitive rates from top lenders and calculate your EMI 
              with our advanced loan calculator.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* EMI Calculator */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 sticky top-8"
            >
              <div className="flex items-center mb-6">
                <Calculator className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold">EMI Calculator</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
                  <input
                    type="range"
                    min="50000"
                    max="10000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹50K</span>
                    <span className="font-semibold text-blue-600">₹{(loanAmount / 100000).toFixed(1)}L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <input
                    type="range"
                    min="6"
                    max="25"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>6%</span>
                    <span className="font-semibold text-blue-600">{interestRate}%</span>
                    <span>25%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Tenure (Years)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 year</span>
                    <span className="font-semibold text-blue-600">{tenure} years</span>
                    <span>30 years</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Calculation Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Monthly EMI:</span>
                    <span className="font-bold text-blue-900">₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Total Interest:</span>
                    <span className="font-bold text-blue-900">₹{totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Total Amount:</span>
                    <span className="font-bold text-blue-900">₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Apply for This Loan
              </button>
            </motion.div>
          </div>

          {/* Rates and Comparison */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interest Rates by Product */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Interest Rates by Product</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loanRates.map((loan, index) => (
                  <div key={loan.type} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{loan.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest Rate:</span>
                        <span className="font-semibold text-green-600">{loan.rate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Processing Fee:</span>
                        <span className="font-semibold">{loan.processing}</span>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Lender Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Compare Rates from Top Lenders</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4">Lender</th>
                      <th className="text-left py-3 px-4">Home Loan</th>
                      <th className="text-left py-3 px-4">Personal Loan</th>
                      <th className="text-left py-3 px-4">Vehicle Loan</th>
                      <th className="text-left py-3 px-4">Business Loan</th>
                      <th className="text-left py-3 px-4">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lenders.map((lender, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-semibold">{lender.name}</td>
                        <td className="py-4 px-4 text-green-600 font-semibold">{lender.homeRate}</td>
                        <td className="py-4 px-4 text-green-600 font-semibold">{lender.personalRate}</td>
                        <td className="py-4 px-4 text-green-600 font-semibold">{lender.vehicleRate}</td>
                        <td className="py-4 px-4 text-green-600 font-semibold">{lender.businessRate}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <span className="mr-1">{lender.rating}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-sm ${i < Math.floor(lender.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="text-blue-600 mt-0.5 flex-shrink-0" size={18} />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Important Note:</p>
                    <p>Interest rates are subject to change based on RBI guidelines and lender policies. Final rates may vary based on your credit profile, loan amount, and tenure. Processing fees and other charges are applicable as per lender terms.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesPage;