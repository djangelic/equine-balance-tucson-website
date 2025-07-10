
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    horseName: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-sage mx-auto mb-8"></div>
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
                <div className="bg-sage-light rounded-full p-3 mr-4">
                  <Phone className="text-sage" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Phone</h4>
                  <p className="text-earth">(520) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-sage-light rounded-full p-3 mr-4">
                  <Mail className="text-sage" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Email</h4>
                  <p className="text-earth">vanessa@helveyequine.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-sage-light rounded-full p-3 mr-4">
                  <MapPin className="text-sage" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Service Area</h4>
                  <p className="text-earth">Tucson, Arizona & Surrounding Areas</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-sage-light rounded-full p-3 mr-4">
                  <Clock className="text-sage" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Hours</h4>
                  <p className="text-earth">By appointment, 7 days a week</p>
                </div>
              </div>
            </div>

            <div className="bg-sage-light rounded-lg p-6">
              <h4 className="font-semibold text-navy mb-3">Emergency Services</h4>
              <p className="text-earth text-sm">
                For urgent equine osteopathy needs, please call directly. I understand that horses 
                don't operate on a 9-5 schedule, and I'm committed to being available when you need me most.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-8">
              Request a Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-sage focus:ring-sage"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-sage focus:ring-sage"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-sage focus:ring-sage"
                />
              </div>

              <div>
                <label htmlFor="horseName" className="block text-sm font-medium text-navy mb-2">
                  Horse's Name & Breed
                </label>
                <Input
                  id="horseName"
                  name="horseName"
                  type="text"
                  value={formData.horseName}
                  onChange={handleInputChange}
                  className="border-sage focus:ring-sage"
                  placeholder="e.g., Thunder - Quarter Horse"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Tell me about your horse's needs *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border-sage focus:ring-sage"
                  placeholder="Please describe any specific concerns, symptoms, or goals you have for your horse..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-sage hover:bg-sage-dark text-white"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>

            <p className="text-sm text-earth mt-4">
              * Required fields. I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
