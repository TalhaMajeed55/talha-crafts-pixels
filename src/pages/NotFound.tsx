import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Frown } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center liquid-wave">
      <div className="text-center px-6 animate-mask-reveal">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-off-white/30 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-4">
            Lost?
          </h2>
          <p className="text-lg text-off-white/80 max-w-md mx-auto">
            Looks like you've wandered into uncharted waters. Let's get you back to familiar shores.
          </p>
        </div>
        
        <Button 
          onClick={() => window.location.href = '/'}
          className="btn-primary text-off-white"
        >
          <Home className="w-4 h-4 mr-2" />
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
