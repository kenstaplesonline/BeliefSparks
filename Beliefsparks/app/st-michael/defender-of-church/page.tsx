import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Shield, BookOpen, Sword, Heart } from "lucide-react";

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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <Shield className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">St. Michael Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            St. Michael — <br />
            <span className="text-vatican-red">Defender of the Church</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            In Catholic tradition, St. Michael is commander of the heavenly host — defender of the faithful against evil. But what does "defender" mean in today's world? Not wielding swords against dragons from storybooks. St. Michael's battle is fought in prayer, not physical combat. How does this ancient devotion speak to our modern struggles with depression, anxiety, and spiritual oppression?
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="bg-amber-50 border-l-4 border-vatican-red p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Archangel:</strong> St. Michael's name means "Who is like God?" — a rhetorical question affirming that no one equals the Lord. He appears in Scripture as a warrior (Revelation 12:7-9), an intercessor (Jude 1:9), and a guardian of Israel (Daniel 12:1). Catholic tradition venerates him as the prince of the heavenly host, the defender of the Church against the powers of darkness.
            </p>
          </div>

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sword className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Spiritual Warfare</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Ephesians 6:12</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                "For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places" (Ephesians 6:12). St. Michael fights in this spiritual realm — not against people, but against the powers that oppress and deceive.
              </p>
              <p>
                In Revelation 12, Michael leads the heavenly armies against "the great dragon... that ancient serpent, who is called the devil and Satan, the deceiver of the whole world." The battle is real, but it's not fought with physical weapons. It's fought through prayer, through the sacraments, through the truth of God's Word. Michael's sword is spiritual authority, not steel.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Modern Battles</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Today's Struggles</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                What does St. Michael defend us against today? Not dragons or demons in the medieval sense, but against the very real forces that oppress human souls: despair, addiction, anxiety, the lies that tell us we're worthless or beyond hope. These spiritual afflictions are every bit as real as physical ones, and St. Michael's intercession is sought by Catholics facing such battles.
              </p>
              <p>
                Pope Leo XIII famously composed the Prayer to St. Michael after a vision of spiritual attack on the Church. It's still prayed after Mass in many parishes: "St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil." This isn't superstition — it's calling on a powerful intercessor to stand with us in spiritual struggle.
              </p>
            </div>
          </section>

          <section className="text-center pt-16 border-t border-stone-200">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Continue Exploring St. Michael</h3>
            <Link href="/st-michael" className="inline-block px-8 py-3 bg-vatican-red text-white font-semibold rounded-lg hover:bg-stone-800 transition-colors duration-300 shadow-md">
              Return to St. Michael Series
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}
