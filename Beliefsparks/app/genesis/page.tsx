import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, BookOpen, Scroll, Layers, Sparkles, Droplets, TreeDeciduous, AlertTriangle, Globe } from "lucide-react";

export default function GenesisOverviewPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Home</span>
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
            <BookOpen className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Scripture Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Understanding Genesis — <br />
            <span className="text-vatican-gold">Beginnings, Beauty, and Questions</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Genesis is not just a book about how the world began. It's a book about why the world began, who made it, and what it means to be human in a creation that bears the fingerprints of its Creator.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction */}
          <section className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <Scroll className="h-6 w-6 mr-2 text-vatican-gold" />
              The Book of Beginnings
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              The name "Genesis" comes from the Greek word meaning "origin" or "beginning." In Hebrew, the book is called <em>Bereshit</em> — "In the beginning" — after its opening words. This ancient text has shaped how billions of people understand God, humanity, and the world we inhabit.
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              But Genesis is more than a simple origin story. It's a sophisticated theological document that uses narrative, symbolism, and poetry to reveal profound truths about the nature of reality and our place within it.
            </p>
          </section>

          {/* What is Genesis? */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Layers className="h-7 w-7 mr-3 text-vatican-red" />
              What Is Genesis?
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              Genesis is the first book of the Bible and the first book of the Torah (the five books of Moses). It spans from the creation of the world to the death of Joseph in Egypt — roughly 2,500 years in the biblical chronology, though scholars debate the exact timeline.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              The book is traditionally divided into two major sections:
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 space-y-4">
              <div className="border-b border-stone-200 pb-4">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Primeval History (Chapters 1–11)</h3>
                <p className="text-stone-700">Creation, the Fall, Cain and Abel, the flood, the Tower of Babel — universal stories about humanity's origins and early relationship with God.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Patriarchal History (Chapters 12–50)</h3>
                <p className="text-stone-700">Abraham, Isaac, Jacob, and Joseph — the stories of God's chosen family and the establishment of the covenant relationship with Israel.</p>
              </div>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Our focus in this series is on the primeval history — particularly the creation narratives in chapters 1–3. These chapters have generated more discussion, debate, and wonder than almost any other text in human history.
            </p>
          </section>

          {/* Two Creation Accounts */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Sparkles className="h-7 w-7 mr-3 text-vatican-red" />
              Two Creation Accounts, One Divine Author
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              One of the most fascinating features of Genesis is that it contains not one but two distinct creation narratives:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-stone-900 mb-3">Genesis 1:1–2:4a</h3>
                <p className="text-stone-700 mb-3">The "cosmic" account — seven days of ordered creation, God speaking light and life into existence, humanity as the crown of creation.</p>
                <p className="text-sm text-stone-600 italic">Key themes: God's sovereignty, order, the goodness of creation, Sabbath rest.</p>
              </div>
              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-stone-900 mb-3">Genesis 2:4b–25</h3>
                <p className="text-stone-700 mb-3">The "intimate" account — God forming Adam from dust, planting a garden, creating Eve from Adam's side.</p>
                <p className="text-sm text-stone-600 italic">Key themes: God's immanence, human vocation, relationship, moral choice.</p>
              </div>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              These two accounts differ in style, vocabulary, and even the order of events. For centuries, this has raised questions: Why two stories? Are they contradictory? How should we understand them together?
            </p>

            <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
              <p className="text-stone-800 text-lg">
                <strong>The Catholic approach:</strong> The Church recognizes that these accounts use "figurative language" while affirming "a primeval event, a deed that took place at the beginning of the history of man" (CCC 390). The differences are not contradictions but complementary perspectives, each revealing something essential about God and creation.
              </p>
            </div>
          </section>

          {/* Key Themes */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <TreeDeciduous className="h-7 w-7 mr-3 text-vatican-red" />
              Key Themes in the Genesis Creation Narratives
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2 flex items-center">
                  <Droplets className="h-5 w-5 mr-2 text-vatican-gold" />
                  Creation from Nothing (Creatio ex Nihilo)
                </h4>
                <p className="text-stone-700">
                  God did not form the world from pre-existing matter. He called everything into being by His word. This sets the biblical account apart from ancient Near Eastern creation myths, where gods typically formed the world from existing chaotic materials.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-vatican-gold" />
                  Creation Is Good
                </h4>
                <p className="text-stone-700">
                  Seven times in Genesis 1, God declares creation "good." This fundamental affirmation rejects dualistic views that matter is evil or that the physical world is a prison for souls. The material world is God's good gift.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-vatican-gold" />
                  Humanity in God's Image
                </h4>
                <p className="text-stone-700">
                  "Let us make man in our image, after our likeness" (Genesis 1:26). This single verse establishes the foundation for human dignity, the sanctity of life, and our unique role as stewards of creation. Every human being bears the divine imprint.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2 flex items-center">
                  <TreeDeciduous className="h-5 w-5 mr-2 text-vatican-gold" />
                  Eden as Temple
                </h4>
                <p className="text-stone-700">
                  Many scholars see Eden not merely as a garden but as a divine sanctuary — God's dwelling place on earth. The imagery of rivers, trees, and God's presence walking in the garden connects to later descriptions of the Tabernacle and Temple.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-vatican-gold" />
                  The Fall and Its Effects
                </h4>
                <p className="text-stone-700">
                  Genesis 3 tells the story of humanity's disobedience and its consequences. This "Fall" explains the presence of sin, suffering, and death in a world created good. It also sets the stage for the rest of the biblical story — God's plan of redemption.
                </p>
              </div>
            </div>
          </section>

          {/* Ancient Context */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Globe className="h-7 w-7 mr-3 text-vatican-red" />
              Genesis in Its Ancient Context
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Genesis was not written in a vacuum. It emerged in a world filled with creation stories — Babylonian, Egyptian, Canaanite. The Enuma Elish, the Atrahasis Epic, and other ancient texts describe gods creating the world through violence, struggle, and sometimes accident.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              Genesis shares some imagery with these accounts — cosmic waters, the formation of humans from clay, divine gardens. But it transforms them dramatically:
            </p>

            <div className="bg-stone-100 p-6 rounded-lg space-y-3">
              <ul className="space-y-2 text-stone-700">
                <li>• <strong>One God, not many:</strong> There is no pantheon of competing deities. YHWH alone is Creator.</li>
                <li>• <strong>Creation by word, not violence:</strong> God speaks, and it is. No cosmic battles, no gods slain to make the world.</li>
                <li>• <strong>Humanity as image-bearers, not slaves:</strong> In some myths, humans were created to do the gods' work. In Genesis, we are royal representatives, stewards, children.</li>
                <li>• <strong>A good world, not an afterthought:</strong> Creation is intentional, ordered, and fundamentally good.</li>
              </ul>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Understanding this context helps us see what Genesis was asserting — not scientific details about how the world was made, but theological truths about <em>who</em> made it and <em>why</em>.
            </p>
          </section>

          {/* Reading Genesis Today */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Reading Genesis Today</h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              How should we approach these ancient texts in a world of modern science? The Catholic Church offers helpful guidance:
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 space-y-4">
              <p className="text-stone-800">
                <strong>Pope John Paul II</strong> taught that "the Bible itself speaks to us of the origin of the universe and its make-up, not in order to provide us with a scientific treatise but in order to state the correct relationships of humanity with God and with the universe."
              </p>
              <p className="text-stone-800">
                <strong>Pope Benedict XVI</strong> emphasized that Genesis is not "a mythical story expressing deep truths in symbolic form" <em>or</em> "a historical account of events" — but rather something that transcends this dichotomy, teaching theological truths through narrative.
              </p>
              <p className="text-stone-800">
                <strong>Pope Francis</strong> has written beautifully about creation care in <em>Laudato Si'</em>, drawing on Genesis to call Christians to stewardship of our common home.
              </p>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              The goal is not to force Genesis into conflict with science, nor to strip it of its theological power. We can affirm both the inspired truth of Scripture and the legitimate findings of modern cosmology, geology, and evolutionary biology. They ask different questions and give different kinds of answers.
            </p>
          </section>

          {/* Series Overview */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Exploring Genesis: Series Overview</h2>
            <p className="text-stone-700 mb-6">In this series, we'll explore several key questions from the Genesis creation narratives:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/genesis/two-creation-stories" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors">
                <h3 className="font-bold text-stone-900">Two Creation Stories</h3>
                <p className="text-sm text-stone-600">Why are there two accounts, and what do they each reveal?</p>
              </Link>
              <Link href="/genesis/edens-rivers" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors">
                <h3 className="font-bold text-stone-900">Eden's Rivers</h3>
                <p className="text-sm text-stone-600">The four rivers and their theological significance.</p>
              </Link>
              <Link href="/genesis/eden-temple-question" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors">
                <h3 className="font-bold text-stone-900">Eden as Temple?</h3>
                <p className="text-sm text-stone-600">Was the garden a divine sanctuary?</p>
              </Link>
              <Link href="/genesis/serpent-tree-choice" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors">
                <h3 className="font-bold text-stone-900">The Serpent, the Tree, and Choice</h3>
                <p className="text-sm text-stone-600">Understanding the Fall and its meaning.</p>
              </Link>
              <Link href="/genesis/ancient-myths" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors">
                <h3 className="font-bold text-stone-900">Ancient Myths & Genesis</h3>
                <p className="text-sm text-stone-600">How Genesis compares to other creation stories.</p>
              </Link>
            </div>
          </section>

          {/* Questions for Reflection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Questions for Reflection</h2>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What questions do you bring to the Genesis creation narratives?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How has your understanding of Genesis changed over time?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What does it mean to you that creation is "good"?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does being made in God's image affect how you see yourself and others?</span>
              </li>
            </ul>
          </section>

          {/* Navigation Footer */}
          <section className="border-t border-stone-200 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Home
              </Link>
              <Link href="/genesis/two-creation-stories" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Next: Two Creation Stories
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
