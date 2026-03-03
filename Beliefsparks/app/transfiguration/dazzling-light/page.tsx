import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Sun, BookOpen, Lightbulb, Eye } from "lucide-react";

export default function DazzlingLightPage() {
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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <Sun className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Transfiguration Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Dazzling Light and <br />
            <span className="text-vatican-gold">Transformed Glory</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Jesus' face shone like the sun, and his clothes became dazzlingly bright. Peter, James, and John were overwhelmed by this vision. But the Transfiguration wasn't about light — it was about glory. This glory that Jesus always possessed, hidden beneath his human form, being revealed to the world. How does seeing beyond human limitations change how we understand Christ's nature?
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Vision:</strong> Matthew 17:2 tells us "he was transfigured before them, and his face shone like the sun, and his clothes became white as light." The Greek word is <em>metamorphoo</em> — the root of our word "metamorphosis." It means a change of form, a transformation. What was hidden became visible. The glory that was always there was unveiled.
            </p>
          </div>

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Glory Revealed</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Divine Nature</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Jesus didn't become divine at the Transfiguration — He had always been divine. John 1:14 says "we have seen his glory, glory as of the only Son from the Father." The Transfiguration was a moment when that glory, usually hidden, became visible. The disciples weren't seeing something new; they were seeing what had always been true.
              </p>
              <p>
                This connects to the Old Testament. When Moses came down from Sinai, his face shone from being in God's presence (Exodus 34:29-35). But Jesus' face shines not because He encountered God — He shines because He <em>is</em> God. The light comes from within, not from without. This is glory in its source, not glory reflected.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Eye className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Seeing Beyond</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Faith & Sight</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The Transfiguration was a gift to the disciples. They would soon witness Jesus' arrest, trial, and crucifixion. They would see Him beaten, mocked, and killed. The memory of this moment — the dazzling light, the divine voice, the glory revealed — would sustain them through the dark days ahead. They had seen who He really was, even when everything around them suggested otherwise.
              </p>
              <p>
                This is why the Church includes the Transfiguration in its liturgical calendar — to remind us that behind the suffering servant stands the glorious Son. The cross is not the final word. Resurrection glory awaits. The Transfiguration is a foretaste of Easter, a glimpse of the destiny that awaits all who are in Christ.
              </p>
            </div>
          </section>

          <section className="text-center pt-16 border-t border-stone-200">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Continue the Transfiguration Journey</h3>
            <Link href="/transfiguration" className="inline-block px-8 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-stone-800 hover:text-white transition-colors duration-300 shadow-md">
              Return to Transfiguration Series
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}
