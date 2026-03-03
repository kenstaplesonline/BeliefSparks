import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Sun, BookOpen, ArrowRight } from "lucide-react";

export default function DazzlingLightPage() {
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">The Dazzling Light of Glory</h1>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">Uncreated Light</h2>
            <p className="text-stone-800 text-lg">"His face shone like the sun, and his clothes became as white as the light" (Matthew 17:2). This wasn't reflected sunlight. This was the uncreated light of God's glory.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Light in Scripture</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">At Sinai</h3>
                <p className="text-stone-700">"The glory of the Lord settled on Mount Sinai... The appearance of the glory of the Lord was like a consuming fire" (Exodus 24:16-17).</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">In the Temple</h3>
                <p className="text-stone-700">Solomon's dedication: "The priests could not perform their service because of the cloud, for the glory of the Lord filled his temple" (1 Kings 8:11).</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">In Christ</h3>
                <p className="text-stone-700">"The Word became flesh and made his dwelling among us, and we have seen his glory, the glory of the One and Only, full of grace and truth" (John 1:14).</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">What This Light Reveals</h2>
            <div className="space-y-3">
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>1. Jesus is fully God.</strong> The glory is His by nature, not something conferred upon Him.</p>
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>2. Heaven touches earth.</strong> The mountain becomes a thin place where divine reality breaks through.</p>
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>3. We will share this glory.</strong> "We will be like him, for we will see him as he is" (1 John 3:2).</p>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/transfiguration" className="text-vatican-red hover:text-vatican-gold">Previous: Transfiguration Overview</Link>
              <Link href="/transfiguration/moses-elijah" className="text-vatican-red hover:text-vatican-gold">Next: Moses and Elijah</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
