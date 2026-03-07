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
      {/* Full-width container for 1920x1080 */}
      <div className="w-full px-8 lg:px-16">
        <div className="flex items-center justify-between py-4 min-h-[100px] md:min-h-[120px] w-full">
          
          {/* Left: Spacer to balance the layout */}
          <div className="flex-1 flex items-center">
            {/* Empty - balances the right side */}
          </div>
          
          {/* Center: Logo */}
          <div className={`flex-1 flex justify-center transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            <Link href="/">
                <Image 
                src="/logo-header-new.png" 
                alt="Belief Sparks" 
                width={360} 
                height={90} 
                className={`transition-all duration-300 ${isScrolled ? 'h-[75px]' : 'h-[100px]'} w-auto object-contain`}
                priority
                />
            </Link>
          </div>
          
          {/* Right: Desktop Nav OR Hamburger */}
          <div className="flex-1 flex items-center justify-end">
            {/* Desktop Nav - fades out when scrolled */}
            <nav className={`hidden lg:flex items-center justify-end gap-8 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <Link href="/" className="text-stone-600 hover:text-vatican-red transition-colors font-medium">Home</Link>
              <Link href="/christianity" className="text-stone-600 hover:text-vatican-red transition-colors font-medium">Christianity</Link>
              <Link href="/catholicism" className="text-stone-600 hover:text-vatican-red transition-colors font-medium">Catholicism</Link>
              <Link href="/heterodox" className="text-stone-600 hover:text-vatican-red transition-colors font-medium">Heterodox</Link>
            </nav>

            {/* Desktop Hamburger - appears when scrolled */}
            <button 
              className={`hidden lg:flex items-center justify-center text-stone-600 p-2 rounded-lg hover:bg-stone-100 transition-all ${
                isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile/Tablet Menu Button */}
            <button 
              className="lg:hidden text-stone-600 p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Full Menu Dropdown (Desktop when scrolled + Mobile) */}
        {isMenuOpen && (
          <div className="pb-6 animate-in slide-in-from-top-2 duration-200">
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
                <div className="border-t border-stone-200 pt-4 mt-2">
                  <Link 
                    href="/site-map" 
                    className="text-base font-medium text-stone-500 hover:text-vatican-red py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sitemap
                  </Link>
                </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
