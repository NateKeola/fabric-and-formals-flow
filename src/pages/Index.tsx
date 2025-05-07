
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Background overlay with gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(120deg, rgba(10,18,36,0.98) 60%, rgba(34,40,49,0.92)), url('/images/fabrics/c_dsc2950a.JPG')",
            backgroundPosition: "center 30%"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#ffe066]/10 via-transparent to-transparent pointer-events-none" />

        {/* Logo and Navigation */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
          <img 
            src="/images/logo.png" 
            alt="Formal Factory Logo" 
            className="h-32 w-auto mb-10 drop-shadow-xl"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-sans uppercase tracking-wider text-white text-center">
            Premium Fabrics & <br className="hidden sm:block" /> Bespoke Formal Wear
          </h1>
          <p className="text-lg md:text-xl mb-10 font-sans text-white/80 text-center max-w-2xl">
            Discover our collection of high-quality fabrics and custom-designed formal wear for your most special occasions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/fabrics">
              <Button className="bg-[#ffe066] text-black hover:bg-[#ffe066]/90 shadow-lg text-lg px-8 py-6 rounded-full font-semibold">
                Browse Fabrics <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/custom-designs">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold">
                Custom Design Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Fabrics Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl font-bold mb-4 uppercase tracking-wide text-center">Featured Fabrics</h2>
            <div className="h-1 w-20 bg-[#ffe066] mb-6"></div>
            <p className="text-lg text-white/70 text-center max-w-2xl">
              Explore our curated selection of premium fabrics, perfect for creating elegant formal wear.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Fabric 1 */}
            <div className="group relative overflow-hidden rounded-lg bg-black/30 border border-white/10 transition-all duration-300 hover:border-[#ffe066]/50">
              <div className="aspect-square">
                <img 
                  src="/images/fabrics/c_dsc2946a.JPG" 
                  alt="Ivory Silk" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Ivory Silk</h3>
                  <p className="text-white/80 mb-4 text-sm">Luxurious silk with a smooth finish, perfect for wedding gowns and formal evening wear.</p>
                  <Link to="/fabrics">
                    <Button variant="link" className="text-[#ffe066] p-0 flex items-center gap-2">
                      View Details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Featured Fabric 2 */}
            <div className="group relative overflow-hidden rounded-lg bg-black/30 border border-white/10 transition-all duration-300 hover:border-[#ffe066]/50">
              <div className="aspect-square">
                <img 
                  src="/images/fabrics/c_dsc2947a.JPG" 
                  alt="Charcoal Wool" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Charcoal Wool</h3>
                  <p className="text-white/80 mb-4 text-sm">Premium wool with excellent drape, ideal for suits and structured garments.</p>
                  <Link to="/fabrics">
                    <Button variant="link" className="text-[#ffe066] p-0 flex items-center gap-2">
                      View Details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Featured Fabric 3 */}
            <div className="group relative overflow-hidden rounded-lg bg-black/30 border border-white/10 transition-all duration-300 hover:border-[#ffe066]/50">
              <div className="aspect-square">
                <img 
                  src="/images/fabrics/c_dsc2952a.JPG" 
                  alt="Royal Brocade" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Royal Brocade</h3>
                  <p className="text-white/80 mb-4 text-sm">Elegant brocade with intricate patterns, perfect for statement formal pieces.</p>
                  <Link to="/fabrics">
                    <Button variant="link" className="text-[#ffe066] p-0 flex items-center gap-2">
                      View Details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/fabrics">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full font-semibold">
                View All Fabrics
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Designs Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/fabrics/c_dsc2954a.JPG')"
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl font-bold mb-4 uppercase tracking-wide text-center">Custom Design Services</h2>
            <div className="h-1 w-20 bg-[#ffe066] mb-6"></div>
            <p className="text-lg text-white/70 text-center max-w-2xl">
              From concept to creation, we bring your vision to life with bespoke formal wear tailored to your exact specifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#ffe066]/20 text-[#ffe066] mb-6 mx-auto">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Consultation</h3>
              <p className="text-white/70 text-center">
                Schedule a personal consultation to discuss your design ideas, measurements, and fabric preferences.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#ffe066]/20 text-[#ffe066] mb-6 mx-auto">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Design & Fitting</h3>
              <p className="text-white/70 text-center">
                Work closely with our designers to refine your concept, select fabrics, and ensure the perfect fit.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#ffe066]/20 text-[#ffe066] mb-6 mx-auto">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Creation & Delivery</h3>
              <p className="text-white/70 text-center">
                Our skilled artisans bring your design to life with meticulous craftsmanship before final delivery.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/custom-designs">
              <Button className="bg-[#ffe066] text-black hover:bg-[#ffe066]/90 shadow-lg px-8 py-6 rounded-full font-semibold">
                Explore Custom Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to create something extraordinary?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Whether you're looking for premium fabrics or custom formal wear, we're here to help bring your vision to life.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="border-[#ffe066] text-[#ffe066] hover:bg-[#ffe066]/10 px-8 py-6 rounded-full font-semibold">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
