import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Tent, BookOpen, ArrowRight } from "lucide-react";

export default function TheTentPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/transfiguration" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Transfiguration</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Image src="/icon.png" alt="Logo" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-serif font-bold text-stone-900 hidden sm:inline">Belief Sparks</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-24">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">The Tent — God's Dwelling</h1>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">Let's Build Three Tents</h2>
            <p className="text-stone-800 text-lg">"Peter said to Jesus, 'Lord, it is good for us to be here. If you wish, I will put up three shelters — one for you, one for Moses and one for Elijah'" (Matthew 17:4).</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Why Peter's Offer?</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">To Capture the Moment</h3>
                <p className="text-stone-700">Peter sees heaven touching earth and wants to preserve it. The experience is overwhelming; he doesn't want it to end.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">To Honor the Guests</h3>
                <p className="text-stone-700">Moses and Elijah are the greatest figures of Israel's past. Peter offers hospitality.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Misunderstanding</h3>
                <p className="text-stone-700">Peter doesn't yet grasp that Jesus surpasses even Moses and Elijah. He puts them on equal footing.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">The Feast of Tabernacles</h2>
            <div className="bg-stone-100 p-6 rounded-lg">
              <p className="text-stone-800 text-lg mb-4">Many scholars believe the Transfiguration occurred during the Feast of Tabernacles (Sukkot). This festival celebrated God's dwelling with Israel in the wilderness.</p>
              <p className="text-stone-700">The connection is profound: during the feast remembering God's presence in a tent, Jesus Himself is revealed as God's true dwelling place.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Tabernacles in Scripture</h2>
            <div className="space-y-3">
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>Wilderness:</strong> God's presence in the Tabernacle</p>
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>Temple:</strong> God's glory fills Solomon's Temple</p>
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>Jesus:</strong> "The Word became flesh and made his dwelling among us" (John 1:14)</p>
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>Eucharist:</strong> The Real Presence continues God's dwelling</p>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/transfiguration/voice-from-heaven" className="text-vatican-red hover:text-vatican-gold">Previous: Voice from Heaven</Link>
              <Link href="/transfiguration/glory-to-suffering" className="text-vatican-red hover:text-vatican-gold">Next: Glory to Suffering</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
