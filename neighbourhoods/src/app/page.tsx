'use client';

import { MapPin, Heart, Users, Star, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            Discover the Heart of Every Calgary Neighbourhood
          </h1>
          <div className="mb-4 md:mb-6 max-w-4xl mx-auto">
            <img
              src="/hero-image.png"
              alt="Calgary neighbourhoods"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-red-100 mb-6 md:mb-8 max-w-3xl mx-auto">
            We don't just list neighbourhoods — we celebrate them. Explore authentic stories, hidden gems, and what makes each community truly special.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
                href="/neighborhoods"
                className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-secondary-dark transition-colors text-base md:text-lg w-full sm:w-auto"
              >
                Explore Neighbourhoods
              </a>
            <a
                href="/about"
                className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-base md:text-lg w-full sm:w-auto"
              >
                About
              </a>
            <a
                href="/contact"
                className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-base md:text-lg w-full sm:w-auto"
              >
                Contact
              </a>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Discover</h3>
              <p className="text-gray-600">
                Every Calgary neighborhood has a story. We uncover the hidden gems, local favorites, and unique character of each community.
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Curated Content</h3>
              <p className="text-gray-600">
                Authentic stories from locals, real data and insights, and a celebration of what makes each area special.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Real Local Stories</h3>
              <p className="text-gray-600">
                No generic descriptions. No promotional fluff. Just genuine insights from people who actually live there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Neighborhoods */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Neighbourhoods</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From vibrant urban centres to quiet family-friendly suburbs, explore Calgary's diverse communities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Kensington",
                tagline: "Vibrant & Walkable",
                description: "Eclectic shops, amazing food, and that perfect urban vibe",
                quadrant: "NW"
              },
              {
                name: "Mission Cliff Bungalow",
                tagline: "Historic Charm",
                description: "Character homes, river proximity, and tree-lined streets",
                quadrant: "SW"
              },
              {
                name: "Sunnyside",
                tagline: "Community Spirit",
                description: "Active locals, great parks, and stunning views",
                quadrant: "NW"
              },
              {
                name: "Deer Run",
                tagline: "Family Paradise",
                description: "Safe streets, great schools, and endless amenities",
                quadrant: "SE"
              },
              {
                name: "Altadore",
                tagline: "Urban Oasis",
                description: "Mix of old and new, steps from the river",
                quadrant: "SW"
              },
              {
                name: "Southwood",
                tagline: "Established Comfort",
                description: "Mature trees, spacious lots, and friendly neighbors",
                quadrant: "SW"
              }
            ].map((hood) => (
              <a key={hood.name} href={`/neighborhoods/${hood.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{hood.name}</h3>
                    <span className="text-xs font-semibold text-primary bg-gray-100 px-2 py-1 rounded-full">
                      {hood.quadrant}
                    </span>
                  </div>
                  <p className="text-secondary font-semibold mb-2">{hood.tagline}</p>
                  <p className="text-gray-600 text-sm mb-4">{hood.description}</p>
                  <div className="flex items-center text-primary text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    Explore Now →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Communities</h2>
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

      {/* About Section */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About The Neighbourhoods</h2>
          <p className="text-lg text-red-100 mb-8">
            Calgary is more than just a city — it's a collection of unique, vibrant communities, each with its own personality, stories, and reasons to love it. We're here to celebrate every single one of them, from the bustle of downtown to the quiet streets of our suburbs.
          </p>
          <p className="text-lg text-red-100">
            Whether you're looking to move, exploring what's nearby, or just proud of where you live, we help you discover the heart of every Calgary neighborhood.
          </p>
          <p className="text-sm text-red-200 mb-8">
            <strong>Our Communities:</strong> We currently have 6 detailed neighborhood profiles across Calgary's diverse quadrants, with more coming soon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="/neighborhoods/kensington" className="text-primary hover:underline">Kensington</a>
            {" "}
            <a href="/neighborhoods/mission-cliff-bungalow" className="text-primary hover:underline">Mission Cliff Bungalow</a>
            {" "}
            <a href="/neighborhoods/sunnyside" className="text-primary hover:underline">Sunnyside</a>
            {" "}
            <a href="/neighborhoods/deer-valley" className="text-primary hover:underline">Deer Run</a>
            {" "}
            <a href="/neighborhoods/altadore" className="text-primary hover:underline">Altadore</a>
            {" "}
            <a href="/neighborhoods/southwood" className="text-primary hover:underline">Southwood</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-8">
            Sign up for our newsletter to be notified when new neighborhoods are added and receive exclusive local insights.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-secondary-dark transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Us</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">The Neighbourhoods</h3>
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <a href="mailto:theneighbourhoodscanada@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email Us</span>
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
