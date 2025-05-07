
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CustomDesigns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold text-navy mb-8">Custom Formal Wear</h1>
          <p className="text-lg mb-12">
            Coming soon: Explore our portfolio of custom-designed formal wear.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomDesigns;
