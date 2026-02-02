import { MapPin, Home, TreePine, ShoppingBag, Coffee, School, Star } from "lucide-react";
import NeighborhoodMap from "@/components/NeighborhoodMap";

interface NeighbourhoodData {
  name: string;
  quadrant: string;
  tagline: string;
  description: string;
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  stats: {
    population?: number;
    avgHomePrice?: string;
    walkScore?: number;
    transitScore?: number;
  };
  highlights: Array<{
    icon: "park" | "cafe" | "shop" | "school" | "home";
    title: string;
    description: string;
  }>;
  vibe: string[];
  realData: {
    fact1: string;
    fact2: string;
    fact3: string;
  };
}

const neighbourhoods: Record<string, NeighbourhoodData> = {
  kensington: {
    name: "Kensington",
    quadrant: "NW",
    tagline: "Vibrant & Walkable Urban Village",
    description: "Kensington is one of Calgary's most beloved neighbourhoods, known for its walkable streets, eclectic mix of independent shops, and incredible food scene. Located just north of downtown along the Bow River, this historic community has evolved into a cultural hub where vintage charm meets modern energy.",
    address: "10 Street NW, Calgary, AB",
    coordinates: { lat: 51.0525, lng: -114.0944 },
    stats: {
      population: 4200,
      avgHomePrice: "$550K-$900K",
      walkScore: 92,
      transitScore: 85,
    },
    highlights: [
      {
        icon: "park",
        title: "Riverside Walks",
        description: "Steps away from the Bow River pathway system with direct access to Prince's Island Park and downtown",
      },
      {
        icon: "cafe",
        title: "Independent Cafés",
        description: "15+ unique coffee shops and bistros, including the iconic Kensington Coffee Co. and Gravity Café",
      },
      {
        icon: "shop",
        title: "Boutique Shopping",
        description: "Over 100 independent retailers, from vintage clothing to artisan crafts and local art galleries",
      },
    ],
    vibe: ["Walkable", "Eclectic", "Cultural", "Foodie Heaven", "Historic"],
    realData: {
      fact1: "92 walk score — one of Calgary's most walkable neighbourhoods",
      fact2: "Over 200 local businesses call Kensington home",
      fact3: "Home to the annual Sun and Salsa Festival, drawing 50,000+ visitors",
    },
  },
  "mission-cliff-bungalow": {
    name: "Mission Cliff Bungalow",
    quadrant: "SW",
    tagline: "Historic Charm Meets River Living",
    description: "Nestled along the Elbow River, Mission Cliff Bungalow is a hidden gem that combines the character of historic homes with stunning natural beauty. This small but mighty community offers a peaceful retreat from city life while keeping you connected to Calgary's vibrant urban core.",
    address: "Cliff Street SW, Calgary, AB",
    coordinates: { lat: 51.0333, lng: -114.0742 },
    stats: {
      population: 1800,
      avgHomePrice: "$600K-$950K",
      walkScore: 78,
      transitScore: 72,
    },
    highlights: [
      {
        icon: "park",
        title: "Elbow River Access",
        description: "Private pathway access with kayaking points and quiet riverside walks",
      },
      {
        icon: "home",
        title: "Character Homes",
        description: "Original cliff-side bungalows built in the 1940s-50s, many with stunning river views",
      },
      {
        icon: "cafe",
        title: "Mission District",
        description: "Walk to 17th Avenue's restaurants, bars, and shops in under 10 minutes",
      },
    ],
    vibe: ["Peaceful", "Scenic", "Historic", "Connected", "Exclusive"],
    realData: {
      fact1: "78 walk score — walkable to both river paths and 17th Avenue",
      fact2: "70% of homes were built before 1960, preserving historic character",
      fact3: "Direct access to over 50km of Calgary's pathway network",
    },
  },
  sunnyside: {
    name: "Sunnyside",
    quadrant: "NW",
    tagline: "Community Spirit & Stunning Views",
    description: "Sunnyside lives up to its name — bright, welcoming, and full of life. This tight-knit community is famous for its active residents, beautiful parks, and some of the best downtown views in the city. It's where urban convenience meets small-town warmth.",
    address: "2 Avenue NW, Calgary, AB",
    coordinates: { lat: 51.0528, lng: -114.0983 },
    stats: {
      population: 4100,
      avgHomePrice: "$500K-$850K",
      walkScore: 95,
      transitScore: 88,
    },
    highlights: [
      {
        icon: "park",
        title: "Sunnyside Park",
        description: "3-acre community park with playground, sports courts, and annual neighbourhood events",
      },
      {
        icon: "home",
        title: "Heritage Homes",
        description: "Mix of renovated historic homes and modern infills, all with character",
      },
      {
        icon: "cafe",
        title: "Local Business Hub",
        description: "10+ locally-owned restaurants and shops, including the famous The Main Street Deli",
      },
    ],
    vibe: ["Welcoming", "Active", "Scenic", "Walkable", "Community-Focused"],
    realData: {
      fact1: "95 walk score — among Calgary's most walkable neighbourhoods",
      fact2: "Home to 3 community gardens and active environmental initiatives",
      fact3: "Direct LRT access — 2 minutes to downtown, 15 minutes to airport",
    },
  },
  "deer-valley": {
    name: "Deer Run",
    quadrant: "SE",
    tagline: "Family Paradise with Endless Amenities",
    description: "Deer Run is designed for families who want it all — safe streets, excellent schools, abundant parks, and every convenience you could need. This master-planned community has grown into one of SE Calgary's most sought-after family destinations.",
    address: "Deer Run Way SE, Calgary, AB",
    coordinates: { lat: 50.9181, lng: -114.0083 },
    stats: {
      population: 12500,
      avgHomePrice: "$450K-$700K",
      walkScore: 45,
      transitScore: 52,
    },
    highlights: [
      {
        icon: "school",
        title: "Schools Within Walking Distance",
        description: "3 elementary schools, 1 middle school, and 2 high schools in the community",
      },
      {
        icon: "park",
        title: "Park-Rich Community",
        description: "12 parks, including Deer Valley Park with spray deck, tennis courts, and pathways",
      },
      {
        icon: "shop",
        title: "Southcentre Mall Access",
        description: "5 minutes to major shopping, dining, and entertainment hub",
      },
    ],
    vibe: ["Family-Friendly", "Safe", "Convenient", "Active", "Established"],
    realData: {
      fact1: "12 parks within neighbourhood boundaries",
      fact2: "Direct bus routes to downtown with express service",
      fact3: "Home to Deer Valley Community Association — one of Calgary's most active",
    },
  },
  altadore: {
    name: "Altadore",
    quadrant: "SW",
    tagline: "Urban Oasis Steps from the River",
    description: "Altadore is where Calgary's urban pulse meets natural beauty. This sought-after community offers the perfect balance: quiet, tree-lined streets and spacious homes, all within walking distance of the river, vibrant 17th Avenue, and some of the city's best amenities.",
    address: "Altadore Road SW, Calgary, AB",
    coordinates: { lat: 51.0160, lng: -114.1005 },
    stats: {
      population: 5200,
      avgHomePrice: "$650K-$1M+",
      walkScore: 85,
      transitScore: 76,
    },
    highlights: [
      {
        icon: "park",
        title: "River Access",
        description: "Direct connection to Elbow River pathways and Stanley Park",
      },
      {
        icon: "cafe",
        title: "17th Avenue Proximity",
        description: "Walk to Calgary's trendiest strip of restaurants, shops, and nightlife",
      },
      {
        icon: "home",
        title: "Beautiful Homes",
        description: "Mix of character properties and modern infills on spacious lots",
      },
    ],
    vibe: ["Upscale", "Walkable", "Scenic", "Connected", "Trendy"],
    realData: {
      fact1: "85 walk score — excellent access to both river paths and urban amenities",
      fact2: "Adjacent to 200+ acre Stanley Park — one of Calgary's largest urban parks",
      fact3: "Quick access to the Repsol Centre with year-round recreation",
    },
  },
  southwood: {
    name: "Southwood",
    quadrant: "SW",
    tagline: "Established Comfort with Modern Appeal",
    description: "Southwood has it all — mature trees, spacious lots, friendly neighbours, and fantastic schools. This well-established community has thoughtfully evolved, welcoming new families while preserving the charm that has made it a Calgary favorite for over 50 years.",
    address: "Southwood Drive SW, Calgary, AB",
    coordinates: { lat: 50.9569, lng: -114.0844 },
    stats: {
      population: 8900,
      avgHomePrice: "$550K-$850K",
      walkScore: 55,
      transitScore: 62,
    },
    highlights: [
      {
        icon: "school",
        title: "Excellent Schools",
        description: "Dr. Roberta Bondar School and Southwood Elementary within walking distance",
      },
      {
        icon: "park",
        title: "Southwood Park",
        description: "10-acre community park with playground, sports fields, and pathway connections",
      },
      {
        icon: "home",
        title: "Mature Neighbourhood",
        description: "Beautiful tree-lined streets and spacious properties with character",
      },
    ],
    vibe: ["Established", "Family-Friendly", "Quiet", "Convenient", "Community-Focused"],
    realData: {
      fact1: "40+ year history with well-established infrastructure",
      fact2: "Direct access to Shawnessy LRT station via pathway",
      fact3: "Home to an active community association with year-round programming",
    },
  },
};

export default async function NeighbourhoodPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const neighbourhood = neighbourhoods[name];

  if (!neighbourhood) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Neighbourhood not found</h1>
      </div>
    );
  }

  const iconMap = {
    park: TreePine,
    cafe: Coffee,
    shop: ShoppingBag,
    school: School,
    home: Home,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-red-200">{neighbourhood.quadrant} Calgary</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{neighbourhood.name}</h1>
          <p className="text-xl md:text-2xl text-red-100 mb-6">{neighbourhood.tagline}</p>
          <p className="text-base md:text-lg text-red-200 max-w-3xl">{neighbourhood.description}</p>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Location</h2>
          <NeighborhoodMap
            address={neighbourhood.address}
            center={neighbourhood.coordinates}
          />
          <p className="mt-4 text-gray-600">{neighbourhood.address}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {neighbourhood.stats.population && (
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">
                  {neighbourhood.stats.population.toLocaleString()}
                </div>
                <div className="text-gray-600">Residents</div>
              </div>
            )}
            {neighbourhood.stats.avgHomePrice && (
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">
                  {neighbourhood.stats.avgHomePrice}
                </div>
                <div className="text-gray-600">Avg Home Price</div>
              </div>
            )}
            {neighbourhood.stats.walkScore && (
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-1">
                  {neighbourhood.stats.walkScore}
                </div>
                <div className="text-gray-600">Walk Score</div>
              </div>
            )}
            {neighbourhood.stats.transitScore && (
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-1">
                  {neighbourhood.stats.transitScore}
                </div>
                <div className="text-gray-600">Transit Score</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vibe */}
      <section className="py-12 px-4 md:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">The Vibe</h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {neighbourhood.vibe.map((v) => (
              <span
                key={v}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-primary text-white rounded-full font-semibold text-sm md:text-base"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Neighbourhood Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {neighbourhood.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon];
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Data */}
      <section className="py-12 px-4 md:px-6 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">What Makes It Real</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-red-100">{neighbourhood.realData.fact1}</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-red-100">{neighbourhood.realData.fact2}</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-red-100">{neighbourhood.realData.fact3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Know More?</h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
            We're continuously adding new insights and stories about {neighbourhood.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button className="bg-primary text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors whitespace-nowrap text-sm md:text-base w-full sm:w-auto">
              Get Updates
            </button>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-6 md:py-8 px-4 md:px-6 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold"
          >
            ← Back to All Neighbourhoods
          </a>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(neighbourhoods).map((name) => ({
    name,
  }));
}
