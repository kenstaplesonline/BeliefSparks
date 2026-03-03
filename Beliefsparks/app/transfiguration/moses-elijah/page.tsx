import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Users, BookOpen, Scroll, Scale } from "lucide-react";

export default function MosesElijahPage() {
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
            <Users className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Transfiguration Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Moses, Elijah, and the Mountain — <br />
            <span className="text-vatican-gold">Old Testament Fulfillment</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Jesus took Peter, James, and John up a high mountain by themselves. And suddenly Moses and Elijah appeared, talking with Jesus. Why these two figures? They represent the Law and the Prophets — all pointing to Jesus. The Transfiguration wasn't something new — it was a climax of God's plan revealed in stages: through Moses and Prophets, through Christ, and now through the Church.
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Conversation:</strong> Luke 9:30-31 tells us they "appeared in glory and spoke of his departure, which he was about to accomplish at Jerusalem." The Greek word for "departure" is <em>exodos</em> — Exodus. They were discussing Jesus' exodus, His death and resurrection, the new Passover that would deliver humanity from slavery to sin.
            </p>
          </div>

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scroll className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Moses — The Law</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Torah Giver</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Moses represents the Law — the Torah that formed Israel's identity and guided their relationship with God. He had encountered God's glory on Sinai, his face shining from the experience. He had led the first Exodus, delivering Israel from Egypt. Now he appears on another mountain, speaking with the One who would lead the greater Exodus.
              </p>
              <p>
                Moses had died on Mount Nebo, looking into the Promised Land he couldn't enter (Deuteronomy 34). Now he stands in the presence of the One who opens the way for all to enter the true Promised Land. The Law that Moses gave finds its fulfillment in Jesus. "Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them" (Matthew 5:17).
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
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Elijah — The Prophets</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Prophetic Voice</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Elijah represents the Prophets — those who called Israel back to covenant faithfulness and pointed forward to the coming Messiah. He too had encountered God's glory on a mountain, not in wind or earthquake or fire but in "a still small voice" (1 Kings 19:12). He had been taken up to heaven in a chariot of fire, bypassing death (2 Kings 2).
              </p>
              <p>
                The prophets had spoken of One who would come — the Suffering Servant, the Branch of David, the Son of Man. Elijah stands now with the fulfillment of those prophecies. All the hopes and longings expressed through centuries of prophetic witness converge on this mountain. Jesus is what the prophets were pointing toward.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Law & Prophets Fulfilled</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Jesus is the Goal</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Together, Moses and Elijah represent the entire Old Testament witness — "the Law and the Prophets." Their appearance with Jesus makes a profound statement: everything they represent points to Him. He is not a new teacher replacing the old; He is the fulfillment toward which the old always pointed.
              </p>
              <p>
                When the voice from heaven says "listen to him," it's not suggesting the disciples ignore Moses and Elijah. It's saying: everything they taught finds its true meaning in Him. The Exodus prefigures His exodus. The Law reveals the need for His grace. The prophets foretell His coming. Listen to Him because He is the key that unlocks everything else.
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
