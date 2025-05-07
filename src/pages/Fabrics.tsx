import MinimalLayout from '@/components/layout/MinimalLayout';

// Fabric images are in public/images/fabrics/
const fabrics = [
  { name: 'Ivory Silk', image: '/images/fabrics/c_dsc2946a.JPG' },
  { name: 'Charcoal Wool', image: '/images/fabrics/c_dsc2947a.JPG' },
  { name: 'Classic Linen', image: '/images/fabrics/c_dsc2948a.JPG' },
  { name: 'Midnight Velvet', image: '/images/fabrics/c_dsc2950a.JPG' },
  { name: 'Royal Brocade', image: '/images/fabrics/c_dsc2952a.JPG' },
  { name: 'Pearl Cotton', image: '/images/fabrics/c_dsc2954a.JPG' },
];

const Fabrics = () => {
  return (
    <MinimalLayout>
      <div className="fixed inset-0 bg-black -z-10" />
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full max-w-screen-2xl px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {fabrics.map((fabric, idx) => (
              <div key={idx} className="relative w-full aspect-square">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="object-cover w-full h-full"
                  style={{ background: '#222' }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-xs font-medium uppercase tracking-widest text-center py-2 font-sans">
                  {fabric.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MinimalLayout>
  );
};

export default Fabrics;
