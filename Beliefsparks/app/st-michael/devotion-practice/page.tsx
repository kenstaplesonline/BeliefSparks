import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Heart, BookOpen, ArrowRight } from "lucide-react";

export default function DevotionPracticePage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/st-michael" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to St. Michael</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Image src="/icon.png" alt="Logo" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-serif font-bold text-stone-900 hidden sm:inline">Belief Sparks</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-24">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Devotional Practices to St. Michael</h1>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">Honoring the Prince of Heaven</h2>
            <p className="text-stone-800 text-lg">Catholics honor saints, not worship them. Devotion to St. Michael is an expression of love for a fellow servant of God and a recognition of his role in God's plan.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Ways to Honor St. Michael</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Prayer</h3>
                <p className="text-stone-700">The Prayer to St. Michael, composed by Pope Leo XIII, is prayed by millions daily. It asks for protection against Satan and all evil spirits.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Feast Day</h3>
                <p className="text-stone-700">September 29 is the Feast of Sts. Michael, Gabriel, and Raphael. This day is marked with special Mass, readings about angels, and prayers of thanksgiving.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Pilgrimage</h3>
                <p className="text-stone-700">Sites like Monte Gargano in Italy and St. Michael's Mount in Normandy are pilgrimage destinations. The faithful travel to these holy places, seeking Michael's intercession.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Sacramentals</h3>
                <p className="text-stone-700">Medals, scapulars, and images bearing St. Michael are used as sacramentals — visible signs that draw us toward spiritual realities and trust in God's protection.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">The Purpose of Devotion</h2>
            <p className="text-stone-700">Why devotion to an angel?</p>
            <div className="space-y-3">
              <p className="bg-stone-100 p-4 rounded-lg"><strong>1. Not worship.</strong> We honor saints as holy people who lived (or exist) in union with God. Worship belongs to God alone.</p>
              <p className="bg-stone-100 p-4 rounded-lg"><strong>2. Communion.</strong> Devotion connects us to the "great cloud of witnesses" (Hebrews 12:1) who surround us.</p>
              <p className="bg-stone-100 p-4 rounded-lg"><strong>3. Intercession.</strong> We ask saints to pray for us, as we ask friends to pray. The "prayer of a righteous person is powerful" (James 5:16).</p>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/st-michael/end-times" className="text-vatican-red hover:text-vatican-gold">Previous: End Times</Link>
              <Link href="/st-michael/intercessory-prayer" className="text-vatican-red hover:text-vatican-gold">Next: Intercessory Prayer</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
