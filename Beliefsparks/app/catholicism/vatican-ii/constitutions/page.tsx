import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Scroll, BookOpen, ArrowRight } from "lucide-react";

export default function VaticanIIConstitutionsPage() {
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
            <Scroll className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Vatican II Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">The Four Constitutions</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">The Council produced 16 documents, but four Constitutions serve as the pillars of Vatican II teaching.</p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white p-6 rounded-xl border-l-4 border-vatican-red shadow-sm">
            <h2 className="text-xl font-bold text-stone-900 mb-2">1. Sacrosanctum Concilium (On the Sacred Liturgy)</h2>
            <p className="text-stone-600 mb-3">The first document approved, calling for "full, conscious, and active participation" of the laity in the Mass. It authorized vernacular languages and initiated revision of liturgical rites.</p>
            <p className="text-stone-500 text-sm italic">Key themes: Liturgical reform, vernacular, active participation, noble simplicity</p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-vatican-gold shadow-sm">
            <h2 className="text-xl font-bold text-stone-900 mb-2">2. Lumen Gentium (Dogmatic Constitution on the Church)</h2>
            <p className="text-stone-600 mb-3">Shifted focus from hierarchy to "People of God." Emphasized the Universal Call to Holiness—that all baptized Christians are called to be saints, not just clergy.</p>
            <p className="text-stone-500 text-sm italic">Key themes: People of God, collegiality, universal call to holiness, Mary</p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-vatican-red shadow-sm">
            <h2 className="text-xl font-bold text-stone-900 mb-2">3. Dei Verbum (On Divine Revelation)</h2>
            <p className="text-stone-600 mb-3">Encouraged Catholics to read and study the Bible. Clarified that Tradition and Scripture flow from the same divine wellspring. Endorsed modern biblical scholarship.</p>
            <p className="text-stone-500 text-sm italic">Key themes: Scripture and Tradition, biblical interpretation, revelation</p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-vatican-gold shadow-sm">
            <h2 className="text-xl font-bold text-stone-900 mb-2">4. Gaudium et Spes (The Church in the Modern World)</h2>
            <p className="text-stone-600 mb-3">Addressed the Church's relationship with modern culture, science, politics, and economics. Famous opening: "The joys and hopes, the griefs and anxieties of the people of this age are those of the followers of Christ."</p>
            <p className="text-stone-500 text-sm italic">Key themes: Human dignity, social justice, Church in the world, atheism</p>
          </div>

          <section className="bg-stone-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-stone-900 mb-3">Other Key Documents</h2>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li><strong>Nostra Aetate</strong> — Declaration on relations with non-Christian religions</li>
              <li><strong>Dignitatis Humanae</strong> — Declaration on religious freedom</li>
              <li><strong>Unitatis Redintegratio</strong> — Decree on ecumenism</li>
              <li><strong>Ad Gentes</strong> — Decree on missionary activity</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/catholicism/vatican-ii/context" className="text-vatican-red hover:text-vatican-gold">← Previous: Context</Link>
              <Link href="/catholicism/vatican-ii/liturgy" className="text-vatican-red hover:text-vatican-gold">Next: Liturgical Revolution →</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
