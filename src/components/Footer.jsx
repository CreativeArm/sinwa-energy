// src/components/Footer.jsx

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-darkblue text-gray-300 py-12 px-4 md:px-10 cursor-default">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img
            src="/Logo/logo 2.png"
            alt="Sinwaenergy Logo"
            className="h-[60px] mb-4"
          />
          <p className="text-sm">
            Specialized geoscience training programs for industry professionals.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/trainings" className="hover:text-primary">
                Trainings
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 id="contact" className="text-white font-semibold mb-4">
            Contact
          </h4>
          <ul className="text-sm space-y-2">
            <li>Virtual / Nigeria</li>
            <li>+234 813 260 5528</li>
            <li>info@sinwaenergy.com</li>
            <li>www.sinwaenergy.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary">
              <img src="/image/icon/facebook.png" alt="" className="h-5" />
            </a>
            <a href="#" className="hover:text-primary">
              <img src="/image/icon/instagram.png" alt="" className="h-5" />
            </a>
            <a href="#" className="hover:text-primary">
              <img src="/image/icon/linkedIn.png" alt="" className="h-5" />
            </a>
            <a href="#" className="hover:text-primary">
              <img src="/image/icon/twitter.png" alt="" className="h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Sinwaenergy. All rights reserved.
      </div>
    </footer>
  );
}
