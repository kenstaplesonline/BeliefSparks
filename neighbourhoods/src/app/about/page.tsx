'use client';

import { useState } from "react";
import { MapPin, Heart, Users, Mail, Phone, Building2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            About The Neighbourhoods
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-red-100 mb-6 md:mb-8">
            Calgary is more than just a city — it's a collection of unique, vibrant communities, each with its own personality, stories, and reasons to love it. We're here to celebrate every single one of them, from the bustle of downtown to the quiet streets of our suburbs.
          </p>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Communities</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We currently have 6 detailed neighborhood profiles across Calgary's diverse quadrants, with more coming soon.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-primary/10 p-6 rounded-lg text-white text-center">
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-xl font-semibold">Neighbourhoods Profiled</div>
              <div className="text-sm">Downtown & NW Calgary</div>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg text-white text-center">
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-xl font-semibold">Southwest & SE Calgary</div>
              <div className="text-sm">Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            To showcase the positive aspects of every single Calgary neighborhood, creating connection, pride, and appreciation for our communities.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Data-Driven</h3>
              <p className="text-gray-600">
                We use real data and verified statistics to tell authentic stories about each neighborhood.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community-First</h3>
              <p className="text-gray-600">
                Every community has its own personality. We focus on what makes each area special, not generic praise.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Authentic Stories</h3>
              <p className="text-gray-600">
                No promotional fluff. Just genuine insights from people who actually live there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">The Neighbourhoods</h2>
          <p className="text-gray-400 mb-4">Discover the heart of every Calgary neighborhood</p>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="/neighborhoods" className="text-gray-300 hover:text-white transition-colors">
              Neighbourhoods
            </a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            © 2026 The Neighbourhoods. All rights reserved. Made with ❤️ in Calgary.
          </p>
        </div>
      </footer>
    </div>
  );
}
