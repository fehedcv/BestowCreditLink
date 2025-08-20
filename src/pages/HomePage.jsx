import React, { useState, useEffect } from 'react';
import { 
  Home, Car, User, Building, Tractor, Calculator, 
  CheckCircle, Star, ArrowRight, Shield, Clock, Award,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero section images
  const heroImages = [
    {
      url: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
      alt: "Financial Planning"
    },
    {
      url: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
      alt: "Loan Consultation"
    },
    {
      url: "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg",
      alt: "Business Growth"
    },
    {
      url: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      alt: "Home Investment"
    }
  ];

  // Auto-scroll hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const loanTypes = [
    {
      icon: Home,
      title: 'Home Loan',
      description: 'Fulfill your dream of owning a home with our competitive home loan rates',
      specialty: 'Dream Home Solutions',
      rate: '8.5% onwards',
      features: ['Quick approval', 'Flexible tenure', 'Low documentation']
    },
    {
      icon: Building,
      title: 'NRI Loans',
      description: 'Special loan products designed for Non-Resident Indians',
      specialty: 'NRI Specialists',
      rate: '9.2% onwards',
      features: ['Remote processing', 'Currency flexibility', 'Expert guidance']
    },
    {
      icon: Home,
      title: 'Loan Against Property',
      description: 'Unlock the value of your property for immediate financial needs',
      specialty: 'Property Financing',
      rate: '9.8% onwards',
      features: ['High loan amount', 'Retain ownership', 'Multiple uses']
    },
    {
      icon: Car,
      title: 'Vehicle Loan',
      description: 'Get your dream vehicle with flexible financing options',
      specialty: 'Auto Financing',
      rate: '7.9% onwards',
      features: ['New & used cars', '100% financing', 'Quick disbursal']
    },
    {
      icon: User,
      title: 'Personal Loan',
      description: 'Quick personal loans for your immediate financial needs',
      specialty: 'Personal Finance',
      rate: '10.5% onwards',
      features: ['Instant approval', 'No collateral', 'Flexible EMI']
    },
    {
      icon: Building,
      title: 'Business Loan',
      description: 'Grow your business with our tailored business financing solutions',
      specialty: 'Business Growth',
      rate: '11.2% onwards',
      features: ['Working capital', 'Equipment loans', 'Easy terms']
    },
    {
      icon: Tractor,
      title: 'Agriculture Loan',
      description: 'Support your farming needs with specialized agriculture loans',
      specialty: 'Farm Financing',
      rate: '8.8% onwards',
      features: ['Seasonal loans', 'Equipment finance', 'Crop insurance']
    },
    {
      icon: Calculator,
      title: 'Overdraft (OD)',
      description: 'Flexible credit facility for your working capital needs',
      specialty: 'Credit Solutions',
      rate: '12.5% onwards',
      features: ['Pay as you use', 'Instant access', 'Revolving credit']
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Quick Loans for Your
                <span className="text-yellow-400 block">Financial Dreams</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-lg">
                We offer Home Loans, NRI Loans, Vehicle Loans, Personal Loans,
                Business Loans, Agriculture Loans, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
                    Get in Touch
                  </button>
                </a>
                <a href="/about">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block animate-fade-in-right">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
                
                {/* Image Carousel */}
                <div className="relative z-10 w-full h-96 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={heroImages[currentImageIndex].url}
                    alt={heroImages[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronLeft className="text-white" size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronRight className="text-white" size={24} />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types Section - New Card Style */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Loan Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of loan products designed to meet your specific financial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {loanTypes.map((loan, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-blue-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                    <loan.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{loan.title}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{loan.rate}</div>
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {loan.specialty}
                  </span>
                </div>
                
                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{loan.description}</p>
                  
                  {/* Features List */}
                  <div className="mb-6">
                    {loan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700 mb-2">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <a href="/contact">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
                      Apply Now
                      <ArrowRight className="ml-2" size={16} />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Your Loan?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their financial needs. 
              Start your loan application today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
                  Contact Us Today
                </button>
              </a>
              <a href="/about">
                <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
                  About Our Company
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default HomePage;