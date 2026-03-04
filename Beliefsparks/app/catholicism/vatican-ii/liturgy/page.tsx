import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Flame, BookOpen, ArrowRight } from "lucide-react";

export default function VaticanIILiturgyPage() {
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
            <Flame className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Vatican II Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Liturgical Revolution</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">"Full, conscious, and active participation" — The Council transformed how Catholics worship.</p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">From Latin to Vernacular</h2>
            <p className="text-stone-700 leading-relaxed">Before Vatican II, Mass was celebrated entirely in Latin worldwide. The Council authorized the use of local languages, making the liturgy accessible to ordinary Catholics for the first time in centuries.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Key Changes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Altar Turned</h3>
                <p className="text-stone-600 text-sm">The priest now faced the people (versus populum) rather than the altar (ad orientem), emphasizing the communal meal aspect of the Eucharist.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Lay Participation</h3>
                <p className="text-stone-600 text-sm">Lay readers, extraordinary ministers of communion, altar servers, and cantors became ordinary features of parish life.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Simplified Rites</h3>
                <p className="text-stone-600 text-sm">The Council called for "noble simplicity"—removing duplications and restoring ancient elements that had been lost over centuries.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Three-Year Lectionary</h3>
                <p className="text-stone-600 text-sm">A new cycle of Scripture readings ensured Catholics would hear more of the Bible at Sunday Mass—now covering all four Gospels and major epistles over three years.</p>
              </div>
            </div>
          </section>

          <section className="bg-stone-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-stone-900 mb-3">Ongoing Debates</h2>
            <p className="text-stone-700 leading-relaxed mb-4">The liturgical changes remain the most visible and debated aspect of Vatican II. Some argue reforms went too far; others say they didn't go far enough. The "spirit vs. letter of the Council" continues to shape Catholic discussions today.</p>
            <p className="text-stone-600 text-sm italic">Pope Benedict XVI famously spoke of a "hermeneutic of continuity"—reading Vatican II in continuity with tradition rather than as a break from it.</p>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/catholicism/vatican-ii/constitutions" className="text-vatican-red hover:text-vatican-gold">← Previous: Constitutions</Link>
              <Link href="/catholicism/vatican-ii/ecumenism" className="text-vatican-red hover:text-vatican-gold">Next: Ecumenism →</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
