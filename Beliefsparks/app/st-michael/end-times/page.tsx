import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Scale, BookOpen, Sun, Shield } from "lucide-react";

export default function EndTimesPage() {
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
            <Scale className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">St. Michael Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            St. Michael at the End Time — <br />
            <span className="text-vatican-red">Hope and Judgment</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Catholic tradition teaches that St. Michael has a special role in the end times — weighing souls and fighting the final battle. The Book of Revelation speaks of war in heaven and dragons sweeping stars to earth. St. Michael leads the heavenly host against Satan. But the end times are meant to be times of hope, not fear. Christ's victory is assured.
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="bg-amber-50 border-l-4 border-vatican-red p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Final Battle:</strong> Revelation 12:7-9 describes the ultimate confrontation: "Now war arose in heaven, Michael and his angels fighting against the dragon. And the dragon and his angels fought back, but he was defeated, and there was no longer any place for them in heaven." This cosmic conflict has already been won. Satan's defeat is certain.
            </p>
          </div>

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Victory Assured</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Christ Has Won</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The key to understanding St. Michael's eschatological role is this: the battle is already decided. The cross and resurrection have secured the victory. St. Michael isn't fighting to determine the outcome — he's enforcing a victory already won. Satan is a defeated foe, however much he rages.
              </p>
              <p>
                This is why the end times should fill Christians with hope, not terror. Yes, there will be tribulation. Yes, evil will have its final fling. But the ending is written. Christ returns as King, not as contestant. St. Michael leads the armies of heaven not to win but to mop up.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scale className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Weighing Souls</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Divine Justice</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Tradition assigns St. Michael a role in the judgment of souls — he's sometimes depicted holding scales, weighing the deeds of the departed. This imagery comes from Jewish tradition and was adopted by Christianity. It represents God's justice, with Michael as the executor.
              </p>
              <p>
                But this shouldn't be understood in a fearful, legalistic way. For those in Christ, judgment has already been rendered — we've been declared righteous through His blood. St. Michael's role isn't to condemn but to confirm what Christ has already accomplished. The scales are weighed in our favor because Jesus tips them.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sun className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Hope, Not Fear</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Looking Forward</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Too often, discussions of the end times focus on fear — antichrists, tribulations, disasters. But Catholic eschatology is fundamentally hopeful. We're headed toward the marriage feast of the Lamb, the new heavens and new earth, the wiping away of every tear. St. Michael's role in that story is as protector and guide, leading us safely home.
              </p>
              <p>
                When we pray to St. Michael, we're not warding off doom — we're aligning ourselves with the victory that's already been won. "He will command his angels concerning you to guard you in all your ways" (Psalm 91:11). That protection extends all the way to the end of the age and beyond.
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
