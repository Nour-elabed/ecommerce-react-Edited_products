import React from "react";
import FooterSection from "./shared/FooterSection";
import { footerSections, socialIcons } from "./constants/Footer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="space-y-6">
            <img 
              src="/assets/images/logo.svg" 
              alt="NEXTON eCommerce" 
              className="h-8 w-auto mb-2"
            />
            
            
            <div className="space-y-3">
              {socialIcons.map((social) => (
                <a 
                  key={social.id}
                  href="#" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <img 
                    src={social.icon} 
                    alt={social.text}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-sm group-hover:text-blue-600">{social.text}</span>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.id}>
              <FooterSection {...section} />
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300"></div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600">Nexton eCommerce. © 2024</p>
          <img 
            src="/assets/icons/payment-icons.svg" 
            alt="Payment Methods" 
            className="h-6 w-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;