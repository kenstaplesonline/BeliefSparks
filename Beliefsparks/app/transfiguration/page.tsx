import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Sparkles, Sun, BookOpen, ArrowRight } from "lucide-react";

export default function TransfigurationOverviewPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Home</span>
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
            <Sun className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Scripture Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Transfiguration — <br />
            <span className="text-vatican-gold">Glory Revealed on the Mountain</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Six days after Peter's confession, Jesus takes three disciples up a mountain and is transfigured before them. His face shines like the sun, His clothes become white as light. Moses and Elijah appear. A voice from heaven declares: "This is my Son, whom I love." What does this moment reveal about Jesus' identity and mission?
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <section className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-amber-600" />
              The Event on the Mountain
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              "After six days Jesus took Peter, James and John with him and led them up a high mountain, where they were all alone. There he was transfigured before them. His face shone like the sun, and his clothes became as white as the light." (Matthew 17:1-2)
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              The Transfiguration is one of the most mysterious and revealing moments in Jesus' earthly ministry. In a flash of glory, three disciples see Him as He truly is — not merely a man, not merely a prophet, but God incarnate.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Why This Happened</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">To Reveal Identity</h3>
                <p className="text-stone-700">The disciples were confused. Was Jesus the Messiah? If so, why did He speak of suffering? The Transfiguration revealed His true nature — divine glory hidden beneath humanity.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">To Strengthen Faith</h3>
                <p className="text-stone-700">Soon after, Jesus would face the Cross. This glimpse of glory would sustain the disciples through the coming darkness. "We saw his glory" (John 1:14).</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">To Fulfill Scripture</h3>
                <p className="text-stone-700">Jesus had predicted some would not taste death before seeing the Son of Man coming in his kingdom (Matthew 16:28). The Transfiguration fulfills this promise.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Key Elements</h2>
            <div className="space-y-4">
              <div className="bg-stone-100 p-5 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-2">The Light</h3>
                <p className="text-stone-700">Jesus' face and clothes radiate divine light. This is the uncreated light of God, glimpsed by Israel at Sinai, promised by prophets, revealed fully in Christ.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-2">Moses and Elijah</h3>
                <p className="text-stone-700">They speak with Jesus about His coming death (Luke 9:31). They represent the Law and the Prophets — fulfilled in Him.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-2">The Voice</h3>
                <p className="text-stone-700">"This is my Son, whom I love. With him I am well pleased. Listen to him!" (Matthew 17:5). The Father confirms what the disciples have seen.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-2">The Cloud</h3>
                <p className="text-stone-700">A bright cloud envelops them. This is the Shekinah — God's glory presence, once dwelling in the Temple, now incarnate in Jesus.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">The Church's Understanding</h2>
            <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-vatican-gold">
              <p className="text-stone-800 text-lg mb-4">The Church celebrates the Transfiguration as a feast (August 6 in the West). It's a window into Jesus' divine nature and a promise of what we will become:</p>
              <ul className="space-y-3 text-stone-700">
                <li><strong>Jesus is fully God.</strong> The glory revealed is His by right, not borrowed.</li>
                <li><strong>Law and Prophets point to Christ.</strong> Moses and Elijah's presence confirms this.</li>
                <li><strong>Glory comes through the Cross.</strong> The Transfiguration anticipates Resurrection glory.</li>
                <li><strong>We are called to share this glory.</strong> "We will be like him" (1 John 3:2).</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Series Overview</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/transfiguration/dazzling-light" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold">The Dazzling Light</Link>
              <Link href="/transfiguration/moses-elijah" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold">Moses and Elijah</Link>
              <Link href="/transfiguration/voice-from-heaven" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold">The Voice from Heaven</Link>
              <Link href="/transfiguration/the-tent" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold">The Tent/Tabernacle</Link>
              <Link href="/transfiguration/glory-to-suffering" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold">Glory to Suffering</Link>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/" className="text-vatican-red hover:text-vatican-gold">Back to Home</Link>
              <Link href="/transfiguration/dazzling-light" className="text-vatican-red hover:text-vatican-gold">Next: The Dazzling Light</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
