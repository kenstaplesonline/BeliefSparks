import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Sparkles, BookOpen, Feather, Users } from "lucide-react";

export default function AngelsInBiblePage() {
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
            <Feather className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">St. Michael Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Angels in the Bible — <br />
            <span className="text-vatican-red">Friends or Fearsome Beings?</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            The Bible mentions angels 300+ times — messengers, protectors, and warriors. But popular culture often portrays them as cherubic babies or fearsome beings. Scripture reveals a different reality: angels are powerful, radiant, and sometimes terrifying — but they always serve God. St. Michael, who fought against Satan, is the only archangel named in the Bible. What does this tell us about angelic nature?
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="bg-amber-50 border-l-4 border-vatican-red p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>Created Spirits:</strong> Angels are spiritual beings created by God before humanity. They have intellect and will, but no physical bodies. They're not gods, not demigods, not the souls of departed humans. They're a separate order of creation — pure spirits who serve as God's messengers and ministers.
            </p>
          </div>

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Powerful & Radiant</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Not Cute Cupids</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Popular art often depicts angels as gentle, winged humans — sometimes even as chubby babies. Scripture paints a very different picture. When angels appear in the Bible, people's first reaction is usually terror. "Do not be afraid" is the standard angelic greeting because their appearance is overwhelming.
              </p>
              <p>
                Isaiah's vision of seraphim — fiery beings with six wings — is nothing like a Hallmark card (Isaiah 6:1-7). Ezekiel's cherubim are complex, multi-faced creatures with wheels within wheels (Ezekiel 1). The angel who rolled away the stone at Jesus' tomb had an appearance "like lightning" (Matthew 28:3). These are powerful, otherworldly beings.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Feather className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">God's Messengers</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Always Serving</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The Greek word <em>angelos</em> means "messenger." That's their primary role — carrying God's messages to humanity. Gabriel announced the Incarnation to Mary. An angel warned Joseph to flee to Egypt. Angels ministered to Jesus after His temptation. They're servants of God's purposes, not independent operators.
              </p>
              <p>
                Hebrews 1:14 describes angels as "ministering spirits sent out to serve for the sake of those who are to inherit salvation." They're not objects of worship — Scripture strictly forbids angel worship (Colossians 2:18, Revelation 22:8-9). They're fellow servants, pointing us to the God they serve.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Free Will & Fall</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Some Fell</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Angels were created good, with free will. Some chose to reject God — these became the demons, with Satan (traditionally identified as Lucifer) as their leader. St. Michael led the faithful angels against this rebellion. The fallen angels weren't created evil; they chose evil.
              </p>
              <p>
                This tells us something important about angelic nature: they're not robots. They have genuine freedom and made real choices. The good angels confirmed in their choice now serve God unwaveringly. St. Michael, having chosen fidelity, stands as defender against the one who chose rebellion.
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
