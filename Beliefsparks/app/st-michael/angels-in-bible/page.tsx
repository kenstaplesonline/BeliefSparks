import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Feather, BookOpen, Shield, ArrowRight } from "lucide-react";

export default function AngelsInBiblePage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/st-michael" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to St. Michael</span>
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
            <Feather className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">St. Michael Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Angels in the Bible
          </h1>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">What Are Angels?</h2>
            <p className="text-stone-800 text-lg">The word "angel" means "messenger." Angels are spiritual beings created by God who serve His purposes. They are not gods, nor are they human souls after death. They are a distinct order of created beings.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">What Scripture Reveals About Angels</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">They Are Created Beings</h3>
                <p className="text-stone-700">"By him all things were created, in heaven and on earth, visible and invisible" (Colossians 1:16). Angels are not eternal; they had a beginning. They are part of God's creation.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">They Have Free Will</h3>
                <p className="text-stone-700">The fall of some angels (demons) shows that angels, like humans, have free will. They can choose for or against God. Michael and the faithful angels chose God.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">They Are Immensely Powerful</h3>
                <p className="text-stone-700">One angel killed 185,000 Assyrian soldiers (2 Kings 19:35). Peter was delivered from prison by an angel (Acts 12). Their power is real — but always directed by God.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">They Do Not Marry or Die</h3>
                <p className="text-stone-700">"In the resurrection, people will neither marry nor be given in marriage; they will be like the angels in heaven" (Matthew 22:30). Angels exist outside human biological categories.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Angelic Hierarchy</h2>
            <p className="text-stone-700">While not fully revealed in Scripture, tradition discerns a hierarchy of angels:</p>
            <div className="bg-stone-100 p-6 rounded-lg">
              <ul className="space-y-2 text-stone-700">
                <li><strong>Archangels:</strong> Michael, Gabriel, Raphael — named in Scripture</li>
                <li><strong>Cherubim:</strong> Guard Eden's entrance, appear in Temple/Tabernacle</li>
                <li><strong>Seraphim:</strong> "Burning ones" around God's throne (Isaiah 6)</li>
                <li><strong>Thrones, Dominions, Powers:</strong> Mentioned by Paul (Colossians 1:16)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Angels and Humans</h2>
            <p className="text-stone-700">The Catechism beautifully states: "The existence of the spiritual, non-corporeal beings that Sacred Scripture usually calls 'angels' is a truth of faith. The witness of Scripture is as clear as the unanimity of Tradition" (CCC 328).</p>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-vatican-gold">
              <h3 className="font-bold text-stone-900 mb-2">Key Principles</h3>
              <ul className="space-y-2 text-stone-700">
                <li>• We do not become angels when we die — we remain human</li>
                <li>• Angels are not to be worshipped — worship belongs to God alone</li>
                <li>• We can ask for their intercession, as with saints</li>
                <li>• Each person has a guardian angel (Matthew 18:10)</li>
                <li>• Angels rejoice when a sinner repents (Luke 15:10)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Questions for Reflection</h2>
            <ul className="space-y-3 text-stone-700">
              <li>How does your understanding of angels differ from popular portrayals?</li>
              <li>What comfort do you find in the reality of guardian angels?</li>
              <li>How might you grow in awareness of spiritual realities?</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/st-michael" className="text-vatican-red hover:text-vatican-gold">Back to St. Michael Overview</Link>
              <Link href="/st-michael/defender-of-church" className="text-vatican-red hover:text-vatican-gold">Next: Defender of the Church</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
