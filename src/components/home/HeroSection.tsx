
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="hero-section relative h-[70vh] min-h-[500px] bg-navy flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-bold mb-4 animate-fade-up">
            Exquisite Fabrics, <br />Elegant Designs
          </h1>
          <p className="text-lg md:text-xl text-cream/90 mb-8 animate-fade-up" style={{animationDelay: "0.2s"}}>
            Premium quality fabrics and bespoke formal wear for your most special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{animationDelay: "0.4s"}}>
            <Link to="/fabrics">
              <Button className="btn-secondary w-full sm:w-auto">Shop Fabrics</Button>
            </Link>
            <Link to="/custom-designs">
              <Button className="bg-transparent border border-cream text-cream hover:bg-white/10 w-full sm:w-auto">
                Custom Designs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
