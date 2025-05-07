
import MinimalLayout from '@/components/layout/MinimalLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <MinimalLayout>
      <div className="fixed inset-0 bg-black -z-10" />
      <div className="w-full min-h-screen pb-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 font-sans uppercase tracking-wider text-white">
              About Formal Factory
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
              <div>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg font-light leading-relaxed mb-6">
                    Founded by designer Dee, Formal Factory began as a passion project fueled by a love for exceptional fabrics and bespoke tailoring. What started as a small studio has grown into a destination for those seeking premium materials and custom formal wear crafted with meticulous attention to detail.
                  </p>
                  
                  <p className="text-lg font-light leading-relaxed mb-6">
                    Our mission is simple: to provide access to the finest fabrics and create custom formal wear that makes our clients feel extraordinary. We believe that quality materials and expert craftsmanship create garments that not only look exceptional but stand the test of time.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Our Approach</h2>
                  <p className="text-lg font-light leading-relaxed mb-6">
                    At Formal Factory, we take pride in our personalized approach to both fabric selection and custom design. We carefully source our fabrics from renowned mills around the world, selecting only those that meet our exacting standards for quality, texture, and durability.
                  </p>
                  
                  <p className="text-lg font-light leading-relaxed mb-6">
                    Our design process is collaborative and client-centered, ensuring that each custom piece reflects the individual's style, preferences, and needs. From wedding gowns to formal suits, we create garments that make a statement while providing comfort and confidence.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Meet the Team</h2>
                  <p className="text-lg font-light leading-relaxed mb-6">
                    Behind every beautiful garment is our talented team of designers, pattern makers, and skilled artisans. Led by founder Dee, our team brings decades of combined experience in formal wear design and construction. We are committed to continuous learning and refining our craft to provide our clients with the very best.
                  </p>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <Link to="/fabrics">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Explore Our Fabrics
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="bg-[#ffe066] text-black hover:bg-[#ffe066]/90">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Using fabric images as placeholder for story images */}
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                  <img
                    src="/images/fabrics/c_dsc2954a.JPG"
                    alt="Our Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="aspect-square overflow-hidden rounded-lg border border-white/10">
                    <img
                      src="/images/fabrics/c_dsc2950a.JPG"
                      alt="Our Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg border border-white/10">
                    <img
                      src="/images/fabrics/c_dsc2952a.JPG"
                      alt="Our Craftsmanship"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#ffe066] mr-2">•</span>
                      <span>Quality materials and craftsmanship</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ffe066] mr-2">•</span>
                      <span>Attention to detail in every stitch</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ffe066] mr-2">•</span>
                      <span>Personalized service and client satisfaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ffe066] mr-2">•</span>
                      <span>Sustainable and ethical sourcing practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ffe066] mr-2">•</span>
                      <span>Supporting artisans and traditional techniques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MinimalLayout>
  );
};

export default About;
