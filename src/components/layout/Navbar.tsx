
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cream border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl md:text-3xl font-bold text-navy">Formal Factory</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy hover:text-gold transition-colors">Home</Link>
            <Link to="/fabrics" className="text-navy hover:text-gold transition-colors">Fabrics</Link>
            <Link to="/custom-designs" className="text-navy hover:text-gold transition-colors">Custom Designs</Link>
            <Link to="/about" className="text-navy hover:text-gold transition-colors">About</Link>
            <Link to="/contact" className="text-navy hover:text-gold transition-colors">Contact</Link>
          </div>

          {/* Shopping Cart Icon */}
          <div className="hidden md:flex items-center">
            <Button variant="ghost" className="relative" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5 text-navy" />
              <span className="absolute -top-1 -right-1 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <X className="h-6 w-6 text-navy" />
              ) : (
                <Menu className="h-6 w-6 text-navy" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-cream py-4 px-4 border-t border-gray-200 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-navy hover:text-gold transition-colors py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/fabrics" className="text-navy hover:text-gold transition-colors py-2" onClick={() => setIsOpen(false)}>Fabrics</Link>
            <Link to="/custom-designs" className="text-navy hover:text-gold transition-colors py-2" onClick={() => setIsOpen(false)}>Custom Designs</Link>
            <Link to="/about" className="text-navy hover:text-gold transition-colors py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="text-navy hover:text-gold transition-colors py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="flex items-center py-2">
              <Button variant="ghost" className="relative" aria-label="Shopping cart">
                <ShoppingCart className="h-5 w-5 text-navy" />
                <span className="absolute -top-1 -right-1 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Button>
              <span className="ml-2 text-navy">Cart</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
