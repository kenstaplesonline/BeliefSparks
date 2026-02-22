import Image from "next/image";
import Link from "next/link";
import { Scale, Heart, UserPlus, Gift, History, HelpCircle, ArrowRight, BookOpen, Anchor, ExternalLink } from "lucide-react";

export default function ChristianityUniquePage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <HelpCircle className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">The Core Question</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            What Makes Christianity <br />
            <span className="text-vatican-red">Different?</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Every religion addresses the human condition, offering a path to meaning, peace, or the divine. Yet, at its heart, Christianity makes a claim that stands apart from all others.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          
          {/* Section 1: God Searches for Man */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <UserPlus className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">God in Search of Man</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">The Incarnation</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                In almost every religious tradition and philosophical system throughout history, the narrative is fundamentally the same: humanity is at the bottom of the mountain, and God—or enlightenment, or nirvana—is at the top. The religious life is defined by the ascent. It is the story of man’s search for God. We climb through obedience, through ritual, through meditation, through self-denial, or through the accumulation of knowledge. The burden of the journey rests entirely on human shoulders. If we try hard enough, if we are pure enough, we might reach the summit.
              </p>
              <p>
                Christianity flips this script entirely. It is the only religion that is not about man’s search for God, but about <strong>God’s search for man</strong>.
              </p>
              <p>
                The central claim of the Christian faith is the Incarnation. It teaches that the Creator of the universe did not wait for us to find our way to Him. Instead, He "emptied Himself, taking the form of a servant" (Philippians 2:7). God crossed the infinite chasm between the Creator and the created. He entered into our history, our sweat, our tears, and our suffering. In Jesus of Nazareth, the infinite God became a finite man.
              </p>
              <p>
                This is why Christianity is often called a "revealed" religion rather than a "discovered" one. We could never reason our way to God’s nature; He had to show us. We could never climb the mountain; He had to come down.
              </p>
              <p>
                Consider the parable of the Lost Sheep. In other religions, the sheep is expected to find its way back to the shepherd, perhaps by following a map or a set of rules. In Christianity, the Shepherd leaves the ninety-nine safe sheep in the fold and goes out into the wilderness, into the darkness and danger, to find the one that is lost. He doesn't just call out directions; He carries the sheep home on His shoulders. This radical movement of God toward humanity—not because we are worthy, but because He is loving—is the heartbeat of the Christian difference.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2: Grace vs. Works */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Gift className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Grace, Not Merit</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">"Done" vs "Do"</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                If you were to boil down the operational mode of most world religions, it comes down to a system of merit. It is a transactional relationship: "I do this, so that God will do that." If I pray enough, give enough alms, or suppress enough desire, I will earn my salvation. It is a wage paid for work performed. In this view, salvation is something you achieve.
              </p>
              <p>
                Christianity introduces a concept that is scandalous to the religious mind: <strong>Grace</strong>.
              </p>
              <p>
                Grace (<em>charis</em> in Greek) means "unmerited favor." It is a gift given to someone who does not deserve it—indeed, to someone who often deserves the exact opposite. The Gospel message is that our moral ledger is hopelessly broken. We cannot be good enough to bridge the gap to a perfect God. Our best efforts are marred by pride and mixed motives. If salvation depends on our performance, we are doomed to anxiety or arrogance.
              </p>
              <p>
                The distinction is often summarized as the difference between "DO" and "DONE."
              </p>
              <ul>
                <li><strong>Religion says "DO":</strong> Do more, try harder, obey better. It is a burden of endless striving, never knowing if you have done enough to satisfy the divine standard.</li>
                <li><strong>Christianity says "DONE":</strong> The work of salvation was accomplished by Jesus Christ on the Cross. When He said, "It is finished" (<em>Tetelestai</em>), He meant that the debt was paid in full.</li>
              </ul>
              <p>
                This changes the entire motivation for ethics and good works. A Christian does not do good works <em>in order to be</em> saved; they do good works because they <em>are already</em> saved. We obey God not to earn His love, but out of gratitude for the love He has already lavished upon us. The pressure is off. We are accepted not because of our record, but because of Christ’s record. This creates a humility and a joy that merit-based systems can never produce.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3: A Relational God (Trinity) */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">God is Love</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">The Trinity</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                "God is love." We hear this phrase so often that it has lost its shock value. But in the context of world religions, it is a radical theological statement that only Christianity can coherently make.
              </p>
              <p>
                Consider a strictly unitarian view of God—a God who is a single, solitary person (as in Islam or some forms of philosophical theism). Before the universe was created, what was this God doing? He was alone. He might have possessed the <em>potential</em> to love, but He had no one to love. Love requires an object. For a solitary God to be love, He essentially <em>needs</em> creation. He needs to create beings in order to experience love. This makes creation necessary for God, rather than a free act of grace.
              </p>
              <p>
                The Christian doctrine of the <strong>Trinity</strong> changes everything. Christianity teaches that God is one Being in three Persons: Father, Son, and Holy Spirit.
              </p>
              <p>
                This means that before a single atom existed, God was already a community. The Father loved the Son, and the Son loved the Father, in the unity of the Spirit. God has been "love" for all eternity because He has always been relational within Himself. He did not create the universe because He was lonely or needy. He was already infinitely happy and full.
              </p>
              <p>
                Therefore, creation was an act of sheer overflow. He created us to invite us into the dance of love that has always existed. This has profound implications for human life. If God is inherently relational, then we—made in His image—are inherently relational. We are not designed for isolation. The ultimate reality of the universe is not power, or law, or silence; it is personal, self-giving love. No other faith offers a God who is, in His very essence, a family.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 4: Historical Reality */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <History className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Grounded in History</h2>
                <div className="w-12 h-1 bg-stone-900 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">The Resurrection</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Many religions are primarily philosophies or collections of timeless truths. You could take the Buddha out of Buddhism, and the Four Noble Truths would still arguably hold their logical weight. You could remove Confucius from Confucianism, and the ethical maxims would remain. These faiths function as "wisdom traditions"—instruction manuals for living well.
              </p>
              <p>
                Christianity is different. It is not primarily a philosophy of life; it is a <strong>news report</strong>. It is a claim that something happened in history that changed the world forever.
              </p>
              <p>
                If you take Jesus Christ out of Christianity, there is nothing left. The entire faith hinges on a single historical event: the bodily resurrection of Jesus of Nazareth around 33 AD. As St. Paul wrote, "If Christ has not been raised, our preaching is useless and so is your faith" (1 Corinthians 15:14).
              </p>
              <p>
                This makes Christianity uniquely vulnerable to historical investigation. It invites scrutiny. It names names, dates, and places—Pontius Pilate, Caiaphas, Jerusalem. The early Christians did not go around saying, "We have a new idea about being kind." They went around saying, "We saw Him. We ate with Him. He is alive."
              </p>
              <p>
                Because of the Resurrection, Christianity offers a hope that is physical and tangible. It is not just about the immortality of the soul floating in a spiritual ether. It is about the redemption of the body and the restoration of the material world. The empty tomb is the guarantee that death is not the end, that matter matters, and that God has not abandoned His creation to decay. It is a "true myth"—a story that fulfills our deepest longings, yet has the hard edge of historical fact.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* New Section: Comparisons */}
          <section className="bg-stone-100 p-8 md:p-12 rounded-2xl">
             <div className="text-center mb-12">
                <Scale className="h-10 w-10 text-stone-500 mx-auto mb-4" />
                <h2 className="text-3xl font-serif font-bold text-stone-900">Comparing Worldviews</h2>
                <p className="text-lg text-stone-600 mt-4">How the Christian claim contrasts with other major perspectives.</p>
             </div>
             
             <div className="space-y-12">
                {/* Judaism */}
                <div className="grid md:grid-cols-12 gap-8">
                   <div className="md:col-span-3">
                      <h3 className="text-xl font-bold text-stone-900 border-l-4 border-blue-600 pl-3">Judaism</h3>
                   </div>
                   <div className="md:col-span-9 prose prose-stone">
                      <p>
                        <strong>The Contrast:</strong> Christianity is deeply rooted in Judaism; they share the same Old Testament and the belief in one God who acts in history. However, Judaism is built on the Covenant of the Law (Torah) given to Moses. It awaits a future Messiah who will bring earthly peace and restore Israel.
                      </p>
                      <p>
                        <strong>The Christian Difference:</strong> Christians believe that Jesus <em>is</em> the promised Messiah who fulfilled the Law, not by abolishing it, but by completing it. The New Covenant is written not on stone tablets, but on human hearts through the Holy Spirit. While Judaism focuses on observance of the Law, Christianity focuses on faith in the One who kept the Law perfectly on our behalf.
                      </p>
                   </div>
                </div>

                {/* Islam */}
                <div className="grid md:grid-cols-12 gap-8">
                   <div className="md:col-span-3">
                      <h3 className="text-xl font-bold text-stone-900 border-l-4 border-vatican-gold pl-3">Islam</h3>
                   </div>
                   <div className="md:col-span-9 prose prose-stone">
                      <p>
                        <strong>The Contrast:</strong> Islam emphasizes the transcendence and oneness (Tawhid) of God. God is the Master; humans are servants. The relationship is defined by submission (Islam) to His will as revealed in the Quran.
                      </p>
                      <p>
                        <strong>The Christian Difference:</strong> While Christians also believe God is Master, Jesus reveals God as <em>Father</em> (Abba). We are not just servants, but adopted sons and daughters. Furthermore, Islam denies the Incarnation and the Crucifixion, seeing them as unworthy of a prophet or God. Christianity sees the Crucifixion not as a defeat, but as the supreme glory of God’s love.
                      </p>
                   </div>
                </div>

                {/* Buddhism/Hinduism */}
                <div className="grid md:grid-cols-12 gap-8">
                   <div className="md:col-span-3">
                      <h3 className="text-xl font-bold text-stone-900 border-l-4 border-vatican-red pl-3">Buddhism & Hinduism</h3>
                   </div>
                   <div className="md:col-span-9 prose prose-stone">
                      <p>
                        <strong>The Contrast:</strong> These Eastern traditions generally view the material world as illusion (Maya) or a place of suffering (Dukkha). The goal is to escape the cycle of rebirth (Samsara) and dissolve the individual ego into the cosmic whole.
                      </p>
                      <p>
                        <strong>The Christian Difference:</strong> Christianity affirms the material world as "very good" (Genesis 1). God does not want us to escape our humanity, but to redeem it. We retain our personal identity forever. Heaven is not the dissolution of the self, but the perfection of the self in communion with God.
                      </p>
                   </div>
                </div>

                {/* Atheism/Secularism */}
                <div className="grid md:grid-cols-12 gap-8">
                   <div className="md:col-span-3">
                      <h3 className="text-xl font-bold text-stone-900 border-l-4 border-stone-800 pl-3">Atheism & Secularism</h3>
                   </div>
                   <div className="md:col-span-9 prose prose-stone">
                      <p>
                        <strong>The Contrast:</strong> Atheism posits that the universe is a closed system of cause and effect, with no transcendent meaning or purpose. Morality is a social construct or evolutionary adaptation. Death is the final end of consciousness.
                      </p>
                      <p>
                        <strong>The Christian Difference:</strong> Christianity offers an objective ground for meaning, beauty, and morality—they are real because they reflect the nature of God. It provides a satisfying answer to the human longing for justice and significance. While atheism says we are cosmic accidents, Christianity says we are known, willed, and loved.
                      </p>
                   </div>
                </div>
             </div>
          </section>

          {/* Sources Section */}
          <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-stone-500 mr-3" />
              Sources & Recommended Reading
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Anchor className="h-4 w-4 text-vatican-red" /></div>
                <div>
                  <a href="https://www.amazon.com/Mere-Christianity-C-S-Lewis/dp/0060652926" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Mere Christianity <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">C.S. Lewis</p>
                  <p className="text-xs text-stone-500 mt-1">For the arguments on the Moral Law and the uniqueness of the Christian claim.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Anchor className="h-4 w-4 text-vatican-red" /></div>
                <div>
                  <a href="https://timothykeller.com/books/the-reason-for-god" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Reason for God <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Timothy Keller</p>
                  <p className="text-xs text-stone-500 mt-1">For the distinction between "Religion" (I obey, therefore I am accepted) and "Gospel" (I am accepted, therefore I obey).</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Anchor className="h-4 w-4 text-vatican-red" /></div>
                <div>
                  <a href="https://spckpublishing.co.uk/the-resurrection-of-the-son-of-god" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Resurrection of the Son of God <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">N.T. Wright</p>
                  <p className="text-xs text-stone-500 mt-1">For the historical analysis of the resurrection claim in its 1st-century context.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Anchor className="h-4 w-4 text-vatican-red" /></div>
                <div>
                  <a href="https://www.ignatius.com/Introduction-to-Christianity-2nd-Edition-P1629.aspx" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Introduction to Christianity <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Joseph Ratzinger (Pope Benedict XVI)</p>
                  <p className="text-xs text-stone-500 mt-1">For deep theological exploration of the Apostles' Creed and the nature of belief.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion / CTA */}
          <section className="text-center pt-8">
             <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
               "I am the way, and the truth, and the life. No one comes to the Father except through me." <br/>— Jesus Christ (John 14:6)
             </p>
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-vatican-red text-white font-semibold rounded-lg hover:bg-stone-900 transition-colors duration-300"
            >
              Continue Exploring
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
