
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Background overlay with gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(120deg, rgba(10,18,36,0.98) 60%, rgba(34,40,49,0.92)), url('/images/fabrics/c_dsc2950a.JPG')"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center">
          <img 
            src="/images/logo.png" 
            alt="Formal Factory Logo" 
            className="h-28 w-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-center max-w-4xl">
            Premium Fabrics & Bespoke Formal Wear
          </h1>
          
          <p className="text-lg text-white/80 mb-10 text-center max-w-2xl">
            Discover our collection of high-quality fabrics and custom-designed formal wear for your most special occasions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/fabrics">
              <Button className="bg-gold hover:bg-gold/90 text-black text-lg px-6 py-6 rounded-md">
                Browse Fabrics <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/custom-designs">
              <Button variant="outline" className="border-white/30 hover:bg-white/10 text-lg px-6 py-6 rounded-md">
                Custom Design Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Fabrics */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Featured Fabrics</h2>
            <div className="h-1 w-20 bg-gold mb-6"></div>
            <p className="text-white/70 text-center max-w-2xl">
              Explore our curated selection of premium fabrics, perfect for creating elegant formal wear.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Fabric Cards */}
            {[
              { 
                id: 1, 
                image: "/images/fabrics/c_dsc2946a.JPG", 
                title: "Ivory Silk", 
                description: "Luxurious silk with a smooth finish, perfect for wedding gowns" 
              },
              { 
                id: 2, 
                image: "/images/fabrics/c_dsc2947a.JPG", 
                title: "Charcoal Wool", 
                description: "Premium wool with excellent drape, ideal for suits" 
              },
              { 
                id: 3, 
                image: "/images/fabrics/c_dsc2952a.JPG", 
                title: "Royal Brocade", 
                description: "Elegant brocade with intricate patterns for formal pieces" 
              }
            ].map(fabric => (
              <div key={fabric.id} className="group relative overflow-hidden rounded-lg bg-black/30 border border-white/10 hover:border-gold/50 transition-all duration-300">
                <div className="aspect-square">
                  <img 
                    src={fabric.image} 
                    alt={fabric.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{fabric.title}</h3>
                  <p className="text-white/80 text-sm">{fabric.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/fabrics">
              <Button variant="outline" className="border-white/30 hover:bg-white/10">
                View All Fabrics
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-black/50 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/fabrics/c_dsc2954a.JPG')" }}
        />
        <div className="absolute inset-0 bg-black/80" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-center">Our Design Process</h2>
            <div className="h-1 w-20 bg-gold mb-6"></div>
            <p className="text-white/70 text-center max-w-2xl">
              From concept to creation, we bring your vision to life with bespoke formal wear.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Process Steps */}
            {[
              {
                step: 1,
                title: "Consultation",
                description: "We discuss your design ideas, measurements, and fabric preferences"
              },
              {
                step: 2,
                title: "Design & Fitting",
                description: "Our designers work with you to refine your concept and ensure perfect fit"
              },
              {
                step: 3,
                title: "Creation & Delivery",
                description: "Skilled artisans bring your design to life with meticulous craftsmanship"
              }
            ].map(step => (
              <div key={step.step} className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold/20 text-gold mb-6 mx-auto">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                <p className="text-white/70 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/custom-designs">
              <Button className="bg-gold hover:bg-gold/90 text-black">
                Explore Custom Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to create something extraordinary?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Whether you're looking for premium fabrics or custom formal wear, we're here to help.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
