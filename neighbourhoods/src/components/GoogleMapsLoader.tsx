'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface GoogleMapsContextType {
  isLoaded: boolean;
  loadError: string | null;
}

const GoogleMapsContext = createContext<GoogleMapsContextType>({
  isLoaded: false,
  loadError: null,
});

export function GoogleMapsProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      const errorMsg = 'Google Maps API key is missing from environment';
      console.error('[GoogleMaps]', errorMsg);
      setLoadError(errorMsg);
      return;
    }

    console.log('[GoogleMaps] API Key found:', apiKey.substring(0, 10) + '...');

    // Check if already loaded
    // @ts-ignore
    if (typeof window !== 'undefined' && (window as any).google && (window as any).google.maps) {
      console.log('[GoogleMaps] Already loaded');
      setIsLoaded(true);
      return;
    }

    // Load script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Define callback function
    // @ts-ignore
    window.initMap = () => {
      console.log('[GoogleMaps] Script loaded successfully');
      // @ts-ignore
      if ((window as any).google && (window as any).google.maps) {
        setIsLoaded(true);
      } else {
        const errorMsg = 'Google Maps script loaded but API not available';
        console.error('[GoogleMaps]', errorMsg);
        setLoadError(errorMsg);
      }
    };

    script.onerror = (e) => {
      const errorMsg = `Failed to load Google Maps script: ${e}`;
      console.error('[GoogleMaps]', errorMsg);
      setLoadError(errorMsg);
    };

    document.head.appendChild(script);

    console.log('[GoogleMaps] Script added to document head');

    return () => {
      // Don't remove script as other components might need it
    };
  }, []);

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, loadError }}>
      {children}
    </GoogleMapsContext.Provider>
  );
}

export function useGoogleMaps() {
  return useContext(GoogleMapsContext);
}
