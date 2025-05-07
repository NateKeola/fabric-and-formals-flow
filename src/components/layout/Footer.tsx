
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">Formal Factory</h2>
            <p className="mb-4">Quality fabrics and custom-designed formal wear for all your special occasions.</p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/fabrics" className="hover:text-gold transition-colors">All Fabrics</Link></li>
              <li><Link to="/fabrics/silk" className="hover:text-gold transition-colors">Silk</Link></li>
              <li><Link to="/fabrics/cotton" className="hover:text-gold transition-colors">Cotton</Link></li>
              <li><Link to="/fabrics/wool" className="hover:text-gold transition-colors">Wool</Link></li>
              <li><Link to="/fabrics/linen" className="hover:text-gold transition-colors">Linen</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Custom Designs</h3>
            <ul className="space-y-2">
              <li><Link to="/custom-designs" className="hover:text-gold transition-colors">Our Portfolio</Link></li>
              <li><Link to="/custom-designs/process" className="hover:text-gold transition-colors">Design Process</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Request Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p>123 Fabric Lane</p>
              <p>Textile City, TX 12345</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@formalfactory.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Formal Factory. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
