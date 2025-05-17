
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyber-black">
      <div className="cyber-card p-8 w-full max-w-md text-center">
        <h1 className="text-7xl font-bold mb-6 tracking-wider">
          <span className="neon-text neon-text-purple">4</span>
          <span className="neon-text neon-text-cyan">0</span>
          <span className="neon-text neon-text-green">4</span>
        </h1>
        
        <div className="font-mono text-cyber-cyan mb-4">CONNECTION_LOST</div>
        
        <p className="text-xl text-white/80 mb-6">This echo has been lost in cyberspace</p>
        
        <div className="cyber-border inline-block">
          <a href="/" className="echo-button echo-button-cyan flex items-center justify-center gap-2 w-full">
            <Home size={18} />
            <span>Return to Echo Chamber</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
