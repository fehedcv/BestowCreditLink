import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, Car, User, Building, Tractor, CreditCard, Globe, Calculator,
  CheckCircle, ArrowRight, FileText, Clock, Shield
} from 'lucide-react';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: 'home-loan',
      icon: Home,
      title: 'Home Loan',
      subtitle: 'Turn Your Dream Home Into Reality',
      description: 'Get competitive home loan rates with flexible repayment options and quick processing.',
      rate: '8.5% onwards',
      amount: '₹50L - ₹5Cr',
      tenure: 'Up to 30 years',
      features: [
        'No prepayment charges after 1 year',
        'Doorstep service for documentation',
        'Quick approval within 24-48 hours',
        'Flexible EMI options',
        'Top-up loan facility available'
      ],
      eligibility: [
        'Age: 21-65 years',
        'Minimum income: ₹25,000/month',
        'Work experience: 2+ years',
        'Good credit score (750+)'
      ],
      documents: [
        'Identity proof',
        'Address proof',
        'Income proof',
        'Bank statements',
        'Property documents'
      ]
    },
    {
      id: 'vehicle-loan',
      icon: Car,
      title: 'Vehicle Loan',
      subtitle: 'Drive Your Dreams Today',
      description: 'Get your dream vehicle with attractive interest rates and flexible EMI options.',
      rate: '9.2% onwards',
      amount: '₹2L - ₹50L',
      tenure: 'Up to 7 years',
      features: [
        'Up to 90% financing',
        'Quick approval process',
        'Flexible repayment options',
        'Both new and used vehicles',
        'Insurance facility available'
      ],
      eligibility: [
        'Age: 21-60 years',
        'Minimum income: ₹20,000/month',
        'Work experience: 1+ years',
        'Valid driving license'
      ],
      documents: [
        'Identity proof',
        'Address proof',
        'Income proof',
        'Driving license',
        'Vehicle quotation/RC'
      ]
    },
    {
      id: 'personal-loan',
      icon: User,
      title: 'Personal Loan',
      subtitle: 'Quick Cash for Personal Needs',
      description: 'Get instant personal loans for your immediate financial requirements with minimal documentation.',
      rate: '10.5% onwards',
      amount: '₹50K - ₹10L',
      tenure: 'Up to 5 years',
      features: [
        'No collateral required',
        'Quick disbursal within hours',
        'Minimal documentation',
        'Flexible usage',
        'Part prepayment facility'
      ],
      eligibility: [
        'Age: 23-60 years',
        'Minimum income: ₹20,000/month',
        'Work experience: 1+ years',
        'Good credit score (700+)'
      ],
      documents: [
        'Identity proof',
        'Address proof',
        'Income proof',
        'Bank statements',
        'Employment proof'
      ]
    },
    {
      id: 'business-loan',
      icon: Building,
      title: 'Business Loan',
      subtitle: 'Fuel Your Business Growth',
      description: 'Comprehensive business financing solutions to help grow and expand your business operations.',
      rate: '11.0% onwards',
      amount: '₹5L - ₹2Cr',
      tenure: 'Up to 10 years',
      features: [
        'Working capital solutions',
        'Equipment financing',
        'Business expansion loans',
        'Flexible repayment terms',
        'Overdraft facility'
      ],
      eligibility: [
        'Business vintage: 2+ years',
        'Annual turnover: ₹10L+',
        'Good business credit score',
        'Profitable business'
      ],
      documents: [
        'Business registration',
        'Financial statements',
        'Bank statements',
        'GST returns',
        'Income tax returns'
      ]
    },
    {
      id: 'agriculture-loan',
      icon: Tractor,
      title: 'Agriculture Loan',
      subtitle: 'Support for Farming Community',
      description: 'Specialized loan products for farmers and agricultural businesses with government subsidies.',
      rate: '7.5% onwards',
      amount: '₹1L - ₹25L',
      tenure: 'Up to 5 years',
      features: [
        'Government subsidy benefits',
        'Seasonal payment options',
        'Equipment financing',
        'Crop loan facility',
        'Insurance coverage'
      ],
      eligibility: [
        'Age: 18-65 years',
        'Land ownership proof',
        'Farming experience',
        'Good repayment history'
      ],
      documents: [
        'Land documents',
        'Identity proof',
        'Address proof',
        'Income proof',
        'Crop details'
      ]
    },
    {
      id: 'property-loan',
      icon: CreditCard,
      title: 'Loan Against Property',
      subtitle: 'Unlock Your Property Value',
      description: 'Get high-value loans against your residential or commercial property at attractive rates.',
      rate: '9.5% onwards',
      amount: '₹10L - ₹10Cr',
      tenure: 'Up to 20 years',
      features: [
        'High loan amounts',
        'Competitive interest rates',
        'Flexible repayment options',
        'Multiple end-use options',
        'Quick processing'
      ],
      eligibility: [
        'Age: 25-70 years',
        'Property ownership',
        'Stable income',
        'Good credit history'
      ],
      documents: [
        'Property documents',
        'Identity proof',
        'Income proof',
        'Bank statements',
        'Property valuation'
      ]
    }
  ];

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
            <h1 className="text-5xl font-bold mb-6">Our Loan Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to meet your diverse needs. 
              Choose from our range of loan products with competitive rates and flexible terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedService === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {React.createElement(service.icon, { size: 20 })}
                <span>{service.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  {React.createElement(services[selectedService].icon, { size: 32 })}
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{services[selectedService].title}</h2>
                  <p className="text-blue-100">{services[selectedService].subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-blue-100">{services[selectedService].description}</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Loan Details */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Interest Rate</h4>
                      <p className="text-2xl font-bold text-green-600">{services[selectedService].rate}</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Loan Amount</h4>
                      <p className="text-2xl font-bold text-blue-600">{services[selectedService].amount}</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Tenure</h4>
                      <p className="text-2xl font-bold text-purple-600">{services[selectedService].tenure}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services[selectedService].features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Eligibility */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Eligibility Criteria</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services[selectedService].eligibility.map((criteria, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{criteria}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Required Documents */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Required Documents</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services[selectedService].documents.map((document, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <FileText className="text-gray-400 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-gray-700">{document}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-lg font-bold mb-4 text-blue-900">Quick Application</h3>
                    <p className="text-blue-700 mb-4">Get started with your loan application today!</p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors mb-3">
                      Apply Now
                    </button>
                    <button className="w-full bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 rounded-lg border border-blue-200 transition-colors">
                      Calculate EMI
                    </button>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <h3 className="text-lg font-bold mb-3 text-yellow-800">Need Help?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="text-yellow-600" size={18} />
                        <span className="text-yellow-700">24/7 Customer Support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="text-yellow-600" size={18} />
                        <span className="text-yellow-700">Secure & Confidential</span>
                      </div>
                    </div>
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg mt-4 transition-colors">
                      Get Free Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;