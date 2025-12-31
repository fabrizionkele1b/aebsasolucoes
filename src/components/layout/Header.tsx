import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Início", path: "/" },
  { name: "Sobre Nós", path: "/sobre" },
  { name: "Serviços", path: "/servicos" },
  { name: "Qualidade", path: "/qualidade" },
  { name: "Contacto", path: "/contacto" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="bg-card/95 backdrop-blur-md sticky top-0 z-50 shadow-md">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo - More breathing room */}
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="A&B Engenharia e Soluções" 
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="nav-cta" size="lg" asChild>
                <Link to="/contacto">Solicitar Orçamento</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button variant="accent" size="lg" className="mt-4" asChild>
                    <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                      Solicitar Orçamento
                    </Link>
                  </Button>
                </nav>
                
                {/* Mobile Contact Info */}
                <div className="mt-6 pt-4 border-t border-border">
                  <a href="tel:+244923456789" className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>+244 923 456 789</span>
                  </a>
                  <a href="mailto:geral@abengenharia.co.ao" className="flex items-center gap-3 py-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>geral@abengenharia.co.ao</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
