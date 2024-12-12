import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cyan-900 shadow dark:bg-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <span className="text-sm text-white text-center md:text-left dark:text-gray-400 mb-4 md:mb-0">
          © 2024 <Link to="/" className="hover:underline">KGN™</Link>. All Rights Reserved.
        </span>
        
        {/* Footer Links */}
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-sm font-medium text-white dark:text-gray-400">
          <li>
            <Link to="/about-us" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/refund-policy" className="hover:underline">
              Refund Policy
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
