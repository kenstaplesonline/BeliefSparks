import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Microscope, BookOpen, Fingerprint, History, Sparkles, Scroll, Brain, CloudRain, Tent, Sword, ExternalLink, ArrowRight, Building2, Users, Divide, Heart, Church, ShieldCheck } from "lucide-react";

export default function HeterodoxPage() {
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
            <Brain className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Heterodox Perspectives</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Faith in <br />
            <span className="text-vatican-gold">High Definition</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Exploring alternative interpretations where ancient scripture meets modern insight. These views, while distinct from traditional dogma, seek a deeper harmony between revelation and reality.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg mb-16 shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>Definition:</strong> <em>Heterodox</em> (from Greek <em>heteros</em> "other" + <em>doxa</em> "opinion") refers to views that differ from strict orthodoxy but are not necessarily heretical. They represent a wrestling with the text, often using tools (like modern science or historical criticism) that were unavailable to the early Church Fathers. The goal is not to dismantle faith, but to refine it—moving from a low-resolution "Standard Definition" to a "High Definition" understanding of God's work.
            </p>
          </div>

          {/* Featured: Tower of Babel */}
          <section className="bg-gradient-to-br from-stone-900 to-stone-800 text-stone-100 p-10 rounded-2xl shadow-xl border border-stone-700">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="inline-flex items-center p-2 bg-vatican-gold/20 rounded-full mb-4">
                  <Building2 className="h-5 w-5 text-vatican-gold mr-2" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-vatican-gold">New Exploration</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-white mb-4">The Tower of Babel: A Warning to the Church</h2>
                <p className="text-stone-300 text-lg mb-6 max-w-2xl leading-relaxed">
                  Beyond language and scattering: Why Babel is a prophetic warning about doctrinal fragmentation and the collapse of spiritual community.
                </p>
                <Link 
                  href="/heterodox/tower-of-babel"
                  className="inline-flex items-center px-6 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Read Full Exploration <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <div className="flex justify-center my-16">
            <div className="w-24 h-px bg-stone-300"></div>
          </div>

          {/* Section 1: The Context of Captivity */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <History className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The View from Babylon</h2>
                <div className="w-12 h-1 bg-stone-900 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Context is Key</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                To truly understand the opening chapters of Genesis, we must first abandon the modern reflex to read them as a scientific textbook or a journalistic report filed from the dawn of time. Instead, we must transport ourselves to the likely moment of their final composition: the 6th century BC, in the dusty, magnificent, and terrifying city of Babylon. The Jewish people were in exile. Their Temple was destroyed, their land occupied, and their monarchy severed. They were a defeated people living in the heart of a superpower that claimed its gods—Marduk, Tiamat, and the rest—were the true masters of the universe.
              </p>
              <p>
                In Babylon, the creation story was the <em>Enuma Elish</em>. It was a violent, chaotic myth where the world was forged from the bloody corpse of a slain dragon-goddess, Tiamat. In this story, the gods were capricious, petty tyrants who created humans merely as slaves to do their manual labor. The universe was born of war, and humanity was born of servitude. This was the cultural water the Jewish exiles swam in every day. It was a worldview of despair, violence, and fear.
              </p>
              <p>
                Against this backdrop, the Jewish priests and scribes penned Genesis 1. It was not a neutral account of origins; it was a radical, subversive, and theological protest literature. It was a polemic against the Babylonian worldview. When Genesis says, "In the beginning, God created the heavens and the earth," it is shouting, "No! The world is not a corpse of a dead god; it is a deliberate masterpiece of Yahweh."
              </p>
              <p>
                Notice the profound differences. In Genesis, there is no war in heaven. There is no struggle. God simply speaks, and it is so. The sun and the moon—worshipped as mighty deities in Babylon—are demoted in Genesis to mere "lamps" or "lights" hung in the sky to tell time. The sea monsters (<em>tanninim</em>), symbols of chaos in other myths, are just another creature God makes and blesses. The text is systematically dismantling the pagan pantheon, stripping the universe of divine rivals and declaring that everything exists by the peaceful, sovereign will of the One God.
              </p>
              <p>
                The seven-day structure, therefore, is not a timeline of 168 literal hours. It is a liturgical structure. It creates a "temple in time." By ending on the Sabbath, the text declares that the ultimate purpose of creation is not labor (as the Babylonians thought), but rest and communion with God. Reading Genesis 1 as a scientific treatise on the age of the earth misses the entire point. It is like reading a love poem and complaining that it lacks a proper weather report. The text answers the question "Who?" and "Why?", not "How?" or "When?". It provided a beleaguered people with dignity and hope, reminding them that their God, not Marduk, held the stars in His hands.
              </p>
              <div className="mt-6 pt-6 border-t border-stone-200">
                <Link 
                  href="/heterodox/view-from-babylon"
                  className="inline-flex items-center px-6 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Read Full Exploration <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2: Science as the HD Version */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Microscope className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The "HD" Update</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Science & Scripture</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                For centuries, believers read the Genesis account with the only tools they had: their eyes and their immediate experience. This was the "Standard Definition" view of creation. It was functional, beautiful, and sufficient for salvation, but it lacked resolution. It described a world of "kinds," of "firmaments," and of immediate, spoken manifestation.
              </p>
              <p>
                Modern science, far from being the enemy of faith, acts as the "High Definition" upgrade to this ancient picture. It zooms in. Where Scripture says "Let there be light," cosmology reveals the Big Bang—a singularity of infinite density and heat exploding into a universe of expanding spacetime. Where Scripture says "Let the earth bring forth living creatures," biology reveals the intricate, patient, and majestic process of evolution—a billions-year unfolding of life from simple cells to complex consciousness.
              </p>
              <p>
                We must reject the false dichotomy that asks us to choose between the Bible and science. If God is the Author of the Book of Scripture and the Author of the Book of Nature, they cannot contradict. Any apparent conflict is due to a misinterpretation of one or the other.
              </p>
              <p>
                The "HD" view suggests that God is not a magician who snaps His fingers to bypass the laws of nature, but a Master Composer who works <em>through</em> them. The magician needs to suspend reality to impress you; the composer uses the very laws of acoustics and time to create a symphony. Evolution, cosmic inflation, plate tectonics—these are the instruments in God's orchestra.
              </p>
              <p>
                This perspective elevates God's glory. It is far more impressive to create a universe that has the potential to <em>develop itself</em>—to seed a singularity with the precise constants (gravity, electromagnetism, nuclear forces) necessary for stars to cook carbon, for planets to form, and for life to emerge—than to simply poof things into existence ready-made. The "HD" God is a God of process, of patience, and of deep time. He is the God who "plays the long game."
              </p>
              <p>
                Furthermore, science has purified religion. It has stopped us from using God as a "God of the gaps"—an explanation for things we don't understand yet (like lightning or disease). As our scientific knowledge grows, the "gaps" shrink, but the true ground of being—the Why behind the How—remains untouched. Science tells us how the heavens go; Scripture tells us how to go to heaven. Science gives us the mechanism; Scripture gives us the meaning. Embracing the scientific narrative as the HD detailed view of the Genesis poetic summary allows a believer to stand in awe of both the text and the telescope.
              </p>
              <div className="mt-6 pt-6 border-t border-stone-200">
                <Link 
                  href="/heterodox/science-as-hd"
                  className="inline-flex items-center px-6 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Read Full Exploration <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3: Eden as the First Temple */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Tent className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Eden: The First Temple</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Adam as Priest</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The popular imagination sees the Garden of Eden as a primitive park, a sort of prehistoric nature preserve where Adam and Eve lounged around eating fruit. But a careful reading of the Hebrew text, informed by Ancient Near Eastern context, reveals something far more structural: Eden was the first Temple, the original "Holy of Holies" on earth.
              </p>
              <p>
                The clues are embedded in the language itself. Genesis 2:15 says God placed Adam in the garden to "work it" (<em>abad</em>) and to "keep it" (<em>shamar</em>). These two Hebrew verbs, when used together elsewhere in the Pentateuch (like in Numbers 3:7-8, 8:26, 18:5-6), refer almost exclusively to the duties of the Levites and priests in the Tabernacle. They are better translated as "to serve" and "to guard." Adam was not merely a gardener; he was the first High Priest.
              </p>
              <p>
                The geography of Eden also mirrors the Temple. The Temple had three sections: the outer courtyard, the Holy Place, and the Holy of Holies. Eden has a similar tripartite structure: the chaotic world outside, the Garden itself, and the center where the Tree of Life stood (the presence of God). The river flowing out of Eden to water the earth (Genesis 2:10) parallels the vision in Ezekiel 47 of water flowing from the Temple to heal the world.
              </p>
              <p>
                Also, note that God "walks" in the garden (Genesis 3:8). The only other place God is described as "walking about" (<em>mithallek</em>) is in the Tabernacle (Leviticus 26:12, Deuteronomy 23:14). The Garden was the place where heaven and earth overlapped, where God and man communed directly.
              </p>
              <p>
                In this view, the "Fall" was not just a moral lapse; it was a liturgical failure. Adam failed to "guard" the sacred space from the intruder (the Serpent). He failed in his priestly duty to protect the sanctuary. The expulsion from the Garden was an exile from the presence of God, a loss of access to the primal Temple.
              </p>
              <p>
                This reframes the entire Bible. The story of salvation becomes the story of God rebuilding His Temple—first through the tabernacle of Moses, then the stone temple of Solomon, then the true Temple of Jesus' body (John 2:21), and finally, the temple of the Church and the New Jerusalem, where "the Lord God Almighty and the Lamb are its temple" (Revelation 21:22). We are not just trying to get back to a garden; we are moving toward a Garden-City, a cosmic Temple where the separation between sacred and secular is finally erased.
              </p>
              <div className="mt-6 pt-6 border-t border-stone-200">
                <Link 
                  href="/heterodox/eden-as-temple"
                  className="inline-flex items-center px-6 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Read Full Exploration <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 4: The Patriarchs */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scroll className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Ages of Ministry</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Dynasties, Not Birthdays</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Genesis 5 presents a genealogy that has baffled modern readers for centuries. It lists men living for nearly a millennium: Adam (930 years), Seth (912), Methuselah (969), and Noah (950). In an age where reaching 100 is a feat, these numbers seem mythological. Literalists insist on biological miracles; skeptics dismiss them as fairy tales. But the "Heterodox" view offers a third way: these numbers likely represent <strong>Ministry Ages</strong> or Dynastic Reigns, not biological lifespans.
              </p>
              <p>
                In the ancient world, names often functioned as titles or corporate identities. When we speak of "The House of Windsor" or "The Ottoman Empire," we are referring to a continuous entity that spans centuries, though the individual rulers within it are mortal. It is plausible that "Adam," "Seth," and "Enoch" refer to schools of thought, clans, or prophetic dynasties that upheld a specific covenantal tradition for the duration listed.
              </p>
              <p>
                Consider the Sumerian King List, an ancient text contemporary with Genesis. It lists kings reigning for tens of thousands of years. Scholars understand these not as biological assertions, but as political statements about the stability and divine favor of those reigns. The Genesis list, while much more restrained (hundreds, not thousands), likely operates on a similar cultural logic. The author is signaling the weight, gravitas, and enduring influence of these righteous lines.
              </p>
              <p>
                The phrase "and then he died" after each patriarch takes on a new poignancy. It marks the end of an era, the collapse of a dynasty, or the passing of the mantle to a new "house." The "Age of Methuselah" was a 969-year period where that specific clan or ministry held spiritual authority before the Flood washed the old order away.
              </p>
              <p>
                This interpretation resolves the conflict with biological data (humans have never lived 900 years) while preserving the text's historical intent. It affirms that there was a real, unbroken chain of custody for the "seed of the woman" (Genesis 3:15). These were the guardians of the promise, the faithful few who maintained the worship of Yahweh in a world rapidly descending into violence. Their "long lives" are a testament to the endurance of God's grace, sustaining a witness through the dark centuries of the antediluvian world.
              </p>
              <div className="mt-6 pt-6 border-t border-stone-200">
                <Link 
                  href="/heterodox/ages-of-ministry"
                  className="inline-flex items-center px-6 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Read Full Exploration <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Sources Section */}
          <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-stone-500 mr-3" />
              Sources & Further Reading
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Microscope className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.ivpress.com/the-lost-world-of-genesis-one" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Lost World of Genesis One <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">John H. Walton</p>
                  <p className="text-xs text-stone-500 mt-1">Foundational for understanding Genesis as Ancient Near Eastern functional creation, not material manufacture.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Tent className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.ivpress.com/the-temple-and-the-church-s-mission" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Temple and the Church's Mission <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">G.K. Beale</p>
                  <p className="text-xs text-stone-500 mt-1">For the comprehensive biblical theology of the Garden of Eden as the first sanctuary.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Brain className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://biologos.org/resources/the-language-of-god" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Language of God <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Francis S. Collins</p>
                  <p className="text-xs text-stone-500 mt-1">A scientist's perspective (Head of the Human Genome Project) on the harmony between evolution and faith.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Scroll className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://zondervanacademic.com/products/genesis-history-fiction-or-neither" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Genesis: History, Fiction, or Neither? <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">James K. Hoffmeier, Gordon J. Wenham, et al.</p>
                  <p className="text-xs text-stone-500 mt-1">A comparative look at different evangelical views on the genre of the primeval history.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion / CTA */}
          <section className="text-center pt-16 border-t border-stone-200 mt-16">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">A Faith Seeking Understanding</h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
              These perspectives are not meant to replace tradition, but to deepen it. By engaging with history, science, and literary context, we can recover a faith that is robust enough for the modern world and ancient enough to be true.
            </p>
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-stone-800 hover:text-white transition-colors duration-300 shadow-md"
            >
              Continue Exploring
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
