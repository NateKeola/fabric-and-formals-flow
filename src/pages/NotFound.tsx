import { Link } from "react-router-dom";
import MinimalLayout from '@/components/layout/MinimalLayout';

const NotFound = () => {
  return (
    <MinimalLayout>
      <h1 className="text-6xl font-extrabold mb-4 font-sans uppercase">404</h1>
      <p className="text-xl mb-8 font-sans text-white/80">Oops! We couldn't find the page you're looking for.</p>
      <Link to="/" className="font-bold uppercase underline underline-offset-8 text-lg text-white">
        Return to Home
      </Link>
    </MinimalLayout>
  );
};

export default NotFound;
