
import React from 'react';
import { CheckCircle, MapPin, Calendar, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="text-sage" size={32} />,
      title: "Initial Evaluation",
      description: "Comprehensive assessment of your horse's movement patterns, posture, and areas of tension or restriction.",
      features: ["Full body evaluation", "Movement analysis", "Customized treatment plan", "Owner consultation"]
    },
    {
      icon: <Stethoscope className="text-sage" size={32} />,
      title: "Individual Sessions",
      description: "Personalized osteopathic treatments using gentle, hands-on techniques to restore balance and mobility.",
      features: ["Gentle manual therapy", "Soft tissue work", "Joint mobilization", "Energy balancing"]
    },
    {
      icon: <CheckCircle className="text-sage" size={32} />,
      title: "Follow-up Treatments",
      description: "Ongoing care to maintain progress and address new concerns as they arise in your horse's wellness journey.",
      features: ["Progress monitoring", "Maintenance sessions", "Exercise recommendations", "Long-term care planning"]
    },
    {
      icon: <MapPin className="text-sage" size={32} />,
      title: "Barn Visits",
      description: "Convenient on-location services throughout the Tucson area, bringing professional care to your horse's familiar environment.",
      features: ["Travel to your location", "Familiar environment", "Flexible scheduling", "Multiple horse discounts"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-sage-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-sage mx-auto mb-8"></div>
          <p className="text-lg text-earth max-w-3xl mx-auto">
            Comprehensive equine osteopathy services designed to enhance your horse's 
            mobility, comfort, and overall well-being through gentle, effective techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-sage-light rounded-full p-3 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-navy">
                  {service.title}
                </h3>
              </div>
              <p className="text-earth mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-earth">
                    <CheckCircle className="text-sage mr-2 flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-earth mb-6">
            Ready to help your horse feel their best?
          </p>
          <button 
            className="bg-sage hover:bg-sage-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
