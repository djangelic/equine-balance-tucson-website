
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
          <div className="w-24 h-1 bg-blue mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div>
            <img
              src="/lovable-uploads/91849e5e-4dbe-48af-a11f-b4a6e0894ce9.png"
              alt="Vanessa Helvey with horse and dog"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-6">
              Equine Osteopath, MMCP & Instructor, BSc
            </h3>
            
            <p className="text-lg text-earth mb-6 leading-relaxed">
              Vanessa graduated top of her class from the Vluggen Institute for Equine Osteopathy 
              and Education in 2017. She then spent an additional 4 years working in a clinical 
              setting with Senior Osteopaths and Veterinarians in Texas and the East Coast, with 
              an emphasis on advanced osteopathic techniques, specifically related to jaw and poll issues.
            </p>

            <p className="text-lg text-earth mb-6 leading-relaxed">
              She also has over a decade of teaching experience for the Masterson Method and has 
              been a certified practitioner since 2012. The Masterson Method is a gentle, integrative 
              modality that allows the horse to be a collaborative partner in their own healing.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-navy mb-4">Extensive Education & Training In:</h4>
              <ul className="space-y-2 text-earth">
                <li>• Principles and philosophy of Equine Osteopathy</li>
                <li>• Equine biomechanics, anatomy and physiology</li>
                <li>• Neuro-anatomy and neuro-physiology (nerve release)</li>
                <li>• Structural manipulations (traditional "adjustments")</li>
                <li>• Strain/Counterstrain</li>
                <li>• Soft tissue and fascial techniques</li>
                <li>• Craniosacral and craniomandibular techniques</li>
                <li>• Visceral mobility and motility</li>
                <li>• Getting to the root cause of your horse's issues and identifying primary issues that create secondary compensation patterns</li>
              </ul>
            </div>

            <p className="text-lg text-earth mb-8 leading-relaxed">
              Vanessa is also trained in canine osteopathy, bringing a comprehensive approach 
              to animal wellness and healing.
            </p>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-blue" size={24} />
                </div>
                <h4 className="font-semibold text-navy mb-2">Compassionate Care</h4>
                <p className="text-sm text-earth">Every horse receives gentle, individualized attention</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue" size={24} />
                </div>
                <h4 className="font-semibold text-navy mb-2">Collaborative Healing</h4>
                <p className="text-sm text-earth">Allowing horses to be partners in their own healing process</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue" size={24} />
                </div>
                <h4 className="font-semibold text-navy mb-2">Advanced Training</h4>
                <p className="text-sm text-earth">Top graduate with extensive clinical experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
