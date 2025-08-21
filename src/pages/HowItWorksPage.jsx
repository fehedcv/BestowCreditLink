import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, FileText, CheckCircle, CreditCard, 
  ArrowRight, Clock, Phone, Mail, Shield
} from 'lucide-react';

const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: Search,
      title: 'Choose Your Loan',
      description: 'Select the loan type that best fits your needs from our wide range of products',
      details: [
        'Browse through our loan products',
        'Compare interest rates and terms',
        'Use our loan calculator for EMI estimation',
        'Read eligibility criteria carefully'
      ],
      duration: '5 minutes'
    },
    {
      id: 2,
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out our simple online application form with your personal and financial details',
      details: [
        'Complete the online application form',
        'Upload required documents',
        'Provide accurate information',
        'Review and submit your application'
      ],
      duration: '15 minutes'
    },
    {
      id: 3,
      icon: CheckCircle,
      title: 'Document Verification',
      description: 'Our team will verify your documents and assess your application for approval',
      details: [
        'Document verification process',
        'Credit score assessment',
        'Income and employment verification',
        'Property valuation (if applicable)'
      ],
      duration: '24-48 hours'
    },
    {
      id: 4,
      icon: CreditCard,
      title: 'Loan Disbursal',
      description: 'Once approved, your loan amount will be disbursed directly to your account',
      details: [
        'Loan approval notification',
        'Agreement signing',
        'Final documentation',
        'Amount transfer to your account'
      ],
      duration: '24 hours'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Quick Processing',
      description: 'Get loan approval within 24-48 hours'
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Bank-level security for all your data'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    },
    {
      icon: Mail,
      title: 'Digital Process',
      description: 'Completely paperless application'
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
            <h1 className="text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get your loan in 4 simple steps. Our streamlined process ensures 
              quick approval and hassle-free experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Steps Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'transform -translate-y-2' : ''
                }`}
              >
                <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 border-2 transition-all duration-300 ${
                  activeStep === index ? 'border-blue-500' : 'border-transparent'
                }`}>
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                      activeStep === index ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                    }`}>
                      <step.icon size={28} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center mb-4">{step.description}</p>
                  <div className="text-center">
                    <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Step Information */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-4">
                    {React.createElement(steps[activeStep].icon, { size: 24 })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{steps[activeStep].title}</h2>
                    <p className="text-blue-600 font-semibold">Step {steps[activeStep].id} of 4</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-6">{steps[activeStep].description}</p>
                <ul className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <span className="text-sm text-gray-500">Estimated Time: </span>
                  <span className="text-blue-600 font-semibold">{steps[activeStep].duration}</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    {/* <steps[activeStep].icon size={120} className="text-blue-600" /> */}
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl">
                    {steps[activeStep].id}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeStep === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeStep === steps.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Process?</h2>
            <p className="text-xl text-gray-600">
              Experience the easiest and fastest loan application process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Application?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands who have successfully obtained loan through our platform
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200"
            >
              Start Application Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;