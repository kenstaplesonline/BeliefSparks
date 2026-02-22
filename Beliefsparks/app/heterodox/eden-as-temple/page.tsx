import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Tent, BookOpen, ExternalLink, Church, Scroll, ShieldCheck, Heart } from "lucide-react";

export default function EdenAsFirstTemplePage() {
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
            <Tent className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Heterodox Perspective</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Eden as <br />
            <span className="text-vatican-gold">First Temple</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            The Garden of Eden was not merely a primitive park—it was the original Temple where God and humanity communed directly. Adam's role was not gardener but High Priest, and the entire biblical story becomes God rebuilding this sacred space.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg mb-16 shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>A Heterodox Reading:</strong> Popular imagination typically portrays the Garden of Eden as a prehistoric nature preserve where Adam and Eve lounged among fruit trees in a primitive paradise. But a careful reading of the Hebrew text, informed by Ancient Near Eastern temple theology, reveals something far more structured and sacred: Eden was the first Temple—the original "Holy of Holies" on earth, the dwelling place of God's presence and the center of His cosmic mission. In this view, Adam is not merely a gardener but humanity's first High Priest, and the Fall is not just a moral failure but a liturgical failure—loss of access to the sacred space where heaven and earth overlap.
            </p>
          </div>

          {/* Section 1: The Vocabulary of Priestly Service */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Tent className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Priestly Vocabulary</h2>
                <div className="w-12 h-1 bg-stone-900 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Adam as Priest</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Genesis 2:15 contains two Hebrew verbs that reveal Adam's true vocation: "The LORD God took the man and put him in the Garden of Eden to work it and keep it." In English, these sound like gardening tasks—"to work" and "to keep" the plants. But the Hebrew words are <em>abad</em> (to work/serve) and <em>shamar</em> (to guard/keep). And here's the crucial insight: when these two verbs appear together elsewhere in the Pentateuch (the first five books of the Bible), they refer almost exclusively to the duties of the Levitical priests in the Tabernacle.
              </p>
              <p>
                Consider Numbers 3:7-8: "They shall guard (<em>shamar</em>) the duties of the Tent of Meeting and the sanctuary, and they shall guard (<em>shamar</em>) the altar and all its furnishings, and they shall serve (<em>abad</em>) at the altar and guard (<em>shamar</em>) it." And Numbers 8:26: "They shall guard (<em>shamar</em>) all the furnishings of the Tent of Meeting and keep (<em>shamar</em>) charge of the people of Israel as they serve (<em>abad</em>) at the Tabernacle." And 18:5-6: "And you shall guard (<em>shamar</em>) my charge and the charge of all the Tent of Meeting... And behold, I have given the Levites as a gift to Aaron and his sons from among the people of Israel, to do the service (<em>abad</em>) of the people of Israel at the Tent of Meeting."
              </p>
              <p>
                These verses establish a clear pattern: <em>abad</em> and <em>shamar</em> together = priestly duty. They describe the sacred task of serving God in His dwelling place and guarding that sacred space from impurity and intrusion. When Genesis 2:15 uses this exact same combination to describe Adam's role in Eden, it's sending a clear signal: Adam is not a gardener in the ordinary sense. He is a priest, serving and guarding the sacred space where God's presence dwells on earth.
              </p>
              <p>
                This understanding transforms our reading of the entire Eden narrative. The Garden is not simply a location where plants grow; it is a holy site, the location where God chooses to make His presence known on earth. Adam's task is not agricultural maintenance but liturgical service. He serves in God's dwelling place and guards it from anything that would defile or disrupt the sacred fellowship. In this role, Adam is humanity's first High Priest—the representative of humanity before God and the representative of God to humanity.
              </p>
              <p>
                This priestly understanding also helps explain why God places such specific restrictions on Adam regarding the trees. The prohibition against eating from the Tree of Knowledge of Good and Evil is not merely an arbitrary rule; it is a boundary marking sacred space. In ancient temple practice, there were boundaries separating sacred from common, with progressively restricted access: the outer court, the Holy Place, the Most Holy Place. The tree may function as a boundary marker—access to God's presence is available, but there are limits to human autonomy within that sacred space. Adam, as priest, was charged with guarding this boundary—and it is in this duty that he fails.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2: Eden's Geography Mirrors the Temple */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Church className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Eden's Architecture</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Temple Layout</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Beyond the vocabulary of priestly service, the physical description of Eden reveals temple-like structure. In ancient Israel, the Temple had three primary zones: the outer courtyard, the Holy Place, and the Most Holy Place (Holy of Holies). Each zone was progressively more sacred, with restricted access reflecting its holiness. Eden exhibits a similar tripartite architecture.
              </p>
              <p>
                The Most Holy Place was the inner sanctum where the ark of the covenant stood—the place of God's throne, the most sacred location in the entire temple complex, accessible only to the High Priest and only once a year on the Day of Atonement. In Eden, the center was the Tree of Life—the place where God's presence was most directly encountered, where humanity walked with God. Like the Most Holy Place, this center represented the point of contact between heaven and earth, the focal point of God's dwelling on earth.
              </p>
              <p>
                The Holy Place contained the lampstand, the altar of incense, and the table of showbread—furnished spaces where priests performed regular rituals of worship. In Eden, the garden proper—with its various trees and abundant life—may correspond to this zone: a sacred space where the priest (Adam) could serve and where God's presence, though not as concentrated as at the Tree of Life, was nevertheless encountered through the life-giving environment.
              </p>
              <p>
                The outer courtyard was the accessible space where Israelites could bring offerings and worship from a distance, though they could not enter the inner sanctum. In Eden, the land outside the garden—the world into which Adam and Eve were eventually expelled—represents this zone: the wider world, still created by God, but not the designated sacred space of direct encounter.
              </p>
              <p>
                This temple structure is further reinforced by the river flowing out of Eden to water the earth (Genesis 2:10). In ancient temple imagery, life-giving water flowing from the temple symbolized the blessings of God's presence extending to the whole world. This imagery appears explicitly in Ezekiel's vision of the restored temple: "Then he brought me back to the door of the temple, and behold, water was issuing from below the threshold of the temple toward the east... and on the banks, on both sides of the river, there will grow all kinds of trees for food. Their leaves will not wither, nor their fruit fail... because the water for them flows from the sanctuary" (Ezekiel 47:1, 12). The Edenic river, with its four branches watering the earth, foreshadows this vision of temple life bringing blessing to the world.
              </p>
              <p>
                Furthermore, the presence of the Tree of Life in Eden mirrors the presence of the menorah (lampstand) in the Holy Place. The menorah was shaped like a tree with branches and cups for oil, and it symbolized the tree of life—the source of light and life in the temple. In Eden, the actual Tree of Life stands at the center, pointing to the life that flows from God's presence. The connection is so strong that the menorah may have been designed precisely to evoke Eden's central tree.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3: God Walking in the Garden */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Divine Presence</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">God Among Us</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Perhaps the most striking temple-like element of Eden is the way God is described as being present there. Genesis 3:8 says that Adam and Eve "heard the sound of the LORD God walking in the garden in the cool of the day, and the man and his wife hid themselves from the presence of the LORD God among the trees of the garden." The Hebrew verb translated as "walking" is <em>mithallek</em>—a specific form used to describe God's presence in a particular place.
              </p>
              <p>
                Where else in Scripture does this verb appear? In Leviticus 26:12, God promises His people, "And I will walk (<em>mithallek</em>) among you and will be your God, and you shall be my people." In Deuteronomy 23:14, the Israelites are commanded to keep their camp holy because "the LORD your God walks (<em>mithallek</em>) in the midst of your camp." In both cases, God's "walking" is associated with His dwelling in the midst of His people, specifically in the camp where the Tabernacle/Temple stands.
              </p>
              <p>
                This language reinforces Eden's identity as sacred space. Just as God's presence dwelt in the Tabernacle and Temple, making those locations His earthly dwelling, so God's presence dwelt in Eden, making it the original location of His earthly dwelling. When God "walks in the garden," He is not merely taking a stroll through nature. He is present in His designated sacred space, where He meets with His image-bearing representative, Adam.
              </p>
              <p>
                This understanding transforms the encounter in Genesis 3. When God comes to "walk" in the garden, He is coming to the Temple to meet with the High Priest—Adam. But Adam, having sinned, is now in a state of impurity, and he hides. This is not just a guilty conscience; it's a recognition of ritual impurity preventing access to sacred space. In Levitical law, those with unclean discharges or who have touched something unclean cannot approach the sanctuary. Adam's sin has made him ritually unclean, and so he hides from God's presence.
              </p>
              <p>
                The expulsion from Eden thus takes on temple significance. It is not merely banishment from a garden; it is excommunication from the sacred space where God's presence dwelt on earth. It is the loss of access to the Temple, the loss of the priestly function, the breakdown of the direct encounter between God and humanity. In temple terms, this is what the Bible repeatedly calls "defilement" of the sanctuary—and God's response is to separate the defiled from the holy space.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 4: The Fall as Liturgical Failure */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <ShieldCheck className="h-8 w-8 text-stone-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Guardian Failure</h2>
                <div className="w-12 h-1 bg-stone-400 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Priestly Betrayal</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                If Adam was Eden's priest, charged with serving and guarding the sacred space, then the Fall must be understood not merely as a moral lapse but as a priestly failure. Specifically, Adam failed in his duty to guard. When the Serpent intrudes into the sacred space, speaking deceptive words that lead to defilement, Adam—who should have been guarding the boundary—remains silent and passive. He fails to protect the garden, fails to protect Eve, fails to protect the sacred space from the intruder.
              </p>
              <p>
                This reading of the Fall makes sense of why God holds Adam particularly responsible, despite Eve being the first to eat. In Genesis 3:9-12, God calls out to Adam first and interrogates him. The "man said, 'The woman whom you gave to be with me, she gave me fruit of the tree, and I ate.'" Adam blames Eve, but the real issue is his failure in his priestly role. As the one charged with guarding the garden, Adam should have intervened when the Serpent approached. His silence and inaction represent a failure of the priestly office.
              </p>
              <p>
                The consequences of this failure are temple-defilement in its most severe form. When Adam eats the fruit, he brings defilement into the sacred space itself. He violates the boundary marking the Most Holy Place. He introduces impurity into the presence of God. This is exactly what temple rituals were designed to prevent—and when defilement entered the temple in Israel, the response was severe: the defiled one was cut off, the temple was cleansed, boundaries were restored. Eden is now defiled, and Adam—the defiled priest—must be removed.
              </p>
              <p>
                This understanding also illuminates why God places cherubim at the entrance to Eden to guard the way to the Tree of Life (Genesis 3:24). In the Tabernacle and Temple, cherubim were guardians of sacred space, appearing on the mercy seat (the covering of the ark), on the curtain separating the Holy Place from the Most Holy Place, and on temple walls. They symbolized the boundary between the holy and the common, guarding God's presence from impurity. When Adam fails as guardian, God places other guardians—cherubim—to do what Adam should have done: guard the sacred space from further defilement.
              </p>
              <p>
                The cherubim also appear in God's instructions for the Tabernacle (Exodus 25:18-22; 26:31) and Solomon's Temple (1 Kings 6:23-28). They guard the mercy seat, the place where God's presence dwells among His people. The cherubim at Eden's entrance thus connect Eden's temple to the later Tabernacle and Temple, showing the continuity of God's plan for sacred space on earth. The tragedy is that humans no longer have free access to this space; they must approach through proper means—sacrifice, priesthood, covenant.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 5: The Biblical Story as Temple Restoration */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Scroll className="h-8 w-8 text-vatican-gold" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Temple Restoration</h2>
              <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">The Biblical Metanarrative</p>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                When we understand Eden as the first Temple, the entire biblical story takes on a new coherence: it is the story of God working to restore access to sacred space—to rebuild the Temple where heaven and earth overlap, where God's presence dwells among His people, where humanity can fulfill its priestly calling to represent God to the world and the world to God. This temple-restoration arc runs from Genesis to Revelation.
              </p>
              <p>
                After Eden's defilement, God initiates a series of temple-building projects, each representing a step toward full restoration. First is the Tabernacle of Moses (Exodus 25-40). This portable temple traveled with Israel in the wilderness, providing a limited but real access to God's presence. The Tabernacle was structured like Eden: an outer court, a Holy Place, and a Most Holy Place with the ark of the covenant at its center. God's glory filled the Tabernacle just as His presence had filled Eden (Exodus 40:34-35).
              </p>
              <p>
                Next came Solomon's stone Temple (1 Kings 5-8). Built on a more permanent foundation, it continued the pattern of the Tabernacle but with greater grandeur and stability. At its dedication, God's glory filled it again (1 Kings 8:10-11). The Temple became the center of Israel's worship, the place where sacrifices were offered, where sins were atoned for, where access to God was mediated through the priesthood.
              </p>
              <p>
                But the prophets looked forward to something greater—a restored temple where God's presence would dwell fully and permanently, where the boundary between heaven and earth would be removed, where all nations would come to worship. Ezekiel's vision of the temple (Ezekiel 40-48) describes a structure with life-giving water flowing from it to heal the land—echoing Eden's river but with greater scope and effect. Isaiah speaks of "all the nations flowing" to Jerusalem to learn God's ways (Isaiah 2:2-3).
              </p>
              <p>
                Jesus fulfills this temple-restoration trajectory in unexpected ways. He declares Himself "greater than the temple" (Matthew 12:6). He identifies His body as the true temple (John 2:19-21). His death tears the temple curtain (Matthew 27:51), removing the barrier between the Holy Place and the Most Holy Place, symbolizing open access to God's presence. His resurrection inaugurates the "new temple"—the Church—which Paul describes as "a holy temple in the Lord" and "a dwelling place for God by the Spirit" (Ephesians 2:21-22). The Church is now, in a sense, the restored Eden: the place where God's Spirit dwells, where humans serve as priests (1 Peter 2:5, 9), where heaven and earth overlap in the lives of believers.
              </p>
              <p>
                This trajectory culminates in Revelation with the New Jerusalem. In Revelation 21-22, the new creation is described in Edenic and temple terms. The city has "no temple in it, for the Lord God Almighty and the Lamb are its temple" (Revelation 21:22). The river of life flows from God's throne, watering the tree of life with leaves for healing the nations (Revelation 22:1-2). The separation between sacred and secular is finally removed. God's presence is fully accessible. The temple project that began with Eden reaches its climax.
              </p>
              <p>
                And here's the remarkable thing: we're not returning to a garden. We're moving toward a Garden-City. The New Jerusalem is the merging of Eden (garden) and Jerusalem (city), of nature and culture, of the natural and the human-made. In the final restoration, humanity's priestly calling is fulfilled: we don't just enjoy God's presence; we extend it, building a world where God's glory fills everything, where the sacred space expands to encompass all creation. This is the ultimate destiny of the Eden-as-Temple motif.
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
                <div className="mr-3 mt-1"><Tent className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.ivpress.com/the-temple-and-the-church-s-mission" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Temple and the Church's Mission <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">G.K. Beale</p>
                  <p className="text-xs text-stone-500 mt-1">For the comprehensive biblical theology of the Garden of Eden as the first sanctuary.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Church className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.ivpress.com/eden-and-the-temple" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Eden and the Temple <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">G.K. Beale</p>
                  <p className="text-xs text-stone-500 mt-1">Detailed exploration of Eden's temple structure and its significance.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Heart className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.ivpress.com/the-temple-and-the-church-s-mission" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Temple and the Church's Mission <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">G.K. Beale</p>
                  <p className="text-xs text-stone-500 mt-1">Traces temple imagery from Eden through Revelation.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Scroll className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://biblehub.com/interlinear/genesis/2-15.htm" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Genesis 2:15 Interlinear <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Bible Hub</p>
                  <p className="text-xs text-stone-500 mt-1">Shows the Hebrew words abad and shamar in their context.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><ShieldCheck className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://biblehub.com/numbers/3-7.htm" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Numbers 3:7 <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Bible Hub</p>
                  <p className="text-xs text-stone-500 mt-1">Levitical priestly duties using the same Hebrew vocabulary as Eden.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><BookOpen className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://en.wikipedia.org/wiki/Garden_of_Eden" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Garden of Eden <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Wikipedia</p>
                  <p className="text-xs text-stone-500 mt-1">Scholarly perspectives on Eden's location and significance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion / CTA */}
          <section className="text-center pt-16 border-t border-stone-200 mt-16">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">The Temple Restoration Project</h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
              When we see Eden as the first Temple, the Bible becomes one continuous story: God establishing sacred space, humanity losing access through priestly failure, and God working through covenant, sacrifice, and ultimately Jesus Christ to restore and expand that sacred space until heaven and earth fully overlap in the New Jerusalem. We are not trying to get back to a garden; we are moving toward a Garden-City where God's presence dwells fully and permanently among His redeemed image-bearers.
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
