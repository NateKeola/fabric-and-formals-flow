
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Mock data for featured fabrics
const featuredFabrics = [
  {
    id: 1,
    name: 'Premium Silk Charmeuse',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop',
    category: 'Silk'
  },
  {
    id: 2,
    name: 'Italian Wool Gabardine',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1558304970-abd65b610c84?q=80&w=2070&auto=format&fit=crop',
    category: 'Wool'
  },
  {
    id: 3,
    name: 'Egyptian Cotton Sateen',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1589830047790-8dbbe0ed9a8b?q=80&w=2070&auto=format&fit=crop',
    category: 'Cotton'
  },
  {
    id: 4,
    name: 'Luxury Linen Blend',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1618377385526-83108e243e37?q=80&w=1970&auto=format&fit=crop',
    category: 'Linen'
  }
];

const FeaturedFabrics = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Featured Fabrics</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our carefully curated selection of premium fabrics, perfect for your next sewing project.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFabrics.map((fabric) => (
            <Link to={`/fabrics/${fabric.id}`} key={fabric.id} className="no-underline">
              <Card className="overflow-hidden h-full card-hover">
                <div className="aspect-square relative">
                  <img 
                    src={fabric.image} 
                    alt={fabric.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-gold text-white px-3 py-1 text-xs rounded-full">
                    {fabric.category}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-serif text-lg font-medium text-navy">{fabric.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-lg">${fabric.price.toFixed(2)}/yd</span>
                    <Button size="sm" className="bg-navy text-white hover:bg-navy/90">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/fabrics">
            <Button className="btn-outline">View All Fabrics</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFabrics;
