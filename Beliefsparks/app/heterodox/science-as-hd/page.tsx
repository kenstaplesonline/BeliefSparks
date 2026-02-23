import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Microscope, BookOpen, ExternalLink, Atom, Sparkles, Brain } from "lucide-react";

export default function ScienceAsHDPage() {
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
            <Microscope className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Heterodox Perspective</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Science as <br />
            <span className="text-vatican-gold">High Definition</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Modern science is not the enemy of faith—it is the "HD upgrade" that reveals the exquisite detail and processes God used to create. When Scripture says "God spoke," science shows us the symphony that followed.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          <div className="bg-vatican-red/10 border-l-4 border-vatican-red p-8 rounded-r-lg mb-16 shadow-sm">
            <p className="text-stone-800 text-lg">
              <strong>A Heterodox Reading:</strong> For centuries, believers read the Genesis creation account with only the tools available to them: their eyes and immediate experience. This produced a "Standard Definition" picture of creation—functional and beautiful but lacking resolution. Modern science, far from being an enemy of faith, acts as a "High Definition" upgrade to this ancient picture. It zooms in on the process, revealing the intricate mechanisms, vast timescales, and elegant laws through which God brought the universe into being. This perspective rejects the false dichotomy that forces us to choose between the Bible and science, recognizing that both are books written by the same Author.
            </p>
          </div>

          {/* Section 1: The SD View of Creation */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Standard Definition</h2>
                <div className="w-12 h-1 bg-stone-900 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Ancient Perspective</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Imagine watching a beloved movie on an old, tube television from the 1950s. You can follow the story, appreciate the characters, perhaps even be moved by the narrative—but the picture is grainy, the details blurred, the resolution poor. Then imagine the same movie restored and remastered in 4K ultra-high definition. The story hasn't changed. The characters are the same. The meaning is the same. But now you see details you could never perceive before: the texture of fabrics, the emotion in an actor's eyes, the background details that add depth and richness to every scene.
              </p>
              <p>
                This analogy captures the relationship between the ancient biblical account of creation and modern scientific understanding. For millennia, believers read Genesis with the tools available to them: their senses, their cultural context, their immediate experience of the natural world. This produced a "Standard Definition" understanding of creation—a view that was true, beautiful, and sufficient for its purpose, but which lacked resolution. It described a world of "kinds" (general categories), of "firmaments" (apparent structures), and of immediate, spoken manifestation. This wasn't an error or a deficiency; it was simply the best picture available given the tools of the time.
              </p>
              <p>
                Consider what the ancient Israelites could know about the universe. They knew that the sun rose and set. They knew that plants grew from seeds. They knew that animals reproduced after their kind. They knew the stars appeared at night. They could observe these realities with their eyes and reason about them with their minds. But they had no telescopes, no microscopes, no radiometric dating, no genetic sequencing. They had no way to know that the universe is 13.8 billion years old, that Earth formed from a solar nebula, that life emerged through chemical processes over hundreds of millions of years, that all living things share a common genetic code. When Genesis says, "Let the earth bring forth living creatures," it captures what they could observe: life appears and diversifies. It does not—and could not—capture the mechanism.
              </p>
              <p>
                The Standard Definition view was adequate for the theological needs of its time. It established that God is Creator. It declared that creation is good. It provided a framework for understanding human identity and purpose. It answered the ancient questions: Who made us? Why are we here? Is the world under divine control or capricious chaos? In these respects, the SD view was perfect. God communicated truth to His people in a form they could receive and understand. But just as a 1950s television broadcast couldn't reveal details that didn't exist in the signal, the ancient revelation couldn't reveal details about creation that weren't accessible through ordinary human experience.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2: The HD Upgrade */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Microscope className="h-8 w-8 text-vatican-gold" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The HD Upgrade</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Science Reveals Detail</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                Modern science has provided humanity with new tools for observing and understanding the natural world. Telescopes allow us to peer into deep space and billions of years into the past. Microscopes reveal cellular machinery that operates with astonishing precision. Radiometric dating provides numerical measurements for rocks and fossils. Genetic sequencing maps the code of life itself. These tools don't change the story of creation; they allow us to see it in higher resolution. They reveal the how behind the what Genesis declares.
              </p>
              <p>
                Where Scripture says, "Let there be light," cosmology reveals the Big Bang—a singularity of infinite density and heat that exploded approximately 13.8 billion years ago, launching an expanding universe that continues to stretch and cool today. The light that Genesis says God called into being was not a sudden switch flipped in a dark room; it was the first photons released in a universe-transforming event that set the stage for all subsequent creation. The book of nature tells us this light emerged from a point of extreme energy, not by divine command alone but through laws of physics that God Himself established.
              </p>
              <p>
                Where Scripture says, "Let the waters teem with swarms of living creatures," evolutionary biology reveals a majestic, patient process that unfolded over hundreds of millions of years. Simple cells gave rise to complex multicellular organisms. Life moved from oceans to land. Species diversified and adapted through natural selection. Extinction events and adaptive radiations filled ecological niches. The book of nature tells us that life didn't appear in finished form, ready-made, but developed through time and process, guided by the same God who spoke the initial commands.
              </p>
              <p>
                Where Scripture says, "Let us make mankind in our image," paleontology and genetics reveal a hominin lineage that gradually developed over millions of years. Bipedalism, tool use, brain expansion, language capacity—these traits emerged gradually. The book of nature tells us that humans are not fundamentally separate from other animals but part of a continuum of life, shaped by the same creative processes that formed all creatures. Yet in this continuity, something unprecedented appears: consciousness, moral reasoning, the capacity to know and be known by God—the image-bearing qualities that Genesis celebrates.
              </p>
              <p>
                This is the HD view. It doesn't contradict Genesis; it illuminates it. It shows us the mechanisms through which God's declarations became reality. The ancient revelation said "God created"; modern science shows us how. And the picture revealed is breathtakingly complex, elegant, and vast—far more impressive than a magician snapping fingers to produce effects. The HD God is not a conjurer who bypasses natural laws; He is a Master Composer who works through them, writing a symphony of physics, chemistry, and biology that plays out over billions of years.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3: Reconciling Two Books */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Brain className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Two Books</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">One Author</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                A core principle in Christian theology is that God is the Author of both the Book of Scripture and the Book of Nature. This principle, attributed to thinkers from Augustine to Galileo to Francis Collins, means that genuine truth cannot contradict itself. If God is the source of both special revelation (the Bible) and general revelation (the natural world), then these two revelations must ultimately be consistent. Any apparent conflict between Scripture and science is not a conflict between truth and truth; it is a conflict between our interpretations of one or both.
              </p>
              <p>
                Consider the historical controversy over geocentrism. For centuries, many Christians interpreted passages like Psalm 93:1 ("The world is firmly established; it cannot be moved") and Joshua 10:12-13 (the sun standing still) as teaching that Earth is stationary and the sun orbits it. When Galileo's telescopic observations demonstrated otherwise, this created a crisis. The church initially condemned Galileo's findings as contrary to Scripture. But eventually, Christian thinkers realized that the Bible's purpose was not to teach astronomy; it was to teach theology. The passages about the sun "standing still" were poetic expressions, not scientific claims. When properly interpreted, Galileo's discoveries didn't contradict the Bible; they clarified our understanding of what the Bible was actually saying.
              </p>
              <p>
                This pattern repeats. When science appeared to challenge biblical readings, the church has had to reconsider its interpretations—not abandon Scripture, but understand it better. The age of the Earth, once thought to be thousands of years based on genealogical calculations, is now known to be billions of years based on multiple, independent dating methods. The fossil record, once thought to show separate "kinds" created abruptly, now reveals gradual development and common ancestry. These findings don't refute the claim that God created; they change our understanding of how and when. They force us to ask: Were we reading Genesis as a scientific textbook, or as a theological statement about God's relationship with creation?
              </p>
              <p>
                The theologian John Polkinghorne distinguishes between "concursive" and "propositional" revelation. Concursive revelation is God's ongoing work in nature—what we can discover through science and observation. Propositional revelation is what God has specifically said in Scripture. Both are authoritative, and both require interpretation. Science interprets the book of nature; hermeneutics interprets the book of Scripture. Neither is infallible in its interpretation. The goal is not to pit these against each other, but to integrate them into a coherent understanding of reality that honors both God's word and God's world.
              </p>
              <p>
                This integration is not a modern innovation but a recovery of a classic Christian approach. The earliest theologians and scientists—many of whom were the same people—saw no conflict between studying nature and glorifying God. Isaac Newton, who formulated the laws of motion and gravity, wrote more about theology than physics. Johannes Kepler, who discovered the laws of planetary motion, saw his scientific work as "thinking God's thoughts after Him." The HD view doesn't reject tradition; it stands in the great tradition of seeing science as a means of knowing God through His works.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 4: The God of Process */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <div className="bg-vatican-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Atom className="h-8 w-8 text-vatican-gold" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The God of Process</h2>
              <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Patience in Creation</p>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                One of the most profound insights from the HD view is that it reveals a God of process, patience, and deep time—rather than a God of instantaneous magic. The traditional view, reading Genesis literally, suggests a God who creates through sudden divine interventions: "Let there be light" and light appears. "Let there be animals" and animals exist. This God appears as a magician who can suspend or bypass natural laws to achieve His purposes instantly.
              </p>
              <p>
                But the scientific picture reveals something far more impressive. It shows us a universe governed by exquisitely precise laws. Gravity, electromagnetism, the nuclear forces, thermodynamics—these are not obstacles to God's power but instruments of it. The fine-tuning of the universe—the fact that these constants have exactly the values necessary for stars to form, for elements to fuse, for chemistry to work—is so precise that it suggests intentionality, not accident. God didn't just set up the laws; He calibrated them to produce a universe capable of life and consciousness. This is a God who plays the long game, who invested in a process that would unfold over billions of years.
              </p>
              <p>
                Consider evolution, often viewed with suspicion by some Christians. Yet what does evolution reveal about God's creative method? It reveals that God creates through gradual development, through adaptation and selection, through the interplay of chance and law over vast timescales. God didn't simply populate the Earth with finished species; He established conditions and processes through which life would diversify and adapt. This is more impressive than fiat creation. Any deity can speak and have things appear. But only a God of infinite wisdom could establish evolutionary processes that, operating blindly over millions of years, would eventually produce creatures capable of knowing their Creator.
              </p>
              <p>
                The HD view also transforms our understanding of miracles. In the SD view, miracles are interruptions of natural law—God stepping in to do something that couldn't happen otherwise. In the HD view, miracles might be better understood as accelerations or intensifications of natural processes toward divine purposes. The feeding of the five thousand wasn't a violation of natural law so much as an intensification of multiplication and distribution toward a revelatory purpose. The resurrection wasn't a suspension of biological principles so much as the inauguration of a new kind of life—the kind for which creation was always groaning. The HD view doesn't eliminate the supernatural; it shows us how the supernatural relates to and elevates the natural.
              </p>
              <p>
                This God of process has profound implications for how we understand divine providence. Providence is not God intervening from outside to fix broken systems; it is God working from within the very processes He established. When we pray for healing, we might be praying that the body's natural immune system, created and sustained by God, would function more effectively. When we pray for wisdom, we might be praying that our neural networks, designed by God, would form better connections and insights. This doesn't make prayer less miraculous; it makes it more intelligent—we're asking the God who designed the system to work through the system toward His ends.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 5: Practical Implications */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
             <div className="md:col-span-4 sticky top-24">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-vatican-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="h-8 w-8 text-vatican-red" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Living with HD</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Faith in Modern World</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <p>
                What does it mean for believers to embrace this HD view of creation? How does it change how we read Scripture, do science, and live as people of faith in a modern world? The practical implications are significant and transformative.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Confident Faith in an Age of Science</h3>
              <p>
                When we understand that Scripture and science are both revelation from the same Author, we can be confident believers in a scientific age. We don't have to defend Genesis by denying well-established scientific findings. We don't have to attack science to defend faith. We can say, "Yes, the universe is 13.8 billion years old, and yes, God created it. Yes, humans share common ancestry with other primates, and yes, we are uniquely made in God's image. Yes, evolution is the mechanism through which God created biological diversity, and yes, Scripture affirms that God is Creator." This confidence allows us to engage with science honestly, knowing that truth will not ultimately contradict truth.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Recovering the Theological Message</h3>
              <p>
                Paradoxically, accepting the HD view actually helps us recover Genesis's theological message. When we stop trying to force Genesis to answer scientific questions it wasn't designed to answer, we're freed to hear what it actually says. The main character of Genesis 1 is not the how or the when but the who and the why. Genesis answers: Who is God? The sovereign Creator who speaks and it is so, who declares creation good, who establishes order from chaos. Why are we here? To bear God's image, to exercise stewardship over Earth, to enter into God's Sabbath rest. These messages don't depend on a literal six-day creation or a young earth. They are theological truths accessible to any scientific worldview.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Ending the "God of the Gaps"</h3>
              <p>
                Historically, believers used God as an explanation for natural phenomena they couldn't understand. Lightning was God's anger. Disease was divine punishment. The motion of planets required constant divine intervention. This was the "God of the gaps" approach—using God to fill gaps in our scientific understanding. The HD view eliminates this need. As our scientific understanding grows, the gaps shrink, but God's role doesn't diminish. Instead of a God who gets smaller as we learn more, we discover a God who is larger than we imagined—the God who established comprehensively elegant laws that produce all the complexity we observe.
              </p>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 mt-6">Science as Worship</h3>
              <p>
                Perhaps most beautifully, the HD view transforms how we engage with science. Scientific discovery becomes not a threat to faith but an act of worship—exploring the mind of God as revealed in His works. When astronomers study the cosmic microwave background, they're studying the afterglow of creation. When biologists map the genetic code, they're reading the language of life written by the Designer. When physicists probe the quantum realm, they're investigating the very fabric of reality established by the Logos. Science, in this view, is theology by other means—the study of God's general revelation, complementary to and enriching our understanding of His special revelation.
              </p>
              <p>
                Johannes Kepler captured this vision beautifully when he wrote, "I was merely thinking God's thoughts after Him." Every equation solved, every species discovered, every law uncovered is thinking God's thoughts after Him. This is the HD believer's calling: not to defend the faith against science, not to use science to attack faith, but to pursue scientific understanding as an act of devotion to the Creator whose works we're studying.
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
                <div className="mr-3 mt-1"><Microscope className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://biologos.org/resources/the-language-of-god" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Language of God <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Francis S. Collins</p>
                  <p className="text-xs text-stone-500 mt-1">A scientist's perspective (Head of Human Genome Project) on the harmony between evolution and faith.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1"><Atom className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.amazon.com/dp/0802838180" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Science and Religion: Are They Compatible? <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">John Polkinghorne</p>
                  <p className="text-xs text-stone-500 mt-1">On concursive and propositional revelation from God.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Brain className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.ivpress.com/ancient-grammarian-christian-perspectives-science-religion" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Ancient Grammarian <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">John Polkinghorne</p>
                  <p className="text-xs text-stone-500 mt-1">Historical Christian perspectives on science from theologians like Calvin, Augustine, and Pascal.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><Sparkles className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://biologos.org/common-questions/scientific-evidence" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    Scientific Evidence for an Ancient Earth <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">BioLogos</p>
                  <p className="text-xs text-stone-500 mt-1">Overview of scientific findings and their compatibility with biblical faith.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1"><BookOpen className="h-4 w-4 text-vatican-gold" /></div>
                <div>
                  <a href="https://www.amazon.com/dp/0745953695" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 italic hover:text-vatican-red transition-colors inline-flex items-center">
                    The Language of Science and Faith <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <p className="text-sm text-stone-600">Alister McGrath</p>
                  <p className="text-xs text-stone-500 mt-1">On the historical relationship and potential dialogue between science and Christian theology.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion / CTA */}
          <section className="text-center pt-16 border-t border-stone-200 mt-16">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Faith in High Definition</h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
              Modern science is not the enemy of faith—it is the instrument through which we see God's work in higher resolution than ever before. The "HD" view doesn't diminish Scripture; it illuminates the mechanisms through which God's declarations became reality. When we embrace both books as revelation from the same Author, we discover a God more creative, patient, and magnificent than we ever imagined—and a faith more robust, honest, and capable of engaging with modern understanding.
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
