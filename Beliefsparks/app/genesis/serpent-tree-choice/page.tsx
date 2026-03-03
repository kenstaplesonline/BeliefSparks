import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, HelpCircle, BookOpen, TreeDeciduous, Shield } from "lucide-react";

export default function SerpentTreeChoicePage() {
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
            <HelpCircle className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Genesis Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Serpent, Tree, and Choice — <br />
            <span className="text-vatican-gold">Or Something Else?</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Every child knows the story: serpent tempts Eve, she eats forbidden fruit, Adam follows, humanity falls. But could this be about more than literal disobedience? Some scholars see the serpent as a symbol of external temptation. The tree may represent not just "knowledge of good and evil" but choice between trusting God's way or forging our own.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>Beyond Sunday School:</strong> The story of the Fall is so familiar that we often miss its depth. What if the serpent, the tree, and the fruit aren't just props in a morality tale but symbols of profound spiritual realities? What if the Fall is about something deeper than eating forbidden fruit?
            </p>
          </div>

          {/* Section 1 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <HelpCircle className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Serpent</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">More Than a Snake</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The Hebrew word <em>nachash</em> can mean "serpent," but it's also related to words for divination and bronze. In the ancient world, serpents symbolized wisdom, chaos, and even death. The serpent in Eden isn't just a talking snake — it represents the voice of alternative wisdom, the suggestion that God might not be entirely trustworthy.
              </p>
              <p>
                Notice how the serpent operates. It doesn't deny God's existence or openly rebel. It asks a question: "Did God actually say...?" (Genesis 3:1). It plants doubt about God's word, God's goodness, God's intentions. "You will not surely die. For God knows that when you eat of it your eyes will be opened, and you will be like God, knowing good and evil" (Genesis 3:4-5).
              </p>
              <p>
                The temptation isn't just to eat fruit — it's to seize autonomy, to determine good and evil for oneself, to become "like God." The serpent offers what humans have always wanted: independence from their Creator. The same temptation echoes through every age: "You don't need God. You can decide for yourself what's right and wrong."
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TreeDeciduous className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Tree</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Knowledge of Good & Evil</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                What does "knowledge of good and evil" actually mean? In Hebrew idiom, this phrase often means "total knowledge" — knowing everything from A to Z, from good to evil. It's a merism, like "searching high and low" meaning "searching everywhere." The tree represents the desire for comprehensive, autonomous knowledge — wisdom that belongs to God alone.
              </p>
              <p>
                But there's another dimension. In the ancient Near East, kings were often described as those who "know good and evil" — meaning they had the wisdom to govern, to make judicial decisions, to rule. Eating from this tree wasn't just about gaining knowledge; it was about seizing authority, taking the throne that belonged to God.
              </p>
              <p>
                The prohibition wasn't arbitrary. It wasn't that God didn't want humans to be knowledgeable. It was that He didn't want them to seize knowledge autonomously, apart from relationship with Him. True wisdom comes from trusting God and learning from Him, not from grasping it independently.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Choice</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Trust vs. Autonomy</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                At its heart, the Fall is about trust. Would Adam and Eve trust God's definition of good and evil, or would they seize that prerogative for themselves? Would they live within the boundaries God had set, recognizing their place as creatures, or would they reach for divinity?
              </p>
              <p>
                The tragedy is that everything they wanted — wisdom, life, intimacy with God — was already theirs. They didn't need to seize it. The Tree of Life stood right there in the garden. God walked with them in the cool of the day. They were already "like God" in the only way that mattered — made in His image, bearing His likeness, sharing His rule over creation.
              </p>
              <p>
                The serpent's lie wasn't just that they wouldn't die — it was that they needed something they didn't have. That God was holding out on them. That they couldn't trust His goodness. This is the same lie that echoes through every temptation: God isn't enough. You need more. Take it for yourself.
              </p>
              <p>
                The Fall, then, isn't fundamentally about eating fruit. It's about the breakdown of trust between creature and Creator — the decision to go our own way rather than God's way. And that decision, made in a garden long ago, continues to shape human history.
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
