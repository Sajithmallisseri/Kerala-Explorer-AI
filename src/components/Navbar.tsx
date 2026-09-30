import React, { useState, useEffect } from "react";
import { Menu, X, Compass, Search } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Articles", id: "articles" },
    { label: "Destinations", id: "destinations" },
    { label: "Support", id: "support" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3.5"
          : "bg-[#FAF8F5]/90 backdrop-blur-xs border-b border-stone-200/50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark with subtle Kerala touch */}
          <button
            onClick={() => handleLinkClick("home")}
            className="group flex items-center gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-[#0B4635] rounded-md transition-transform"
          >
            <span className="w-8 h-8 rounded-full bg-[#0B4635] text-amber-300 flex items-center justify-center font-editorial font-bold text-lg shadow-xs group-hover:bg-[#072E23] transition-colors">
              <Compass className="w-4 h-4 text-[#C69214]" />
            </span>
            <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#0B4635] group-hover:text-[#072E23] transition-colors">
              Kerala Explorer
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#0B4635] rounded-xs ${
                    isActive
                      ? "text-[#0B4635] font-semibold"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C69214] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-600 hover:text-[#0B4635] hover:bg-stone-100 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#0B4635]"
              aria-label="Search articles"
              title="Search articles"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleLinkClick("articles")}
              className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#0B4635] hover:bg-[#072E23] rounded-lg transition-colors shadow-xs hover:shadow-sm focus-visible:outline-2 focus-visible:outline-[#0B4635] whitespace-nowrap"
            >
              Explore Articles
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-[#0B4635] hover:bg-stone-100 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#0B4635]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF8F5] px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                activeTab === link.id
                  ? "bg-[#0B4635]/10 text-[#0B4635] font-semibold"
                  : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-200">
            <button
              onClick={() => handleLinkClick("articles")}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-[#0B4635] hover:bg-[#072E23] rounded-lg shadow-xs"
            >
              Read "10 Beautiful Places to Visit"
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
