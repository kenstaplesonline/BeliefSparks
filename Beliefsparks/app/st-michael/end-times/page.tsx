import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Scroll, BookOpen, ArrowRight } from "lucide-react";

export default function EndTimesPage() {
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Michael in the End Times</h1>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">The Great Prince at the End</h2>
            <p className="text-stone-800 text-lg">"At that time Michael, the great prince, the protector of your people, will arise. There will be a time of distress such as has not happened from the beginning of nations until then" (Daniel 12:1).</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Eschatological Role of Michael</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Daniel's Vision</h3>
                <p className="text-stone-700">Michael appears in Daniel's final vision as the one who will "arise" to deliver God's people during unprecedented distress. He is linked to the resurrection of the dead (Daniel 12:2).</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Revelation's War in Heaven</h3>
                <p className="text-stone-700">"War broke out in heaven: Michael and his angels fought against the dragon... The great dragon was hurled down" (Revelation 12:7-9). This cosmic battle precedes Satan's final defeat.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Last Judgment</h3>
                <p className="text-stone-700">Tradition holds that Michael will present the souls of the dead at the Last Judgment, weighing them in the scales of divine justice. This artistic image reflects his role as warrior for truth.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Victory and Hope</h2>
            <p className="text-stone-700">Michael's role in end times points to two truths:</p>
            <div className="space-y-3">
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>1. The battle is real.</strong> Evil actively opposes God's purposes. We are in spiritual warfare.</p>
              <p className="bg-amber-50 p-4 rounded-lg border-l-4 border-vatican-gold"><strong>2. Victory is certain.</strong> Michael's triumph assures us that God wins. Evil's defeat is not in doubt.</p>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/st-michael/defender-of-church" className="text-vatican-red hover:text-vatican-gold">Previous: Defender of the Church</Link>
              <Link href="/st-michael/devotion-practice" className="text-vatican-red hover:text-vatican-gold">Next: Devotional Practices</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
