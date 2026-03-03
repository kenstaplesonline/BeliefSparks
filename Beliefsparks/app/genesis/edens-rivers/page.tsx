import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, BookOpen, Droplets, MapPin, Scroll } from "lucide-react";

export default function EdensRiversPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/genesis" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Genesis</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Image 
              src="/icon.png" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="h-8 w-8 object-contain"
            />
            <span className="font-serif font-bold text-stone-900 hidden sm:inline">Belief Sparks</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <Droplets className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Genesis Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Eden's Rivers — Life, Wisdom, <br />
            <span className="text-vatican-gold">and Restoration</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Genesis describes four rivers flowing from Eden: Pishon, Gihon, Tigris, and Euphrates. Some see these as literal rivers. Others see them as symbolic: life-giving boundaries or as sources that once nourished humanity's relationship with God. Strikingly, Revelation 22:1-2 describes a river flowing from God's throne, with the tree of life on its banks — Eden restored, but gloriously transformed.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Mystery:</strong> A single river flows out of Eden and divides into four heads — Pishon, Gihon, Tigris, and Euphrates. Two of these rivers we can identify today. Two remain mysterious. What was this river system meant to communicate about Eden's place in the world and God's purposes for creation?
            </p>
          </div>

          {/* Section 1 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Four Rivers</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Geography & Symbol</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Genesis 2:10-14 names four rivers flowing from Eden. The Tigris and Euphrates are well-known — they still flow through Mesopotamia (modern Iraq). The Pishon "winds through the entire land of Havilah, where there is gold." The Gihon "winds through the entire land of Cush." These two have been lost to history, spawning endless speculation about Eden's location.
              </p>
              <p>
                But the ancient readers might not have been looking for a GPS coordinate. In temple imagery, rivers flowing from sacred space symbolized blessing extending to the whole world. Ezekiel's vision of the restored temple features water flowing from the threshold, growing deeper as it goes, healing everything it touches (Ezekiel 47:1-12). The four rivers from Eden may represent the four corners of the earth — God's blessing flowing to all creation.
              </p>
              <p>
                The geographical references also connect Eden to the known world of the ancient Near East. Havilah's gold, Cush's lands, Assyria where the Tigris flows — these were real places that Israel's readers would recognize. Eden wasn't in some mythic realm but connected to their world, their geography, their experience.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Droplets className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Temple Imagery</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Living Water</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                In the ancient world, temples were often associated with water — springs, wells, or artificial pools that symbolized the source of life. The Gihon spring in Jerusalem, which supplied water to the Temple, was named after one of Eden's rivers. The connection wasn't coincidental.
              </p>
              <p>
                Psalm 46:4 captures this imagery: "There is a river whose streams make glad the city of God, the holy habitation of the Most High." Joel 3:18 prophesies that "in that day the mountains shall drip sweet wine, and the hills shall flow with milk, and all the streambeds of Judah shall flow with water; and a fountain shall come forth from the house of the LORD."
              </p>
              <p>
                The river from Eden, then, is temple theology in narrative form. Eden was God's sanctuary, and from it flowed life-giving water that nourished the whole earth. When humanity lost Eden, they lost access to this life-giving source. But the prophetic hope was that God would restore the river — that His presence would again become the source of blessing for all creation.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scroll className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Eden Restored</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Revelation 22</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The Bible's final chapter brings the river imagery full circle. John sees "the river of the water of life, bright as crystal, flowing from the throne of God and of the Lamb through the middle of the street of the city; also, on either side of the river, the tree of life with its twelve kinds of fruit, yielding its fruit each month. The leaves of the tree were for the healing of the nations" (Revelation 22:1-2).
              </p>
              <p>
                The river is back. The tree of life is back. But something has changed. The river now flows from God's throne in the New Jerusalem — not a garden but a garden-city. The tree bears twelve kinds of fruit, one for each month — abundance beyond Eden's original bounty. The leaves bring healing to the nations — Eden's blessing extended to all peoples.
              </p>
              <p>
                This is restoration, but also transformation. We're not going back to Eden; we're going forward to something greater. The sacred space that was lost is not just recovered but expanded. God's presence, once confined to a garden, fills the whole city. The life-giving water that once watered four regions now brings healing to every nation.
              </p>
              <p>
                Eden's rivers, then, are both memory and promise. They remind us what was lost — the intimate presence of God, the source of life freely accessible, the blessing that flowed to all creation. And they point forward to what will be restored — not just a return to paradise, but an upgrade to something far more glorious.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-16 border-t border-stone-200">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Continue Exploring Genesis</h3>
            <Link 
              href="/genesis"
              className="inline-block px-8 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-stone-800 hover:text-white transition-colors duration-300 shadow-md"
            >
              Return to Genesis Series
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
