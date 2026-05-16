import { Link, useLocation } from "react-router-dom";
import { Plane, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-auto",
        isScrolled ? "bg-white/5 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl" : "py-5 border-b border-white/10 backdrop-blur-md bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Plane className="w-8 h-8 text-gold-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="heading-serif font-bold text-xl tracking-widest text-white uppercase">
            KVR Flight
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold-400 relative",
                  isActive ? "text-gold-500" : "text-gray-300"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 inset-x-0 h-0.5 bg-gold-500"
                  />
                )}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-950 transition-all font-medium uppercase text-sm tracking-wider"
          >
            Book Flight
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white cursor-pointer hover:text-gold-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full inset-x-0 bg-[#060b19] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl z-[60]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-medium tracking-wide uppercase transition-colors hover:text-gold-400 cursor-pointer block py-2",
                  location.pathname === link.path ? "text-gold-500" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/contact"
                 onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 text-center px-6 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-950 transition-all font-medium uppercase tracking-wider cursor-pointer"
              >
                Book Flight
              </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
