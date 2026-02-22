'use client';

import { useEffect, useRef } from 'react';
import { useGoogleMaps } from './GoogleMapsLoader';

interface NeighborhoodMapProps {
  address: string;
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

export default function NeighborhoodMap({ address, center, zoom = 14 }: NeighborhoodMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const { isLoaded, loadError } = useGoogleMaps();

  useEffect(() => {
    if (!isLoaded || !mapRef.current || loadError) {
      console.log('[NeighborhoodMap] Skip init:', { isLoaded, hasRef: !!mapRef.current, loadError });
      return;
    }

    console.log('[NeighborhoodMap] Initializing map for:', address);

    // Calgary default center
    const defaultCenter = {
      lat: 51.0447,
      lng: -114.0719,
    };

    const mapCenter = center || defaultCenter;

    try {
      // @ts-ignore - Google Maps types loaded via script
      const googleMaps = (window as any).google.maps;

      console.log('[NeighborhoodMap] Google Maps API available:', !!googleMaps);

      // Create map
      const map = new googleMaps.Map(mapRef.current, {
        center: mapCenter,
        zoom: zoom,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });

      console.log('[NeighborhoodMap] Map created');
      mapInstanceRef.current = map;

      // If we have explicit coordinates, use them for the marker
      if (center) {
        console.log('[NeighborhoodMap] Using explicit coordinates:', center);
        new googleMaps.Marker({
          position: center,
          map: map,
          title: address,
        });
        return;
      }

      // Otherwise fallback to geocoding the address
      const geocoder = new googleMaps.Geocoder();
      console.log('[NeighborhoodMap] Geocoding address:', address);

      geocoder.geocode({ address: address }, (results: any, status: any) => {
        console.log('[NeighborhoodMap] Geocode result:', status, results);

        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location;
          map.setCenter(location);

          new googleMaps.Marker({
            position: location,
            map: map,
            title: address,
          });

          console.log('[NeighborhoodMap] Marker added at:', location);
        } else {
          console.error('[NeighborhoodMap] Geocode failed:', status);
        }
      });
    } catch (error) {
      console.error('[NeighborhoodMap] Error initializing map:', error);
    }
  }, [isLoaded, loadError, address, center, zoom]);

  if (loadError) {
    console.error('[NeighborhoodMap] Showing error state:', loadError);
    return (
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-600 font-semibold mb-2">Failed to load map</p>
          <p className="text-sm text-gray-600">{loadError}</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
        <div className="animate-pulse bg-gray-300 w-full h-full"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full bg-gray-200"></div>
    </div>
  );
}
