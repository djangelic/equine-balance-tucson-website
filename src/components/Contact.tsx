import React from 'react';
import { ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-blue mx-auto mb-8"></div>
          <p className="text-lg text-earth max-w-2xl mx-auto">
            Ready to help your horse feel their best? Request a consultation to discuss 
            your horse's specific needs and how we can work together.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-blue-light rounded-lg p-8 max-w-md w-full text-center">
            <h3 className="text-2xl font-serif font-bold text-navy mb-6">
              Schedule Your Consultation
            </h3>
            <p className="text-earth mb-8 leading-relaxed">
              Fill out our consultation form to get started. We'll discuss your horse's 
              history, current concerns, and create a personalized treatment plan.
            </p>
            <a 
              href="https://form.jotform.com/251914824550053" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue to-blue-dark hover:from-blue-dark hover:to-blue text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-200"
            >
              Request an Appointment
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;