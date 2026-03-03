import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Users, BookOpen, Scroll, ArrowRight } from "lucide-react";

export default function MosesElijahPage() {
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Moses and Elijah: Law and Prophets</h1>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">They Appear with Jesus</h2>
            <p className="text-stone-800 text-lg">"Just then there appeared before them Moses and Elijah, talking with Jesus" (Matthew 17:3). The greatest of the Old Covenant meet the One who fulfills all.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Why These Two?</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Moses: The Lawgiver</h3>
                <p className="text-stone-700">Moses received the Law on Sinai. He represents the Torah — God's covenant with Israel. Jesus is the new Moses, giving a law written on hearts (Jeremiah 31:31).</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Elijah: The Prophet</h3>
                <p className="text-stone-700">Elijah confronted Baal worship, called Israel back to God, was taken to heaven in a chariot. He represents the Prophets who spoke God's word.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Together: All Scripture</h3>
                <p className="text-stone-700">"The Law and the Prophets" was a phrase meaning the entire Old Testament. Jesus fulfills it all.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">What They Speak About</h2>
            <div className="bg-stone-100 p-6 rounded-lg">
              <p className="text-stone-800">Luke tells us: "They spoke about his departure, which he was about to bring to fulfillment at Jerusalem" (Luke 9:31). The word "departure" in Greek is <em>exodos</em> — "exodus."</p>
              <p className="text-stone-700 mt-4">Moses led the first Exodus from Egypt. Jesus would lead the true Exodus — from sin and death to life with God. The conversation was about the Cross.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Jesus Fulfills Both</h2>
            <div className="space-y-3">
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>Greater than Moses:</strong> Jesus says "One greater than Moses is here" (Matthew 12:6). He gives the new Law of love.</p>
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>Fulfills Prophecy:</strong> Every prophecy points to Christ. The Prophets testify to Him.</p>
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>Unites Testaments:</strong> Old and New are not separate stories. They are one story, with Jesus at the center.</p>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/transfiguration/dazzling-light" className="text-vatican-red hover:text-vatican-gold">Previous: The Dazzling Light</Link>
              <Link href="/transfiguration/voice-from-heaven" className="text-vatican-red hover:text-vatican-gold">Next: Voice from Heaven</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
