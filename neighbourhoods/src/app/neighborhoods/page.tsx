import { Star, ArrowRight } from "lucide-react";

const neighborhoods = [
  { name: "Kensington", slug: "kensington", quadrant: "NW", tagline: "Vibrant & Walkable" },
  { name: "Mission Cliff Bungalow", slug: "mission-cliff-bungalow", quadrant: "SW", tagline: "Historic Charm" },
  { name: "Sunnyside", slug: "sunnyside", quadrant: "NW", tagline: "Community Spirit" },
  { name: "Deer Valley", slug: "deer-valley", quadrant: "SE", tagline: "Family Paradise" },
  { name: "Altadore", slug: "altadore", quadrant: "SW", tagline: "Urban Oasis" },
  { name: "Southwood", slug: "southwood", quadrant: "SW", tagline: "Established Comfort" },
];

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Calgary's Neighbourhoods</h1>
          <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto">
            From vibrant urban villages to peaceful family communities, discover what makes each Calgary neighbourhood special.
          </p>
        </div>
      </section>

      {/* Neighborhood Grid */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {neighborhoods.map((hood) => (
              <a
                key={hood.slug}
                href={`/neighborhoods/${hood.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 block"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {hood.name}
                  </h3>
                  <span className="text-xs font-semibold text-primary bg-gray-100 px-2 py-1 rounded-full">
                    {hood.quadrant}
                  </span>
                </div>
                <p className="text-secondary font-semibold mb-2">{hood.tagline}</p>
                <div className="flex items-center text-primary font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                  <span>Explore Neighbourhood</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-bold">More Neighbourhoods Coming Soon</h2>
            <Star className="w-6 h-6 text-secondary" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're working hard to add more Calgary communities. Have a neighbourhood you'd like to see featured? Let us know!
          </p>
        </div>
      </section>
    </div>
  );
}
