
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-cream to-blue-light py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight mb-6">
              Enhancing Vitality and Promoting Healing For Your Horse
            </h1>
            <h2 className="text-xl md:text-2xl text-blue font-medium mb-8">
              Equine Osteopathy with Vanessa Helvey
            </h2>
            <p className="text-lg text-earth mb-8 leading-relaxed">
              Whole horse bodywork techniques tailored to your horse's individual needs that range from fascial and soft tissue to structural adjustments with an emphasis on getting to the root cause of discomfort and tension through an osteopathic lens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://form.jotform.com/251914824550053" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue to-blue-dark hover:from-blue-dark hover:to-blue text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-200 text-center"
              >
                Request an Appointment
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/lovable-uploads/8a1a74dd-8218-4b1e-a52f-83636646c9d9.png"
                alt="Beautiful horse in natural setting"
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
