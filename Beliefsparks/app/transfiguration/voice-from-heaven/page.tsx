import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Volume2, BookOpen, ArrowRight } from "lucide-react";

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
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">The Voice from Heaven</h1>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-3">The Father Speaks</h2>
            <p className="text-stone-800 text-lg">"While he was still speaking, a bright cloud covered them, and a voice from the cloud said, 'This is my Son, whom I love; with him I am well pleased. Listen to him!'" (Matthew 17:5)</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Three Declarations</h2>
            <div className="space-y-3">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">1. This Is My Son</h3>
                <p className="text-stone-700">Jesus isn't merely a prophet, teacher, or miracle-worker. He is the Son — eternal, divine, one with the Father.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">2. Whom I Love</h3>
                <p className="text-stone-700">The Father's love for the Son is infinite. Their relationship is perfect communion of love.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">3. Listen to Him</h3>
                <p className="text-stone-700">The command to the disciples — and to us — is clear. Jesus is the definitive Word of God.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">Connections to Other Events</h2>
            <div className="space-y-4">
              <div className="bg-stone-100 p-5 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-2">Baptism</h3>
                <p className="text-stone-700">"This is my beloved Son, with whom I am well pleased" (Matthew 3:17). The same voice at Transfiguration confirms what was declared at baptism.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-2">Psalm 2</h3>
                <p className="text-stone-700">"I have installed my king on Zion, my holy mountain... You are my son; today I have become your father" (Psalm 2:6-7). This messianic psalm points to Christ.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-2">Isaiah 42</h3>
                <p className="text-stone-700">"Here is my servant, whom I uphold, my chosen one in whom I delight" (Isaiah 42:1). The Servant of the Lord is the Son.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900">The Cloud and Glory</h2>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-vatican-gold">
              <p className="text-stone-800 text-lg mb-4">The bright cloud that covers them is the Shekinah — God's glory presence.</p>
              <ul className="space-y-2 text-stone-700">
                <li>• It led Israel through the wilderness</li>
                <li>• It filled the Tabernacle and Temple</li>
                <li>• It now dwells in Christ (Colossians 1:19)</li>
              </ul>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <div className="flex justify-between">
              <Link href="/transfiguration/moses-elijah" className="text-vatican-red hover:text-vatican-gold">Previous: Moses and Elijah</Link>
              <Link href="/transfiguration/the-tent" className="text-vatican-red hover:text-vatican-gold">Next: The Tent/Tabernacle</Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
