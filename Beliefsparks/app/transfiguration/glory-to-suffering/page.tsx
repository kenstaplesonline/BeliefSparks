import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Cross, ArrowUp, ArrowRight, BookOpen } from "lucide-react";

export default function GloryToSufferingPage() {
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">From Glory to the Cross</h1>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">The Journey Down</h2>
            <p className="text-stone-800 text-lg">"As they were coming down the mountain, Jesus instructed them, 'Don't tell anyone what you have seen, until the Son of Man has been raised from the dead'" (Matthew 17:9).</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Mountain to Calvary</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Up the Mountain</h3>
                <p className="text-stone-700">Glory revealed. Divine voice. Uncreated light. Disciples see Jesus as He truly is.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">Coming Down</h3>
                <p className="text-stone-700">Reality returns. Only the disciples know the secret. Silence is commanded.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">To Jerusalem</h3>
                <p className="text-stone-700">The journey continues toward suffering. The glory witnessed will be hidden again until Resurrection.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Suffering in Light</h2>
            <div className="bg-stone-100 p-6 rounded-lg">
              <p className="text-stone-800 text-lg mb-4">The Transfiguration is a window. It doesn't remove the Cross — it illuminates it.</p>
              <ul className="space-y-3 text-stone-700">
                <li><strong>Jesus' divinity:</strong> The glory shows that suffering is chosen, not imposed. God enters into pain.</li>
                <li><strong>The resurrection:</strong> The light at the mountain is the same light that will burst from the tomb.</li>
                <li><strong>Our hope:</strong> If glory and suffering meet in Christ, they can meet in us. Suffering isn't final.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">The Paschal Mystery</h2>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-vatican-gold">
              <p className="text-stone-800 text-lg mb-4">The Church sees the Transfiguration as anticipating the resurrection. The same glory that the disciples glimpsed will be fully revealed at Easter.</p>
              <p className="text-stone-700">This is the Christian hope: glory comes through suffering, life through death, resurrection through the Cross.</p>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/transfiguration/the-tent" className="text-vatican-red hover:text-vatican-gold">Previous: The Tent/Tabernacle</Link>
              <Link href="/" className="text-vatican-red hover:text-vatican-gold">Back to Home</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
