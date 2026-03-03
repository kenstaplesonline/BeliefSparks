import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MessageCircle, BookOpen, ArrowRight } from "lucide-react";

export default function IntercessoryPrayerPage() {
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Asking for Michael's Intercession</h1>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">Intercession: Asking a Friend to Pray</h2>
            <p className="text-stone-800 text-lg">Intercession simply means asking someone to pray for you. When we ask St. Michael to pray for us, we're asking a powerful spiritual being who loves God to bring our needs before Him.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">How to Ask for Michael's Intercession</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">In Times of Spiritual Battle</h3>
                <p className="text-stone-700">"St. Michael the Archangel, defend us in battle..." This prayer can be said when facing temptation, spiritual attack, or when loved ones need protection.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">For Discernment</h3>
                <p className="text-stone-700">Michael's name "Who is like God?" reminds us of God's supreme wisdom. We can ask for help discerning God's will in confusing situations.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">For Courage</h3>
                <p className="text-stone-700">As a warrior, Michael exemplifies courage in battle. We can ask for strength to stand for truth and justice in our own battles.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Daily</h3>
                <p className="text-stone-700">Many Catholics begin or end their day with the Prayer to St. Michael, acknowledging spiritual realities and seeking God's protection.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">The Prayer to St. Michael</h2>
            <div className="bg-stone-100 p-6 rounded-lg">
              <p className="text-stone-800 italic">"St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the heavenly host, by the power of God, thrust into hell Satan and all the evil spirits who wander through the world for the ruin of souls. Amen."</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Understanding Intercession</h2>
            <div className="space-y-3">
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>1. Not worship.</strong> Asking for intercession is not worshipping the saint. It's asking a friend to pray.</p>
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>2. Biblical.</strong> The Bible shows saints and angels interceding (Jeremiah 15:1, Revelation 8:3-4).</p>
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>3. Communion.</strong> Intercession connects us to the whole body of Christ — those on earth and in heaven.</p>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/st-michael/devotion-practice" className="text-vatican-red hover:text-vatican-gold">Previous: Devotional Practices</Link>
              <Link href="/transfiguration" className="text-vatican-red hover:text-vatican-gold">Next: Transfiguration Series</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
