import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Scroll, BookOpen, Eye, Layers, Sparkles, Heart, MessageCircle } from "lucide-react";

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
          
          {/* Introduction */}
          <section className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-vatican-gold" />
              The Puzzle of Two Beginnings
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              Open your Bible to Genesis 1, then to Genesis 2. You'll notice something curious: two different creation narratives, with different styles, different vocabularies, and even different orders of events. For centuries, readers have wrestled with why. Are these contradictions — or something deeper?
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              This question has fascinated biblical scholars, theologians, and ordinary believers for millennia. The answer reveals not just how to read Genesis, but how to understand the nature of Scripture itself.
            </p>
          </section>

          {/* Chapter 1: The Cosmic Canvas */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Eye className="h-7 w-7 mr-3 text-vatican-red" />
              The First Account: A Cosmic Overview (Genesis 1:1–2:4a)
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              The first creation account reads like a majestic hymn. It opens with those unforgettable words: "In the beginning, God created the heavens and the earth." What follows is a carefully structured narrative spanning seven days, each building upon the last with deliberate artistry.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-4">The Seven-Day Structure</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-semibold text-vatican-red">Days of Formation:</p>
                  <ul className="space-y-1 text-stone-700">
                    <li><strong>Day 1:</strong> Light separated from darkness</li>
                    <li><strong>Day 2:</strong> Waters separated (sky created)</li>
                    <li><strong>Day 3:</strong> Land separated from seas; vegetation</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-vatican-red">Days of Filling:</p>
                  <ul className="space-y-1 text-stone-700">
                    <li><strong>Day 4:</strong> Sun, moon, and stars fill the sky</li>
                    <li><strong>Day 5:</strong> Fish and birds fill waters and air</li>
                    <li><strong>Day 6:</strong> Animals and humanity fill the land</li>
                    <li><strong>Day 7:</strong> God rests — creation complete</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Notice the parallel structure. The first three days are about forming spaces — light, sky, land. The next three days are about filling those spaces with inhabitants. The sun, moon, and stars fill the realm of light. Fish and birds fill the waters and sky. Animals and humans fill the land. This isn't random; it's poetry written in prose.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              The refrain "And God saw that it was good" echoes throughout, culminating in the seventh day when God declares everything "very good." This first account emphasizes God's sovereignty, order, and the fundamental goodness of creation.
            </p>

            <div className="bg-stone-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-stone-900 mb-2">Key Characteristics of Genesis 1:</h3>
              <ul className="space-y-2 text-stone-700">
                <li>• Uses the divine name <em>Elohim</em> (God)</li>
                <li>• Highly structured, almost liturgical in style</li>
                <li>• Emphasizes God's transcendence — He speaks, and creation obeys</li>
                <li>• Humanity created last, as the crown of creation</li>
                <li>• Both male and female created simultaneously "in the image of God"</li>
                <li>• Ends with the Sabbath rest (2:4a)</li>
              </ul>
            </div>
          </section>

          {/* Chapter 2: The Intimate Portrait */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Heart className="h-7 w-7 mr-3 text-vatican-red" />
              The Second Account: An Intimate Portrait (Genesis 2:4b–25)
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Then something shifts. Genesis 2:4b introduces a completely different style: "In the day that the Lord God made the earth and the heavens..." Suddenly, we're not watching from a cosmic vantage point. We're down in the dust, watching God form Adam from clay like a potter at his wheel.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              This second account is earthy, intimate, and anthropomorphic. God doesn't just speak — He forms, breathes, plants, walks. The Hebrew name changes from <em>Elohim</em> to <em>YHWH Elohim</em> — "the Lord God" — a more personal designation that emphasizes covenant relationship.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-4">The Garden Narrative</h3>
              <ul className="space-y-3 text-stone-700">
                <li><strong>Adam formed:</strong> From dust, animated by God's breath (2:7)</li>
                <li><strong>Garden planted:</strong> Eden as a divine sanctuary (2:8)</li>
                <li><strong>Trees of life and knowledge:</strong> Choice and consequence (2:9)</li>
                <li><strong>Rivers flow:</strong> Four rivers from one source (2:10-14)</li>
                <li><strong>Human vocation:</strong> To work and keep the garden (2:15)</li>
                <li><strong>The command:</strong> Do not eat from the tree of knowledge (2:16-17)</li>
                <li><strong>Eve created:</strong> From Adam's side, "bone of my bones" (2:18-25)</li>
              </ul>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Notice the order is completely different from Genesis 1. Here, the man is created before vegetation (there was "no plant of the field" yet, 2:5). The animals are formed after Adam, as God seeks a suitable helper. Eve comes last, not simultaneously with Adam. These differences have troubled literalist readers for centuries.
            </p>

            <div className="bg-stone-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-stone-900 mb-2">Key Characteristics of Genesis 2:</h3>
              <ul className="space-y-2 text-stone-700">
                <li>• Uses <em>YHWH Elohim</em> (Lord God) — personal, covenantal name</li>
                <li>• Intimate, anthropomorphic — God forms, breathes, walks in the garden</li>
                <li>• Emphasizes God's immanence — He is present, involved, relational</li>
                <li>• Adam created first, then animals, then Eve</li>
                <li>• Focuses on human relationships, vocation, and moral choice</li>
                <li>• Sets up the narrative for the Fall (Genesis 3)</li>
              </ul>
            </div>
          </section>

          {/* Historical Context */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Layers className="h-7 w-7 mr-3 text-vatican-red" />
              Historical Perspectives: How the Church Has Read These Texts
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              The early Church Fathers were well aware of the differences between the two accounts. They didn't see this as a problem but as an invitation to deeper meaning. St. Augustine, writing in the fifth century, suggested that Scripture often speaks in accommodated language — using imagery and structure that teaches theological truth rather than providing a scientific report.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              The Catechism of the Catholic Church affirms this approach: "The account of the fall in Genesis 3 uses figurative language, but affirms a primeval event, a deed that took place at the beginning of the history of man" (CCC 390). The Church has long recognized that Genesis teaches <em>that</em> God created, <em>why</em> He created, and <em>what</em> our relationship to Him should be — without necessarily teaching <em>exactly how</em> in scientific terms.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-lg font-bold text-stone-900 mb-3">The Documental Hypothesis (Academic View)</h3>
              <p className="text-stone-700 leading-relaxed">
                Modern biblical scholarship often attributes the two accounts to different literary sources — the "Priestly" source (P) for Genesis 1 and the "Yahwist" source (J) for Genesis 2. These traditions were likely compiled and edited together during Israel's history. While this academic framework can be helpful, it doesn't diminish the theological unity of the final text as we have it.
              </p>
            </div>
          </section>

          {/* Complementary Truths */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Sparkles className="h-7 w-7 mr-3 text-vatican-red" />
              Complementary, Not Contradictory: Seeing the Whole Picture
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              What if the differences aren't contradictions but intentional theological emphases? What if the inspired author (or final editor) wanted us to see creation from multiple angles?
            </p>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 space-y-4">
              <h3 className="text-xl font-bold text-stone-900">Genesis 1 Emphasizes:</h3>
              <ul className="space-y-2 text-stone-700">
                <li>✦ God's sovereign power over all creation</li>
                <li>✦ The ordered, purposeful nature of the cosmos</li>
                <li>✦ Humanity's shared dignity — male and female together in God's image</li>
                <li>✦ The goodness of the material world</li>
                <li>✦ Sabbath rest as the goal of creation</li>
              </ul>

              <h3 className="text-xl font-bold text-stone-900 pt-4">Genesis 2 Emphasizes:</h3>
              <ul className="space-y-2 text-stone-700">
                <li>✦ God's intimate, personal relationship with humanity</li>
                <li>✦ Human vocation as stewards and keepers of creation</li>
                <li>✦ The gift of relationship and companionship</li>
                <li>✦ Moral responsibility and the reality of choice</li>
                <li>✦ The sanctuary-like nature of Eden as God's dwelling place</li>
              </ul>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Together, these two accounts give us a fuller picture than either could alone. We need both the cosmic perspective and the intimate portrait. We need to know that God is transcendent — speaking universes into being — and immanent — breathing life into dust, walking with us in the garden.
            </p>
          </section>

          {/* Why It Matters */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <MessageCircle className="h-7 w-7 mr-3 text-vatican-red" />
              Why This Matters for Faith Today
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Understanding the two creation accounts helps us in several ways:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">1. It Frees Us from False Conflicts</h4>
                <p className="text-stone-700">
                  When we recognize that Genesis isn't trying to give us a scientific account of creation, we don't have to force it into conflict with modern cosmology, evolution, or geology. The theological truths remain: God created, creation is good, humanity has a special place and responsibility.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">2. It Deepens Our Understanding of God</h4>
                <p className="text-stone-700">
                  We see both God's majesty and His intimacy. He is the cosmic Creator and the personal Lord. He speaks galaxies into existence and breathes life into each human soul. This dual revelation enriches our worship and trust.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">3. It Affirms Human Dignity and Responsibility</h4>
                <p className="text-stone-700">
                  Genesis 1 tells us we bear God's image. Genesis 2 tells us we have work to do — to cultivate and keep creation. Both truths are essential for understanding who we are and why we're here.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">4. It Invites Deeper Reading of Scripture</h4>
                <p className="text-stone-700">
                  When we see how carefully these texts were constructed, with parallel structures, repeated themes, and intentional literary devices, we're drawn into a richer engagement with God's Word. The Bible rewards careful, prayerful reading.
                </p>
              </div>
            </div>
          </section>

          {/* Questions for Reflection */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Questions for Reflection</h2>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>Which creation account resonates more with you — the cosmic grandeur of Genesis 1 or the intimate garden narrative of Genesis 2? Why?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does understanding these as complementary perspectives change how you read Genesis?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What does it mean to you that God is both transcendent (far above creation) and immanent (present within it)?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How might these two accounts inform how we think about our relationship with creation today?</span>
              </li>
            </ul>
          </section>

          {/* Further Reading */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Further Reading & Resources</h2>
            <ul className="space-y-3 text-stone-600">
              <li>• <a href="https://www.usccb.org/sites/default/files/flipbooks/catechism/" target="_blank" rel="noopener noreferrer" className="text-vatican-red hover:text-vatican-gold transition-colors"><em>Catechism of the Catholic Church</em></a>, paragraphs 279-314 (Creation)</li>
              <li>• St. Augustine, <a href="https://www.newadvent.org/fathers/1201.htm" target="_blank" rel="noopener noreferrer" className="text-vatican-red hover:text-vatican-gold transition-colors"><em>The Literal Meaning of Genesis</em></a></li>
              <li>• <a href="https://bibleproject.com/explore/video/genesis-1-11/" target="_blank" rel="noopener noreferrer" className="text-vatican-red hover:text-vatican-gold transition-colors">BibleProject, "One Creation Story or Two?" (video)</a></li>
              <li>• <a href="https://www.baslibrary.org/" target="_blank" rel="noopener noreferrer" className="text-vatican-red hover:text-vatican-gold transition-colors">Biblical Archaeology Society</a>, "Should We Take Creation Stories in Genesis Literally?"</li>
            </ul>
          </section>

          {/* Navigation Footer */}
          <section className="border-t border-stone-200 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/genesis" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Genesis Overview
              </Link>
              <Link href="/genesis/edens-rivers" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Next: Eden's Rivers
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
