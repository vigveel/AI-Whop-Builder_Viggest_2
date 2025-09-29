
import React from "react";
import { mockData } from "../data/mock";

const Footer = () => {
  const { footer } = mockData;

  const handleLinkClick = (link) => {
    // Mock action - will be replaced with real functionality
    alert(`Navigate to ${link} (Mock action)`);
  };

  return (
    <footer className="bg-secondary border-t border-border-subtle">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div className="md:col-span-2">
            <h3 className="h3 text-primary-text mb-4">{footer.company}</h3>
            <p className="body-md text-secondary-text max-w-md">
              AI-powered tools for digital product creators. Launch faster, validate smarter, grow together.
            </p>
          </div>
          
          {/* Links Section */}
          <div>
            <h4 className="h4 text-primary-text mb-4">Links</h4>
            <ul className="space-y-2">
              {footer.links.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(link)}
                    className="body-md text-secondary-text hover:text-accent transition-colors cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h4 className="h4 text-primary-text mb-4">Connect</h4>
            <p className="body-md text-secondary-text mb-4">
              Join our community and stay updated
            </p>
            <button 
              onClick={() => handleLinkClick('Discord')}
              className="btn-secondary"
            >
              Join Discord
            </button>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border-subtle mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="body-sm text-muted">
              © 2024 {footer.company}. All rights reserved.
            </p>
            <p className="body-sm text-muted max-w-md text-left md:text-right">
              {footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;