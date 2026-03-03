import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Scroll, BookOpen, Eye, Layers } from "lucide-react";

export default function TwoCreationStoriesPage() {
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
            <Scroll className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Genesis Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Two Creation Stories — <br />
            <span className="text-vatican-gold">One Author, Multiple Perspectives</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Genesis contains two distinct creation accounts. Chapter 1 presents a cosmic overview, while Chapter 2 zooms in on Adam and Eve's intimate beginning. Why the repetition? Perhaps these aren't contradictions — but complementary perspectives on the same reality.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Puzzle:</strong> Open your Bible to Genesis 1, then to Genesis 2. You'll notice something curious: two different creation narratives, with different styles, different vocabularies, and even different orders of events. For centuries, readers have wrestled with why. Are these contradictions — or something deeper?
            </p>
          </div>

          {/* Section 1 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Eye className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Cosmic View</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Genesis 1</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Genesis 1 reads like a cosmic symphony. "In the beginning, God created the heavens and the earth." The language is majestic, rhythmic, almost liturgical. Each day follows a pattern: God speaks, creation responds, evening and morning mark the passage of time. The universe unfolds in an orderly progression from chaos to cosmos, from formless void to a world teeming with life.
              </p>
              <p>
                This account emphasizes God's transcendence — He speaks, and creation obeys. The Hebrew name used is <em>Elohim</em>, the generic term for God that emphasizes His power and majesty. Humans appear at the climax, created "in the image of God" as the crown of creation, given dominion over all the earth. The tone is universal, cosmic, almost abstract.
              </p>
              <p>
                The seven-day structure suggests a liturgical purpose. This isn't just history — it's theology in narrative form, teaching Israel about their God, their world, and their place in it. The Sabbath rest on the seventh day isn't an afterthought; it's the goal toward which all creation moves.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Layers className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Intimate View</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Genesis 2</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Genesis 2 feels completely different. "These are the generations of the heavens and the earth..." The tone shifts from cosmic to intimate. Here God is <em>YHWH Elohim</em> — the LORD God — using His covenant name that speaks of personal relationship. Instead of speaking creation into existence, God forms Adam from dust like a potter, breathes life into his nostrils, walks with him in the garden.
              </p>
              <p>
                The order of events changes too. In Genesis 1, humans are created last, after everything else is prepared. In Genesis 2, Adam is created before vegetation appears, before the animals are formed, before Eve is made from his rib. Critics have called this a contradiction. But the ancient authors weren't writing modern history — they were telling theological truth through narrative.
              </p>
              <p>
                Genesis 2 focuses on relationship — between God and human, between human and creation, between man and woman. The questions it answers aren't about chronology but about meaning: What does it mean to be human? Why do we work? Why do we marry? Why do we struggle?
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scroll className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Two Lenses</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">One Truth</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Rather than seeing these accounts as competing, we might see them as complementary — like looking at the same object from different angles. Genesis 1 answers the question: "Who is God and what is the nature of the world He made?" The answer: He is the all-powerful, transcendent Creator who brings order from chaos, and the world is good.
              </p>
              <p>
                Genesis 2 answers a different question: "What is humanity's place in creation, and what is our relationship with God?" The answer: We are intimately known, personally formed, given meaningful work, created for relationship. God is not just the distant architect but the near presence who walks with us in the garden.
              </p>
              <p>
                This pattern — multiple perspectives on the same event — appears throughout Scripture. The Gospels give us four accounts of Jesus' life, each with different emphases and details. The psalms approach God's character from dozens of angles. God seems to delight in showing us truth through stories, through poetry, through multiple witnesses, rather than through a single systematic treatise.
              </p>
              <p>
                Perhaps this teaches us something about the nature of truth itself: that reality is too rich, too deep, to be captured from a single perspective. Like a diamond, divine truth refracts light differently depending on the angle. Both accounts are true — not in the sense that they provide identical information, but in the sense that they reveal different facets of the same divine reality.
              </p>
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
