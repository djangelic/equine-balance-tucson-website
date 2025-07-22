import React from 'react';
import { Stethoscope, Heart, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="text-blue" size={32} />,
      title: "Initial Evaluation",
      description: "A full-body assessment designed to establish a baseline for your horse's mobility, posture, and comfort. We focus on identifying areas of imbalance, tension, and compensation patterns that may impact your horse's overall performance.",
      features: [
        "In-depth intake of your horse's history and relevant information",
        "Thorough evaluation of range of motion and muscular responses from head to tail",
        "Customized gameplan for moving forward"
      ],
      note: "📝 Note: This session sets the foundation for all future work and is required for all new clients."
    },
    {
      icon: <Heart className="text-blue" size={32} />,
      title: "Individual Sessions (for Horse or Dog)",
      description: "A focused, intuitively guided session tailored to your horse's needs that day. We work with your horse's nervous system and individual anatomy to not only encourage relaxation, but to restore mobility and correct dysfunctional compensation patterns. Evaluation is included.",
      features: [
        "A collaborative session that honors your horse's comfort and responses",
        "Careful selection of appropriate and stabilizing techniques with considerations in mind such as age, past injuries or traumas"
      ],
      note: "📝 Each session is unique and based on how your horse presents that day."
    },
    {
      icon: <Phone className="text-blue" size={32} />,
      title: "Phone Consultations",
      description: "Support between visits when you have questions or need help determining whether a session is right for your horse.",
      features: [],
      note: "📝 These are not veterinary consultations and do not involve medical diagnosis or treatment."
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
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-light rounded-full mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-earth mb-6 leading-relaxed">
                {service.description}
              </p>
              {service.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-navy mb-2">What's Included:</h4>
                  <ul className="space-y-2 text-earth text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {service.note && (
                <p className="text-sm text-earth italic mt-4">
                  {service.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://form.jotform.com/251914824550053" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue to-blue-dark hover:from-blue-dark hover:to-blue text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-200"
          >
            Request an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;