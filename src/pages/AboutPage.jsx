import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Award, Users, TrendingUp, CheckCircle, 
  Target, Heart, Lightbulb, Star, MapPin, Calculator,
  Building, Phone, Mail
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '8+' },
    { icon: Building, label: 'Partner Banks & NBFCs', value: '15+' },
    { icon: MapPin, label: 'Cities We Serve', value: '50+' },
    { icon: TrendingUp, label: 'Loans Processed', value: '₹25 Crore+' }
  ];

  const services = [
    {
      title: 'Our Mission',
      description: 'To provide transparent and hassle-free financial solutions to individuals and businesses.'
    },
    {
      title: 'Our Vision',
      description: 'To become a trusted financial partner helping people achieve their dreams through smart lending.'
    },
    {
      title: 'Our Values',
      description: 'Transparency, integrity, customer-first approach, and ethical business practices.'
    },
    {
      title: 'Our Commitment',
      description: 'Dedicated to providing personalized service and competitive rates for all our clients.'
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Customer Satisfaction',
      subtitle: '2500+ happy customers served'
    },
    {
      icon: Calculator,
      title: 'Smart Technology',
      description: 'Advanced loan calculators and digital tools for better financial planning.',
      subtitle: 'Get instant loan eligibility and EMI calculations online!'
    }
  ];

  const benefits = [
    'Quick Processing',
    'Competitive Rates', 
    'Expert Guidance',
    'Digital Experience',
    'Transparent Process'
  ];

  const timeline = [
    { year: '2016', title: 'Company Founded', icon: Building },
    { year: '2017', title: 'First Partnership Established', icon: Phone },
    { year: '2018', title: 'Team Expansion', icon: TrendingUp },
    { year: '2019', title: 'Digital Platform Launch', icon: Calculator },
    { year: '2021', title: 'Multi-City Presence', icon: MapPin },
    { year: '2022', title: 'Technology Upgrade', icon: Lightbulb },
    { year: '2024', title: 'Industry Recognition', icon: Award }
  ];

  const recognitions = [
    { name: 'Best Service', color: 'bg-blue-600' },
    { name: 'Customer Choice', color: 'bg-gray-600' },
    { name: 'Excellence Award', color: 'bg-yellow-600' },
    { name: 'Trust Badge', color: 'bg-green-600' },
    { name: 'Quality Service', color: 'bg-purple-600' }
  ];

  const faqs = [
    {
      question: 'What makes us different from other loan providers?',
      answer: 'We focus on personalized service, transparent processes, and building long-term relationships with our customers. Our team of experienced professionals ensures you get the best loan options suited to your needs.'
    },
    {
      question: 'Why should you choose us?',
      answer: 'We offer competitive interest rates, quick processing, minimal documentation, and dedicated customer support throughout your loan journey.'
    },
    {
      question: 'How do we ensure the best rates?',
      answer: 'We work with multiple banks and financial institutions to compare and negotiate the best possible rates for our customers.'
    },
    {
      question: 'What is our process?',
      answer: 'Simple 4-step process: Application → Document Verification → Approval → Disbursement. We handle all paperwork and bank coordination.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Notice Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-400 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <p className="text-gray-700">
              <strong>Note:</strong> We do not charge any processing fees upfront. Beware of fraudulent calls asking for advance payments. Always verify through our official channels.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
            <h2 className="text-xl text-gray-600 font-medium">YOUR TRUSTED FINANCIAL PARTNER</h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg border text-center"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    {feature.subtitle && (
                      <p className="text-gray-600 mb-2">{feature.subtitle}</p>
                    )}
                    {feature.description && (
                      <p className="text-gray-600">{feature.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Benefits */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Why Choose Us</h4>
                <div className="flex flex-wrap gap-3">
                  {benefits.map((benefit, index) => (
                    <span key={index} className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-400 to-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Users size={32} />
                  </div>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Calculator size={32} />
                  </div>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <TrendingUp size={32} />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-xl font-bold mb-2">Financial Excellence</h3>
                  <p className="text-blue-100">Empowering your financial journey</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-blue-100 rounded-2xl p-4">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                  alt="Founder"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl text-blue-600 mb-4">"</div>
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                Building Trust Through Transparent Financial Solutions
              </h2>
              <div className="border-l-4 border-red-500 pl-6 mb-6">
                <p className="text-gray-600 leading-relaxed">
                  "Our journey began with a simple belief - everyone deserves access to fair and transparent financial services. 
                  We've built our company on the foundation of trust, integrity, and customer satisfaction. Our team works 
                  tirelessly to ensure that each client receives personalized attention and the best possible loan solutions. 
                  We're not just loan providers; we're your financial partners committed to helping you achieve your dreams."
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Rajesh Kumar</h4>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Building trust, one client at a time</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Path */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-gradient-to-r from-red-300 via-blue-300 to-red-300 rounded-full"></div>
            </div>

            {/* Timeline Items */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-white border-4 border-red-500 rounded-full flex items-center justify-center mb-4 z-10">
                    <item.icon size={20} className="text-red-500" />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 mb-2">{item.year}</div>
                    <p className="text-sm text-gray-600">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Awards & Recognition 🏆</h2>
          </motion.div>

          <div className="flex justify-center items-end space-x-8">
            {recognitions.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${award.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <Award className="text-white" size={24} />
                </div>
                <div className="w-20 h-6 bg-yellow-400 rounded-full mx-auto mb-2"></div>
                <p className="text-sm font-medium text-gray-700">{award.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center justify-between">
                    {faq.question}
                    <span className="text-gray-400">^</span>
                  </h3>
                  {index === 0 && (
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;