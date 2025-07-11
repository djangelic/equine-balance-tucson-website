
import React from 'react';
import { CheckCircle, MapPin, Calendar, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="text-blue" size={32} />,
      title: "Initial Evaluation",
      description: "Comprehensive assessment of your horse's movement patterns, posture, and areas of tension or restriction.",
      features: ["Full body evaluation", "Movement analysis", "Customized treatment plan", "Owner consultation"]
    },
    {
      icon: <Stethoscope className="text-blue" size={32} />,
      title: "Individual Sessions",
      description: "Personalized osteopathic treatments using gentle, hands-on techniques to restore balance and mobility.",
      features: ["Gentle manual therapy", "Soft tissue work", "Joint mobilization", "Energy balancing"]
    },
    {
      icon: <CheckCircle className="text-blue" size={32} />,
      title: "Follow-up Treatments",
      description: "Ongoing care to maintain progress and address new concerns as they arise in your horse's wellness journey.",
      features: ["Progress monitoring", "Maintenance sessions", "Exercise recommendations", "Long-term care planning"]
    },
    {
      icon: <MapPin className="text-blue" size={32} />,
      title: "Barn Visits",
      description: "Convenient on-location services throughout the Tucson area, bringing professional care to your horse's familiar environment.",
      features: ["Travel to your location", "Familiar environment", "Flexible scheduling", "Multiple horse discounts"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-blue mx-auto mb-8"></div>
          <p className="text-lg text-earth max-w-3xl mx-auto">
            Comprehensive equine osteopathy services designed to enhance your horse's 
            mobility, comfort, and overall well-being through gentle, effective techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-light rounded-full p-3 mr-4">
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
                    <CheckCircle className="text-blue mr-2 flex-shrink-0" size={16} />
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
          <a 
            href="https://form.jotform.com/251914824550053" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue hover:bg-blue-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
