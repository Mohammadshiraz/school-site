import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons from react-icons library
// Assuming Tailwind CSS is set up and imported via Footer.css

function Footer() {
  return (
    <footer className="mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 (Empty for illustration) */}
          <div className="hidden lg:block"></div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Education Lane</p>
            <p>Cityville, State, ZIP Code</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@springdale.edu</p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm">
            &copy; 2024 Springdale Public School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
