import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Globe, BookOpen, ArrowRight, Shield } from "lucide-react";

export default function VaticanIIContextPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/catholicism/vatican-ii" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Vatican II</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Image src="/icon.png" alt="Logo" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-serif font-bold text-stone-900 hidden sm:inline">Belief Sparks</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-24">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <Globe className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Vatican II Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">The World Before the Council</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">The Church had spent nearly 400 years in a defensive posture. By the 1950s, the world had changed. The Church needed to respond.</p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-stone-100 p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">The Fortress Church</h2>
            <p className="text-stone-700 leading-relaxed mb-4">Following the Council of Trent (1545-1563), the Catholic Church had adopted a defensive posture against the Protestant Reformation, the Enlightenment, and modern secularism. This "fortress mentality" served the Church well in preserving doctrine, but by the mid-20th century, it had created a disconnect from the modern world.</p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-1">Liturgical Detachment</h3>
                <p className="text-stone-600 text-sm">Mass was celebrated entirely in Latin, priest facing the altar, congregation as silent spectators rather than active participants.</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-1">Theological Stagnation</h3>
                <p className="text-stone-600 text-sm">Neo-Scholasticism had become rigid—rote memorization and defense of dogma rather than engagement with Scripture and the early Church Fathers.</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-1">Ecumenical Isolation</h3>
                <p className="text-stone-600 text-sm">Relationships with other Christian denominations were virtually non-existent, defined by mutual suspicion and exclusion.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">The World in Crisis</h2>
            <p className="text-stone-700 leading-relaxed">The mid-20th century had witnessed unprecedented upheaval:</p>
            <ul className="space-y-2 text-stone-700">
              <li className="flex items-start"><span className="text-vatican-red mr-2">•</span> Two global wars with millions dead</li>
              <li className="flex items-start"><span className="text-vatican-red mr-2">•</span> The Holocaust and the failure of Christian civilization</li>
              <li className="flex items-start"><span className="text-vatican-red mr-2">•</span> Rise of atheistic communism across Eastern Europe</li>
              <li className="flex items-start"><span className="text-vatican-red mr-2">•</span> Decolonization and the emergence of the Global South</li>
              <li className="flex items-start"><span className="text-vatican-red mr-2">•</span> Rapid technological and social change</li>
            </ul>
          </section>

          <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">The Surprise Announcement</h2>
            <p className="text-stone-700 leading-relaxed mb-4">When Pope John XXIII announced the council on January 25, 1959, it shocked the world. There was no immediate crisis or heresy to combat. Instead, he called for <em>Aggiornamento</em>—"bringing up to date."</p>
            <p className="text-stone-700 leading-relaxed italic">"I want to throw open the windows of the Church so that we can see out and the people can see in."</p>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/catholicism/vatican-ii" className="text-vatican-red hover:text-vatican-gold">← Back to Overview</Link>
              <Link href="/catholicism/vatican-ii/constitutions" className="text-vatican-red hover:text-vatican-gold">Next: The Four Constitutions →</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
