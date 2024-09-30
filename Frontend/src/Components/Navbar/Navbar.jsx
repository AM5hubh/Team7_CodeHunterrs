import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">Logo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
                <div className="relative">
                  <button onClick={toggleDropdown} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 1</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 2</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 3</a>
                      </div>
                    </div>
                  )}
                </div>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium">Login</button>
              <button className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium ml-2">Sign up</button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
            <button onClick={toggleDropdown} className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center justify-between">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Service 1</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Service 2</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Service 3</a>
              </div>
            )}
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium w-full">Login</button>
            </div>
            <div className="mt-3 flex items-center px-5">
              <button className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium w-full">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;