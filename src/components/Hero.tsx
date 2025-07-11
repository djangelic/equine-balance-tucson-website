
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-cream to-blue-light py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight mb-6">
              Restoring Movement & Balance for Your Horse
            </h1>
            <h2 className="text-xl md:text-2xl text-blue font-medium mb-8">
              Equine Osteopathy with Vanessa Helvey
            </h2>
            <p className="text-lg text-earth mb-8 leading-relaxed">
              Gentle, holistic bodywork techniques focused on improving your horse's mobility, 
              comfort, and performance through intuitive, hands-on care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-blue hover:bg-blue-dark text-white px-8 py-3 text-lg"
              >
                <a 
                  href="https://form.jotform.com/251914824550053" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get a Quote
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue text-blue hover:bg-blue hover:text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80"
                alt="Beautiful horses in natural setting"
                className="rounded-lg shadow-2xl w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-blue opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
