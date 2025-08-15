import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, Phone, Mail } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'general', name: 'General' },
    { id: 'home-loan', name: 'Home Loan' },
    { id: 'personal-loan', name: 'Personal Loan' },
    { id: 'vehicle-loan', name: 'Vehicle Loan' },
    { id: 'business-loan', name: 'Business Loan' },
    { id: 'application', name: 'Application Process' },
    { id: 'documents', name: 'Documentation' },
    { id: 'rates', name: 'Interest Rates' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What types of loans do you offer?',
      answer: 'We offer a comprehensive range of loan products including Home Loans, Personal Loans, Vehicle Loans, Business Loans, Agriculture Loans, and Loan Against Property. Each product is designed to meet specific financial needs with competitive rates and flexible terms.'
    },
    {
      id: 2,
      category: 'general',
      question: 'How long does the loan approval process take?',
      answer: 'Our streamlined process typically takes 24-48 hours for approval once all required documents are submitted and verified. For complex cases or higher loan amounts, it may take up to 7 working days.'
    },
    {
      id: 3,
      category: 'home-loan',
      question: 'What is the maximum loan amount for home loans?',
      answer: 'We offer home loans ranging from ₹50 lakhs to ₹5 crores, depending on your income, credit profile, and the property value. The final amount is determined based on your repayment capacity and eligibility criteria.'
    },
    {
      id: 4,
      category: 'home-loan',
      question: 'Are there any prepayment charges on home loans?',
      answer: 'There are no prepayment charges after the first year of the loan. Within the first year, a nominal charge of 2% may apply on the prepaid amount for floating rate loans.'
    },
    {
      id: 5,
      category: 'personal-loan',
      question: 'Do I need collateral for a personal loan?',
      answer: 'No, personal loans are unsecured loans that do not require any collateral or security. The approval is based on your income, credit score, and repayment capacity.'
    },
    {
      id: 6,
      category: 'personal-loan',
      question: 'What is the minimum income requirement for personal loans?',
      answer: 'The minimum monthly income requirement is ₹20,000 for salaried individuals and ₹25,000 for self-employed individuals. However, eligibility also depends on other factors like credit score and employment stability.'
    },
    {
      id: 7,
      category: 'vehicle-loan',
      question: 'Can I get a loan for both new and used vehicles?',
      answer: 'Yes, we provide financing for both new and used vehicles. For new vehicles, we offer up to 90% financing, while for used vehicles (up to 5 years old), we provide up to 80% financing.'
    },
    {
      id: 8,
      category: 'business-loan',
      question: 'What documents are required for a business loan?',
      answer: 'Key documents include business registration certificate, financial statements for the last 2-3 years, GST returns, income tax returns, bank statements, and proof of business address. Additional documents may be required based on the loan amount and business type.'
    },
    {
      id: 9,
      category: 'application',
      question: 'Can I apply for a loan online?',
      answer: 'Yes, our entire loan application process is digital. You can apply online through our website or mobile app, upload documents digitally, and track your application status in real-time.'
    },
    {
      id: 10,
      category: 'application',
      question: 'How do I track my loan application status?',
      answer: 'You can track your application status by logging into your account on our website or mobile app. You will also receive SMS and email updates at each stage of the process.'
    },
    {
      id: 11,
      category: 'documents',
      question: 'What documents do I need to apply for a loan?',
      answer: 'Common documents include identity proof (Aadhaar, PAN), address proof, income proof (salary slips, ITR), bank statements for the last 6 months, and specific documents based on the loan type (property documents for home loans, vehicle quotation for vehicle loans, etc.).'
    },
    {
      id: 12,
      category: 'documents',
      question: 'Can I submit documents digitally?',
      answer: 'Yes, we accept digital document submission through our secure online platform. Simply scan or photograph your documents and upload them through our website or mobile app.'
    },
    {
      id: 13,
      category: 'rates',
      question: 'How are interest rates determined?',
      answer: 'Interest rates are determined based on factors including your credit score, income level, loan amount, tenure, and current market conditions. Customers with higher credit scores and stable income profiles typically receive better rates.'
    },
    {
      id: 14,
      category: 'rates',
      question: 'Are the interest rates fixed or floating?',
      answer: 'We offer both fixed and floating rate options. Fixed rates remain constant throughout the loan tenure, while floating rates may change based on market conditions and policy rate changes.'
    },
    {
      id: 15,
      category: 'general',
      question: 'What is the minimum credit score required?',
      answer: 'While we consider applications with credit scores as low as 650, a score of 750 and above significantly improves your chances of approval and helps you get better interest rates and terms.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

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
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about our loan products and services. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing {filteredFAQs.length} of {faqs.length} questions
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`text-gray-400 transform transition-transform flex-shrink-0 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No FAQs found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
          </motion.div>
        )}

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-blue-100 mb-8">
            Our customer support team is here to help you with any queries not covered in our FAQ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919876543210"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Us: +91 9876543210</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:info@smartwaysolutions.com"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Email Support</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;