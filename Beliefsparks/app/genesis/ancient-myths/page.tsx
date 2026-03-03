import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Sparkles, BookOpen, Globe, Scroll } from "lucide-react";

export default function AncientMythsPage() {
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
            <Sparkles className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Genesis Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Ancient Creation Myths and <br />
            <span className="text-vatican-gold">What Genesis Shares</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Ancient Mesopotamian cultures told stories of gods creating humans from clay, rivers flowing from divine gardens, and battles between chaos and order. Genesis shares these motifs — but transforms them. What does this reveal about the uniqueness of biblical faith?
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Context:</strong> Genesis wasn't written in a vacuum. Ancient Mesopotamia was filled with creation stories — the Enuma Elish, the Epic of Atrahasis, the Gilgamesh Epic. These stories shared common elements that reflected how ancient people understood their world. Genesis enters this conversation, using familiar imagery but telling a radically different story.
            </p>
          </div>

          {/* Section 1 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Globe className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Shared Motifs</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Common Ground</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The parallels between Genesis and other ancient creation stories are striking. In the Babylonian Enuma Elish, the god Marduk creates the world from the corpse of the chaos goddess Tiamat. In Genesis, God brings order from the "formless and void" waters. Both stories describe a cosmic battle between order and chaos, with the creator god establishing his temple at the end.
              </p>
              <p>
                Humans are formed from clay or dust in multiple traditions. In the Epic of Atrahasis, the goddess Nintu mixes clay with the flesh and blood of a slain god to create humanity. In Genesis 2, God forms Adam from the dust of the ground and breathes life into him. The image of a deity shaping humans like a potter was a common ancient metaphor.
              </p>
              <p>
                Even the garden with four rivers finds parallels. Ancient Mesopotamian texts describe Dilmun, a paradise garden where the gods dwelt, fed by life-giving waters. The serpent, the tree, the flood — these motifs appear across ancient Near Eastern literature. Genesis is clearly participating in a shared cultural conversation.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scroll className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Radical Differences</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Unique Claims</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                But the differences are even more significant than the similarities. In Babylonian myth, creation emerges from violence — Marduk kills Tiamat and builds the world from her corpse. In Genesis, creation comes through God's peaceful word: "Let there be light." No battle, no bloodshed, no conflict among gods. The one true God speaks, and creation obeys.
              </p>
              <p>
                In other ancient myths, humans are created as an afterthought — slave labor to relieve the lesser gods from drudgery. We exist to serve the gods' needs. In Genesis, humans are the climax of creation, made in God's very image, given dignity and purpose. We don't feed God; He provides for us. The relationship is inverted entirely.
              </p>
              <p>
                Perhaps most strikingly, the gods of other myths are themselves part of the created order — born, fighting, dying, subject to fate. The God of Genesis is uncreated, transcendent, outside the system. He doesn't compete with other gods because there are no other gods. "I am the LORD, and there is no other" (Isaiah 45:5).
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3 */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Why It Matters</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Polemic & Purpose</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Some Christians find the parallels between Genesis and other ancient myths troubling — as if similarity undermines inspiration. But the biblical authors weren't trying to write scientific history. They were engaging in theological polemic, using the familiar language of their culture to make radical claims about the true God.
              </p>
              <p>
                Imagine a missionary telling the creation story to an ancient Babylonian. He doesn't start from scratch — he uses familiar concepts: chaos waters, a garden paradise, humans formed from dust. But then he subverts every expectation: there's only one God, not many. He creates by speaking, not by violence. Humans are His image-bearers, not His slaves. The world is good, not an accident of divine conflict.
              </p>
              <p>
                Genesis is anti-mythology — using the language of myth to dismantle myth. It enters the ancient conversation and says, "You're asking the right questions, but you've got the wrong answers. Let me tell you what really happened." The similarities are bridges; the differences are the destination.
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
