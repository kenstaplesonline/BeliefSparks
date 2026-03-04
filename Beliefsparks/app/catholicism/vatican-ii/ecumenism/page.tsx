import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Users, BookOpen, ArrowRight } from "lucide-react";

export default function VaticanIIEcumenismPage() {
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
            <Users className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Vatican II Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Ecumenism & Interfaith Dialogue</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">Vatican II revolutionized the Church's relationship with other Christians, Jews, and world religions.</p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Unitatis Redintegratio</h2>
            <p className="text-stone-700 leading-relaxed">The Decree on Ecumenism committed the Catholic Church to dialogue with Protestant and Orthodox Christians for the first time, recognizing them as "separated brethren" rather than heretics. This was a revolutionary shift from centuries of mutual condemnation.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Nostra Aetate: A New Relationship with Jews</h2>
            <p className="text-stone-700 leading-relaxed">Perhaps the most groundbreaking document, <em>Nostra Aetate</em> (Declaration on the Relation of the Church to Non-Christian Religions) transformed Catholic-Jewish relations:</p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border-l-4 border-vatican-gold">
                <p className="text-stone-700"><strong>Rejected deicide charge:</strong> Jews as a people cannot be held collectively responsible for Jesus' death</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-vatican-gold">
                <p className="text-stone-700"><strong>Condemned antisemitism:</strong> The Church "decries hatred, persecutions, displays of antisemitism directed against Jews at any time"</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-vatican-gold">
                <p className="text-stone-700"><strong>Affirmed Jewish roots:</strong> The Church acknowledges her spiritual bond with Abraham's stock</p>
              </div>
            </div>
          </section>

          <section className="bg-stone-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-stone-900 mb-3">Dignitatis Humanae: Religious Freedom</h2>
            <p className="text-stone-700 leading-relaxed">The Declaration on Religious Freedom taught that every person has a right to religious liberty based on human dignity. This ended the old political ideal that states must enforce Catholic truth, embracing instead the free conscience of the individual.</p>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/catholicism/vatican-ii/liturgy" className="text-vatican-red hover:text-vatican-gold">← Previous: Liturgy</Link>
              <Link href="/catholicism/vatican-ii/legacy" className="text-vatican-red hover:text-vatican-gold">Next: Legacy →</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
