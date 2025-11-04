import { Link, useLocation } from "react-router-dom";
import uaoLogo from "@/assets/uao-logo.jfif";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-card/80 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={uaoLogo} 
              alt="UAO Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-bold text-foreground">
              Laboratorios de Física
            </span>
          </Link>
          
          <div className="flex gap-2">
            <Link
              to="/"
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isActive("/")
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30"
                  : "bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:shadow-md"
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/gay-lussac"
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isActive("/gay-lussac")
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30"
                  : "bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:shadow-md"
              }`}
            >
              Gay-Lussac
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
