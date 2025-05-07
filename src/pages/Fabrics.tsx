
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Fabrics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold text-navy mb-8">Our Fabric Collection</h1>
          <p className="text-lg mb-12">
            Coming soon: Browse our complete collection of premium fabrics.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fabrics;
