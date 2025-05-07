
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-navy text-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-lg mb-8 text-cream/90">
            Whether you're looking for quality fabrics or a custom-designed formal garment, we're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-gold text-white hover:bg-gold/90 w-full sm:w-auto">
                Request a Consultation
              </Button>
            </Link>
            <Link to="/fabrics">
              <Button className="bg-transparent border border-cream text-cream hover:bg-white/10 w-full sm:w-auto">
                Shop Fabrics
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
