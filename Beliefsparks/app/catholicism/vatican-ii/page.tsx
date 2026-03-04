import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Church, BookOpen, Flame, Globe, ArrowRight, Users, Scroll } from "lucide-react";

export default function VaticanIIOverviewPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/catholicism" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Catholicism</span>
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Second Vatican Council — <br />
            <span className="text-vatican-gold">A Church Reborn</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            "I want to throw open the windows of the Church so that we can see out and the people can see in." — Pope St. John XXIII
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <section className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <Flame className="h-6 w-6 mr-2 text-blue-600" />
              The Council That Changed Everything
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              From 1962 to 1965, over 2,600 bishops from 116 countries gathered in St. Peter's Basilicax. Unlike previous councils that issued condemnations, Vatican II issued pastoral constitutions meant to invite and inspire.
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              This series explores the context, the documents, the liturgical changes, the ecumenical impact, and the lasting legacy of the most significant religious event of the 20th century.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Explore the Series</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/catholicism/vatican-ii/context" className="bg-white p-6 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors group">
                <div className="flex items-center mb-3">
                  <Globe className="h-6 w-6 text-vatican-red mr-3" />
                  <h3 className="text-xl font-bold text-stone-900">The World Before the Council</h3>
                </div>
                <p className="text-stone-600 text-sm mb-3">The Church in the mid-20th century: fortress mentality, liturgical detachment, and the call for aggiornamento.</p>
                <span className="text-vatican-red text-sm font-medium group-hover:text-vatican-gold">Explore →</span>
              </Link>

              <Link href="/catholicism/vatican-ii/constitutions" className="bg-white p-6 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors group">
                <div className="flex items-center mb-3">
                  <Scroll className="h-6 w-6 text-vatican-red mr-3" />
                  <h3 className="text-xl font-bold text-stone-900">The Four Constitutions</h3>
                </div>
                <p className="text-stone-600 text-sm mb-3">Sacrosanctum Concilium, Lumen Gentium, Dei Verbum, and Gaudium et Spes — the pillars of Vatican II teaching.</p>
                <span className="text-vatican-red text-sm font-medium group-hover:text-vatican-gold">Explore →</span>
              </Link>

              <Link href="/catholicism/vatican-ii/liturgy" className="bg-white p-6 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors group">
                <div className="flex items-center mb-3">
                  <Flame className="h-6 w-6 text-vatican-red mr-3" />
                  <h3 className="text-xl font-bold text-stone-900">Liturgical Revolution</h3>
                </div>
                <p className="text-stone-600 text-sm mb-3">From Latin to vernacular, altar turned toward the people, and the call for "full, conscious, and active participation."</p>
                <span className="text-vatican-red text-sm font-medium group-hover:text-vatican-gold">Explore →</span>
              </Link>

              <Link href="/catholicism/vatican-ii/ecumenism" className="bg-white p-6 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors group">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-vatican-red mr-3" />
                  <h3 className="text-xl font-bold text-stone-900">Ecumenism & Interfaith</h3>
                </div>
                <p className="text-stone-600 text-sm mb-3">Nostra Aetate, dialogue with separated brethren, and the revolutionary embrace of religious freedom.</p>
                <span className="text-vatican-red text-sm font-medium group-hover:text-vatican-gold">Explore →</span>
              </Link>

              <Link href="/catholicism/vatican-ii/legacy" className="bg-white p-6 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors group md:col-span-2">
                <div className="flex items-center mb-3">
                  <Church className="h-6 w-6 text-vatican-red mr-3" />
                  <h3 className="text-xl font-bold text-stone-900">Legacy Today: 60 Years Later</h3>
                </div>
                <p className="text-stone-600 text-sm mb-3">How Vatican II continues to shape Catholicism, the debates over its interpretation, and its relevance for the future.</p>
                <span className="text-vatican-red text-sm font-medium group-hover:text-vatican-gold">Explore →</span>
              </Link>
            </div>
          </section>

          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Key Facts</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-vatican-red">1962-1965</p>
                <p className="text-stone-600 text-sm">Four Autumn Sessions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-vatican-red">2,600+</p>
                <p className="text-stone-600 text-sm">Bishops from 116 Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-vatican-red">16</p>
                <p className="text-stone-600 text-sm">Major Documents Produced</p>
              </div>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/catholicism" className="text-vatican-red hover:text-vatican-gold">Back to Catholicism</Link>
              <Link href="/catholicism/vatican-ii/context" className="text-vatican-red hover:text-vatican-gold">Next: The World Before the Council →</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
