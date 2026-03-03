import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Shield, Sword, Feather, ArrowRight, BookOpen, Flame } from "lucide-react";

export default function StMichaelOverviewPage() {
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
            <Shield className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Saints Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            St. Michael the Archangel — <br />
            <span className="text-vatican-gold">Prince of the Heavenly Host</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            "Who is like God?" That's what the name Michael means — a warrior prince, a defender of the Church, and the leader of heaven's armies. Across Scripture and tradition, Michael stands as a powerful witness to God's victory over evil and a protector of God's people.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <Feather className="h-6 w-6 mr-2 text-blue-600" />
              The Archangel Michael
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              "At that time Michael, the great prince, the protector of your people, will arise." (Daniel 12:1)
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              Michael appears only a handful of times in Scripture, yet his presence is unmistakable. He is called an archangel, the leader of heavenly armies, and one who contends with the devil. For millions of Catholics, he is a powerful intercessor and defender in spiritual warfare.
            </p>
          </section>

          {/* Who is Michael? */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <BookOpen className="h-7 w-7 mr-3 text-vatican-red" />
              Who Is Michael?
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              The name <em>Mikha'el</em> means "Who is like God?" — a rhetorical question with an obvious answer: no one. Michael is one of the few angels named in Scripture, and his name itself is a declaration of God's incomparable greatness.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">In Scripture</h3>
                <ul className="space-y-2 text-stone-700">
                  <li><strong>Daniel:</strong> Michael is "the great prince who protects your people" (10:13, 12:1)</li>
                  <li><strong>Jude:</strong> Michael contends with the devil over Moses' body (Jude 9)</li>
                  <li><strong>Revelation:</strong> Leads heaven's armies against the dragon (12:7-9)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">In Tradition</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>One of the seven archangels (with Gabriel, Raphael)</li>
                  <li>Defeated Satan and cast him from heaven</li>
                  <li>Weighs souls at the Last Judgment</li>
                  <li>Patron saint of soldiers, police, doctors</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              The Church's understanding of Michael developed over centuries, drawing on both Scripture and tradition. What emerges is a picture of a powerful angelic prince devoted to God's cause and protective of God's people.
            </p>
          </section>

          {/* Michael in Scripture */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Sword className="h-7 w-7 mr-3 text-vatican-red" />
              Michael in Scripture
            </h2>

            <div className="space-y-6">
              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Daniel: Protector of Israel</h3>
                <p className="text-stone-700 mb-3">
                  Daniel's visions reveal Michael as Israel's guardian. In Daniel 10, Michael comes to strengthen Daniel after a three-week spiritual battle. In Daniel 12, he is "the great prince" who will arise to deliver God's people in the end times.
                </p>
                <p className="text-stone-600 italic text-sm">
                  Michael's role here emphasizes protection and deliverance during times of trouble.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Jude: Contender for Truth</h3>
                <p className="text-stone-700 mb-3">
                  "Even the archangel Michael, when he was disputing with the devil about the body of Moses, did not presume to pronounce a reviling judgment upon him, but said, 'The Lord rebuke you!'" (Jude 9)
                </p>
                <p className="text-stone-700">
                  This fascinating verse reveals an unseen conflict — perhaps reflecting the ancient belief that Satan wanted to claim Moses' body. Michael's response ("The Lord rebuke you!") shows respect for God's authority even in spiritual warfare.
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Revelation: Warrior of Heaven</h3>
                <p className="text-stone-700 mb-3">
                  "And war broke out in heaven: Michael and his angels fought against the dragon, and the dragon and his angels fought back." (Revelation 12:7)
                </p>
                <p className="text-stone-700">
                  The final book of Scripture portrays Michael as leader of heaven's armies in cosmic battle against Satan (the dragon). Michael triumphs, and Satan is hurled down to earth. This vision of cosmic victory has shaped Christian imagination for two millennia.
                </p>
              </div>
            </div>
          </section>

          {/* Michael in Catholic Tradition */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Michael in Catholic Tradition</h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Beyond Scripture, Catholic tradition has developed rich devotion to St. Michael:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2">Defeat of Satan</h4>
                <p className="text-stone-700">
                  Tradition holds that Michael led the faithful angels against Lucifer's rebellion, saying "Who is like God?" as his battle cry. This became a powerful image in art and literature.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2">Patronage</h4>
                <p className="text-stone-700">
                  St. Michael is patron saint of soldiers, police, doctors, and those in battle against evil. In 1884, Pope Leo XIII added a prayer to St. Michael at the end of every Mass for protection against Satan.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2">Apparitions</h4>
                <p className="text-stone-700">
                  The most famous is the 1966 apparition at Garabandal, Spain, where Michael reportedly appeared as the "angel of peace" — one of several apparitions of St. Michael recognized by the Church.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2">Feast Day</h4>
                <p className="text-stone-700">
                  The Church celebrates the Feast of Sts. Michael, Gabriel, and Raphael on September 29 (formerly Michaelmas). This day has been marked since the early centuries.
                </p>
              </div>
            </div>
          </section>

          {/* What We Can Learn */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">What We Can Learn from Michael</h2>

            <div className="space-y-4">
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">1. Spiritual Warfare Is Real</h4>
                <p className="text-stone-700">
                  Michael's presence in Scripture reminds us that there is more to reality than what we see. Paul writes that "our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world" (Ephesians 6:12). Michael shows us how to fight — with God's authority, not our own.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">2. Angels Serve God's Purpose</h4>
                <p className="text-stone-700">
                  Angels aren't independent actors with their own agendas. They are "ministering spirits sent to serve those who will inherit salvation" (Hebrews 1:14). Michael's story is always about serving God's victory, not seeking glory for himself.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">3. Protection Is Part of God's Care</h4>
                <p className="text-stone-700">
                  Daniel's vision of Michael as protector of God's people assures us that God cares about His people. He doesn't abandon us to spiritual forces. He sends help — whether we see it or not.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">4. Victory Is Certain</h4>
                <p className="text-stone-700">
                  Revelation 12 shows Michael's triumph. The battle is fierce, but the outcome is not in doubt. God wins. Evil is defeated. This is the hope that sustains us in dark times.
                </p>
              </div>
            </div>
          </section>

          {/* Michael and Christ */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Michael and Christ</h2>

            <div className="bg-stone-100 p-8 rounded-lg">
              <p className="text-stone-800 text-lg mb-4">
                It's crucial to understand: Michael is powerful, but he is an angel. Christ is God incarnate. The difference is infinite.
              </p>
              <p className="text-stone-800 text-lg mb-4">
                Some Christians, confused about the nature of angels, mistakenly worship or pray to angels as they would to God. The Catechism is clear: "The worship of angels is part of the Christian faith. The faithful honor the angels as 'messengers' of God" (CCC 329) — but worship belongs to God alone.
              </p>
              <p className="text-stone-800 text-lg">
                St. Michael points us to Christ, not away from Him. His victory in Revelation anticipates Christ's final victory over sin, death, and Satan. Angels are fellow worshippers, not objects of worship.
              </p>
            </div>
          </section>

          {/* Series Overview */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Exploring St. Michael: Series Overview</h2>
            <p className="text-stone-700 mb-6">In this series, we'll explore Michael's role in Scripture, tradition, and our spiritual lives:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/st-michael/angels-in-bible" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors">
                <h3 className="font-bold text-stone-900">Angels in the Bible</h3>
                <p className="text-sm text-stone-600">What does Scripture teach about angelic beings?</p>
              </Link>
              <Link href="/st-michael/defender-of-church" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors">
                <h3 className="font-bold text-stone-900">Defender of the Church</h3>
                <p className="text-sm text-stone-600">Michael's role as protector of God's people</p>
              </Link>
              <Link href="/st-michael/end-times" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors">
                <h3 className="font-bold text-stone-900">Michael in the End Times</h3>
                <p className="text-sm text-stone-600">Eschatology and final victory</p>
              </Link>
              <Link href="/st-michael/devotion-practice" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors">
                <h3 className="font-bold text-stone-900">Devotional Practices</h3>
                <p className="text-sm text-stone-600">How to honor St. Michael</p>
              </Link>
              <Link href="/st-michael/intercessory-prayer" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors">
                <h3 className="font-bold text-stone-900">Intercessory Prayer</h3>
                <p className="text-sm text-stone-600">Asking for Michael's intercession</p>
              </Link>
            </div>
          </section>

          {/* Questions for Reflection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Questions for Reflection</h2>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What does Michael's name — "Who is like God?" — mean to you?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How do you understand spiritual warfare? Have you experienced it?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What comfort do you find in knowing that God sends protectors like Michael?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does Michael point us to Christ, not away from Him?</span>
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
              <Link href="/st-michael/angels-in-bible" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Next: Angels in the Bible
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
