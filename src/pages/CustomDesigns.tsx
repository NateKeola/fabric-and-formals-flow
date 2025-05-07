
import MinimalLayout from '@/components/layout/MinimalLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    name: "Wedding Gown",
    image: "/images/fabrics/c_dsc2946a.JPG",
    description: "Custom-designed silk wedding gown with intricate hand-sewn beadwork and a cathedral train."
  },
  {
    name: "Evening Suit",
    image: "/images/fabrics/c_dsc2947a.JPG",
    description: "Tailored wool evening suit with satin lapels, perfect for black-tie events and galas."
  },
  {
    name: "Formal Dress",
    image: "/images/fabrics/c_dsc2950a.JPG",
    description: "Floor-length formal dress created with premium velvet fabric and custom embellishments."
  },
  {
    name: "Tuxedo",
    image: "/images/fabrics/c_dsc2952a.JPG",
    description: "Bespoke tuxedo crafted with attention to detail and precise measurements for the perfect fit."
  }
];

const CustomDesigns = () => {
  return (
    <MinimalLayout>
      <div className="fixed inset-0 bg-black -z-10" />
      <div className="w-full min-h-screen pb-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 font-sans uppercase tracking-wider text-white">
              Custom Formal Wear
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              From concept to creation, we bring your vision to life with bespoke formal wear tailored to your exact specifications.
            </p>

            <Tabs defaultValue="portfolio" className="w-full max-w-4xl">
              <TabsList className="bg-black/30 border border-white/10 mb-8">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="process">Our Process</TabsTrigger>
                <TabsTrigger value="consultation">Consultation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="portfolio" className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolioItems.map((item, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-lg bg-black/30 border border-white/10">
                      <div className="aspect-square">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end">
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                          <p className="text-white/80">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="process" className="w-full">
                <div className="space-y-8">
                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#ffe066]/20 text-[#ffe066] mr-4">
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <h3 className="text-2xl font-bold">Initial Consultation</h3>
                    </div>
                    <p className="text-white/80 pl-16">
                      Our design process begins with an in-depth consultation where we discuss your vision, preferences, and requirements. We'll explore design ideas, occasion details, and your personal style to create a concept that perfectly suits you.
                    </p>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#ffe066]/20 text-[#ffe066] mr-4">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <h3 className="text-2xl font-bold">Design Development</h3>
                    </div>
                    <p className="text-white/80 pl-16">
                      After the initial consultation, we create detailed sketches and select fabrics that align with your vision. We'll present you with options and refine the design until it meets your exact specifications.
                    </p>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#ffe066]/20 text-[#ffe066] mr-4">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <h3 className="text-2xl font-bold">Measurements & Fitting</h3>
                    </div>
                    <p className="text-white/80 pl-16">
                      Precise measurements are taken to ensure a perfect fit. We'll create a muslin mockup for the initial fitting, allowing for adjustments before cutting into the final fabric. Multiple fittings ensure the garment fits impeccably.
                    </p>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#ffe066]/20 text-[#ffe066] mr-4">
                        <span className="text-xl font-bold">4</span>
                      </div>
                      <h3 className="text-2xl font-bold">Creation & Delivery</h3>
                    </div>
                    <p className="text-white/80 pl-16">
                      Our skilled artisans meticulously construct your garment with attention to every detail. Upon completion, we'll conduct a final fitting before delivering your custom creation, ready for your special occasion.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="consultation" className="w-full">
                <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-4">Schedule a Design Consultation</h3>
                  <p className="text-white/80 mb-6">
                    Ready to begin your custom formal wear journey? Schedule a consultation with our design team to discuss your vision and explore possibilities. We'll guide you through fabric options, design elements, and the entire creation process.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-[#ffe066]/20 text-[#ffe066] flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Duration</h4>
                        <p className="text-white/80">Initial consultations typically last 60-90 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-[#ffe066]/20 text-[#ffe066] flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Location</h4>
                        <p className="text-white/80">In-studio or virtual consultations available</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-[#ffe066]/20 text-[#ffe066] flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Booking</h4>
                        <p className="text-white/80">Consultation fee is applied toward your custom order</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Link to="/contact">
                      <Button className="bg-[#ffe066] text-black hover:bg-[#ffe066]/90 shadow-lg px-8 py-6 rounded-full font-semibold">
                        Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MinimalLayout>
  );
};

export default CustomDesigns;
