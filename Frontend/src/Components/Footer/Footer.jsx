import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Information */}
          <div className="col-span-1 md:col-span-2">
            {/* <img src="/api/placeholder/150/75" alt="VCET Logo" className="mb-4" /> */}
            <h3 className="text-xl font-semibold mb-2">Vidyavardhini's College of Engineering and Technology</h3>
            <p className="mb-2">Nurturing Engineers, Shaping Futures</p>
            <address className="not-italic">
              <p className="flex items-center mb-1">
                <MapPin size={16} className="mr-2" />
                K.T. Marg, Vasai Road (W), Dist. Palghar, Maharashtra, India - 401202
              </p>
              <p className="flex items-center mb-1">
                <Phone size={16} className="mr-2" />
                +91-250-2338234
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                principal@vcet.edu.in
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Academics</a></li>
              <li><a href="#" className="hover:text-blue-300">Admissions</a></li>
              <li><a href="#" className="hover:text-blue-300">Research</a></li>
              <li><a href="#" className="hover:text-blue-300">Placements</a></li>
              <li><a href="#" className="hover:text-blue-300">Alumni</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-blue-300" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-300" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-300" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-300" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-blue-800 text-white placeholder-blue-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-700 px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Vidyavardhini's College of Engineering and Technology. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-300 mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;