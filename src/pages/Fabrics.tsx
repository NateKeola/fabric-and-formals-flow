import { FC } from 'react';
import Layout from '../components/layout/Layout';

const fabricCategories = [
  {
    name: "Silk",
    image: "/images/fabrics/c_dsc2946a.JPG",
    description: "Luxurious silk fabrics perfect for elegant evening wear and special occasions.",
    features: [
      "Premium quality",
      "Rich texture",
      "Perfect drape",
      "Available in various weights"
    ]
  },
  {
    name: "Wool",
    image: "/images/fabrics/c_dsc2947a.JPG",
    description: "Fine wool fabrics ideal for tailored suits and formal wear.",
    features: [
      "Superior quality",
      "Excellent durability",
      "Natural breathability",
      "Wide range of patterns"
    ]
  },
  {
    name: "Cotton",
    image: "/images/fabrics/c_dsc2948a.JPG",
    description: "High-quality cotton fabrics for comfortable and versatile formal wear.",
    features: [
      "Premium grade",
      "Comfortable wear",
      "Easy maintenance",
      "Multiple finishes"
    ]
  },
  {
    name: "Linen",
    image: "/images/fabrics/c_dsc2950a.JPG",
    description: "Elegant linen fabrics perfect for summer formal wear and special occasions.",
    features: [
      "Natural texture",
      "Breathable fabric",
      "Timeless appeal",
      "Durable quality"
    ]
  }
];

const Fabrics: FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Fabrics
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover our curated collection of premium fabrics, each selected for their exceptional quality and timeless elegance.
          </p>
        </div>

        {/* Fabric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {fabricCategories.map((fabric, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <img 
                src={fabric.image} 
                alt={fabric.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{fabric.name}</h3>
                  <p className="text-white/80 mb-4">{fabric.description}</p>
                  <ul className="space-y-2">
                    {fabric.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="text-white/90 flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#ffe066] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Design?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Explore our custom design process and create your perfect garment.
          </p>
          <a
            href="/custom"
            className="inline-block px-8 py-4 bg-[#ffe066] text-black font-bold tracking-wider uppercase hover:bg-[#ffe066]/90 transition-colors duration-300"
          >
            Start Design
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Fabrics;
