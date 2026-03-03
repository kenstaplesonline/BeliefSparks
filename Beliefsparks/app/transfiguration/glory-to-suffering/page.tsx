import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Cross, BookOpen, Mountain, Heart } from "lucide-react";

export default function GloryToSufferingPage() {
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
            <Cross className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Transfiguration Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Preparing for the Cross — <br />
            <span className="text-vatican-red">From Glory to Suffering</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Six days after the Transfiguration, Jesus told his disciples about his coming death and resurrection. The glory they witnessed on the mountain was meant to prepare them for what would follow at Jerusalem. Sometimes we want to stay on the mountain of glory forever. But discipleship means following Jesus down — to suffering, service, and ultimately to resurrection.
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>The Journey:</strong> In all three Synoptic Gospels, the Transfiguration is sandwiched between Jesus' predictions of His death. He tells the disciples He must suffer, be killed, and rise (Matthew 16:21). Then comes the mountain. Then comes another prediction (Matthew 17:22-23). The glory and the cross are inseparable. You can't have one without the other.
            </p>
          </div>

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Cross className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Cross Looms</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Necessary Suffering</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Jesus had set His face toward Jerusalem (Luke 9:51). He knew what awaited Him there — betrayal, arrest, trial, torture, execution. The disciples couldn't understand it. Peter even rebuked Jesus for talking this way (Matthew 16:22). Suffering didn't fit their expectations for the Messiah.
              </p>
              <p>
                But the Transfiguration placed the cross in context. Jesus wasn't just a teacher on His way to an unfortunate death. He was the glorious Son of God, and He was choosing the cross. The glory they glimpsed wasn't in spite of the coming suffering — it was the reason the suffering could accomplish anything. Only the glorious Son could bear the weight of the world's sin.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Mountain className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Glory Prepares</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">For What's Coming</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The Transfiguration wasn't a detour from Jesus' mission — it was preparation for it. The disciples needed to see who He really was before they watched Him die. Otherwise, the cross would have shattered their faith entirely. "We had hoped that he was the one to redeem Israel" (Luke 24:21) — the Transfiguration was the antidote to that despair.
              </p>
              <p>
                Years later, Peter would write: "We were eyewitnesses of his majesty" (2 Peter 1:16). The memory sustained him through his own suffering, his own martyrdom. He had seen the glory. He knew how the story ended. That made the middle bearable.
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
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Discipleship's Path</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Following Jesus Down</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                "If anyone would come after me, let him deny himself and take up his cross and follow me" (Matthew 16:24). This is the path of discipleship — not escaping suffering but entering it with Jesus. The Transfiguration doesn't remove us from the world's pain; it gives us hope in the midst of it.
              </p>
              <p>
                We all have mountaintop moments — experiences of God's presence that change us. But we can't live there. The point of the mountain is to equip us for the valley. The point of glory is to sustain us through suffering. The point of resurrection hope is to give us courage to carry our cross, knowing that Easter is coming.
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
