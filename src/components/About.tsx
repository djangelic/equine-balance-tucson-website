
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
              src="/lovable-uploads/6e5028e4-6227-49f9-9a9a-0c15f04e2fe6.png"
              alt="Vanessa Helvey with horse and dog"
              className="rounded-lg shadow-lg w-full h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-6">
              Equine Osteopath, MMCP & Instructor, BSc
            </h3>
            
            <p className="text-lg text-earth mb-6 leading-relaxed">
              Vanessa graduated top of her class from the Vluggen Institute for Equine Osteopathy and Education in 2017. The program is unique in that it covers not only extensive training in the musculoskeletal and fascial network, but the cranio sacral and visceral (organ) systems as well. She then spent an additional four years working in a clinical setting with Senior Osteopaths and Veterinarians in Texas and the East Coast, with an emphasis on advanced osteopathic techniques, specifically related to jaw and poll issues. She is also a Canine Osteopath.
            </p>

            <p className="text-lg text-earth mb-6 leading-relaxed">
              She has over a decade of teaching experience for the Masterson Method and has been a Certified Practitioner since 2012. The Masterson Method is a gentle, integrative modality that allows the horse to participate in the process of releasing tension and improving mobility. Jim Masterson developed this method in the late 1990s and has worked with the US Endurance Team; he continues to train and educate globally.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-navy mb-4">Training & Post Graduate Education in:</h4>
              <ul className="space-y-2 text-earth">
                <li>• Equine & Canine Anatomy, Biomechanics and Physiology</li>
                <li>• The Masterson Method</li>
                <li>• Neuro-anatomy, Neuro-physiology & Nerve Manipulation Techniques</li>
                <li>• Advanced Craniosacral & Craniomandibular Techniques</li>
                <li>• Canine Osteopathy</li>
                <li>• Osteopathic Functional & Structural Techniques</li>
                <li>• Visceral Mobility & Motility</li>
              </ul>
            </div>

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
