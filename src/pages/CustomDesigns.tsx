import { FC } from 'react';
import Layout from '../components/layout/Layout';

const designSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Meet with our expert tailors to discuss your vision, preferences, and requirements."
  },
  {
    number: "02",
    title: "Fabric Selection",
    description: "Choose from our premium collection of fabrics that best suits your design."
  },
  {
    number: "03",
    title: "Measurements",
    description: "Get precise measurements taken by our experienced tailors for the perfect fit."
  },
  {
    number: "04",
    title: "Design Details",
    description: "Finalize design elements, including style, cut, and finishing touches."
  }
];

const CustomDesigns: FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Custom Design Process
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the art of bespoke tailoring with our expert craftsmen. 
            Every garment is meticulously crafted to your exact specifications.
          </p>
        </div>

        {/* Design Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {designSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 bg-white/5 rounded-lg group hover:bg-white/10 transition-colors duration-300"
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#ffe066] rounded-full flex items-center justify-center text-2xl font-bold text-black">
                {step.number}
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Preview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Recent Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg group">
              <img 
                src="/images/custom-designs/wedding-gown.png" 
                alt="Wedding Gown" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Wedding Gown</h3>
                  <p className="text-white/80">Custom-designed silk wedding gown with intricate hand-sewn beadwork</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg group">
              <img 
                src="/images/custom-designs/evening-suit.png" 
                alt="Evening Suit" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Evening Suit</h3>
                  <p className="text-white/80">Tailored wool evening suit with satin lapels</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Your Custom Design Journey
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Schedule a consultation with our expert tailors and bring your vision to life.
          </p>
          <a
            href="/fabrics"
            className="inline-block px-8 py-4 bg-[#ffe066] text-black font-bold tracking-wider uppercase hover:bg-[#ffe066]/90 transition-colors duration-300"
          >
            Explore Fabrics
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default CustomDesigns;
