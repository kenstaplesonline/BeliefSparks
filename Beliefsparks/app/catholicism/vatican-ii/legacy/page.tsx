import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Church, BookOpen, ArrowRight } from "lucide-react";

export default function VaticanIILegacyPage() {
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
            <Church className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Vatican II Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Legacy: 60 Years Later</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">Vatican II continues to shape Catholicism today. Its interpretation remains contested, but its impact is undeniable.</p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-stone-900 text-stone-100 p-8 rounded-2xl">
            <h2 className="text-2xl font-serif font-bold mb-4 text-vatican-gold">A Living Council</h2>
            <p className="text-stone-300 leading-relaxed">"The Council was not a break with the past, but a growth. Like a tree that spreads its branches but remains rooted in the same soil, the Church grew in understanding while remaining faithful to the deposit of faith."</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Lasting Changes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Laity Empowerment</h3>
                <p className="text-stone-600 text-sm">Lay ministries, parish councils, and the Universal Call to Holiness have transformed Catholic life.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Ecumenical Dialogue</h3>
                <p className="text-stone-600 text-sm">Ongoing conversations with Orthodox, Protestants, Jews, and world religions are now normal.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Scripture Study</h3>
                <p className="text-stone-600 text-sm">Catholics are now encouraged to read the Bible, with improved lectionaries and scholarship.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Social Teaching</h3>
                <p className="text-stone-600 text-sm">Gaudium et Spes laid groundwork for modern Catholic social teaching on human dignity and justice.</p>
              </div>
            </div>
          </section>

          <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
            <h2 className="text-xl font-bold text-stone-900 mb-3">Ongoing Debates</h2>
            <ul className="space-y-2 text-stone-700">
              <li>• <strong>Hermeneutic of continuity vs. rupture:</strong> How should Vatican II be interpreted?</li>
              <li>• <strong>Traditional Latin Mass:</strong> Pope Francis has restricted its use, reigniting debates</li>
              <li>• <strong>Implementation gaps:</strong> Some say reforms weren't fully implemented; others say they went too far</li>
            </ul>
          </section>

          <section className="bg-stone-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-stone-900 mb-3">Relevance Today</h2>
            <p className="text-stone-700 leading-relaxed">Sixty years later, Vatican II remains the lens through which Catholics understand their faith in the modern world. Whether celebrating the vernacular Mass, engaging in ecumenical dialogue, or reading Scripture, Catholics everywhere live in the world Vatican II created.</p>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/catholicism/vatican-ii/ecumenism" className="text-vatican-red hover:text-vatican-gold">← Previous: Ecumenism</Link>
              <Link href="/catholicism" className="text-vatican-red hover:text-vatican-gold">Back to Catholicism →</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
