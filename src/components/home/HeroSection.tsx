import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Fabrics', href: '/fabrics' },
  { label: 'Custom Pieces', href: '/custom' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const HeroSection = () => {
  return (
    <section className="h-screen bg-navy flex items-center justify-center relative overflow-hidden font-sans">
      {/* Elegant background pattern/gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(120deg, rgba(10,18,36,0.98) 60%, rgba(34,40,49,0.92)), url('/images/hero-bg.jpg')",
          backgroundPosition: "center 30%"
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />

      {/* Central logo and navigation */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
        <img 
          src="/images/logo.png" 
          alt="Formal Factory Logo" 
          className="h-32 w-auto mb-10 drop-shadow-xl rounded-lg bg-white/5 p-4"
        />
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-10">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}>
              <Button className="bg-gold text-white hover:bg-gold/90 shadow-lg text-lg px-8 py-5 rounded-full font-semibold tracking-wide uppercase transition-all duration-200 min-w-[160px] font-sans">
                {link.label}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
