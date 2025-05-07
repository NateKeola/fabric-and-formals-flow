
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Logo as Focal Point */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "linear-gradient(120deg, rgba(10,18,36,0.98) 60%, rgba(34,40,49,0.92)), url('/images/fabrics/c_dsc2950a.JPG')"
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center">
          {/* Enlarged logo as focal point */}
          <img 
            src="/images/logo.png" 
            alt="Formal Factory Logo" 
            className="h-64 md:h-80 w-auto mb-12 animate-fade-in"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center tracking-tight">
            Premium Formal Wear
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/fabrics">
              <Button className="bg-gold hover:bg-gold/90 text-black text-xl px-8 py-7 rounded-md font-bold">
                FABRICS <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/custom-designs">
              <Button variant="outline" className="border-white/30 hover:bg-white/10 text-xl px-8 py-7 rounded-md font-bold">
                CUSTOM DESIGN
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Fabrics - Simplified */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            FEATURED FABRICS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Fabric Cards */}
            {[
              { 
                id: 1, 
                image: "/images/fabrics/c_dsc2946a.JPG", 
                title: "IVORY SILK"
              },
              { 
                id: 2, 
                image: "/images/fabrics/c_dsc2947a.JPG", 
                title: "CHARCOAL WOOL"
              },
              { 
                id: 3, 
                image: "/images/fabrics/c_dsc2952a.JPG", 
                title: "ROYAL BROCADE"
              }
            ].map(fabric => (
              <Link key={fabric.id} to="/fabrics" className="group block relative overflow-hidden rounded-lg">
                <div className="aspect-square">
                  <img 
                    src={fabric.image} 
                    alt={fabric.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{fabric.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/fabrics">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 text-xl font-bold">
                VIEW ALL
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">CREATE WITH US</h2>
          <Link to="/contact">
            <Button className="bg-gold hover:bg-gold/90 text-black text-xl px-8 py-6 rounded-md font-bold">
              CONTACT
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
