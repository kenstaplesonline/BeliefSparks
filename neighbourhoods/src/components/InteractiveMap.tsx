'use client';

import { useEffect, useRef, useState } from 'react';
import { useGoogleMaps } from './GoogleMapsLoader';

interface Location {
  name: string;
  lat: number;
  lng: number;
  url: string;
}

interface InteractiveMapProps {
  locations: Location[];
  zoom?: number;
}

export default function InteractiveMap({ locations, zoom = 11 }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const { isLoaded, loadError } = useGoogleMaps();
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || loadError) {
      return;
    }

    // Calgary default center
    const defaultCenter = {
      lat: 51.0447,
      lng: -114.0719,
    };

    try {
      // @ts-ignore - Google Maps types loaded via script
      const googleMaps = (window as any).google.maps;

      // Create map if not exists
      if (!mapInstanceRef.current) {
        mapInstanceRef.current = new googleMaps.Map(mapRef.current, {
          center: defaultCenter,
          zoom: zoom,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
          mapTypeControl: false,
          streetViewControl: false,
        });
      }

      const map = mapInstanceRef.current;

      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      // Add markers
      const bounds = new googleMaps.LatLngBounds();

      locations.forEach((loc) => {
        const position = { lat: loc.lat, lng: loc.lng };
        
        const marker = new googleMaps.Marker({
          position: position,
          map: map,
          title: loc.name,
          animation: googleMaps.Animation.DROP,
        });

        // Add info window
        const infoWindow = new googleMaps.InfoWindow({
          content: `
            <div style="padding: 8px; text-align: center;">
              <h3 style="font-weight: bold; margin-bottom: 4px; color: #C8102E;">${loc.name}</h3>
              <a href="${loc.url}" style="color: #666; text-decoration: none; font-size: 14px;">View Profile →</a>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        markersRef.current.push(marker);
        bounds.extend(position);
      });

      // Fit bounds if we have locations
      if (locations.length > 0) {
        map.fitBounds(bounds);
        // Adjust zoom slightly if it's too zoomed in or out after fitBounds
        const listener = googleMaps.event.addListener(map, "idle", () => { 
          if (map.getZoom() > 14) map.setZoom(14); 
          googleMaps.event.removeListener(listener); 
        });
      }

    } catch (error) {
      console.error('[InteractiveMap] Error initializing map:', error);
    }
  }, [isLoaded, loadError, locations, zoom]);

  if (loadError) {
    return (
      <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-600 font-semibold mb-2">Failed to load map</p>
          <p className="text-sm text-gray-600">{loadError}</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
        <div className="animate-pulse bg-gray-300 w-full h-full"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg relative">
      <div ref={mapRef} className="w-full h-full bg-gray-200"></div>
    </div>
  );
}
