import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Building, Sparkles, BookOpen, Church, HelpCircle, Flame } from "lucide-react";

export default function EdenTempleQuestionPage() {
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
            <Building className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Genesis Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Eden — God's Temple <br />
            <span className="text-vatican-gold">or Just a Garden?</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Was the Garden of Eden a physical garden, or something deeper? Some scholars see Eden as God's sanctuary on earth — a place where divine presence dwelt, worship flowed naturally, and creation and Creator shared intimacy. What does this perspective reveal about God's original relationship with humanity?
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction */}
          <section className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <HelpCircle className="h-6 w-6 mr-2 text-vatican-gold" />
              A Garden — or Something More?
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              We typically think of Eden as a garden — a beautiful, lush paradise where Adam and Eve lived before the Fall. But a growing number of biblical scholars see something more: Eden as a temple, a sanctuary, the place where heaven and earth met.
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              This isn't a modern invention. The connections between Eden and later Israelite worship spaces — the Tabernacle and Temple — are woven throughout Scripture. Understanding Eden as temple changes how we read Genesis, how we understand worship, and how we see God's original intent for humanity.
            </p>
          </section>

          {/* The Case for Eden as Temple */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Church className="h-7 w-7 mr-3 text-vatican-red" />
              The Case for Eden as Temple
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              What evidence suggests that Eden was more than a garden? Consider these connections:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3 flex items-center">
                  <Flame className="h-5 w-5 mr-2 text-vatican-gold" />
                  God Walks in the Garden
                </h3>
                <p className="text-stone-700 mb-3">
                  "They heard the sound of the Lord God walking in the garden at the time of the evening breeze." (Genesis 3:8)
                </p>
                <p className="text-stone-700">
                  The Hebrew verb used here for "walking" (<em>mithallek</em>) is the same word used for God's presence dwelling in the Tabernacle (Leviticus 26:12) and Temple (2 Samuel 7:6-7). Eden is portrayed as God's dwelling place, where His presence is manifest.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">The River Flowing Out</h3>
                <p className="text-stone-700 mb-3">
                  As we explored in the previous article, a river flows from Eden and divides into four (Genesis 2:10). This mirrors Ezekiel's vision of a river flowing from the restored Temple (Ezekiel 47) and Revelation's river flowing from God's throne (Revelation 22:1-2).
                </p>
                <p className="text-stone-700">
                  In ancient Near Eastern thought, temples were often depicted as sources of life-giving water. Eden fits this pattern.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">The Tree of Life</h3>
                <p className="text-stone-700 mb-3">
                  The Tree of Life at Eden's center (Genesis 2:9) finds its counterpart in the Temple's menorah — a stylized tree of life with branches, flowers, and almonds. Both represent God's life-giving presence.
                </p>
                <p className="text-stone-700">
                  The Tree of Life reappears in Revelation 22, flanking the river that flows from God's throne. The garden-temple theme comes full circle.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Cherubim Guarding the Entrance</h3>
                <p className="text-stone-700 mb-3">
                  After the Fall, God stations cherubim and a flaming sword to guard the way to the Tree of Life (Genesis 3:24). Cherubim are associated throughout Scripture with God's throne room and the Most Holy Place.
                </p>
                <p className="text-stone-700">
                  The Tabernacle and Temple featured cherubim woven into curtains, carved into walls, and overshadowing the Ark of the Covenant. Eden's cherubim suggest it was holy ground — the inner sanctuary of God's presence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Adam's Priestly Role</h3>
                <p className="text-stone-700 mb-3">
                  Adam is placed in the garden "to till it and keep it" (Genesis 2:15). The Hebrew words <em>'abad</em> (work/serve) and <em>shamar</em> (keep/guard) are the same terms used for priestly service in the Tabernacle (Numbers 3:7-8, 8:26).
                </p>
                <p className="text-stone-700">
                  Adam is not just a gardener; he is a priest-keeper of God's sanctuary. His role is to serve and guard the sacred space where God dwells.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Gold and Precious Stones</h3>
                <p className="text-stone-700 mb-3">
                  The land surrounding the Pishon river is noted for its gold, bdellium, and onyx (Genesis 2:11-12). These same materials adorn the Tabernacle and Temple, as well as the high priest's breastplate.
                </p>
                <p className="text-stone-700">
                  Eden is a place of beauty and precious materials — like the sanctuaries Israel would later build.
                </p>
              </div>
            </div>
          </section>

          {/* Temple Parallels */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Sparkles className="h-7 w-7 mr-3 text-vatican-red" />
              Eden, Tabernacle, Temple, and Church
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              If Eden was the first temple, then the history of God's dwelling with humanity follows a fascinating pattern:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg border border-stone-200">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="p-3 text-left font-bold text-stone-900">Eden</th>
                    <th className="p-3 text-left font-bold text-stone-900">Tabernacle/Temple</th>
                    <th className="p-3 text-left font-bold text-stone-900">Church</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="p-3 text-stone-700">God walks with humanity</td>
                    <td className="p-3 text-stone-700">God dwells in the Holy of Holies</td>
                    <td className="p-3 text-stone-700">God dwells in His people (1 Cor 3:16)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-700">River flows from Eden</td>
                    <td className="p-3 text-stone-700">Bronze sea, water for washing</td>
                    <td className="p-3 text-stone-700">Baptism, living water of the Spirit</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-700">Tree of Life</td>
                    <td className="p-3 text-stone-700">Menorah (tree of light)</td>
                    <td className="p-3 text-stone-700">Cross, Eucharist, Christ the true vine</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-700">Cherubim guard entrance</td>
                    <td className="p-3 text-stone-700">Cherubim woven on veil</td>
                    <td className="p-3 text-stone-700">Access through Christ (veil torn)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-700">Adam serves and keeps</td>
                    <td className="p-3 text-stone-700">Priests serve in the sanctuary</td>
                    <td className="p-3 text-stone-700">All believers are priests (1 Pet 2:9)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              The pattern is clear: God has always desired to dwell with His people. Eden was the first expression of this desire. The Tabernacle and Temple continued it. In Christ, the Temple is rebuilt in three days (John 2:19-21). In the Church, God's presence dwells in a living temple made of living stones (1 Peter 2:5).
            </p>
          </section>

          {/* What This Means */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <BookOpen className="h-7 w-7 mr-3 text-vatican-red" />
              What This Means for Us
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Understanding Eden as temple isn't just academic. It has practical implications for how we understand our faith:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">1. We Were Made for Worship</h4>
                <p className="text-stone-700">
                  Humanity's original purpose was priestly — to serve and guard God's sanctuary. Worship isn't a later addition; it's built into our DNA. We were created to live in God's presence.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">2. The Whole Earth Is Sacred</h4>
                <p className="text-stone-700">
                  If Eden was God's sanctuary, and humanity was to "fill the earth and subdue it" (Genesis 1:28), then the implication is that all creation was meant to become a temple — filled with God's presence. Our care for creation is a priestly task.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">3. Christ Restores What Was Lost</h4>
                <p className="text-stone-700">
                  Jesus is described as the true Temple (John 2:19-21), the one who brings heaven and earth together. Through His death, the veil is torn. Access to God's presence is restored. We can enter the sanctuary again.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">4. The Church Continues the Temple Pattern</h4>
                <p className="text-stone-700">
                  Catholic churches are designed to reflect this theology — the sanctuary, the altar, the tabernacle, the presence of God. When we enter a church, we're entering sacred space, just as Adam did in Eden.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">5. Heaven Will Be Eden Restored</h4>
                <p className="text-stone-700">
                  Revelation doesn't describe a church or temple in the New Jerusalem — "its temple is the Lord God Almighty and the Lamb" (Revelation 21:22). The goal of history is Eden restored — God dwelling with His people in perfect communion.
                </p>
              </div>
            </div>
          </section>

          {/* Catholic Perspective */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">The Catholic Perspective</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              The Catholic Church has long recognized the connections between Eden and the Temple. The Church Fathers frequently read Genesis through a liturgical lens, seeing Adam as a priest and Eden as a sanctuary.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              St. John Chrysostom wrote that Adam was placed in Paradise "like a king in a palace." St. Ephrem the Syrian described Eden as a mountain from which four rivers flowed, imagery echoed in later descriptions of the Temple Mount.
            </p>
            <p className="text-stone-700 leading-relaxed">
              This understanding enriches Catholic worship. When we participate in the Mass, we're not just remembering something from the past; we're participating in the reality that Eden pointed toward — God dwelling with His people, feeding them from the Tree of Life, washing them with living water.
            </p>
          </section>

          {/* Questions for Reflection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Questions for Reflection</h2>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does seeing Eden as a temple change how you read the creation story?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What does it mean that Adam was given a priestly role — to serve and guard?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does this perspective enrich your understanding of worship and church?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>If all creation was meant to become God's temple, how should we treat the world?</span>
              </li>
            </ul>
          </section>

          {/* Navigation Footer */}
          <section className="border-t border-stone-200 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/genesis/edens-rivers" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous: Eden's Rivers
              </Link>
              <Link href="/genesis/serpent-tree-choice" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Next: The Serpent, the Tree, and Choice
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
