import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Formal Factory Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/fabrics"
            className={`uppercase font-bold tracking-widest text-sm transition-all duration-150 ${
              isActive('/fabrics') 
                ? 'text-[#ffe066] border-b-2 border-[#ffe066]' 
                : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white'
            }`}
          >
            Fabrics
          </Link>
          <Link 
            to="/custom"
            className={`uppercase font-bold tracking-widest text-sm transition-all duration-150 ${
              isActive('/custom') 
                ? 'text-[#ffe066] border-b-2 border-[#ffe066]' 
                : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white'
            }`}
          >
            Custom Design
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 