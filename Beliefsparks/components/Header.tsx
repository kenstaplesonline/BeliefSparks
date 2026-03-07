"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add shadow/background when scrolled
      setIsScrolled(currentScrollY > 10);
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
        setIsMenuOpen(false); // Close menu when hiding
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled 
          ? 'bg-stone-50/95 backdrop-blur-md shadow-md' 
          : 'bg-stone-50/90 backdrop-blur-sm border-b border-stone-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4 relative">
          
          {/* Logo Area */}
          <div className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            <Link href="/">
                <Image 
                src="/logo-header-new.png" 
                alt="Belief Sparks" 
                width={360} 
                height={90} 
                className={`transition-all duration-300 ${isScrolled ? 'h-[60px]' : 'h-[80px]'} w-auto object-contain`}
                priority
                />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 mt-2">
            <Link href="/" className="text-stone-600 hover:text-vatican-red transition-colors font-medium">Home</Link>
            <Link href="/christianity" className="text-stone-600 hover:text-vatican-red transition-colors font-medium">Christianity</Link>
            <Link href="/catholicism" className="text-stone-600 hover:text-vatican-red transition-colors font-medium">Catholicism</Link>
            <Link href="/heterodox" className="text-stone-600 hover:text-vatican-red transition-colors font-medium">Heterodox</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-stone-600 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4 text-center border-t border-stone-200 pt-4">
                <Link 
                  href="/" 
                  className="text-lg font-medium text-stone-700 hover:text-vatican-red py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/christianity" 
                  className="text-lg font-medium text-stone-700 hover:text-vatican-red py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Christianity
                </Link>
                <Link 
                  href="/catholicism" 
                  className="text-lg font-medium text-stone-700 hover:text-vatican-red py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Catholicism
                </Link>
                <Link 
                  href="/heterodox" 
                  className="text-lg font-medium text-stone-700 hover:text-vatican-red py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Heterodox
                </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
