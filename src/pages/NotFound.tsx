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
    <div className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="absolute inset-0 hero-gradient animate-gradient-shift" />
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        <div className="mb-8 animate-float">
          <Frown className="w-24 h-24 text-primary mx-auto mb-4" />
        </div>
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <h2 className="text-2xl font-semibold text-charcoal mb-4">Lost?</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Looks like you've wandered into uncharted territory. Let's get you back on track!
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="btn-primary"
        >
          <Home className="w-4 h-4 mr-2" />
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
