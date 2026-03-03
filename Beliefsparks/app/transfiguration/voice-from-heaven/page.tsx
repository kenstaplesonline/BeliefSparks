import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Sun, BookOpen, Volume2, Mountain } from "lucide-react";

export default function VoiceFromHeavenPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/transfiguration" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Transfiguration</span>
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
            <Sun className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Transfiguration Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Voice from Heaven — <br />
            <span className="text-vatican-gold">Divine Affirmation</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            We ourselves heard this voice that came from heaven when we were with him on the sacred mountain. The Transfiguration wasn't just a miraculous event — it was God the Father speaking from heaven: "This is my beloved Son, in whom I am well pleased." What does this divine affirmation tell us about Jesus' identity and the Trinity revealed at this moment?
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Voice:</strong> Three times in the Gospels, God the Father speaks audibly — at Jesus' baptism, at the Transfiguration, and in John 12:28. Each time, He affirms His Son. At the Transfiguration, this voice doesn't just confirm Jesus' identity to Him — it reveals that identity to Peter, James, and John. The curtain pulls back, and the disciples glimpse the Trinity in action.
            </p>
          </div>

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Volume2 className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Words</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">"This is My Beloved Son"</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                "This is my beloved Son, with whom I am well pleased; listen to him" (Matthew 17:5). These words echo Psalm 2:7 — "You are my Son; today I have begotten you" — a royal psalm that Israel understood messianically. They also echo Isaiah 42:1 — "Behold my servant, whom I uphold, my chosen, in whom my soul delights." The Father is declaring Jesus to be both King and Servant, the Messiah Israel had been waiting for.
              </p>
              <p>
                The command "listen to him" is significant. In Deuteronomy 18:15, Moses prophesied: "The LORD your God will raise up for you a prophet like me from among you, from your brothers — it is to him you shall listen." The Father is telling the disciples: this is the prophet Moses predicted. Listen to Him. His words carry divine authority.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Mountain className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Trinity Revealed</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Father, Son, Spirit</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The Transfiguration is one of the clearest revelations of the Trinity in Scripture. The Father speaks from heaven. The Son stands transfigured before them. The Spirit's presence is implied — just as the cloud of God's glory in the Old Testament represented His presence, so the bright cloud that overshadows them represents the Spirit.
              </p>
              <p>
                Peter later writes: "We ourselves heard this very voice borne from heaven, for we were with him on the holy mountain" (2 Peter 1:18). The experience marked him deeply. He had seen the Trinity — not as abstract theology but as living reality. The Father loving the Son, the Son in glory, the Spirit present in the cloud.
              </p>
            </div>
          </section>

          <section className="text-center pt-16 border-t border-stone-200">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Continue the Transfiguration Journey</h3>
            <Link href="/transfiguration" className="inline-block px-8 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-stone-800 hover:text-white transition-colors duration-300 shadow-md">
              Return to Transfiguration Series
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}
