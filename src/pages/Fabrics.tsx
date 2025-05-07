
import { useState } from 'react';
import MinimalLayout from '@/components/layout/MinimalLayout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ZoomIn, Grid3X3, Grid2X2 } from 'lucide-react';

// Fabric images are in public/images/fabrics/
const fabrics = [
  { name: 'Ivory Silk', image: '/images/fabrics/c_dsc2946a.JPG', description: 'Luxurious ivory silk with a smooth finish, perfect for wedding gowns and formal evening wear.' },
  { name: 'Charcoal Wool', image: '/images/fabrics/c_dsc2947a.JPG', description: 'Premium charcoal wool with excellent drape, ideal for suits and structured garments.' },
  { name: 'Classic Linen', image: '/images/fabrics/c_dsc2948a.JPG', description: 'Natural linen fabric with characteristic texture, great for summer formalwear.' },
  { name: 'Midnight Velvet', image: '/images/fabrics/c_dsc2950a.JPG', description: 'Rich midnight velvet with deep pile, excellent for evening wear and special occasions.' },
  { name: 'Royal Brocade', image: '/images/fabrics/c_dsc2952a.JPG', description: 'Elegant brocade with intricate patterns, perfect for statement formal pieces.' },
  { name: 'Pearl Cotton', image: '/images/fabrics/c_dsc2954a.JPG', description: 'Soft pearl cotton with subtle sheen, versatile for various formal and semi-formal applications.' },
];

const Fabrics = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'large-grid' | 'carousel'>('grid');
  const [selectedFabric, setSelectedFabric] = useState<number | null>(null);

  const handleFabricClick = (index: number) => {
    setSelectedFabric(index);
  };

  const closeModal = () => {
    setSelectedFabric(null);
  };

  return (
    <MinimalLayout>
      <div className="fixed inset-0 bg-black -z-10" />
      <div className="w-full min-h-screen pb-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 font-sans uppercase tracking-wider text-white">
              Premium Fabrics
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              Explore our collection of high-quality fabrics, perfect for creating elegant formal wear. Each fabric is carefully selected for its quality, texture, and luxurious feel.
            </p>

            <div className="w-full flex justify-between items-center mb-6">
              <Tabs defaultValue="all" className="w-full max-w-md">
                <TabsList className="bg-black/30 border border-white/10">
                  <TabsTrigger value="all">All Fabrics</TabsTrigger>
                  <TabsTrigger value="silk">Silk</TabsTrigger>
                  <TabsTrigger value="wool">Wool</TabsTrigger>
                  <TabsTrigger value="special">Special</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex gap-2 bg-black/30 p-1 rounded-md border border-white/10">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  aria-label="Grid view"
                >
                  <Grid3X3 className="h-5 w-5 text-white/80" />
                </button>
                <button 
                  onClick={() => setViewMode('large-grid')}
                  className={`p-2 rounded ${viewMode === 'large-grid' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  aria-label="Large grid view"
                >
                  <Grid2X2 className="h-5 w-5 text-white/80" />
                </button>
                <button 
                  onClick={() => setViewMode('carousel')}
                  className={`p-2 rounded ${viewMode === 'carousel' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  aria-label="Carousel view"
                >
                  <ZoomIn className="h-5 w-5 text-white/80" />
                </button>
              </div>
            </div>
            
            <TabsContent value="all" className="w-full">
              {viewMode === 'carousel' ? (
                <div className="w-full py-10">
                  <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                      {fabrics.map((fabric, idx) => (
                        <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <Card className="border-0 bg-black/40 overflow-hidden">
                              <CardContent className="p-0">
                                <div 
                                  className="cursor-pointer relative group"
                                  onClick={() => handleFabricClick(idx)}
                                >
                                  <AspectRatio ratio={1/1}>
                                    <img
                                      src={fabric.image}
                                      alt={fabric.name}
                                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                    />
                                  </AspectRatio>
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                                    <div className="p-4 w-full">
                                      <h3 className="text-white font-bold text-lg mb-1">{fabric.name}</h3>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 bg-black/60 hover:bg-black/80 border-white/20 text-white" />
                    <CarouselNext className="right-0 bg-black/60 hover:bg-black/80 border-white/20 text-white" />
                  </Carousel>
                </div>
              ) : (
                <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-4 sm:gap-6 w-full`}>
                  {fabrics.map((fabric, idx) => (
                    <div 
                      key={idx} 
                      className="group cursor-pointer relative overflow-hidden rounded-md bg-black/20 border border-white/5"
                      onClick={() => handleFabricClick(idx)}
                    >
                      <AspectRatio ratio={1/1}>
                        <img
                          src={fabric.image}
                          alt={fabric.name}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-black/0 pt-10 pb-4 px-4">
                        <h3 className="text-white font-medium text-sm sm:text-base uppercase tracking-wider">{fabric.name}</h3>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-medium">View Details</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </div>
        </div>
      </div>

      {/* Detailed view modal */}
      {selectedFabric !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full bg-black border border-white/20 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/60 rounded-full p-1"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={fabrics[selectedFabric].image} 
                  alt={fabrics[selectedFabric].name}
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-2">{fabrics[selectedFabric].name}</h2>
                <p className="text-white/80 mb-4">{fabrics[selectedFabric].description}</p>
                <div className="mt-auto space-y-4">
                  <div className="bg-white/10 p-4 rounded">
                    <h3 className="text-white font-medium mb-2">Details</h3>
                    <ul className="text-white/80 space-y-1">
                      <li>Width: 58"</li>
                      <li>Composition: 100% Premium Material</li>
                      <li>Care: Dry clean only</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-white/90 transition-colors">
                      Request Sample
                    </button>
                    <button className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white/10 transition-colors">
                      Contact for Pricing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MinimalLayout>
  );
};

export default Fabrics;
