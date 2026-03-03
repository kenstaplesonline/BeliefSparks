import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Heart, BookOpen, Users, Hand } from "lucide-react";

export default function IntercessoryPrayerPage() {
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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <Heart className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">St. Michael Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Power of <br />
            <span className="text-vatican-red">Intercessory Prayer</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            From Catholic livestreams at St. Michael parishes across the world, we see a beautiful devotion: asking the archangel to intercede. But what is intercessory prayer? It's not magical — it's Communion of Saints. When we pray to St. Michael, we're joining our voice with his in the heavenly court, as part of the mystical body of Christ.
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="bg-amber-50 border-l-4 border-vatican-red p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>Communion of Saints:</strong> Catholic teaching holds that the Church isn't just the visible community of believers on earth — it includes all who are in Christ, whether on earth, in purgatory, or in heaven. Death doesn't sever the bond of love. The saints in heaven can pray for us, and we can ask for their intercession.
            </p>
          </div>

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Hand className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">What Is Intercession?</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Praying For Others</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Intercession simply means praying on behalf of others. We do it all the time — "I'll pray for you" is a natural Christian response to someone's need. When we ask saints or angels to intercede for us, we're asking them to do the same thing: to bring our needs before God.
              </p>
              <p>
                This isn't replacing Christ's mediation — He remains "the one mediator between God and men" (1 Timothy 2:5). The saints participate in His mediation, just as we participate when we pray for one another. Their prayers don't compete with Christ's; they're united with His.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">One Body</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Connected in Christ</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Romans 12:5 says "we, though many, are one body in Christ, and individually members one of another." This unity transcends death. The saints in heaven aren't cut off from the Church on earth — they're more fully united with Christ and therefore with us.
              </p>
              <p>
                Revelation 5:8 depicts the saints in heaven offering "golden bowls full of incense, which are the prayers of the saints." They're aware of what happens on earth and actively participate through prayer. Asking for their intercession isn't bypassing Christ — it's asking our brothers and sisters to pray alongside us.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">St. Michael's Role</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Heavenly Defender</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                St. Michael, as archangel, has a unique role in this communion. Scripture presents him as a protector and warrior for God's people. Daniel 12:1 calls him "the great prince who has charge of your people." He stands as defender in the heavenly court.
              </p>
              <p>
                When we pray to St. Michael, we're asking for his protection and intercession in spiritual battle. The famous Prayer to St. Michael, composed by Pope Leo XIII, asks him to "defend us in battle" and "be our protection against the wickedness and snares of the devil." This isn't superstition — it's calling on a powerful ally in the spiritual realm.
              </p>
            </div>
          </section>

          <section className="text-center pt-16 border-t border-stone-200">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Continue Exploring St. Michael</h3>
            <Link href="/st-michael" className="inline-block px-8 py-3 bg-vatican-red text-white font-semibold rounded-lg hover:bg-stone-800 transition-colors duration-300 shadow-md">
              Return to St. Michael Series
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}
