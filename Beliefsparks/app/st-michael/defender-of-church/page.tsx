import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Shield, BookOpen, ArrowRight } from "lucide-react";

export default function DefenderOfChurchPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/st-michael" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to St. Michael</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Image src="/icon.png" alt="Logo" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-serif font-bold text-stone-900 hidden sm:inline">Belief Sparks</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-24">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <Shield className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">St. Michael Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Michael: Defender of the Church
          </h1>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">Israel's Protector, the Church's Defender</h2>
            <p className="text-stone-800 text-lg">Daniel's vision reveals Michael as "the great prince who protects your people" (10:13, 12:1). This protection didn't end with the Old Testament. The Church has long understood Michael as defender of God's people in every age.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Michael's Protective Role</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">In Daniel</h3>
                <p className="text-stone-700">Michael contends with the "prince of Persia" for twenty-one days to bring an answer to Daniel's prayer. This reveals unseen spiritual battles and Michael's role as intercessor and protector.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">In Revelation</h3>
                <p className="text-stone-700">Michael leads heaven's armies against the dragon. His victory ensures that "the accuser of our brothers and sisters, who accuses them before our God day and night, has been hurled down" (Revelation 12:10).</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">In Tradition</h3>
                <p className="text-stone-700">St. Michael is considered the angel who defeated Lucifer and cast the rebellious angels from heaven. His battle cry "Who is like God?" declared God's supremacy over all false claims to power.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">The Church's Devotion</h2>
            <p className="text-stone-700">The Church has recognized Michael's protective role throughout history:</p>
            <div className="space-y-4">
              <div className="bg-stone-100 p-5 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-2">St. Michael's Prayer</h3>
                <p className="text-stone-700 italic">"St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil..." Pope Leo XIII added this prayer to Mass in 1884.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-2">Patronage</h3>
                <p className="text-stone-700">Soldiers, police, doctors, and those facing spiritual battle seek Michael's intercession. Churches and shrines bear his name.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-2">Apparitions</h3>
                <p className="text-stone-700">At Monte Gargano (Italy, 492) and elsewhere, Michael appeared, confirming his role as protector and messenger of God's people.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">What This Means for Us</h2>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-vatican-gold space-y-3">
              <p className="text-stone-700"><strong>1. We are not alone in spiritual battle.</strong> God provides protection through angels like Michael.</p>
              <p className="text-stone-700"><strong>2. Victory is certain.</strong> Michael's triumph in Revelation assures us that evil is defeated.</p>
              <p className="text-stone-700"><strong>3. We have a defender.</strong> We can ask for Michael's intercession in times of spiritual attack.</p>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/st-michael/angels-in-bible" className="text-vatican-red hover:text-vatican-gold">Previous: Angels in the Bible</Link>
              <Link href="/st-michael/end-times" className="text-vatican-red hover:text-vatican-gold">Next: Michael in the End Times</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
