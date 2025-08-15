import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, Car, User, Building, Tractor, Calculator, 
  CheckCircle, Star, ArrowRight, Shield, Clock, Award
} from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const loanTypes = [
    {
      icon: Home,
      title: 'Home Loan',
      description: 'Fulfill your dream of owning a home with our competitive home loan rates',
      specialty: 'Dream Home Solutions'
    },
    {
      icon: Building,
      title: 'NRI Loans',
      description: 'Special loan products designed for Non-Resident Indians',
      specialty: 'NRI Specialists'
    },
    {
      icon: Home,
      title: 'Loan Against Property',
      description: 'Unlock the value of your property for immediate financial needs',
      specialty: 'Property Financing'
    },
    {
      icon: Car,
      title: 'Vehicle Loan',
      description: 'Get your dream vehicle with flexible financing options',
      specialty: 'Auto Financing'
    },
    {
      icon: User,
      title: 'Personal Loan',
      description: 'Quick personal loans for your immediate financial needs',
      specialty: 'Personal Finance'
    },
    {
      icon: Building,
      title: 'Business Loan',
      description: 'Grow your business with our tailored business financing solutions',
      specialty: 'Business Growth'
    },
    {
      icon: Tractor,
      title: 'Agriculture Loan',
      description: 'Support your farming needs with specialized agriculture loans',
      specialty: 'Farm Financing'
    },
    {
      icon: Calculator,
      title: 'Overdraft (OD)',
      description: 'Flexible credit facility for your working capital needs',
      specialty: 'Credit Solutions'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Get loan approval within 24-48 hours'
    },
    {
      icon: Shield,
      title: 'Secure Process',
      description: 'Bank-grade security for all your documents'
    },
    {
      icon: Award,
      title: 'Best Rates',
      description: 'Competitive interest rates across all products'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'Smart Way Solutions helped me get a business loan quickly. The process was smooth and transparent.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      content: 'Excellent service for my home loan. They guided me through every step of the process.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Entrepreneur',
      content: 'Professional team with great expertise. Got the best rates for my vehicle loan.',
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Quick Loans for Your
                <span className="text-yellow-400 block">Financial Dreams</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-lg">
                Home, Vehicle, Personal & Business loans with competitive rates, 
                quick approval, and transparent processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
                <img
                  src="https://images.pexels.com/photos/7821918/pexels-photo-7821918.jpeg"
                  alt="Financial Solutions"
                  className="relative z-10 rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Loan Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of loan products designed to meet your specific financial needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <loan.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{loan.title}</h3>
                <p className="text-gray-600 mb-4">{loan.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {loan.specialty}
                  </span>
                </div>
                <Link to="/contact">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors">
                    Contact Us
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <User className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
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
              Ready to Get Your Loan?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their financial needs. 
              Start your loan application today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200"
                >
                  Contact Us Today
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200"
                >
                  About Our Company
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;