
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Tucson, AZ",
      horse: "Thunder (Quarter Horse)",
      text: "Vanessa's gentle approach completely transformed Thunder's movement. He was so stiff in his shoulders, and after just two sessions, I could see a remarkable difference in his gait. She has such an intuitive touch with horses.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      location: "Oro Valley, AZ", 
      horse: "Bella (Thoroughbred)",
      text: "I was skeptical about osteopathy at first, but Vanessa's work with Bella has been incredible. Not only is Bella moving better, but she seems so much more relaxed and happy. Vanessa truly understands horses.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      location: "Marana, AZ",
      horse: "Rio (Paint Horse)",
      text: "Professional, knowledgeable, and so caring. Vanessa took the time to explain everything she was doing and gave me exercises to help maintain Rio's progress. I couldn't recommend her more highly.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            What Horse Owners Say
          </h2>
          <div className="w-24 h-1 bg-blue mx-auto mb-8"></div>
          <p className="text-lg text-earth max-w-3xl mx-auto">
            Don't just take our word for it. Here's what horse owners throughout the Tucson area 
            have to say about their experience with Helvey Equine Services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-light rounded-lg p-8 relative">
              <div className="absolute top-4 right-4">
                <Quote className="text-blue opacity-50" size={24} />
              </div>
              
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-earth mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-blue pt-4">
                <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                <p className="text-sm text-earth">{testimonial.location}</p>
                <p className="text-sm text-blue font-medium">{testimonial.horse}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
