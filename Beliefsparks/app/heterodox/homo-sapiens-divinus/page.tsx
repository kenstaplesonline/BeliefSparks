import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Sparkles, BookOpen, ExternalLink, Globe2, Brain, Heart, Users, Leaf, Scroll, Sunrise } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homo Sapiens Divinus: Divine Humanity & Spiritual Awakening | Belief Sparks",
  description: "Explore Homo Sapiens Divinus: when the Garden of Eden opened humanity's spiritual awakening. Discover how 4.54 billion years led to conscious divine calling.",
  openGraph: {
    title: "Homo Sapiens Divinus: Divine Humanity & Spiritual Awakening",
    description: "Explore Homo Sapiens Divinus: when the Garden of Eden opened humanity's spiritual awakening. Discover how 4.54 billion years led to conscious divine calling.",
    type: "article",
    url: "https://beliefsparks.com/heterodox/homo-sapiens-divinus",
    siteName: "Belief Sparks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homo Sapiens Divinus: Divine Humanity & Spiritual Awakening",
    description: "Explore Homo Sapiens Divinus: when the Garden of Eden opened humanity's spiritual awakening.",
  },
};

export default function HomoSapiensDivinusPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/heterodox" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Heterodox</span>
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
            <Sparkles className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Heterodox Perspective</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Homo Sapiens Divinus: <br />
            <span className="text-vatican-gold">The Awakening</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Earth exists. For 4.54 billion years, this blue and green planet has spun through space. But around 4000 BC, something profound shifted—the emergence of the first humans with conscious awareness of divine reality.
          </p>
        </section>

        {/* Editor's Note */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg mb-16 shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>Editor&apos;s Note (March 11, 2026):</strong> This page has been rewritten to align with the Garden of Eden framework. Around 4000 BC, the Garden of Eden opened: the emergence of Homo Sapiens Divinus, the first humans with conscious awareness of divine reality. Humanity existed for millennia but was not yet spiritually conscious. The first divine humans experienced unity with God, understood their image-bearing status, and began a journey of conscious relationship.
            </p>
          </div>
        </article>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

          {/* Section 1: The Ancient Earth */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Globe2 className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Ancient Earth</h2>
                <div className="w-12 h-1 bg-stone-900 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">4.54 Billion Years</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The Earth is old. When scientists measure radiometric dating, examine zircon crystals, and analyze potassium-argon ratios, they consistently arrive at the same number: 4.54 billion years. This isn&apos;t a guess. It&apos;s a conclusion supported by multiple independent lines of evidence converging on the same vast timescale.
              </p>
              <p>
                For many Christians, this immense age feels unsettling. We read in Genesis that God created the world in six days, and we wonder: how do these billions of years fit with Scripture? The tension dissolves when we remember that God&apos;s time is not our time. Psalm 90:4 reminds us, &quot;A thousand years in your sight are like a day that has just gone by.&quot;
              </p>
              <p>
                Time itself is a gift from the Creator—not something to fear but to cherish. The ancient Hebrews understood time differently. For them, time was not a scarce resource to be managed but a sacred reality to be inhabited. They marked time by seasons and festivals, by planting and harvest, by the movements of sun and moon.
              </p>
              <p>
                When we embrace Earth&apos;s vast age, we&apos;re not abandoning Scripture—we&apos;re expanding our appreciation for God&apos;s patience and wisdom. What kind of Creator takes billions of years to prepare a home for humanity? A Creator who values process over instant results. A Creator who finds joy in the journey, not just the destination.
              </p>
              <h3>Evolution as Divine Process</h3>
              <p>
                Evolution and divine creativity are not enemies—they&apos;re partners. God works through processes—gradual, unfolding, patient processes. The same God who formed humanity from the dust also formed that dust over billions of years of stellar and geological activity.
              </p>
              <p>
                This perspective transforms how we see the world. Every rock becomes a testimony to God&apos;s creative work. Every fossil becomes a chapter in the story God has been telling since the beginning. Every mountain range becomes a cathedral, proclaiming the glory of its Maker.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2: The Garden of Eden */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Leaf className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Garden of Eden</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Consciousness Shift</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Around 4000 BC, something unprecedented happened. The world didn&apos;t change physically, but consciousness shifted fundamentally. Humanity&apos;s understanding of ourselves, our relationship with God, and our place in creation deepened in ways that would echo through human history for millennia.
              </p>
              <p>
                This wasn&apos;t a garden in the traditional sense. The biblical narrative uses &quot;garden&quot; as a metaphor for a new state of being—a consciousness attuned to divine reality. Genesis 2-3 describes not a geographical location but a threshold moment: the emergence of Homo Sapiens Divinus.
              </p>
              <h3>The First Divine Humans</h3>
              <p>
                Adam and Eve were not merely the first two humans to walk the earth. They were the first Homo Sapiens Divinus—spiritually awakened beings. Before them, humanity existed as biological creatures, like other animals, part of the natural world but not yet conscious participants in God&apos;s story.
              </p>
              <p>
                This awakening wasn&apos;t a one-time event but the beginning of a journey. The first divine humans experienced unity with divine consciousness—a state where they knew themselves as created, loved, and held by the Creator.
              </p>
              <h3>The Fall as Educational</h3>
              <p>
                The traditional interpretation of Genesis 3 as a story of human rebellion is understandable, but it misses something crucial. The &quot;fall&quot; wasn&apos;t primarily about sin in the moral sense. It was about consciousness expanding beyond unity into duality—the emergence of awareness of good and evil as separate categories.
              </p>
              <p>
                This expansion was necessary for humanity&apos;s growth. The first divine humans had to learn to choose—to choose between alignment with God and divergence from God&apos;s purposes—to understand the cost of freedom, the responsibility of consciousness.
              </p>
              <h3>Expulsion as Necessary Step</h3>
              <p>
                Being cast out of Eden wasn&apos;t punishment. It was a necessary step in humanity&apos;s development. The first divine humans had experienced unity with God, but they hadn&apos;t yet learned to choose that unity consciously. They needed to experience separation, to understand what it meant to live without constant divine communion.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3: Cross-Cultural Awakenings */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Cross-Cultural Awakenings</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Universal Pattern</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                If the Garden of Eden is unique to Judeo-Christian tradition, why do so many cultures have parallel narratives about golden ages, primordial unity, and conscious awakening? The answer lies in the reality that spiritual awakening is a universal human experience.
              </p>
              <h3>Hindu Satya Yuga — The Golden Age of Truth</h3>
              <p>
                In Hindu cosmology, Satya Yuga represents a golden age of purity, truth, and spiritual perfection—the original state of humanity before consciousness fragmented. Humans lived in complete alignment with cosmic order, with no separation between humans and the divine.
              </p>
              <h3>Greek Golden Age — The Age of Cronus</h3>
              <p>
                Greek mythology describes four ages of humanity, beginning with the Golden Age under Cronus—a time of peace, harmony, and abundance. Humanity lived in perfect harmony with nature, without conflict or toil. The gods themselves walked among humans.
              </p>
              <h3>Indigenous Dreamtime — Pure Consciousness</h3>
              <p>
                For Aboriginal Australians, Dreamtime (Alcheringa) represents the primordial era when reality was fluid and mystical. Ancestors and spirit beings walked the earth, shaping the land and creating all life. The boundary between physical and spiritual was permeable.
              </p>
              <h3>Buddhist Maitreya — The Future Buddha</h3>
              <p>
                In Buddhist tradition, Maitreya is the future Buddha prophesied to appear when dharma has declined. Maitreya will bring a new age of peace, prosperity, and spiritual awakening—representing humanity&apos;s trajectory toward higher consciousness.
              </p>
              <h3>Common Threads Across Cultures</h3>
              <ul>
                <li>A primordial state of unity and harmony with divine reality</li>
                <li>A transitional moment where consciousness expands</li>
                <li>A recognition that humanity has moved beyond its original state</li>
                <li>Hope for future restoration or further awakening</li>
              </ul>
              <p>
                <strong>Theological Implication:</strong> God&apos;s revelation is not limited to one tradition but works across cultures. The Holy Spirit &quot;lifts up&quot; all peoples toward divine awareness. The common threads across traditions point to a shared human trajectory toward consciousness and relationship with the divine.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 4: What "Divine Human" Means */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Brain className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Divine Human</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Imago Dei</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                <em>Homo sapiens</em>—wise human. That&apos;s what scientists call our species. But for people of faith, this scientific name only tells part of the story. We are not merely wise humans; we are divine humans—<em>Homo sapiens divinus</em>.
              </p>
              <p>
                What does this mean? Not that we are gods ourselves—that would be idolatry. Rather, it means we are humans created with a unique capacity to know and reflect God. We bear God&apos;s image. We participate in God&apos;s purposes.
              </p>
              <h3>Made in the Image of God</h3>
              <p>
                The foundation is found in Genesis 1:26-27: &quot;Then God said, &apos;Let us make mankind in our image, in our likeness...&apos; So God created mankind in his own image, in the image of God he created them; male and female he created them.&quot;
              </p>
              <p>
                This declaration—known in theology as the <em>Imago Dei</em>—sets humanity apart. We possess something animals do not: the ability to know God, to choose for or against God, to reflect God&apos;s character in the world.
              </p>
              <h3>The Four Attributes of Divine Humanity</h3>
              <ol>
                <li><strong>Image-Bearer:</strong> We represent God in the world. This is not a role we earn but an identity we receive. From conception to natural death, every human being bears God&apos;s image.</li>
                <li><strong>Co-Creator with God:</strong> In Genesis 2:19-20, God brings the animals to Adam &quot;to see what he would name them.&quot; Naming is an act of creative participation. God invited the human to participate in the creative process.</li>
                <li><strong>Moral Agent:</strong> We have free will—the capacity to choose. This is both a gift and a responsibility. We are not programmed robots but genuine agents who can shape our character and our world.</li>
                <li><strong>Spiritual Seeker:</strong> We have an innate desire for connection with the Divine. As Augustine prayed, &quot;You have made us for yourself, and our heart is restless until it rests in you.&quot;</li>
              </ol>
              <h3>The Role of Christ</h3>
              <p>
                Jesus Christ is the perfect Homo Sapiens Divinus—the first fully awakened divine human. In him, we see what humanity was created to be. He is &quot;the image of the invisible God, the firstborn over all creation&quot; (Colossians 1:15). Through Christ, the journey of Homo Sapiens Divinus finds its fulfillment.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 5: Living as Divine Humans Today */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-8 w-8 text-vatican-gold" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Living Today</h2>
              <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Practical Applications</p>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                You are not just here—you&apos;re <em>called</em>. Your existence is not an accident but an invitation. You are Homo sapiens divinus, a divine human created with purpose and destiny.
              </p>
              <h3>Daily Spiritual Practices</h3>
              <ul>
                <li><strong>Prayer:</strong> Conscious communion with God—not elaborate or lengthy, but an ongoing conversation that keeps us aware of God&apos;s presence.</li>
                <li><strong>Reflection:</strong> Regular examination of how you&apos;re reflecting God&apos;s image. Where did you show love today? Where did you fall short?</li>
                <li><strong>Gratitude:</strong> The Earth is a gift. Your life is a gift. Every breath is a gift. Cultivate gratitude to resist taking God&apos;s gifts for granted.</li>
                <li><strong>Service:</strong> We are most fully human when we&apos;re giving ourselves away. Jesus said, &quot;The Son of Man did not come to be served, but to serve&quot; (Mark 10:45).</li>
                <li><strong>Sacramental Living:</strong> Recognize the sacred in ordinary moments. See God&apos;s presence in the meal you eat, the conversation you have, the work you do.</li>
              </ul>
              <h3>Stewardship of Creation</h3>
              <p>
                One of the most practical ways to live as Homo sapiens divinus is to take seriously our role as stewards of God&apos;s creation. Psalm 24:1 declares, &quot;The earth is the Lord&apos;s, and everything in it.&quot; We don&apos;t own the world; we care for it on God&apos;s behalf.
              </p>
              <h3>Human Dignity in Practice</h3>
              <p>
                If every person is made in God&apos;s image, then every person deserves to be treated with dignity. This isn&apos;t optional for Christians—it&apos;s fundamental. Living as Homo sapiens divinus means treating every person you encounter as an image-bearer.
              </p>
              <h3>Your Personal Awakening Journey</h3>
              <p>
                Finally, living as a divine human means embracing your own ongoing spiritual journey. You&apos;re not finished. None of us are. We&apos;re all in process, all being transformed, all moving toward the fullness of what God created us to be.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Conclusion */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-800 text-center">
                <div className="bg-vatican-gold/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sunrise className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-white mb-2">Your Turn</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-400 text-sm font-medium uppercase tracking-widest">In the Story</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                You are <em>Homo sapiens divinus</em>.
              </p>
              <p>
                That means you&apos;re not just here—you&apos;re <em>called</em>. Your existence matters. Your choices have purpose. Your story is part of a much larger divine narrative that stretches from the first moments of creation to the final renewal of all things.
              </p>
              <p>
                The Earth is ancient—4.54 billion years of God&apos;s patient, purposeful creativity. The Garden of Eden opened around 4000 BC—the moment humanity&apos;s consciousness expanded. The awakening continues today, across cultures, across millennia.
              </p>
              <p>
                And now, it&apos;s your turn.
              </p>
              <p>
                <strong>Wake up to who you are.</strong> Recognize that you are God&apos;s beloved child, made in His image, called to reflect His love in the world.
              </p>
              <p>
                <strong>Embrace your identity.</strong> Let go of other labels—job titles, relationships, achievements, failures—and embrace the deeper truth that defines you.
              </p>
              <p>
                <strong>Live with purpose.</strong> Make conscious choices that align with your divine calling. Be a good steward of your body, your mind, your relationships.
              </p>
              <p>
                <strong>Join the story.</strong> You&apos;re not an observer of God&apos;s work in the world. You&apos;re a participant. The story is waiting. The Creator is calling. The divine in you is ready to shine.
              </p>
              <p className="text-xl font-serif text-vatican-gold">
                What will you do with the identity that is yours?
              </p>
            </div>
          </section>

          {/* Sources Section */}
          <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-stone-500 mr-3" />
              Sources &amp; Further Reading
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Scroll className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <span className="font-bold text-stone-900 italic">Catechism of the Catholic Church</span>
                  <p className="text-sm text-stone-600">Sections 355-360, 1700 (human dignity)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Leaf className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <span className="font-bold text-stone-900 italic">Laudato Si&apos;</span>
                  <p className="text-sm text-stone-600">Pope Francis, 2015</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><BookOpen className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <span className="font-bold text-stone-900">Genesis 1-2, 3</span>
                  <p className="text-sm text-stone-600">Creation and the garden</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Globe2 className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <span className="font-bold text-stone-900">Psalm 8, 104</span>
                  <p className="text-sm text-stone-600">Humanity&apos;s place in creation</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Brain className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <span className="font-bold text-stone-900">Colossians 1:15-20, 3:1-17</span>
                  <p className="text-sm text-stone-600">Christ as image of God, new humanity</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Users className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <span className="font-bold text-stone-900 italic">Cross-Cultural Texts</span>
                  <p className="text-sm text-stone-600">Hindu, Greek, Indigenous, Buddhist traditions</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-stone-500 mt-6 italic">
              Scripture quotations are from the New International Version (NIV) unless otherwise noted.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center pt-16 border-t border-stone-200 mt-16">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Continue the Journey</h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
              Explore more heterodox perspectives on faith, science, and spiritual awakening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/heterodox"
                className="inline-block px-8 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-stone-800 hover:text-white transition-colors duration-300 shadow-md"
              >
                Back to Heterodox
              </Link>
              <Link 
                href="/heterodox/eden-as-temple"
                className="inline-block px-8 py-3 bg-stone-800 text-white font-semibold rounded-lg hover:bg-vatican-gold hover:text-stone-900 transition-colors duration-300 shadow-md"
              >
                Eden as First Temple
              </Link>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}
