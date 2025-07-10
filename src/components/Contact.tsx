
import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-blue mx-auto mb-8"></div>
          <p className="text-lg text-earth max-w-3xl mx-auto">
            Ready to help your horse feel their best? I'd love to discuss how equine osteopathy 
            can benefit your horse's health and performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-light rounded-full p-3 mr-4">
                  <Phone className="text-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Phone</h4>
                  <p className="text-earth">(520) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-light rounded-full p-3 mr-4">
                  <Mail className="text-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Email</h4>
                  <p className="text-earth">vanessa@helveyequine.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-light rounded-full p-3 mr-4">
                  <MapPin className="text-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Service Area</h4>
                  <p className="text-earth">Tucson, Arizona & Surrounding Areas</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-light rounded-full p-3 mr-4">
                  <Clock className="text-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Hours</h4>
                  <p className="text-earth">By appointment, 7 days a week</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-light rounded-lg p-6">
              <h4 className="font-semibold text-navy mb-3">Emergency Services</h4>
              <p className="text-earth text-sm">
                For urgent equine osteopathy needs, please call directly. I understand that horses 
                don't operate on a 9-5 schedule, and I'm committed to being available when you need me most.
              </p>
            </div>
          </div>

          {/* Contact Form Button */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-8">
              Request a Consultation
            </h3>
            
            <div className="bg-blue-light rounded-lg p-8 text-center">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-navy mb-3">
                  Ready to Schedule?
                </h4>
                <p className="text-earth">
                  Click below to fill out our consultation request form. I'll get back to you within 24 hours 
                  to discuss your horse's needs and schedule an appointment.
                </p>
              </div>
              
              <Button
                asChild
                size="lg"
                className="bg-blue hover:bg-blue-dark text-white px-8 py-3"
              >
                <a 
                  href="https://forms.google.com/your-form-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Request Consultation
                </a>
              </Button>
              
              <p className="text-sm text-earth mt-4">
                Prefer to call? Reach me directly at (520) 555-0123
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
