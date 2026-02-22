import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, History, BookOpen, ExternalLink, Building2, Scroll } from "lucide-react";

export default function ViewFromBabylonPage() {
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
            <History className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Heterodox Perspective</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The View From <br />
            <span className="text-vatican-gold">Babylon</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Genesis was not written in Eden—it was written in exile. Understanding its Ancient Near Eastern context transforms familiar stories from literal histories into radical theological protests against pagan mythology.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          <div className="bg-amber-50 border-l-4 border-vatican-gold p-8 rounded-r-lg mb-16 shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>A Heterodox Reading:</strong> Traditional approaches to Genesis often read the opening chapters as a literal historical account of creation and early human events. However, reading Genesis from the perspective of its authors—Jewish priests and scribes writing in 6th century BC Babylonian exile—reveals a different purpose. Genesis 1-11 was not written to tell us how God created the universe or how long humans have existed; it was written as a polemic against the dominant Babylonian worldview, to comfort a defeated people by reminding them that Yahweh, not Marduk, is the Creator and Lord of all.
            </p>
          </div>

          {/* Section 1: The Historical Context */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <History className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Historical Moment</h2>
                <div className="w-12 h-1 bg-stone-900 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Exile &amp; Captivity</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                To truly understand the opening chapters of Genesis, we must first abandon our modern reflex to read them as a scientific textbook or a journalistic report filed from the dawn of time. Instead, we must transport ourselves to the likely moment of their final composition: 6th century BC, in the dusty, magnificent, and terrifying city of Babylon. The Jewish people were in exile. Their Temple in Jerusalem had been destroyed by Nebuchadnezzar II in 586 BC. Their land was occupied. Their monarchy, the Davidic line, had been severed. They were a defeated people living in the heart of a superpower that claimed its gods—Marduk, Tiamat, and the rest—were the true masters of the universe.
              </p>
              <p>
                Imagine the psychological and spiritual condition of these Jewish exiles. For generations, their identity had been bound to three pillars: the land (God's promise to Abraham), the Temple (God's dwelling place), and the monarchy (God's anointed line). All three had collapsed. The Babylonians had not only conquered them militarily; they had dismantled their entire worldview. In Babylon, they were surrounded by evidence of Babylonian supremacy: massive ziggurats reaching toward heaven, bustling markets filled with goods from across the known world, and religious festivals celebrating Marduk's victory over Tiamat. Every stone of Babylon seemed to shout: "Our gods are real, and yours are silent."
              </p>
              <p>
                In this context, a generation of Jewish priests and scribes began to write and compile what would become the opening chapters of Genesis. This was not idle scholarship; this was spiritual warfare. They were writing to preserve their people's faith, to answer the taunts of their captors, and to provide a theological foundation for a future beyond exile. The questions Genesis answers are not the questions we typically ask ("How old is the earth?" "Did creation take six literal days?"). They are the questions an exiled people would ask: "Is our God really in control?" "Is Marduk stronger than Yahweh?" "Did Yahweh abandon us, or is there still hope?" "What makes us distinct from Babylon?" "Who is the true Creator?"
              </p>
              <p>
                This historical setting matters profoundly because it shapes how we understand every verse that follows. When Genesis 1 says, "In the beginning, God created the heavens and the earth," it is not providing a scientific timeline. It is making a theological declaration against Babylonian claims. When Genesis describes creation in six days and then rest, it is not describing a literal week of divine activity. It is establishing a liturgical calendar—a "temple in time"—that contrasts with Babylon's ziggurat-based religion. The entire Genesis creation account is best understood as a radical re-imagining of reality, written by a people in captivity to declare that despite their circumstances, their God reigns supreme.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2: Enuma Elish - The Babylonian Creation Myth */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Building2 className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Enuma Elish</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Babylonian Mythology</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                To grasp Genesis as polemic, we must understand what it was arguing against. The Babylonians had their own creation story: the <em>Enuma Elish</em> ("When on High"). This epic, preserved on clay tablets that predate the Genesis account, tells a story remarkably different from Genesis yet structurally similar enough to suggest direct engagement.
              </p>
              <p>
                In the Babylonian myth, before the world as we know it existed, there was only swirling cosmic water inhabited by two primordial beings: Apsu (fresh water) and Tiamat (salt water). These gods engaged in a cosmic war that culminated when the younger god Marduk, aided by the other gods, defeated Tiamat in battle. From Tiamat's corpse, Marduk created the heavens and the earth. He split her body like a drying fish: half became the sky, half became the earth. From her eyes, he created the Tigris and Euphrates rivers. From her breasts, he formed mountains. The universe, in this view, is literally made from the remains of a dead goddess—a cosmic crime scene frozen in architecture.
              </p>
              <p>
                From Tiamat's corpse, Marduk also created humanity. But why? Not to fellowship with or love them. The <em>Enuma Elish</em> states that humans were created to serve the gods—to take over their menial labor so the gods could rest. In Babylonian theology, the gods were capricious, petty, and exhausted by the work of maintaining the world. Humans were essentially slaves to divine laziness. This was not an inspiring vision of human purpose; it was a theological justification for social hierarchy and exploitation. If you were born to serve, then your suffering was part of the cosmic order.
              </p>
              <p>
                Furthermore, in the <em>Enuma Elish</em>, after defeating Tiamat and creating the world, Marduk is acclaimed as king of the gods. The other gods build him a temple—a ziggurat in Babylon—and bestow on him fifty sacred names. The epic culminates with a grand ceremony in which Marduk takes his seat on his throne and the other gods acknowledge his supremacy. This text was likely recited annually during the New Year festival in Babylon, reinforcing Marduk's status and Babylon's claim to be the center of the divine order.
              </p>
              <p>
                This is the cultural water the Jewish exiles were swimming in every day. When they walked the streets of Babylon, they saw the ziggurat—a stepped tower reaching toward the sky, physically dominating the city's skyline. They heard the <em>Enuma Elish</em> recited or referenced. They participated in a society that assumed violence and exploitation were woven into the fabric of reality itself, sanctioned by the gods. Against this backdrop, the Genesis account takes on profound significance. It is not merely "another creation story." It is a systematic dismantling of the Babylonian worldview, verse by verse, motif by motif.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3: Genesis as Systematic Dismantling */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <BookOpen className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Verse by Verse</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Theological Polemic</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                When we read Genesis 1 through the lens of <em>Enuma Elish</em>, a pattern emerges: every major element of the Babylonian creation story is present in Genesis, but systematically subverted. This is not accidental. The Genesis author is engaging in a deliberate theological strategy, taking the familiar symbols and stories of Babylonian culture and reassigning them to Yahweh. Let us trace this dismantling:
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">No War in Heaven</h3>
              <p>
                The most fundamental difference lies at the very beginning. In <em>Enuma Elish</em>, creation emerges from cosmic violence and warfare. The universe is born of conflict, chaos, and divine bloodshed. In Genesis 1:1-2, by contrast, creation begins not with war but with the sovereign, peaceful decree of God. There is no struggle. There is no battle. There is no chaos to overcome. God speaks, and it is so. This is a direct theological claim: Yahweh's creation is fundamentally different from Marduk's. The Christian God does not require violence to create; He creates through His word, effortlessly and without opposition. For an exiled people witnessing Babylon's militarism and its religious justification, this contrast would have been profoundly hopeful.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Gods Demoted to Created Things</h3>
              <p>
                In Babylon, the sun, moon, and stars were deities—or at least manifestations of divine power. Shamash was the sun-god, Sin was the moon-god, and the stars were associated with various divine figures. Genesis 1:14-19 radically demotes these objects. They are not gods; they are not even independent beings with agency. They are "lights" created by God for specific functional purposes: "to separate the day from the night" and "to serve as signs to mark sacred times, and days and years." They become, essentially, cosmic timepieces—lamps hung in the sky by Yahweh to mark time. Can you imagine the courage it took to write this in Babylon? To declare that the objects the Babylonians worshipped as gods were merely created tools of Yahweh, the true God? This is not mere monotheism; this is anti-idolatry of the most direct kind.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Chaos Tamed and Blessed</h3>
              <p>
                In Ancient Near Eastern mythology, sea monsters represented primordial chaos—forces of disorder that the gods struggled to control or had to defeat. The Hebrew word <em>tanninim</em> appears in Genesis 1:21, often translated as "great sea creatures" or "sea monsters." But unlike the chaotic monsters of other myths, these creatures in Genesis are simply part of what God creates—and then blesses. The chaos monster is not an enemy to be defeated; it is a creature to be made good by Yahweh. Where Babylonian theology saw chaos as a fundamental cosmic reality that even the gods could only partially control, Genesis declares that chaos itself is under God's sovereign control, created and blessed by Him.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Humanity Created for Fellowship, Not Slavery</h3>
              <p>
                Perhaps the most radical subversion concerns human purpose. In <em>Enuma Elish</em>, humans are created from the blood of a slain god specifically to serve as slaves. Their dignity is nonexistent. Genesis 1:26-27 presents a starkly different vision: humans are created <em>in the image of God</em>, and given a mandate to "rule over" the earth, not to serve gods who exploit them. Where Babylonians saw humans as tools for divine convenience, Genesis sees humans as representatives of God's authority on earth, called to participate in His ongoing work. This would have been revolutionary for an exiled people who had been reduced to servants in a foreign empire. Genesis is telling them: "You are not what Babylon says you are. You bear the image of the Creator."
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">The Sabbath vs. The Ziggurat</h3>
              <p>
                Genesis 1 culminates not with the creation of a grand temple (like Babylon's ziggurat) but with the Sabbath—God's rest on the seventh day. This is structurally significant. In Babylonian religion, the ziggurat was the climax of creation: the place where god dwelt, and the New Year festival reenacted Marduk's victory. The entire creation story led up to that tower. In Genesis, the entire creation story leads up to the Sabbath. Why? Because the ultimate purpose of creation, in the biblical view, is not the construction of a monument but the establishment of relationship—rest and communion with God. The Sabbath declares that humans were created not to serve as slaves (like in Babylon) but to share in God's rest. This is a profound reorientation of reality: the goal of life is not endless labor building towers to human greatness, but entering into the divine rest.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 4: What This Means for Modern Readers */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Scroll className="h-8 w-8 text-vatican-red" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Reading Genesis Today</h2>
              <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Beyond Literalism</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Recognizing Genesis as Ancient Near Eastern polemic does not diminish its authority; it deepens it. When we understand the historical and cultural context, we grasp what the text actually communicates, rather than imposing foreign questions onto it. This has several practical implications for how we read and apply Genesis today:
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Genesis Answers "Who" and "Why," Not "How" and "When"</h3>
              <p>
                Modern readers often approach Genesis with scientific questions: How old is the earth? Did creation take six literal 24-hour days? Did the Flood cover the entire globe? These questions reflect a modern, scientific worldview that expects texts to function as technical reports. But Genesis was written to answer different questions: Who created? Why are we here? What is our purpose? What distinguishes the true God from false gods? When we force Genesis to answer our scientific questions, we miss its theological message. The text functions like a love poem, not a weather report. We wouldn't criticize a love poem for lacking precise meteorological data; similarly, we shouldn't judge Genesis by scientific standards it was never meant to meet. This doesn't mean Genesis has nothing to say about the physical world; it means its primary purpose is theological, not scientific.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Ancient Genre Requires Ancient Interpretation</h3>
              <p>
                The creation stories of Genesis belong to a genre common in the Ancient Near East: cosmogony accounts that explain the world's origins and establish a people's identity. These texts were not meant to be read as literal history in our modern sense. They functioned more like founding myths—stories that tell a community who they are, where they came from, and why their way of life matters. When we recognize this genre, we stop asking Genesis to be something it isn't, and we start receiving what it actually offers: profound theological truth communicated through culturally appropriate forms. This doesn't compromise biblical authority; it respects the text enough to read it according to its own nature and intent.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Comfort for the Exiled</h3>
              <p>
                Perhaps the most profound application is pastoral. The original audience of Genesis was in exile—homesick, defeated, wondering if their God had abandoned them. Genesis was written to comfort them by declaring that Yahweh remained the Creator and Lord of all, even when circumstances suggested otherwise. Today, many people experience various forms of exile: depression, displacement, cultural marginalization, spiritual dryness, seasons of suffering where God seems absent. Genesis speaks to all of these conditions. It declares that God is Creator of all, that He is in control, that His purposes cannot be thwarted by human empires or circumstances. The message to the exiles was: "You may be in Babylon, but Babylon is not the center of reality. Yahweh is." That same message comforts believers today who find themselves in personal or spiritual exile.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Identity Beyond Circumstances</h3>
              <p>
                Genesis provided the exiled Jews with a counter-identity. Babylon tried to tell them: "You are defeated servants in a foreign land. Your God couldn't protect you. Our gods are stronger." Genesis responded: "No. You bear the image of the Creator. You are part of His covenant people. Your future includes restoration and blessing, not just defeat." This identity-based-on-relationship with Yahweh, not on current circumstances, gave the exiles the resilience to maintain their faith in a hostile environment. For modern believers facing pressures to conform to cultural narratives that contradict biblical values, Genesis offers the same resource: a rooted identity in God that transcends present difficulties.
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
                  <a href="https://www.ivpress.com/the-lost-world-of-genesis-one" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Lost World of Genesis One <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">John H. Walton</p>
                  <p className="text-xs text-stone-500 mt-1">Foundational for understanding Genesis as Ancient Near Eastern functional creation, not material manufacture.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Building2 className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://etcsl.orillinois.edu/translations/enuma-elish" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Enuma Elish (The Epic of Creation) <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Ancient Near Eastern Texts Lab</p>
                  <p className="text-xs text-stone-500 mt-1">Translation of the Babylonian creation epic for comparison with Genesis.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><BookOpen className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.amazon.com/dp/158983482X" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Genesis (Ancient Christian Commentary) <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">John H. Walton</p>
                  <p className="text-xs text-stone-500 mt-1">Detailed scholarly commentary on Genesis in its Ancient Near Eastern context.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Scroll className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://en.wikipedia.org/wiki/Enuma_Elish" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Enuma Elish <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Wikipedia</p>
                  <p className="text-xs text-stone-500 mt-1">Overview of the Babylonian creation myth and its themes.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><History className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.biblicalarchaeology.org/genesis-ancient-context" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Genesis in Ancient Context <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Biblical Archaeology Society</p>
                  <p className="text-xs text-stone-500 mt-1">Resources for understanding the historical and cultural setting of Genesis.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion / CTA */}
          <section className="text-center pt-16 border-t border-stone-200 mt-16">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">A Faith for Every Context</h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
              Genesis was not written to answer our scientific questions about how the universe came to be. It was written to answer theological questions about who God is and who we are in relationship to Him. By understanding its Ancient Near Eastern context, we recover the text's original power: not as a competing scientific theory, but as a radical declaration that Yahweh alone is Creator, Lord, and Redeemer—even when circumstances suggest otherwise. This faith, forged in exile, speaks to every believer who has ever felt far from home.
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
