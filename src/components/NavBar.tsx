"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section for navigation highlighting
  useEffect(() => {
    const sections = navLinks
      .map(link => link.href.replace("#", ""))
      .filter(href => href !== "");

    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      
      // Check if we're at the top (Home section)
      if (window.scrollY < 100) {
        setActiveSection("#");
        return;
      }

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 relative ${
        scrolled ? "bg-zinc-900/90 backdrop-blur-xl border-b border-zinc-800/50" : "bg-transparent"
      }`}
      style={scrolled ? { 
        background: 'rgba(24, 24, 27, 0.9)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)'
      } : {}}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          <Link 
            href="/" 
            className="text-base sm:text-lg md:text-xl font-semibold text-white hover:text-indigo-400 transition-colors"
            aria-label="Home - Tushank Portfolio"
          >
            Portfolio
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === "#" 
                ? activeSection === "" || activeSection === "#"
                : activeSection === link.href;
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`text-sm lg:text-base transition-all px-3 py-1.5 rounded-md relative ${
                    isActive
                      ? "text-white font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className={`absolute inset-0 rounded-md transition-all ${
                    isActive 
                      ? "bg-white/10" 
                      : "bg-white/0 hover:bg-white/5"
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 sm:p-2.5 text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-14 sm:top-16 bg-zinc-900/98 backdrop-blur-lg z-40"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="container py-8 sm:py-12">
              <nav className="flex flex-col gap-4 sm:gap-6" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const isActive = link.href === "#" 
                    ? activeSection === "" || activeSection === "#"
                    : activeSection === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`text-lg sm:text-xl transition-all py-3 sm:py-4 px-4 border-b border-zinc-800 rounded-md relative ${
                        isActive
                          ? "text-white font-medium bg-white/5"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-full"></span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
