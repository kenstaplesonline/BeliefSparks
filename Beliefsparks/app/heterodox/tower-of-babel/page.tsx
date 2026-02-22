import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Building2, Users, Divide, Heart, ArrowRight, BookOpen, ExternalLink, Church, ShieldCheck } from "lucide-react";

export default function TowerOfBabelPage() {
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
            <Building2 className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Heterodox Perspective</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Tower of <br />
            <span className="text-vatican-gold">Babel</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            A warning to the Church: When doctrinal confusion replaces shared understanding, spiritual community collapses. The question is not "How many languages do we speak?" but "Do we speak the same truth?"
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          <div className="bg-vatican-red/10 border-l-4 border-vatican-red p-8 rounded-r-lg mb-16 shadow-sm">
            <p className="text-stone-900 text-lg">
              <strong>A Heterodox Reading:</strong> The Tower of Babel is traditionally interpreted as a story about the origin of languages and the scattering of humanity. But read through an ecclesial lens—the lens of the Church—it becomes something more urgent: a prophetic warning to religious leaders about the dangers of doctrinal fragmentation. The "confusion of language" symbolizes the breakdown of shared theological understanding. When a community can no longer agree on what it believes, it can no longer work together toward God's purposes.
            </p>
          </div>

          {/* Section 1: One Language as One Doctrine */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">One Language</h2>
                <div className="w-12 h-1 bg-stone-900 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Shared Understanding</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                "Now the whole earth had one language and the same words" (Genesis 11:1). Most readers picture ancient peoples speaking the same human tongue—Hebrew, perhaps, or some primordial language. But in the context of religious community, language functions as a <strong>metaphor for shared understanding</strong>. When the New Testament speaks of "confessing the same faith" (Ephesians 4:5) or holding to "one Lord, one faith, one baptism," it is describing a theological "language"—a common vocabulary of belief that binds the community together.
              </p>
              <p>
                The tragedy of Babel is not simply that people started speaking different words. It is that they could no longer understand each other's speech. In a religious context, this happens when doctrines become so fragmented that believers effectively speak different faiths while using similar terminology. When one person says "grace" and means "unconditional acceptance" and another means "divine assistance for moral improvement"—when one says "saved" and means "assured heaven" and another means "committed to discipleship"—they may be using the same vocabulary but inhabiting different theological worlds.
              </p>
              <p>
                This is precisely what the Apostle Paul warns against in 1 Corinthians 1:10: "I appeal to you, brothers, by the name of our Lord Jesus Christ, that all of you agree, and that there be no divisions among you, but that you be united in the same mind and the same judgment." The "same mind" Paul speaks of is not uniformity of thought on every detail, but a shared core—a theological "mother tongue" that allows the community to function as one body.
              </p>
              <p>
                The danger for today's religious leaders is that we have normalized doctrinal confusion. We celebrate theological diversity without distinguishing between legitimate differences in secondary matters (adiaphora) and destructive disagreement about essentials. We have created communities where it is unclear what, exactly, is being believed. The result is a Babel-like condition: the community gathers, worship happens, but genuine shared understanding is absent. The people are in the same room, but they are not speaking the same language.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2: The Tower as Human Religious Ambition */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Building2 className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Tower</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Self-Sufficient Religion</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                "Come, let us build ourselves a city and a tower with its top in the heavens, and let us make a name for ourselves, lest we be dispersed over the face of the whole earth" (Genesis 11:4). The tower represents human ambition divorced from divine mission. It is religion on human terms—a monument to our own greatness, our own wisdom, our own capacity to build something meaningful without reference to the One who called us.
              </p>
              <p>
                In ecclesial terms, this is what happens when religious communities fragment because every faction wants to "make a name for themselves." Each theological camp builds its own tower—its own denomination, its own theological system, its own religious brand—marked by its distinctive doctrines and practices. The fragmentation of the Church into thousands of denominations, each claiming to represent authentic Christianity while simultaneously rejecting others, is precisely this dynamic: many towers reaching toward heaven, but built by human hands, not divine instruction.
              </p>
              <p>
                The builders of Babel feared being "dispersed." This is the fear that drives religious tribalism: If we don't maintain our distinctive doctrines, our identity will be lost. If we unite with others, who we are will dissolve into something else. So we build walls of doctrinal purity, towers of theological certainty, to ensure we remain distinct. The result is dispersion anyway—we are scattered from each other, unable to work together, unable to present a unified witness to the world.
              </p>
              <p>
                Jesus' prayer in John 17 stands in direct opposition to this Babel-like impulse: "that they may all be one, just as you, Father, are in me, and I in you, that they also may be in us, so that the world may believe that you have sent me" (John 17:21). Unity is not a threat to identity; it is the very evidence of God's mission. The Babel builders sought unity through human effort ("let us build"). God's answer to Babel is not more human effort, but the Holy Spirit, who creates unity that transcends human capacity to manufacture it.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3: Historical Warnings - East-West Schism */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Divide className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Historical Collapse</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">When Unity Failed</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The tragedy of Babel has played out repeatedly in Christian history. Consider the Great Schism of 1054 AD, when the Eastern (Orthodox) and Western (Catholic) churches formally separated after centuries of growing tension. What began as differences in language (Greek vs. Latin), culture, and liturgical practice evolved into doctrinal disagreement over the Filioque clause (whether the Holy Spirit proceeds from the Father "and the Son").
              </p>
              <p>
                The significance for our reading of Babel is this: as linguistic unity broke down, so did cultural unity. As cultural unity crumbled, doctrinal differences hardened into divisions. The two halves of the Church developed different rites and approaches to religious doctrine. They effectively ceased to speak the same theological language. The result was catastrophic: Christendom was severed, with consequences that echo a millennium later.
              </p>
              <p>
                Similarly, the Protestant Reformation of the 16th century began as a legitimate effort to correct doctrinal abuses and recover the gospel's core. Yet within a generation, what began as one reform movement fractured into Lutherans, Reformed, Anabaptists, Anglicans, and dozens of other streams. Each camp claimed faithfulness to Scripture, yet they found themselves unable to maintain unity on even basic matters. The Reformation recovered much truth, but it also unleashed a centrifugal force that continues to spin the Church into ever smaller fragments.
              </p>
              <p>
                These are not ancient footnotes. Today there are over 45,000 Christian denominations worldwide. Each represents a community that, at some point, concluded it could not work with others because of doctrinal disagreement. Some of these separations were necessary—when essentials were at stake. But many were over matters that should have been treated as secondary issues (adiaphora). The cumulative effect is a Church that looks less like the unified body Christ prayed for and more like the scattered tribes of Babel.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 4: Essential Unity vs. Unnecessary Division */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShieldCheck className="h-8 w-8 text-vatican-red" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Core Unity</h2>
              <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">What Matters Most</p>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The alternative to Babel is not uniformity—it is unity on essentials with freedom on non-essentials. The theological concept of <em>adiaphora</em> ("things indifferent") refers to matters that are not essential to the faith and over which Christians may legitimately disagree without breaking fellowship. The challenge for religious leaders is discerning what belongs in which category.
              </p>
              <p>
                The Nicene Creed provides a helpful baseline: one God, the Father Almighty; one Lord Jesus Christ, God's only Son; the Holy Spirit, the Lord and giver of life; one holy catholic and apostolic Church; one baptism for the forgiveness of sins; the resurrection of the dead and the life of the world to come. These are the essentials. To disagree here is to speak a different language entirely.
              </p>
              <p>
                But consider matters like worship style, church governance structures, views on sacraments, approaches to social ethics, eschatological timelines, or even specific interpretations of difficult passages. Christians have disagreed on these for two millennia while maintaining fellowship and shared mission. The problem is not that differences exist; the problem is when we treat secondary issues as if they were essentials—when we create Babel-like confusion by insisting on doctrinal purity on matters that the Church has historically considered matters of conscience.
              </p>
              <p>
                The Protestant theologian Alister McGrath observes that both purity and unity of the Church are at stake in this discernment. If we sacrifice essentials for unity, we lose the faith. If we sacrifice unity for secondary distinctions, we lose the witness. The art of Christian leadership is holding these in proper balance—maintaining robust shared understanding of the core truth while allowing legitimate diversity in its application and expression.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 5: Pentecost - The Divine Solution */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Pentecost</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">God's Answer</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                If Babel represents human effort at unity that fails because it is rooted in pride and self-sufficiency, Pentecost (Acts 2) represents God's answer. At Pentecost, the Holy Spirit descends on the disciples, and they speak in tongues that are understood by people from every nation. Notice the crucial difference: At Babel, God confuses language so people <em>cannot</em> understand each other. At Pentecost, God gives speech so people <em>can</em> understand each other—despite their different languages.
              </p>
              <p>
                N.T. Wright observes that Pentecost is not a reversal of Babel in the sense of returning to one human language. Rather, it is a new reality: "a community whose very differences contribute to their unity." The Holy Spirit creates a new "language" that is more than words—it is a shared life, a common mission, a mutual indwelling in Christ that transcends human capacities to manufacture unity. The "common tongue" of the Church is not vocabulary but the Holy Spirit Himself, who enables diverse people to speak and understand the same truth.
              </p>
              <p>
                This is the model for religious leaders facing doctrinal fragmentation. Our task is not to impose uniformity or to eliminate all theological diversity. Our task is to create the conditions for the Holy Spirit's unifying work. This means:
              </p>
              <ul>
                <li><strong>Teaching the core doctrine:</strong> Ensuring every believer understands and can articulate the essentials of the faith.</li>
                <li><strong>Clarifying what is essential:</strong> Being honest about which doctrines define Christianity and which do not.</li>
                <li><strong>Cultivating humility:</strong> Recognizing that our theological traditions, while valuable, are not themselves the gospel.</li>
                <li><strong>Pursuing relationships across differences:</strong> Working with believers who disagree on secondary matters, because what we share in Christ is greater than what divides us.</li>
                <li><strong>Praying for unity:</strong> Taking seriously Jesus' prayer in John 17 and making visible unity a priority, not an afterthought.</li>
              </ul>
              <p>
                When religious leaders do this, they undo Babel. They create communities where diverse people—"Jews and Greeks, slaves and free, male and female" (Galatians 3:28)—are united not by identical opinions on every issue, but by one Lord, one faith, one baptism. They build not towers to their own names, but a house where God's name dwells.
              </p>
            </div>
          </section>

          {/* Sources Section */}
          <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-stone-500 mr-3" />
              Sources & Further Reading
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Building2 className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.ntwrightonline.org/gods-new-language/" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    God's New Language <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">N.T. Wright</p>
                  <p className="text-xs text-stone-500 mt-1">On Pentecost as God's answer to Babel, creating unity through the Holy Spirit.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Divide className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.thegospelcoalition.org/blogs/justin-taylor/how-do-you-evaluate-and-weigh-the-importance-of-various-doctrines/" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Levels of Doctrine <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">ESV Study Bible</p>
                  <p className="text-xs text-stone-500 mt-1">On distinguishing between essential and non-essential doctrines.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Church className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://denverjournal.denverseminary.edu/the-denver-journal-article/the-end-of-protestantism-pursuing-unity-in-a-fragmented-church/" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The End of Protestantism <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Peter J. Leithart</p>
                  <p className="text-xs text-stone-500 mt-1">A critique of denominational fragmentation and a vision for church unity.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><ShieldCheck className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://bibleask.org/what-is-the-concept-of-adiaphora/" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Concept of Adiaphora <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">BibleAsk</p>
                  <p className="text-xs text-stone-500 mt-1">On distinguishing between salvational truths and secondary issues.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Heart className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://aleteia.org/2025/06/07/how-pentecost-seeks-to-reverse-the-tower-of-babel/" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    How Pentecost Seeks to Reverse Babel <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Aleteia</p>
                  <p className="text-xs text-stone-500 mt-1">On the Holy Spirit creating newfound unity of belief.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><BookOpen className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://en.wikipedia.org/wiki/East%E2%80%93West_Schism" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    East-West Schism <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Wikipedia</p>
                  <p className="text-xs text-stone-500 mt-1">Historical documentation of linguistic and doctrinal breakdown between East and West.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion / CTA */}
          <section className="text-center pt-16 border-t border-stone-200 mt-16">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">The Call to Unity</h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
              Babel warns us that the unity of God's people is fragile. It can be lost not only through overt heresy, but through the slow accumulation of doctrinal fragmentation that leaves the community unable to speak with one voice. The antidote is not the suppression of all difference, but the celebration of our shared identity in Christ, the humble recognition of what is essential, and the prayerful pursuit of the unity for which Jesus Himself prayed.
            </p>
            <Link 
              href="/heterodox"
              className="inline-block px-8 py-3 bg-vatican-gold text-stone-900 font-semibold rounded-lg hover:bg-stone-800 hover:text-white transition-colors duration-300 shadow-md"
            >
              Return to Heterodox
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
