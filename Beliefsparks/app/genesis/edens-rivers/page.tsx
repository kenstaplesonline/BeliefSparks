import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Droplets, Map, Compass, BookOpen, Sparkles, ArrowRight } from "lucide-react";

export default function EdensRiversPage() {
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
            <Droplets className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Genesis Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Eden's Rivers — <br />
            <span className="text-vatican-gold">Life, Wisdom, and Restoration</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Genesis describes four rivers flowing from Eden: Pishon, Gihon, Tigris, and Euphrates. Some see these as literal waterways. Others see them as symbols — life-giving boundaries, sources of blessing, pointers toward something greater. What did the ancient author intend, and what do these rivers teach us today?
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction */}
          <section className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <Droplets className="h-6 w-6 mr-2 text-blue-500" />
              A River Flows from Eden
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              "A river flows out of Eden to water the garden, and from there it divides and becomes four branches." (Genesis 2:10)
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              In the ancient world, rivers were more than geographic features. They were sources of life, boundaries between nations, and symbols of divine blessing. The image of a river flowing from God's dwelling place and bringing life to the world would have resonated deeply with ancient readers.
            </p>
          </section>

          {/* The Four Rivers */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Map className="h-7 w-7 mr-3 text-vatican-red" />
              The Four Rivers of Eden
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              Genesis 2:10-14 names four rivers that flow from the single source in Eden. Two are well-known; two remain mysterious. Let's explore each:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">1. Pishon — The Mystery River</h3>
                <p className="text-stone-700 mb-3">
                  "The name of the first is Pishon; it is the one that flows around the whole land of Havilah, where there is gold; and the gold of that land is good; bdellium and onyx stone are there." (Genesis 2:11-12)
                </p>
                <p className="text-stone-700 mb-3">
                  The Pishon is unknown from other ancient sources. Scholars have proposed various identifications — perhaps the Nile, perhaps a now-dry riverbed in Arabia, perhaps a symbolic rather than literal waterway. The mention of gold and precious stones suggests abundance and blessing.
                </p>
                <p className="text-stone-600 italic text-sm">
                  Some see Havilah as representing the Arabian Peninsula, known for its gold in antiquity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">2. Gihon — The Land of Cush</h3>
                <p className="text-stone-700 mb-3">
                  "The name of the second river is Gihon; it is the one that flows around the whole land of Cush." (Genesis 2:13)
                </p>
                <p className="text-stone-700 mb-3">
                  The Gihon is also uncertain. Cush typically refers to the region south of Egypt (Nubia/Ethiopia), leading some to identify this with the Nile. However, the Gihon was also the name of a spring in Jerusalem that supplied the city with water — a connection that may be theologically significant.
                </p>
                <p className="text-stone-600 italic text-sm">
                  The Gihon Spring in Jerusalem was where Solomon was anointed king (1 Kings 1:33-40).
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">3. Tigris — The Eastern River</h3>
                <p className="text-stone-700 mb-3">
                  "The name of the third river is Tigris, which flows east of Assyria." (Genesis 2:14a)
                </p>
                <p className="text-stone-700 mb-3">
                  The Tigris (called <em>Hiddekel</em> in Hebrew) is well-known. It runs through modern-day Turkey, Syria, and Iraq, and was one of the great rivers of Mesopotamia, the cradle of civilization.
                </p>
                <p className="text-stone-600 italic text-sm">
                  The Tigris is mentioned again in Daniel 10:4, where Daniel receives a vision by its banks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">4. Euphrates — The Great River</h3>
                <p className="text-stone-700 mb-3">
                  "And the fourth river is the Euphrates." (Genesis 2:14b)
                </p>
                <p className="text-stone-700 mb-3">
                  The Euphrates needs no introduction in the biblical world. It was the great river of Mesopotamia, the boundary of the land promised to Abraham (Genesis 15:18), and a symbol of the known world's extent.
                </p>
                <p className="text-stone-600 italic text-sm">
                  In prophetic literature, the Euphrates often marks boundaries of empires and eschatological events.
                </p>
              </div>
            </div>
          </section>

          {/* Theological Significance */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Sparkles className="h-7 w-7 mr-3 text-vatican-red" />
              The Theological Significance of Eden's Rivers
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Whether we read these rivers as literal or symbolic (or both), they carry rich theological meaning:
            </p>

            <div className="space-y-4">
              <div className="bg-stone-100 p-5 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">Life from the Divine Source</h4>
                <p className="text-stone-700">
                  The single river that divides into four suggests that all life flows from one source — God Himself. Eden is not just a garden; it's the place where God's presence brings forth life that spreads to the four corners of the world.
                </p>
              </div>

              <div className="bg-stone-100 p-5 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">Temple Imagery</h4>
                <p className="text-stone-700">
                  In Ezekiel's vision of the restored Temple, a river flows from beneath the threshold, growing deeper as it goes, bringing life wherever it flows (Ezekiel 47). This parallels Eden's river and suggests that the Temple was seen as a new Eden — God's dwelling place on earth.
                </p>
              </div>

              <div className="bg-stone-100 p-5 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">Cosmic Geography</h4>
                <p className="text-stone-700">
                  The four rivers encompass the known world of the ancient Near East. From Cush (Africa) to Mesopotamia (Asia), Eden's waters reach everywhere. This suggests God's sovereign concern for all peoples and lands, not just Israel.
                </p>
              </div>

              <div className="bg-stone-100 p-5 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">Blessing and Abundance</h4>
                <p className="text-stone-700">
                  The Pishon flows through land rich in gold and precious stones. Rivers in the ancient world meant fertility, trade, and prosperity. Eden is portrayed as a place of abundance, where God's provision overflows.
                </p>
              </div>
            </div>
          </section>

          {/* Eden and Revelation */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <BookOpen className="h-7 w-7 mr-3 text-vatican-red" />
              From Eden to the New Jerusalem: The River Returns
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              The story of Scripture begins with a garden and a river. It ends the same way — but transformed.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 space-y-4">
              <p className="text-stone-800 text-lg italic">
                "Then the angel showed me the river of the water of life, bright as crystal, flowing from the throne of God and of the Lamb through the middle of the street of the city. On either side of the river is the tree of life with its twelve kinds of fruit, producing its fruit each month; and the leaves of the tree are for the healing of the nations." (Revelation 22:1-2)
              </p>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              The parallels are striking:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <h4 className="font-bold text-stone-900 mb-2">Eden (Genesis 2)</h4>
                <ul className="space-y-1 text-stone-700 text-sm">
                  <li>• River flows from Eden</li>
                  <li>• Tree of life in the garden</li>
                  <li>• God walks with humanity</li>
                  <li>• Paradise lost through sin</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h4 className="font-bold text-stone-900 mb-2">New Jerusalem (Revelation 22)</h4>
                <ul className="space-y-1 text-stone-700 text-sm">
                  <li>• River flows from God's throne</li>
                  <li>• Tree of life on either side</li>
                  <li>• God dwells with His people</li>
                  <li>• Paradise restored through Christ</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              The biblical story is a great arc from garden to garden, from the river that watered Eden to the river of the water of life. What was lost is not abandoned — it is restored, glorified, made new.
            </p>
          </section>

          {/* Rivers in Scripture */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Rivers of Living Water: The Biblical Theme</h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              The image of life-giving water flows throughout Scripture:
            </p>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded border-l-4 border-vatican-gold">
                <p className="text-stone-800"><strong>Psalm 46:4</strong> — "There is a river whose streams make glad the city of God, the holy habitation of the Most High."</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-vatican-gold">
                <p className="text-stone-800"><strong>Psalm 36:8-9</strong> — "They feast on the abundance of your house, and you give them drink from the river of your delights. For with you is the fountain of life."</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-vatican-gold">
                <p className="text-stone-800"><strong>Ezekiel 47:9</strong> — "Wherever the river goes, every living creature that swarms will live, and there will be very many fish."</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-vatican-gold">
                <p className="text-stone-800"><strong>John 7:38</strong> — "Out of the believer's heart shall flow rivers of living water."</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-vatican-gold">
                <p className="text-stone-800"><strong>John 4:14</strong> — "The water that I will give will become in them a spring of water gushing up to eternal life."</p>
              </div>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Jesus Himself draws on this rich imagery. He is the source of living water. Those who come to Him become part of the river — not just recipients of life but channels through which life flows to others.
            </p>
          </section>

          {/* Literal vs. Symbolic */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Literal, Symbolic, or Both?</h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Christians have long debated whether the four rivers of Eden should be understood literally or symbolically. The Church's approach has typically been nuanced:
            </p>

            <div className="bg-stone-100 p-6 rounded-lg space-y-4">
              <p className="text-stone-800">
                <strong>The literal view:</strong> Eden was a real place, located somewhere in the ancient Near East, with actual rivers flowing from it. The difficulty of identifying Pishon and Gihon doesn't negate this — ancient geography may simply be lost to us.
              </p>
              <p className="text-stone-800">
                <strong>The symbolic view:</strong> The four rivers represent the four corners of the earth, or the spread of God's blessing to all nations. The details (gold, precious stones) are theological rather than geographical markers.
              </p>
              <p className="text-stone-800">
                <strong>The Catholic synthesis:</strong> Genesis uses "figurative language" to affirm "a primeval event" (CCC 390). The theological truths are what matter most: God created, God blessed, God provided. Whether the geography is precise or symbolic doesn't change the message.
              </p>
            </div>
          </section>

          {/* Questions for Reflection */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Questions for Reflection</h2>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What does the image of a river flowing from God's presence suggest about the nature of blessing?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does the connection between Eden's river and the river in Revelation shape your understanding of God's plan?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>Where do you see "rivers of living water" flowing in your life or community?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How might you become a channel of God's life-giving presence to others?</span>
              </li>
            </ul>
          </section>

          {/* Navigation Footer */}
          <section className="border-t border-stone-200 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/genesis/two-creation-stories" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous: Two Creation Stories
              </Link>
              <Link href="/genesis/eden-temple-question" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Next: Eden as Temple?
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
