
import React from 'react';
import { Heart, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            About Vanessa Helvey
          </h2>
          <div className="w-24 h-1 bg-sage mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&q=80"
              alt="Vanessa working with a horse"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-6">
              Passionate About Equine Wellness
            </h3>
            <p className="text-lg text-earth mb-6 leading-relaxed">
              With years of dedicated training in equine osteopathy and a lifelong passion for horses, 
              I've built my practice on the foundation of trust, intuition, and gentle care. Based in 
              beautiful Tucson, Arizona, I work with horses and their owners to restore natural movement 
              and enhance overall well-being.
            </p>
            <p className="text-lg text-earth mb-8 leading-relaxed">
              My philosophy centers on listening to each horse as an individual, using hands-on techniques 
              that honor their natural healing abilities while building trust between horse and rider.
            </p>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-sage-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-sage" size={24} />
                </div>
                <h4 className="font-semibold text-navy mb-2">Compassionate Care</h4>
                <p className="text-sm text-earth">Every horse receives gentle, individualized attention</p>
              </div>
              <div className="text-center">
                <div className="bg-sage-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-sage" size={24} />
                </div>
                <h4 className="font-semibold text-navy mb-2">Trust Building</h4>
                <p className="text-sm text-earth">Fostering confidence between horse and rider</p>
              </div>
              <div className="text-center">
                <div className="bg-sage-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-sage" size={24} />
                </div>
                <h4 className="font-semibold text-navy mb-2">Expert Training</h4>
                <p className="text-sm text-earth">Certified in advanced equine osteopathy techniques</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
