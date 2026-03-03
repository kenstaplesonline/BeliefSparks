import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Home, BookOpen, Tent, Mountain } from "lucide-react";

export default function TheTentPage() {
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
            <Tent className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Transfiguration Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Tent — Peter's Temporary Vision <br />
            <span className="text-vatican-gold">vs. Eternal Reality</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Peter, overwhelmed by the vision, said, "Let us make three tents — one for you, one for Moses, and one for Elijah." He wanted to preserve this mountaintop moment. But the voice from heaven interrupted: "This is my beloved Son, in whom I am well pleased. Listen to him!" The Transfiguration was a glimpse of glory, not a permanent dwelling place. How does this change how we understand spiritual experiences?
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Response:</strong> Mark 9:6 notes that Peter "did not know what to say, for they were terrified." His suggestion to build tents wasn't a carefully considered theological proposal — it was the reaction of a man overwhelmed by glory. He wanted to stay. He wanted to capture the moment. But the mountain wasn't the destination.
            </p>
          </div>

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Tent className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Peter's Impulse</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Capturing Glory</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Peter's suggestion reflects a common human impulse: when we encounter God's presence in a powerful way, we want to stay there. We want to build structures around the experience, preserve it, return to it. The tent (or "tabernacle") echoes the Old Testament tabernacle — the portable dwelling place of God. Peter is suggesting they create a permanent dwelling for this glory.
              </p>
              <p>
                But the glory can't be contained. The Transfiguration isn't a destination — it's a preview. Jesus hasn't come to stay on the mountain in glory. He's come to go down to the cross in shame. The path to resurrection glory runs through suffering and death. Peter wants to skip that part and go straight to the ending.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Mountain className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Coming Down</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">The Valley Awaits</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                As they come down the mountain, Jesus tells them to tell no one what they've seen until after His resurrection (Matthew 17:9). The timing matters. You can't understand the glory until you've seen the cross. The resurrection transforms everything, giving meaning to both the suffering and the glory.
              </p>
              <p>
                At the bottom of the mountain, a crowd is waiting. A desperate father needs healing for his son. The disciples who remained behind couldn't help. Jesus immediately engages with human need. The mountain experience was real and important — but it wasn't the whole story. There's work to be done in the valley.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Home className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Mountain & Valley</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Both Are Needed</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The spiritual life needs both mountaintop and valley. We need moments of glory, encounters with God's presence that remind us who He is and who we are in Him. But we also need to come down and serve, to engage with a broken world, to walk the path of suffering and love that Jesus walked.
              </p>
              <p>
                Peter's mistake wasn't wanting to stay — it was thinking the experience was the goal. The experience was a gift to sustain them through what was coming. The glory they glimpsed would carry them through the cross, through persecution, through martyrdom. They had seen the ending. Now they could walk the path with hope.
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
