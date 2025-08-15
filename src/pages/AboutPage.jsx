import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Award, Users, TrendingUp, CheckCircle, 
  Target, Heart, Lightbulb, Star
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: TrendingUp, label: 'Loans Disbursed', value: '₹5,000 Cr+' },
    { icon: Award, label: 'Years of Experience', value: '15+' },
    { icon: Shield, label: 'Partner Banks', value: '25+' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in all our dealings with clear terms and no hidden charges.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. We strive to exceed their expectations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to provide better financial solutions and improved customer experience.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We are committed to delivering excellence in service quality and customer satisfaction.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Gupta',
      role: 'Chief Executive Officer',
      experience: '20+ years',
      description: 'Former banking executive with expertise in retail lending and financial services.'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      experience: '15+ years',
      description: 'Technology leader with experience in fintech and digital transformation.'
    },
    {
      name: 'Amit Kumar',
      role: 'Head of Operations',
      experience: '18+ years',
      description: 'Operations expert specializing in loan processing and customer service.'
    },
    {
      name: 'Sunita Patel',
      role: 'Head of Risk Management',
      experience: '12+ years',
      description: 'Risk management professional with expertise in credit assessment and compliance.'
    }
  ];

  const milestones = [
    { year: '2009', title: 'Company Founded', description: 'Started with a vision to simplify loan processes' },
    { year: '2012', title: 'Digital Platform Launch', description: 'Launched our first online loan application platform' },
    { year: '2016', title: '10,000 Customers', description: 'Reached milestone of serving 10,000+ customers' },
    { year: '2020', title: 'Mobile App Launch', description: 'Introduced mobile app for better customer experience' },
    { year: '2024', title: '50,000+ Customers', description: 'Proud to serve over 50,000 satisfied customers' }
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
            <h1 className="text-5xl font-bold mb-6">About Bestow Credit Link</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted financial partner for over 15 years, committed to making 
              loan processes simple, transparent, and customer-friendly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Our Mission"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mission</h3>
                  <p className="text-gray-600">
                    To democratize access to financial services by providing simple, transparent, 
                    and customer-centric loan solutions that empower individuals and businesses 
                    to achieve their goals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Vision</h3>
                  <p className="text-gray-600">
                    To become India's most trusted and preferred financial services platform, 
                    known for innovation, integrity, and exceptional customer experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide us in everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10">
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals leading our organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600">
              We maintain the highest standards of compliance and security
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">RBI Guidelines</h3>
                <p className="text-gray-600">Fully compliant with RBI regulations and guidelines</p>
              </div>
              <div className="text-center p-6">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">ISO 27001</h3>
                <p className="text-gray-600">Information security management certified</p>
              </div>
              <div className="text-center p-6">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">SSL Secured</h3>
                <p className="text-gray-600">256-bit SSL encryption for data protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;