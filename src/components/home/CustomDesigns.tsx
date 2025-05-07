
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Mock data for design portfolio
const portfolioItems = [
  {
    id: 1,
    title: 'Wedding Gown',
    image: 'https://images.unsplash.com/photo-1594612173785-3873faa671ec?q=80&w=1970&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Evening Dress',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1908&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Formal Suit',
    image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2080&auto=format&fit=crop'
  }
];

const CustomDesigns = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Custom Formal Wear</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dee creates bespoke formal wear tailored to your unique style and measurements. Each piece is meticulously crafted for a perfect fit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {portfolioItems.map((item, index) => (
                <div key={item.id} className={`relative overflow-hidden rounded-lg ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}>
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-4">
                    <h3 className="text-white font-serif text-xl">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-cream p-6 rounded-lg flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">The Custom Design Process</h3>
            <ol className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-gold text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <p><strong>Consultation:</strong> Discuss your vision, occasion, and preferences.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-gold text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <p><strong>Design:</strong> Dee creates sketches and selects fabrics tailored to your needs.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-gold text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <p><strong>Fittings:</strong> Multiple fitting sessions to ensure a perfect fit.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-gold text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <p><strong>Completion:</strong> Your custom garment is professionally finished and delivered.</p>
              </li>
            </ol>
            <Link to="/contact" className="mt-auto">
              <Button className="btn-secondary w-full">Request a Consultation</Button>
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/custom-designs">
            <Button className="btn-outline">View Full Portfolio</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomDesigns;
