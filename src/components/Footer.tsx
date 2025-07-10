
import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/9004b75e-babb-4ef4-8c26-230834da3273.png" 
                alt="Helvey Equine Services Logo" 
                className="h-12 w-12 bg-white rounded-full p-2"
              />
              <div>
                <h3 className="text-xl font-serif font-bold">Helvey Equine</h3>
                <p className="text-sm text-cream">Equine Osteopathy Services</p>
              </div>
            </div>
            <p className="text-cream mb-4">
              Dedicated to restoring movement and balance for horses throughout Tucson, Arizona 
              through gentle, professional osteopathic care.
            </p>
            <div className="flex items-center text-sage">
              <Heart size={16} className="mr-2" />
              <span className="text-sm">Caring for horses with compassion and expertise</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-cream hover:text-sage transition-colors">Home</a></li>
              <li><a href="#about" className="text-cream hover:text-sage transition-colors">About Vanessa</a></li>
              <li><a href="#services" className="text-cream hover:text-sage transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-cream hover:text-sage transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="text-cream hover:text-sage transition-colors">Horse Care Tips</a></li>
              <li><a href="#contact" className="text-cream hover:text-sage transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-sage" />
                <span className="text-cream">(520) 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-sage" />
                <span className="text-cream">vanessa@helveyequine.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 text-sage" />
                <span className="text-cream">Tucson, AZ & Surrounding Areas</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-sage">
              <p className="text-sm text-cream">
                <strong>Service Hours:</strong> By appointment, 7 days a week
              </p>
              <p className="text-xs text-cream mt-2">
                Emergency consultations available
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-sage mt-8 pt-8 text-center">
          <p className="text-cream text-sm">
            © 2025 Helvey Equine Services. All rights reserved. 
            <span className="mx-2">•</span>
            Licensed Equine Osteopath serving Tucson, Arizona
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
