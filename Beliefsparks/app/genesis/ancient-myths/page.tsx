import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Scroll, Globe, BookOpen, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

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
            <Scroll className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Genesis Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Ancient Creation Myths and <br />
            <span className="text-vatican-gold">What Genesis Shares</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Ancient Mesopotamian cultures told stories of gods creating humans from clay, rivers flowing from divine gardens, and battles between chaos and order. Genesis shares these motifs — but transforms them: not polytheistic gods competing, but one sovereign Creator working with purpose. What does this reveal about the uniqueness of biblical faith?
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction */}
          <section className="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <Globe className="h-6 w-6 mr-2 text-purple-600" />
              Genesis in Its Ancient World
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              The ancient Near East was filled with creation stories. The Enuma Elish from Babylon, the Atrahasis Epic from Sumer, the Memphis Theology from Egypt — each told how the world came to be. Genesis wasn't written in isolation. It entered this conversation with something radical to say.
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              Understanding these parallels isn't about suggesting Genesis copied them. It's about seeing what Genesis shares — and what it boldly rejects — as it presents its unique vision of the one true God.
            </p>
          </section>

          {/* The Enuma Elish */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <BookOpen className="h-7 w-7 mr-3 text-vatican-red" />
              The Enuma Elish: Babylonian Creation Epic
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              The Enuma Elish ("When on High") tells the story of Marduk's rise to power. The cosmos emerges from divine violence and conflict.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 space-y-4">
              <div>
                <h3 className="font-bold text-stone-900 mb-2">The Story</h3>
                <p className="text-stone-700">
                  In the beginning, only chaotic waters exist. Apsu (fresh water) and Tiamat (salt water) mingle. Their children, the gods, cause chaos. Marduk, champion of the gods, fights Tiamat, slays her, and uses her body to create the world — her bones become mountains, her blood becomes the Tigris and Euphrates. Humans are created from the blood of a rebellious god to serve the deities.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Key Motifs Shared with Genesis</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Chaos waters before creation</li>
                  <li>• Separation of waters (sky and sea)</li>
                  <li>• Sun, moon, and stars as cosmic fixtures</li>
                  <li>• Creation as ordering of chaos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Key Differences</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Genesis has ONE God, not many competing deities</li>
                  <li>• God creates by WORD, not by VIOLENCE</li>
                  <li>• Creation is GOOD, not an accident or byproduct</li>
                  <li>• Humans are made in GOD'S IMAGE, not to serve as slaves</li>
                  <li>• No theogony (birth of gods) needed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Atrahasis Epic */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <BookOpen className="h-7 w-7 mr-3 text-vatican-red" />
              The Atrahasis Epic: Creation from Clay
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              The Atrahasis Epic contains striking parallels with Genesis — including a creation from clay, a divine garden, and a great flood.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 space-y-4">
              <div>
                <h3 className="font-bold text-stone-900 mb-2">The Story</h3>
                <p className="text-stone-700">
                  The lesser gods labor endlessly for the great gods. They rebel. The great god Enki suggests creating humans to do the work. Humans are formed from clay mixed with the blood and flesh of a god. They multiply and make noise, disturbing the gods' rest. A flood is sent to wipe them out. One man (Atrahasis) survives in a boat with animals, offering sacrifices after the waters recede.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Key Motifs Shared with Genesis</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Humans created from CLAY</li>
                  <li>• Divine GARDEN with trees</li>
                  <li>• Human overpopulation leads to divine response</li>
                  <li>• The FLOOD as judgment</li>
                  <li>• Survivor in a BOAT with animals</li>
                  <li>• SACRIFICE after the flood</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Key Differences</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Humans are created to serve gods, not bear God's image</li>
                  <li>• The gods are petty, exhausted, and conflict-ridden</li>
                  <li>• The flood is motivated by noise, not sin</li>
                  <li>• Noah (not Atrahasis) finds favor through righteousness</li>
                  <li>• God covenants never to flood again — the gods make no such promise</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Egyptian Creation */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <BookOpen className="h-7 w-7 mr-3 text-vatican-red" />
              Egyptian Creation Myths
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              Egypt had multiple creation traditions, often centered on the sun god Ra. The Memphis Theology presents Ptah as creator who created all things with his heart and tongue.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 space-y-4">
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Key Motifs</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Creation emerges from PRIMEVAL WATERS (the Nun)</li>
                  <li>• The spoken WORD as creative force (like Genesis 1)</li>
                  <li>• Human formed from CLAY on the POTTER'S WHEEL</li>
                  <li>• The god who speaks creation into existence (Ptah)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Key Differences from Genesis</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• POLYTHEISM: Many gods, not one Creator</li>
                  <li>• The gods are born from each other; no Creator above all</li>
                  <li>• Creation often involves SEXUAL PROCREATION between gods</li>
                  <li>• The sun (Ra) is a god, not a created object</li>
                  <li>• Humans exist to serve gods, not image-bearers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What Genesis Transforms */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <ShieldCheck className="h-7 w-7 mr-3 text-vatican-red" />
              What Genesis Transforms
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Genesis shares motifs with ancient myths — but radically transforms their meaning. This isn't borrowing; it's subversion.
            </p>

            <div className="space-y-4">
              <div className="bg-stone-100 p-6 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-3">ONE GOD vs. MANY</h4>
                <p className="text-stone-700">
                  In ancient myths, many gods compete, scheme, and battle. In Genesis, YHWH alone creates. There is no conflict in heaven, no cosmic struggle. God is uncreated, eternal, sovereign over all.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-3">CREATION BY WORD vs. VIOLENCE</h4>
                <p className="text-stone-700">
                  Enuma Elish presents a world formed from divine violence and battle. Genesis presents a world formed by divine speech. God says, "Let there be..." and it is. This is an act of power, not desperation.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-3">GOOD CREATION vs. AFTERMATH</h4>
                <p className="text-stone-700">
                  Ancient myths often portray creation as a byproduct of divine conflict — not the goal, but the leftover. Genesis repeatedly declares creation "good" and finally "very good." The world is intentional, cherished, and beloved by its Creator.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-3">HUMANS AS IMAGE-BEARERS vs. SLAVES</h4>
                <p className="text-stone-700">
                  In the Atrahasis Epic, humans are created to do gods' work — slaves, essentially. In Genesis, humans are created in God's image, given dominion, blessed. The difference is dignity, not status.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-3">TRANSCENDENT GOD vs. NEEDY GODS</h4>
                <p className="text-stone-700">
                  Ancient myths present gods who need things — humans to work for them, food, rest. Genesis presents God who needs nothing. He is complete, self-sufficient. Creation is an act of love, not necessity.
                </p>
              </div>
            </div>
          </section>

          {/* Why This Matters */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Sparkles className="h-7 w-7 mr-3 text-vatican-red" />
              Why This Matters for Faith Today
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Understanding Genesis in its ancient context matters because it clarifies what the biblical text is — and isn't — saying.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">1. It Addresses the "Scientific" Question Properly</h4>
                <p className="text-stone-700">
                  If we think Genesis is trying to give us a scientific account of creation, we'll misread it. It's doing something else: theological truth using ancient literary forms. Recognizing this frees us from forced conflicts with modern science.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">2. It Shows Biblical Faith's Engagement with Culture</h4>
                <p className="text-stone-700">
                  Genesis enters the ancient conversation on its own terms. It doesn't reject all cultural forms — it transforms them. This is the biblical pattern: engage, redeem, transform — not retreat.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">3. It Reveals the Uniqueness of Biblical Monotheism</h4>
                <p className="text-stone-700">
                  Against a backdrop of competing gods, the God of Israel stands alone — Creator, sovereign, good, loving. This is radical. It's the foundation for all Jewish and Christian belief.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">4. It Affirms Human Dignity</h4>
                <p className="text-stone-700">
                  Against myths that portray humans as slaves or afterthoughts, Genesis affirms that we bear God's image. This is the foundation for human rights, the sanctity of life, and Christian ethics.
                </p>
              </div>
            </div>
          </section>

          {/* The Catholic Perspective */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">The Catholic Perspective</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              The Catholic Church has long recognized that Scripture is both divine revelation and human literature. Pope Benedict XVI taught that "the Bible... speaks to us of the origin of the universe and its make-up, not in order to provide us with a scientific treatise but in order to state the correct relationships of man with God and with the universe."
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The Catechism affirms that "the inspired authors... wrote the four Gospels... that they might always have in our churches the complete and living testimony of the facts about the life of the Lord" (Dei Verbum 19). This principle applies to all Scripture, including Genesis — the truth is theological, the forms are human and culturally shaped.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Understanding the ancient context doesn't diminish Genesis; it helps us hear what it's actually saying — and that's more powerful than any forced scientific reading could ever be.
            </p>
          </section>

          {/* Questions for Reflection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Questions for Reflection</h2>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does comparing Genesis to ancient myths change how you understand it?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What does it mean that Genesis "transforms" rather than "copies" ancient motifs?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does the difference between humans as image-bearers vs. slaves shape your self-understanding?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>Why does it matter that creation is by WORD, not by VIOLENCE?</span>
              </li>
            </ul>
          </section>

          {/* Navigation Footer */}
          <section className="border-t border-stone-200 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/genesis/serpent-tree-choice" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous: The Serpent, Tree, and Choice
              </Link>
              <Link href="/st-michael" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Next: St. Michael Series
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
