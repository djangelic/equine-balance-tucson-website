
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
                src="/lovable-uploads/9d8a8ef1-57ee-43ef-b597-3972a1f686aa.png" 
                alt="Helvey Equine Services Logo" 
                className="h-12 w-12 bg-white rounded-full p-2"
              />
              <div>
                <h3 className="text-xl font-serif font-bold">Be Well Equine</h3>
                <p className="text-sm text-cream">Equine Osteopathy, Craniosacral and Masterson Method</p>
              </div>
            </div>
            <p className="text-cream mb-4">
              Dedicated to enhancing vitality and promoting healing for horses throughout Arizona 
              through gentle, professional osteopathic care.
            </p>
            <div className="flex items-center text-blue-light">
              <Heart size={16} className="mr-2" />
              <span className="text-sm">Caring for horses with compassion and expertise</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-cream hover:text-blue-light transition-colors">Home</a></li>
              <li><a href="#about" className="text-cream hover:text-blue-light transition-colors">About Vanessa</a></li>
              <li><a href="#services" className="text-cream hover:text-blue-light transition-colors">Services</a></li>
              <li><a href="#contact" className="text-cream hover:text-blue-light transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 text-blue-light" />
                <span className="text-cream">Arizona & Surrounding Areas</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-blue">
              <p className="text-sm text-cream">
                <strong>Service Hours:</strong> By appointment, 7 days a week
              </p>
              <div className="mt-4">
                <a 
                  href="https://form.jotform.com/251914824550053" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue to-blue-dark hover:from-blue-dark hover:to-blue text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200"
                >
                  Request an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-cream text-sm italic">
              *Bodywork supports your animal's well-being, but it is never a replacement for veterinary diagnosis or treatment.
            </p>
          </div>
          <div className="text-center">
            <p className="text-cream text-sm">
              © 2025 Be Well Equine. All rights reserved. 
              <span className="mx-2">•</span>
              Licensed Equine Osteopath serving Arizona
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
