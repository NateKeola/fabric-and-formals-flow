import { ReactNode } from 'react';

const navLinks = [
  { label: 'Fabrics', href: '/fabrics' },
  { label: 'Custom Pieces', href: '/custom' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Slightly lighter gold
const gold = '#ffe066';

interface MinimalLayoutProps {
  children: ReactNode;
}

const MinimalLayout = ({ children }: MinimalLayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Top nav bar */}
      <header className="w-full flex items-center px-10 py-2 bg-black min-h-[88px]">
        <a href="/" className="flex items-center h-full">
          <img 
            src="/images/logo.png" 
            alt="Formal Factory Logo" 
            className="h-32 w-auto mr-12 select-none"
            style={{objectFit: 'contain'}}
          />
        </a>
        <nav className="flex gap-12">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: gold }}
              className="font-bold uppercase tracking-widest text-lg hover:underline underline-offset-8 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center w-full px-4 pt-4 pb-24 min-h-[60vh]">
        <div className="max-w-2xl w-full text-left">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MinimalLayout; 