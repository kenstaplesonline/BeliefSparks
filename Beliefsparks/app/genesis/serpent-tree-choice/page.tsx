import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, AlertTriangle, Apple, Brain, Heart, MessageCircle, BookOpen, Sparkles } from "lucide-react";

export default function SerpentTreeChoicePage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/genesis" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Genesis</span>
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
            <AlertTriangle className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Genesis Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Serpent, the Tree, and Choice — <br />
            <span className="text-vatican-gold">The Gift of Freedom</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Every child knows the story: serpent tempts Eve, she eats forbidden fruit, Adam follows, humanity falls. But could this be about more than literal disobedience? The tree may represent not just "knowledge of good and evil" but the choice between trusting God's way or forging our own. How might reading symbolically change how we understand temptation and choice?
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction */}
          <section className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
              The Moment of Choice
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              "Now the serpent was more crafty than any other wild animal that the Lord God had made." (Genesis 3:1)
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              This verse opens one of the most consequential stories in all of literature — a story that has shaped how we understand evil, temptation, and human freedom. But what really happened in Eden? And what does it mean for us today?
            </p>
          </section>

          {/* The Story */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <BookOpen className="h-7 w-7 mr-3 text-vatican-red" />
              The Story: What Really Happened?
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              The narrative in Genesis 3 is familiar. But reading it carefully reveals surprising details:
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 space-y-4">
              <div>
                <h3 className="font-bold text-stone-900 mb-2">1. The Serpent's Approach</h3>
                <p className="text-stone-700">
                  The serpent questions God's command: "Did God really say, 'You must not eat from any tree in the garden'?" Notice the distortion. God had permitted eating from any tree <em>except</em> one. The serpent presents the restriction as a deprivation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">2. Eve's Defense</h3>
                <p className="text-stone-700">
                  Eve corrects the serpent — but then adds to God's command: "We may eat fruit from the trees in the garden, but God did say, 'You must not eat fruit from the tree that is in the middle of the garden, and you must not touch it, or you will die.'" God never said anything about <em>touching</em>.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">3. The Serpent's Promise</h3>
                <p className="text-stone-700">
                  "You will not certainly die... for God knows that when you eat from it your eyes will be opened, and you will be like God, knowing good and evil." The serpent offers something attractive — knowledge, autonomy, god-likeness.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">4. The Choice</h3>
                <p className="text-stone-700">
                  "When the woman saw that the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it." She evaluates, she chooses, she acts. Then "she also gave some to her husband, who was with her, and he ate it."
                </p>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">5. The Consequence</h3>
                <p className="text-stone-700">
                  Their eyes were opened — but not as expected. They realized they were naked. They hid from God. They blamed each other and the serpent. God pronounced judgment — on serpent, on Eve, on Adam. They were exiled from Eden.
                </p>
              </div>
            </div>
          </section>

          {/* The Serpent: Literal or Symbolic? */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <AlertTriangle className="h-7 w-7 mr-3 text-vatican-red" />
              The Serpent: Literal or Symbolic?
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              What are we to make of this talking serpent? Christians have interpreted it in various ways:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-stone-900 mb-3">Literal Serpent</h3>
                <p className="text-stone-700 mb-3">
                  The serpent was an actual animal that spoke — perhaps through demonic possession or as a manifestation of Satan. This view emphasizes the historical reality of the Fall.
                </p>
                <p className="text-stone-600 text-sm italic">
                  Early Church Fathers often held this view, identifying the serpent with Satan.
                </p>
              </div>
              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-stone-900 mb-3">Symbolic Representation</h3>
                <p className="text-stone-700 mb-3">
                  The serpent represents temptation personified — external voices that seduce us away from God. This view emphasizes the psychological and spiritual reality of temptation.
                </p>
                <p className="text-stone-600 text-sm italic">
                  Some modern interpreters see the serpent as the "voice of the world" or cultural pressure.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <p className="text-stone-800">
                <strong>Satan's Identity:</strong> Scripture elsewhere identifies the serpent with Satan. Revelation 12:9 calls "that ancient serpent" "the devil, or Satan, who leads the whole world astray." 2 Corinthians 11:3 warns that "as the serpent deceived Eve by his cunning," our minds may be "led astray."
              </p>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              The Catechism affirms that the Fall was "a primeval event, a deed that took place at the beginning of the history of man" (CCC 390). However we interpret the details — literal serpent, symbolic tempter, or both — the reality is clear: humanity turned from God, and the world has never been the same.
            </p>
          </section>

          {/* The Tree: What Was Forbidden? */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Apple className="h-7 w-7 mr-3 text-vatican-red" />
              The Tree: Knowledge of Good and Evil?
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              The tree at Eden's center remains enigmatic. What does "knowledge of good and evil" mean?
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">1. Moral Knowledge</h4>
                <p className="text-stone-700">
                  Some see this as knowledge of right and wrong — the ability to make moral judgments. But Adam and Eve already knew right from wrong (God's command). Perhaps this represents a different kind of knowledge: experiential, autonomous, setting oneself as the judge.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">2. Divine Knowledge</h4>
                <p className="text-stone-700">
                  The serpent promised they would be "like God." The tree represents grasping for god-like status — claiming the right to determine good and evil for ourselves rather than trusting God's wisdom.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">3. The Knowledge of Maturity</h4>
                <p className="text-stone-700">
                  Some interpreters see the tree as representing premature maturity — like children wanting adult privileges before they're ready. The knowledge of good and evil comes through experience, including pain, that humanity wasn't meant to rush into.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-vatican-gold">
                <h4 className="font-bold text-stone-900 mb-2">4. The Test of Trust</h4>
                <p className="text-stone-700">
                  The command itself was a test. Would Adam and Eve trust God — or trust their own judgment? The tree wasn't the point; the choice was. God wanted children who freely chose relationship, not robots who couldn't say no.
                </p>
              </div>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Whatever the tree represents, one thing is clear: it marked a boundary. Some things were not meant to be grasped. There is wisdom in respecting limits, in trusting that some doors should remain closed.
            </p>
          </section>

          {/* Freedom and Choice */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Heart className="h-7 w-7 mr-3 text-vatican-red" />
              Freedom, Choice, and the Nature of Love
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Why did God place the tree in Eden at all? Couldn't He have created a world where Adam and Eve couldn't sin?
            </p>

            <div className="bg-stone-100 p-8 rounded-lg space-y-4">
              <p className="text-stone-800 text-lg">
                <strong>The problem:</strong> A world without the possibility of saying no is a world without genuine relationship. Love, by definition, requires freedom. You cannot force someone to love you.
              </p>
              <p className="text-stone-800 text-lg">
                <strong>The gift:</strong> God created humanity with the capacity for genuine choice. This capacity is what makes love possible — but it also makes sin possible. The tree is simply the concrete expression of that choice.
              </p>
              <p className="text-stone-800 text-lg">
                <strong>The tragedy:</strong> Adam and Eve used their freedom to reject the One who gave it. They chose autonomy over relationship, self-trust over divine trust.
              </p>
              <p className="text-stone-800 text-lg">
                <strong>The mystery:</strong> How could God, knowing they would choose wrongly, still create them? The answer lies at the heart of the gospel — God so loved the world that He was willing to endure the consequences of human freedom, even to the point of the Cross, to win back what was lost.
              </p>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              The Catechism speaks beautifully of this: "God created man free and endowed him with a free will... The first man was...able to choose between good and evil" (CCC 1700-1701). Freedom is both gift and responsibility.
            </p>
          </section>

          {/* What the Fall Changed */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Brain className="h-7 w-7 mr-3 text-vatican-red" />
              What Changed at the Fall?
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              The consequences of Adam and Eve's choice ripple throughout human history. What actually changed?
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2">Relationship with God</h4>
                <p className="text-stone-700">
                  Before: God walked with them in the garden; they enjoyed intimate communion. After: They hid from God; shame and fear entered. Their relationship was broken.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2">Human Nature</h4>
                <p className="text-stone-700">
                  The Catechism teaches that original sin "is contracted and not committed — a state and not an act" (CCC 404). Adam's descendants inherit a wounded nature, inclined toward sin. But we are not corrupted utterly — the capacity for goodness remains.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2">Human Relationships</h4>
                <p className="text-stone-700">
                  Adam blames Eve; Eve blames the serpent. The harmony of relationship is broken. Tension, blame, and domination enter. Work becomes toil; childbearing becomes pain.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2">Creation</h4>
                <p className="text-stone-700">
                  The ground is cursed. Thorns and thistles appear. Death enters. The creation that was "very good" is now subject to futility and decay.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-2">Access to the Tree of Life</h4>
                <p className="text-stone-700">
                  Adam and Eve are exiled from Eden so they won't eat from the Tree of Life and live forever in their fallen state. The door to immortality is temporarily closed.
                </p>
              </div>
            </div>
          </section>

          {/* Adam and Christ */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Sparkles className="h-7 w-7 mr-3 text-vatican-red" />
              Adam and Christ: The Two Representatives
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              The New Testament presents a profound parallel: Adam and Christ. Where Adam failed, Christ succeeded. Where the first brought death, the Second brings life.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg border border-stone-200">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="p-3 text-left font-bold text-stone-900">Adam</th>
                    <th className="p-3 text-left font-bold text-stone-900">Christ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="p-3 text-stone-700">Disobedience in the garden</td>
                    <td className="p-3 text-stone-700">Obedience in the garden (Gethsemane)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-700">Brought sin and death</td>
                    <td className="p-3 text-stone-700">Brings forgiveness and life</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-700">Exiled from Eden</td>
                    <td className="p-3 text-stone-700">Opens paradise (Luke 23:43)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-700">Earthly man (dust to dust)</td>
                    <td className="p-3 text-stone-700">Heavenly man (life-giving Spirit)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-stone-700">First Adam</td>
                    <td className="p-3 text-stone-700">Last Adam (1 Corinthians 15:45-47)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <p className="text-stone-800">
                <strong>The Good News:</strong> The Fall is not the end of the story. Christ — the Second Adam — undoes what the first Adam did. Through Him, Eden's doors are reopened. The Tree of Life is accessible again. This is the gospel: what was broken is being restored.
              </p>
            </div>
          </section>

          {/* Questions for Reflection */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Questions for Reflection</h2>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How do you understand the serpent — literally, symbolically, or both?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What does the Tree of Knowledge of Good and Evil represent to you?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>Why is human freedom — and the possibility of choosing wrongly — so important to God?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>Where do you experience the temptation to trust yourself rather than God?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does the parallel between Adam and Christ shape your understanding of salvation?</span>
              </li>
            </ul>
          </section>

          {/* Navigation Footer */}
          <section className="border-t border-stone-200 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/genesis/eden-temple-question" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous: Eden as Temple?
              </Link>
              <Link href="/genesis/ancient-myths" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Next: Ancient Creation Myths
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
