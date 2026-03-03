import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Sparkles, BookOpen, Heart, Scale } from "lucide-react";

export default function DevotionPracticePage() {
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
            <Sparkles className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">St. Michael Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Devotion to St. Michael — <br />
            <span className="text-vatican-red">Superstition or Spiritual Practice?</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Devotion to saints, especially St. Michael, is deeply rooted in Catholic tradition. From the archangel's battle hymn in the Book of Revelation, to ancient feast days, to modern novenas — the faithful have honored St. Michael for centuries. But when does devotion become superstition? The Catholic Church teaches careful discernment: authentic devotion strengthens faith, but superstition distorts it.
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="bg-amber-50 border-l-4 border-vatican-red p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>Authentic Devotion:</strong> The Catechism of the Catholic Church teaches that authentic devotion to the saints "does not distract from the worship of God but leads us more closely to Christ and to the Father" (CCC 957). Devotion to St. Michael is authentic when it points us to God, strengthens our faith, and deepens our relationship with Christ.
            </p>
          </div>

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Healthy Devotion</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Points to God</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Healthy devotion to St. Michael takes many forms: praying the Prayer to St. Michael, asking for his intercession in times of spiritual struggle, celebrating his feast day (September 29), or visiting churches named in his honor. All of these are legitimate expressions of Catholic piety.
              </p>
              <p>
                The key is that the devotion remains relational, not transactional. We're not "paying" St. Michael for protection or treating him like a cosmic vending machine. We're asking a powerful friend to pray for us, to stand with us in spiritual battle. The focus remains on God's power and mercy, not on magical formulas.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scale className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Superstitious Distortion</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">When It Goes Wrong</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Superstition enters when devotion becomes manipulative — when we think we can control spiritual forces through specific prayers, objects, or rituals. This is a distortion of authentic faith. The Catechism warns against attributing "the efficacy of prayers or of sacramental signs to their mere external performance, apart from the interior dispositions that they demand" (CCC 2111).
              </p>
              <p>
                A superstitious approach treats St. Michael as a force to be controlled rather than a person to be related to. It might involve believing that a specific medal guarantees protection regardless of one's relationship with God, or that certain formulas must be recited exactly or they won't "work." This is magic, not prayer.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Discernment</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Testing the Spirit</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                How do we know if our devotion is healthy? Ask: Does this draw me closer to Christ? Does it increase my trust in God's providence? Does it lead me to the sacraments, to Scripture, to love of neighbor? Or does it make me anxious, controlling, fearful?
              </p>
              <p>
                Authentic devotion to St. Michael produces peace, not anxiety. It acknowledges spiritual danger without becoming obsessed with it. It trusts in God's protection while using the means He provides — including angelic intercession. It's confident but not presumptuous, reverent but not fearful.
              </p>
              <p>
                St. Michael himself would direct us not to himself but to the One he serves. "Who is like God?" isn't just his name — it's his message. All glory belongs to the Lord. Devotion to St. Michael is authentic precisely when it leads us to that same declaration.
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
