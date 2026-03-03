import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, TreeDeciduous, BookOpen, Church, Heart, Sparkles } from "lucide-react";

export default function EdenTempleQuestionPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/genesis" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Genesis</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Image 
              src="/icon.png" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="h-8 w-8 object-contain"
            />
            <span className="font-serif font-bold text-stone-900 hidden sm:inline">Belief Sparks</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <TreeDeciduous className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Genesis Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Eden — God's Temple or <br />
            <span className="text-vatican-gold">Just a Garden?</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Was the Garden of Eden a physical garden, or something deeper? Some scholars see Eden as God's sanctuary on earth — a place where divine presence dwelt, worship flowed naturally, and creation and Creator shared intimacy.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Question:</strong> Popular imagination pictures Eden as a beautiful garden — trees, rivers, animals, and two humans living in paradise. But what if Eden was something far more significant? What if it was the first Temple — the original sacred space where heaven and earth met?
            </p>
          </div>

          {/* Section 1 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Church className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Sacred Space</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Where God Dwells</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                In the ancient world, temples weren't just buildings for worship — they were the places where gods actually lived, where heaven touched earth. The Hebrew Bible describes the Tabernacle and later the Temple in Jerusalem as the place where God's presence dwelt among His people. The Holy of Holies was the most sacred space on earth, the intersection point between the divine and human realms.
              </p>
              <p>
                When we read Genesis 2-3 carefully, we find striking similarities between Eden and later temples. God "walks" in the garden (Genesis 3:8) — the same language used for His presence in the Tabernacle (Leviticus 26:12). Adam is placed in the garden to "work and keep it" (Genesis 2:15) — the exact Hebrew phrase used for priestly service in the sanctuary (Numbers 3:7-8). The rivers flowing from Eden (Genesis 2:10-14) parallel the prophetic vision of water flowing from the restored temple (Ezekiel 47:1-12).
              </p>
              <p>
                These aren't coincidences. The biblical authors are telling us something profound: Eden was the original temple, the first sacred space where God chose to dwell with humanity.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TreeDeciduous className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Trees</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Life & Knowledge</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Two trees stood at the center of Eden: the Tree of Life and the Tree of the Knowledge of Good and Evil. These weren't just fruit trees — they represented something far more significant. The Tree of Life appears again in Revelation 22:2, positioned in the New Jerusalem, "with leaves for the healing of the nations." It represents access to divine life, the source of immortality.
              </p>
              <p>
                The Tree of Knowledge, with its prohibition, established a boundary within sacred space. In temple architecture, boundaries were essential — there were courts for different groups, restricted areas, and the Most Holy Place where only the High Priest could enter. The forbidden tree marked the limit of human autonomy within God's sanctuary. Adam and Eve could enjoy everything Eden offered, but they couldn't be God. They couldn't determine good and evil for themselves.
              </p>
              <p>
                When they ate from the prohibited tree, they weren't just breaking a rule — they were violating sacred space, crossing a boundary that preserved the proper relationship between Creator and creature.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Loss & Restoration</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">The Biblical Story</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                When Adam and Eve were expelled from Eden, they lost access to sacred space. Cherubim — the same angelic beings that would later guard the mercy seat in the Temple — were placed at the entrance to prevent return (Genesis 3:24). This wasn't punishment for punishment's sake; it was protection. A defiled humanity couldn't exist in the presence of a holy God.
              </p>
              <p>
                The entire biblical story that follows can be read as God's project to restore access to sacred space — to rebuild the temple where He can dwell with His people again. The Tabernacle, the Temple, the Incarnation, the Church, and finally the New Jerusalem all represent stages in this restoration project.
              </p>
              <p>
                Revelation 21-22 completes the arc: "Behold, the dwelling place of God is with man" (Revelation 21:3). The tree of life reappears. The river of life flows from God's throne. Sacred space is restored, but gloriously expanded — not just a garden, but a garden-city where all creation is filled with God's presence.
              </p>
            </div>
          </section>

          {/* Sources Section */}
          <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-stone-500 mr-3" />
              Sources &amp; Further Reading
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-3 mt-1"><TreeDeciduous className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <p className="font-bold text-stone-900 italic">The Temple and the Church's Mission</p>
                  <p className="text-sm text-stone-600">G.K. Beale</p>
                  <p className="text-xs text-stone-500 mt-1">Comprehensive biblical theology of Eden as the first sanctuary.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Church className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <p className="font-bold text-stone-900 italic">Eden and the Temple</p>
                  <p className="text-sm text-stone-600">G.K. Beale</p>
                  <p className="text-xs text-stone-500 mt-1">Detailed exploration of Eden's temple structure.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-16 border-t border-stone-200">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Continue Exploring Genesis</h3>
            <Link 
              href="/genesis"
              className="inline-block px-8 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-stone-800 hover:text-white transition-colors duration-300 shadow-md"
            >
              Return to Genesis Series
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
