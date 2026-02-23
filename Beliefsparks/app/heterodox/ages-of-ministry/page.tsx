import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Scroll, BookOpen, ExternalLink, Users, ShieldCheck, Heart, History } from "lucide-react";

export default function AgesOfMinistryPage() {
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
            <Scroll className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Heterodox Perspective</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Ages of <br />
            <span className="text-vatican-gold">Ministry</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            When Genesis lists patriarchs living 900 years, it's likely describing dynasties and ministries, not biological lifespans. These "long ages" represent the enduring influence of faithful lineages that preserved worship of Yahweh across the dark centuries before the Flood.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          <div className="bg-vatican-red/10 border-l-4 border-vatican-red p-8 rounded-r-lg mb-16 shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>A Heterodox Reading:</strong> Genesis 5 presents a genealogy that has baffled and divided modern readers for centuries. It lists men living for nearly a millennium: Adam (930 years), Seth (912), Methuselah (969), and Noah (950). In an age where reaching 100 is a feat, these numbers seem mythological. Literalists insist on biological miracles; skeptics dismiss them as fairy tales. But the "Heterodox" view offers a third way: these numbers likely represent <strong>Ministry Ages</strong> or Dynastic Reigns, not biological lifespans. They refer to the periods during which specific clans, schools, or prophetic dynasties held spiritual authority as guardians of the "seed of the woman" (Genesis 3:15).
            </p>
          </div>

          {/* Section 1: The Problem with Literal Interpretation */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <History className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Literal Problem</h2>
                <div className="w-12 h-1 bg-stone-900 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Biology vs. Bible</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The traditional reading of Genesis 5 takes the ages literally: these were individual men who lived for hundreds of years, fathering children in their old age, and dying after almost a millennium of life. This interpretation has been defended for centuries by many who believe that God could supernaturally extend human lifespans before the Flood as a demonstration of His power. And indeed, Scripture is full of supernatural acts: resurrection, virgin birth, miracles. If God could raise Jesus from the dead, could He not keep someone alive for 969 years?
              </p>
              <p>
                However, the literal interpretation faces significant challenges that go beyond mere scientific skepticism. The most serious problem is the internal tension within Scripture itself. In Psalm 90:10, Moses says, "The years of our life are seventy, or even by reason of strength eighty; yet their span is but toil and trouble; they are soon gone, and we fly away." This seems to establish a normal human lifespan. Yet the psalm was written by Moses, who—according to the literal view—was himself born only 642 years after Adam's death. If people really lived to 900 years in Moses' recent ancestral past, why would he describe seventy as a full life? If Adam lived 930 years and died only six centuries before Moses, why would Moses not mention this as evidence of God's original design for human longevity?
              </p>
              <p>
                Furthermore, Deuteronomy 34:7 tells us that Moses himself "was 120 years old when he died. His eye was not dim, nor his natural force abated." This is presented as remarkable—Moses was unusually vigorous at death. But if Noah lived to 950, and Abraham to 175, and Moses to 120, these ages create a puzzling progression that doesn't follow any clear pattern. Why would lifespans decline gradually rather than suddenly? If the Flood was the divine intervention that reduced human longevity, why weren't the effects immediate?
              </p>
              <p>
                There's also the problem of biological plausibility. Modern medicine and nutrition have extended human life expectancy significantly, but we see no evidence that humans could naturally live to 900 years, even under ideal conditions. Aging involves the accumulation of cellular damage, genetic mutations, and systemic decline that seems built into human biology. While God could certainly override these processes through supernatural means, the Genesis genealogy presents these long lives as if they were normal, not as exceptional miracles requiring comment. If they were supernatural, we might expect the text to highlight this unusual divine intervention more clearly.
              </p>
              <p>
                Finally, there's the question of genealogical purpose. Why would God preserve for us a list of individual ages that serves no apparent theological function? The genealogy appears to be establishing something about continuity, succession, and faithfulness—themes that would be served equally well (and perhaps better) by interpreting the ages as periods of dynastic influence rather than biological duration.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2: Ancient Near Eastern Parallel - The Sumerian King List */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scroll className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Sumerian Kings</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Ancient Parallel</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                The "Dynastic Reigns" interpretation gains credibility when we consider its Ancient Near Eastern context. One of the most striking parallels is the Sumerian King List, an ancient text discovered on clay tablets that dates from approximately 2100 BC (roughly contemporary with Abraham). This document lists the kings who ruled in Sumer (Mesopotamia) before the Flood—and their reigns are even more extravagant than those in Genesis.
              </p>
              <p>
                According to the Sumerian King List, the first king, Alulim, ruled for 28,800 years. The second, Alalgar, ruled for 36,000 years. Enmen-lu-ana ruled for 43,200 years. Dumuzid ruled for 36,000 years. In total, eight antediluvian kings ruled for a combined total of 241,200 years. After the Flood, the reigns became more "modest," though still extraordinary: kings like Etana ruled for 1,560 years, Balih for 1,200 years, and Enme-nuna for 660 years.
              </p>
              <p>
                Scholars understand these numbers not as assertions of biological fact but as political and theological statements. The Sumerian King List was not trying to deceive anyone about human biology. Instead, it was signaling the weight, gravitas, and divine favor of these reigns. In Ancient Near Eastern culture, longer reigns meant more stability, more divine blessing, more cosmic order. A king who ruled for thousands of years was expressing the ideal: his reign was as enduring as the cosmos itself. It was a way of saying, "This was not just a king; this was a divinely appointed authority whose rule was established in the fabric of reality."
              </p>
              <p>
                The Genesis genealogy, while much more restrained (hundreds, not thousands, of years), likely operates on a similar cultural logic. It is not making claims about human biology that conflict with our scientific understanding. It is making claims about the spiritual authority and enduring influence of these patriarchal lineages. "Adam ruled for 930 years" doesn't mean one man lived 930 biological years; it means the "House of Adam"—the priestly lineage associated with Adam's name and calling—maintained spiritual authority for 930 years.
              </p>
              <p>
                This interpretation resolves the tension between the text and our biological knowledge while preserving the historical intent. It affirms that there was a real, unbroken chain of custody for the "seed of the woman" (Genesis 3:15)—the promise that a descendant of Eve would crush the Serpent's head. These were the guardians of that promise, the faithful few who maintained the worship of Yahweh in a world rapidly descending into violence and idolatry. Their "long lives" (long reigns) are a testament to the endurance of God's grace, sustaining a witness through the dark centuries of the antediluvian world.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3: Names as Corporate Identities */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Names as Identities</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Corporate Titles</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                In the ancient world, names often functioned as titles or corporate identities rather than simple individual labels. We see this clearly in biblical language itself. When the Bible speaks of "the House of David," it refers not to David's actual family dwelling but to the Davidic dynasty—the line of kings descended from David. "The House of Israel" means the nation of Israel as a corporate entity, not a specific building. "The Son of Man" in Daniel 7 is not a reference to a particular human but a messianic figure representing God's people.
              </p>
              <p>
                When we speak in modern times of "The House of Windsor" or "The Ottoman Empire," we are referring to continuous entities that span centuries, though the individual rulers within those dynasties are mortal. Queen Elizabeth II did not personally live for hundreds of years; the institution she represented did. Similarly, when Genesis lists "Adam lived 930 years," it may be referring to the "Age of Adam"—the period during which the priestly/sacerdotal tradition associated with Adam's calling held spiritual authority.
              </p>
              <p>
                This understanding helps explain some puzzling features of the Genesis genealogy. For instance, the genealogy alternates between saying someone "lived" X years and "died." If these are individual lives, this is straightforward: birth, life, death. But if these are dynasties, "lived X years" means "held authority for X years," and "died" means "the dynasty came to an end," not that an individual perished. The "death" of a dynasty could happen in multiple ways: through extinction of the family line, through moral corruption that invalidated their authority, through divine replacement, or through simply being superseded by another dynasty.
              </p>
              <p>
                This corporate understanding also explains why some patriarchs are mentioned as "walking with God" (Enoch) or "calling upon the name of the LORD" (Seth's generation, Genesis 4:26). These aren't just descriptions of individual piety; they are characterizations of the dynastic tradition. The "Age of Enoch" was characterized by intimate communion with God—the tradition associated with Enoch emphasized walking with God. The "Age of Seth" was characterized by formal worship of Yahweh—the Sethite tradition was the first to establish organized worship of the true God.
              </p>
              <p>
                The Flood, then, marks the end of the entire antediluvian dynasty system. The "death" of Methuselah at age 969 (in the year of the Flood, according to some interpretations) is not just his individual death but the collapse of the entire pre-Flood order. All the antediluvian dynasties—Adam, Seth, Enosh, Kenan, Mahalalel, Jared, Enoch, Methuselah, Lamech—come to their end. Noah, who survives the Flood, becomes the founder of the post-diluvian dynasty system, a new age of ministry.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 4: The "Seed of the Woman" - Guarding the Promise */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShieldCheck className="h-8 w-8 text-vatican-red" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Seed of Woman</h2>
              <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Guarding the Promise</p>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Genesis 3:15 contains the protoevangelium—the first gospel promise: "I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel." This verse establishes the cosmic conflict between the Serpent (Satan) and the woman's offspring (ultimately Jesus Christ). The "seed of the woman" refers to the promised Redeemer who would come from Eve's lineage.
              </p>
              <p>
                But this promise had to be preserved across centuries, in a world increasingly hostile to Yahweh's worship. Genesis 4 describes how quickly humanity descended into violence: Cain kills Abel, Lamech boasts of murder (Genesis 4:23-24), and the wickedness of humanity becomes so great that God regrets making them (Genesis 6:5-6). In this context, there had to be a faithful remnant that preserved the promise, that maintained worship of the true God, that kept alive the hope of a coming Redeemer.
              </p>
              <p>
                The patriarchal genealogy of Genesis 5 records this remnant. These were the "guardians of the promise," the faithful lineages that maintained worship of Yahweh and preserved the protoevangelium. The long "ages" or "reigns" listed for each patriarch represent the periods during which their particular tradition or clan held this guardianship responsibility.
              </p>
              <p>
                Consider what this must have required. In a world sliding into idolatry, violence, and corruption, there were families that maintained faithful worship. They taught their children about Yahweh. They remembered the promise of Genesis 3:15. They preserved the memory of Eden and the original calling of humanity. They maintained the sacrificial system (if it existed at that early stage) or at least the idea of approaching God through proper means. This was not easy. It required intentionality, discipline, and divine grace.
              </p>
              <p>
                The genealogy shows the continuity of this witness. Adam passes the guardianship to Seth. Seth passes it to Enosh. Enosh to Kenan. Kenan to Mahalalel. Mahalalel to Jared. Jared to Enoch. Enoch to Methuselah. Methuselah to Lamech. Lamech to Noah. Despite the corruption of the surrounding world, the promise is preserved. Despite the pressure to conform to idolatrous practices, worship of Yahweh continues. Despite the growing wickedness, there remains a faithful line.
              </p>
              <p>
                The "long ages" of these patriarchs are thus not just numbers; they are testimonies to God's faithfulness. Despite humanity's sin, God maintains a witness. Despite the darkness, a light continues to shine. The covenant faithfulness of God means that even when nearly everyone abandons Him, He preserves a remnant. This is a theme that continues throughout Scripture: a faithful few in the midst of a faithless many. Noah is the culmination of this antediluvian faithful remnant—and through him, God preserves the promise into the post-Flood world.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 5: Practical and Theological Implications */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-8 w-8 text-vatican-gold" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Living Implications</h2>
              <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Faith &amp; Science</p>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                What does it mean for modern believers to interpret the patriarchal ages as dynastic reigns rather than biological lifespans? What are the practical and theological implications of this view? The consequences are significant and worth considering carefully.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Reconciling Faith and Science</h3>
              <p>
                The most immediate benefit of the dynastic interpretation is that it removes a major obstacle to faith for scientifically literate believers. For centuries, the apparent conflict between the biblical genealogies and our understanding of human biology has caused genuine struggle. Many sincere believers have felt forced to choose between accepting scientific evidence (which shows that humans have never lived for 900 years) and maintaining confidence in Scripture. The dynastic interpretation removes this false choice. It affirms that the biblical genealogy is true and authoritative—just not in the way we initially assumed. It's a victory for both faith and science, showing that when properly understood, they are not in conflict.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Preserving Biblical Authority</h3>
              <p>
                Some might worry that the dynastic interpretation compromises biblical authority by treating the text symbolically rather than literally. But this worry misunderstands what biblical authority actually means. Biblical authority means that Scripture is trustworthy and true in what it intends to communicate. The question is: What is Genesis 5 intending to communicate? Is it intending to provide us with a list of biological ages, or is it intending to establish the continuity of the faithful line that preserved the promise of Genesis 3:15? The dynastic interpretation affirms the latter—which seems to be the text's actual purpose—while recognizing that the numbers serve a different function than we initially assumed.
              </p>
              <p>
                We see this pattern elsewhere in Scripture. The Bible speaks of the sun "rising" and "setting" (Joshua 10:12-13). This is phenomenological language, describing appearances, not scientific claims about solar motion. It's true in what it intends to communicate (what we observe) without making literal claims about what is scientifically the case (Earth's rotation). Similarly, the patriarchal ages may be using numbers symbolically to communicate something true about spiritual authority and continuity without making literal claims about biological duration.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Understanding Ancient Literary Genre</h3>
              <p>
                The dynastic interpretation respects the literary genre of the Genesis genealogy. We must read texts according to their kind, and genealogies in the Ancient Near East often functioned differently than modern birth records. They were not trying to provide comprehensive demographic data; they were establishing identity, continuity, and theological significance. The Sumerian King List shows that this was a common literary convention: using exaggerated or symbolic ages to make theological and political points. The Genesis genealogy operates in this same genre, though with more restrained numbers appropriate to its monotheistic worldview.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Appreciating the Text's Theological Message</h3>
              <p>
                Paradoxically, moving beyond literalism about the ages may actually help us better hear the genealogy's theological message. When we're distracted by trying to reconcile 969-year lifespans with human biology, we can miss what the text is really saying: that God preserved a faithful remnant through the antediluvian period. The genealogy is a testimony to divine faithfulness and human responsibility. Despite the world's corruption, there were those who maintained worship of Yahweh. Despite the pressures of idolatry, the promise of Genesis 3:15 was preserved. Despite the darkness, a light continued to shine.
              </p>
              <p>
                This message is encouraging for believers in every age. God maintains a faithful remnant. The covenant is not dependent on circumstances. Even when the majority abandon God, He preserves witnesses. This is the pattern from Genesis to Revelation: the faithful few (or the One Faithful One) in the midst of many. The patriarchal genealogy is the first chapter in this long story.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Honoring Our Ancient Forebears</h3>
              <p>
                Finally, the dynastic interpretation honors the patriarchs as the spiritual forebears they were. They may not have been individuals who lived 900 years each, but they were the founders and leaders of traditions that preserved worship of Yahweh for centuries. They established the practices, teachings, and prayers that sustained faith in the antediluvian world. They were the first guardians of the promise, the first maintainers of the covenant, the first faithful witnesses. We owe them gratitude as our spiritual ancestors, regardless of how literally we interpret their ages.
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
                <div className="mr-3 mt-1"><History className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://etcsl.orillinois.edu/translations/sumerian-king-list" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Sumerian King List <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Ancient Near Eastern Texts Lab</p>
                  <p className="text-xs text-stone-500 mt-1">Full translation of the Sumerian King List showing dynastic reigns of thousands of years.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Scroll className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.amazon.com/dp/1589837951" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Genesis 1-11 (Ancient Christian Commentary) <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Andrew Louth</p>
                  <p className="text-xs text-stone-500 mt-1">Patristic perspectives on the patriarchs and genealogies.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><ShieldCheck className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://biblehub.com/genesis/5-1.htm" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Genesis 5 Commentary <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Bible Hub</p>
                  <p className="text-xs text-stone-500 mt-1">Various perspectives on Genesis 5 from different theological traditions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Users className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://en.wikipedia.org/wiki/Patriarchs_(Bible)" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Biblical Patriarchs <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Wikipedia</p>
                  <p className="text-xs text-stone-500 mt-1">Scholarly overview of the patriarchs and their ages.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Heart className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://biologos.org/common-questions/scientific-evidence/old-earth/does-genesis-5-teach-that-people-lived-to-be-900-years-old" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Genesis 5 and Long Lives <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">BioLogos</p>
                  <p className="text-xs text-stone-500 mt-1">Exploration of the patriarchal ages from a science-faith perspective.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion / CTA */}
          <section className="text-center pt-16 border-t border-stone-200 mt-16">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Faithful Remnant Across the Ages</h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
              When we interpret the patriarchal ages as dynastic reigns, we discover a profound message: God preserved a faithful remnant through the antediluvian period, despite overwhelming corruption and wickedness. These "long ages" are not literal biological statements about individual lifespans, but symbolic statements about the enduring influence of faithful lineages that guarded the promise of Genesis 3:15. This interpretation reconciles Scripture with scientific knowledge while honoring the text's theological purpose and the patriarchs as our spiritual forebears.
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
