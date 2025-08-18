import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook,Instagram  } from 'lucide-react';
import logo from '../assets/LOGO BC.pdf (3).svg';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              {/* Desktop Logo */}
              <div className="hidden sm:block">
                <img
                  src={logo}
                  alt="Bestow Credit Link"
                  className="h-16 w-32 lg:h-20 lg:w-40 object-contain"
                />
              </div>
              {/* Mobile Logo */}
              <div className="sm:hidden">
                <img
                  src={logo}
                  alt="Bestow Credit Link"
                  className="h-12 w-24 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Bestow Credit Link</h1>
                <p className="text-sm text-gray-300">Your Trusted Financial Partner</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              We specialize in providing comprehensive loan solutions including home loans, 
              NRI loans, personal loans, and business financing to help you achieve your financial goals.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home Loan', href: '/contact' },
                { name: 'NRI Loans', href: '/contact' },
                { name: 'Personal Loan', href: '/contact' },
                { name: 'Business Loan', href: '/contact' },
                { name: 'Agriculture Loan', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 83300 50027</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 83300 50028</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm break-all">info@bestowcreditlink.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Kanhangad, Kasarkod, Kerala
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bestow Credit Link. All rights reserved. | 
            <span className="hover:text-white transition-colors cursor-pointer"> Privacy Policy</span> | 
            <span className="hover:text-white transition-colors cursor-pointer"> Terms & Conditions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;