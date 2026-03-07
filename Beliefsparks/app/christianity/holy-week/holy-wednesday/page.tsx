import Link from "next/link";
import { ArrowRight, ArrowLeft, Church, Coins, UserX, BookOpen, Scroll } from "lucide-react";

export default function HolyWednesdayPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-purple-50 rounded-full">
            <span className="text-2xl mr-2">💰</span>
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">The Shadow of Betrayal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Holy Wednesday: <br />
            <span className="text-purple-700">Thirty Pieces of Silver</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Holy Wednesday, often called "Spy Wednesday," marks the day Judas Iscariot conspired with the chief priests to betray Jesus for thirty pieces of silver. The shadow of treachery fell over the Passover preparations, setting in motion the events that would lead to the Cross.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          
          {/* The Conspiracy */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Coins className="h-8 w-8 text-purple-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Betrayal Plot</h2>
                <div className="w-12 h-1 bg-purple-700 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Matthew 26:14-16</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>Judas Goes to the Priests</h3>
              <p>
                The Gospels record a chilling transition: "Then one of the twelve, whose name was Judas Iscariot, went to the chief priests and said, 'What will you give me if I deliver Him over to you?' And they paid him thirty pieces of silver. And from that moment he sought an opportunity to betray Him" (Matthew 26:14-16).
              </p>
              <p>
                This was not a spontaneous decision. John's Gospel tells us that Judas had been stealing from the disciples' money bag for some time (John 12:6). The Gospels also indicate that Satan entered into Judas (Luke 22:3; John 13:27), suggesting spiritual darkness had been growing in his heart.
              </p>

              <h3>Thirty Pieces of Silver</h3>
              <p>
                The price—<strong>thirty pieces of silver</strong>—was not random. In Exodus 21:32, thirty shekels of silver was the compensation price for a slave accidentally killed by an ox. It was also the price Zechariah received for his prophetic ministry, which he sarcastically called "this lordly price" before throwing it to the potter in the Temple (Zechariah 11:12-13).
              </p>
              <p>
                Thirty pieces of silver was a modest sum—not life-changing wealth, but enough to show how little Judas valued Jesus. The Son of God was priced as a common slave. The prophet's words were fulfilled: "So they weighed out as my wages thirty pieces of silver" (Zechariah 11:12).
              </p>
              <p>
                In today's currency, thirty pieces of silver would be worth approximately $200-600 USD—roughly four months' wages for a laborer in the ancient world. The irony is staggering: the Creator of the universe was sold for the price of a damaged slave.
              </p>

              <h3>Why Did Judas Betray Jesus?</h3>
              <p>
                The motivations of Judas have been debated for two millennia. Several factors likely contributed:
              </p>
              <ul>
                <li><strong>Greed:</strong> John explicitly states Judas was a thief who stole from the money bag (John 12:6). His question—"What will you give me?"—reveals a transactional mindset.</li>
                <li><strong>Disillusionment:</strong> Many scholars believe Judas was a Zealot who expected Jesus to lead a political revolution against Rome. When Jesus spoke of suffering and death rather than conquest, Judas may have felt betrayed.</li>
                <li><strong>Satanic Influence:</strong> The Gospels indicate that Satan entered Judas (Luke 22:3). This does not absolve Judas of responsibility but shows the spiritual dimension of his fall.</li>
                <li><strong>Divine Sovereignty:</strong> The betrayal was foretold in Scripture (Psalm 41:9) and part of God's redemptive plan. Yet this foreknowledge does not diminish Judas's moral culpability.</li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Judas Among the Twelve */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Judas Among the Twelve</h2>
            <p>
              Judas was one of the Twelve—the inner circle of Jesus' disciples chosen by Christ Himself. He had walked with Jesus for three years, witnessed the miracles, heard the Sermon on the Mount, seen the dead raised, and participated in the feeding of the five thousand. He was trusted enough to be the group's treasurer.
            </p>
            <p>
              The name "Iscariot" likely means "man of Kerioth," a town in southern Judea, making Judas the only non-Galilean among the Twelve. This outsider status may have contributed to his sense of alienation. Some scholars suggest his surname may also connect to the <em>Sicarii</em>—Jewish assassins who carried daggers (<em>sicae</em>) and targeted Romans and their collaborators. If true, this would align Judas with the Zealot movement seeking violent overthrow of Roman rule.
            </p>
            <p>
              The Gospels consistently list Judas last among the Twelve, always with the note that he "betrayed Him" (Matthew 10:4; Mark 3:19; Luke 6:16). Even in the lists of apostles, the shadow of his treachery falls across his name.
            </p>

            <h3>The Tragedy of Proximity Without Intimacy</h3>
            <p>
              Judas's story is one of the most sobering warnings in Scripture. He had <strong>proximity to Jesus</strong> without <strong>intimacy with Jesus</strong>. He heard every sermon but never truly believed. He witnessed every miracle but never truly surrendered. He appeared to be a follower but his heart remained unchanged.
            </p>
            <p>
              Jesus Himself warned: "Not everyone who says to Me, 'Lord, Lord,' will enter the kingdom of heaven, but the one who does the will of My Father who is in heaven. On that day many will say to Me, 'Lord, Lord, did we not prophesy in Your name, and cast out demons in Your name, and do many mighty works in Your name?' And then will I declare to them, 'I never knew you; depart from Me, you workers of lawlessness'" (Matthew 7:21-23).
            </p>
            <p>
              Judas is the ultimate example of this warning. He was among the Twelve, yet Jesus never "knew" him in the sense of intimate relationship.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Old Testament Prophecies */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scroll className="h-8 w-8 text-amber-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Prophetic Fulfillment</h2>
                <div className="w-12 h-1 bg-amber-700 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Old Testament</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>Prophecies of the Betrayal</h3>
              <p>
                The betrayal of the Messiah was foretold centuries before it occurred. The Old Testament contains several striking prophecies that find their fulfillment in Judas's treachery:
              </p>

              <h4>Psalm 41:9 — Betrayal by a Friend</h4>
              <blockquote className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-700">
                <p className="italic text-base">"Even My close friend in whom I trusted, who ate My bread, has lifted his heel against Me."</p>
              </blockquote>
              <p>
                David wrote this psalm about his own betrayal by Ahithophel, his counselor who joined Absalom's rebellion. But the ultimate fulfillment came in Jesus, who quoted this verse at the Last Supper: "I am not speaking of all of you; I know whom I have chosen. But the Scripture will be fulfilled, 'He who ate My bread has lifted his heel against Me'" (John 13:18).
              </p>
              <p>
                The phrase "lifted his heel against Me" suggests a vicious, treacherous attack—not an open enemy, but a trusted friend who suddenly turns. Judas had shared countless meals with Jesus, including the Passover just hours before the betrayal.
              </p>

              <h4>Zechariah 11:12-13 — Thirty Pieces of Silver</h4>
              <blockquote className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-700">
                <p className="italic text-base">"So they weighed out as My wages thirty pieces of silver. Then the Lord said to Me, 'Cast it to the potter'—the lordly price at which I was priced by them. So I took the thirty pieces of silver and cast them into the house of the Lord, to the potter."</p>
              </blockquote>
              <p>
                This remarkable prophecy was fulfilled in detail. When Judas returned the blood money, the chief priests refused to put it in the treasury because it was "blood money." Instead, they used it to buy the potter's field as a burial place for strangers—fulfilling Zechariah's words (Matthew 27:3-10).
              </p>

              <h4>Psalm 109 — The Fate of the Betrayer</h4>
              <p>
                This "imprecatory psalm" calls down judgment on a treacherous enemy: "May his days be few; may another take his office" (Psalm 109:8). Peter applied this to Judas after the Ascension: "His office let another take" (Acts 1:20). Matthias was chosen to replace Judas among the Twelve.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Mary's Anointing */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">💧</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Contrast in Bethany</h2>
                <div className="w-12 h-1 bg-pink-500 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">John 12:1-8</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>Mary's Extravagant Love</h3>
              <p>
                The contrast between Judas and Mary of Bethany could not be starker. While Judas was plotting betrayal for silver, Mary poured out expensive perfume worth a year's wages on Jesus' feet:
              </p>
              <blockquote className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                <p className="italic text-lg mb-2">"Mary therefore took a pound of expensive ointment made from pure nard, and anointed the feet of Jesus and wiped His feet with her hair. The house was filled with the fragrance of the perfume."</p>
                <p className="text-sm text-stone-600">— John 12:3</p>
              </blockquote>
              <p>
                Judas protested: "Why was this ointment not sold for three hundred denarii and given to the poor?" (John 12:5). His concern was not for the poor but for his own pocket—he wanted the money in the bag so he could steal it.
              </p>
              <p>
                Jesus defended Mary: "Leave her alone, so that she may keep it for the day of My burial. For the poor you always have with you, but you do not always have Me" (John 12:7-8). Mary understood what the disciples did not: Jesus was about to die. Her extravagant love was preparation for His burial.
              </p>

              <h3>Two Responses to Jesus</h3>
              <p>
                Mary and Judas represent two fundamental responses to Jesus:
              </p>
              <ul>
                <li><strong>Mary:</strong> Love that holds nothing back, that gives extravagantly, that values Jesus above all else. She gave her most precious possession—worth a year's wages—without hesitation.</li>
                <li><strong>Judas:</strong> Self-interest that calculates, that uses Jesus for personal gain, that sells Him out when the price is right. He sold the Lord of Glory for the price of a slave.</li>
              </ul>
              <p>
                Every person must choose which path to follow. We cannot be neutral about Jesus. Either we give ourselves fully to Him, or we will eventually betray Him for our own agendas.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* The End of Judas */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Tragic End of Judas</h2>
            <p>
              The Gospels record the aftermath of the betrayal in harrowing detail. After realizing what he had done, Judas was seized with remorse: "Then when Judas, His betrayer, saw that Jesus was condemned, he changed his mind and brought back the thirty pieces of silver to the chief priests and the elders, saying, 'I have sinned by betraying innocent blood'" (Matthew 27:3-4).
            </p>
            <p>
              The priests' response was cold: "What is that to us? See to it yourself." Throwing down the silver in the Temple, Judas went out and hanged himself (Matthew 27:5-7). The money was used to buy the potter's field, called the "Field of Blood" to this day.
            </p>
            <p>
              Luke adds another detail in Acts 1:18-19: "Now this man acquired a field with the reward of his wickedness, and falling headlong he burst open in the middle and all his bowels gushed out." This gruesome description likely describes what happened after his body fell, either from the rope breaking or from decomposition.
            </p>

            <h3>Remorse vs. Repentance</h3>
            <p>
              It is crucial to distinguish between <strong>remorse</strong> and <strong>repentance</strong>. Judas felt remorse—he regretted his actions and acknowledged his sin. But he did not repent in the biblical sense. True repentance involves turning to God for forgiveness and restoration. Judas turned instead to despair and self-destruction.
            </p>
            <p>
              Contrast Judas with Peter. Both betrayed Jesus—Judas by selling Him, Peter by denying Him three times. Both wept bitterly. But Peter waited for Jesus, received His forgiveness, and was restored to leadership. Judas took matters into his own hands and ended his life.
            </p>
            <p>
              The difference was not in the severity of their sins but in their response. Peter turned to Christ; Judas turned from Him. As St. Paul wrote: "Godly grief produces a repentance that leads to salvation without regret, whereas worldly grief produces death" (2 Corinthians 7:10).
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Church Fathers on Judas */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Church Fathers on Judas</h2>

            <h3>St. John Chrysostom on Judas's Greed</h3>
            <p>
              St. John Chrysostom preached powerfully on Judas's avarice:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Judas was not wicked from the beginning. He was numbered among the apostles, he was entrusted with the money bag, he was sent forth to preach. But greed entered, and through greed, theft; through theft, betrayal. See how sin grows by degrees! First he stole from the bag; then he sold his Master. Let us flee from the love of money, which is the root of all evils (1 Timothy 6:10)."</p>
            </blockquote>

            <h3>St. Augustine on Judas's Remorse</h3>
            <p>
              St. Augustine distinguished between true repentance and mere remorse:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Judas repented, but it was the repentance of despair, not of hope. He confessed his sin: 'I have sinned by betraying innocent blood.' But he did not seek forgiveness from God; rather, he hanged himself. Peter also sinned grievously by denying Christ, but he wept bitterly and waited for restoration. Let us imitate Peter, not Judas. When we fall, let us not despair but run to the mercy of God."</p>
            </blockquote>

            <h3>Origen on the Mystery of Betrayal</h3>
            <p>
              Origen reflected on why Jesus chose Judas knowing he would betray Him:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Why did Jesus choose Judas, knowing he would betray Him? To show that the Church would always contain both wheat and tares (Matthew 13:30). To demonstrate that proximity to holy things is not enough for salvation. To fulfill the Scriptures which foretold that the Messiah would be betrayed by a friend. And to warn us all that none are secure from falling if they do not persevere in grace."</p>
            </blockquote>

            <h3>St. Gregory the Great on Spiritual Blindness</h3>
            <p>
              St. Gregory wrote on the progressive hardening of Judas's heart:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Judas was first a thief, then a traitor, finally a suicide. Sin is never static; it either grows or shrinks. When we tolerate small sins, we prepare the way for greater ones. Judas did not fall in a day. His fall began with petty thefts from the common purse and ended with the betrayal of the Son of God. Let us resist sin in its beginnings, lest it grow into something terrible."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Saints' Reflections */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Saints' Reflections on Betrayal</h2>

            <h3>St. Francis de Sales on False Friends</h3>
            <p>
              St. Francis de Sales wrote about the pain of betrayal:
            </p>
            <blockquote className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-700 my-6">
              <p className="italic text-base">"Nothing wounds the heart more deeply than the ingratitude of a friend. Our Lord experienced this bitterness when Judas betrayed Him with a kiss. Let us learn from our Master to bear such injuries with patience, and to pray for those who despitefully use us. For the heart that is united to God cannot be moved by human ingratitude."</p>
            </blockquote>

            <h3>St. Thomas Aquinas on the Gravity of Betrayal</h3>
            <p>
              St. Thomas Aquinas analyzed why betrayal is such a grave sin:
            </p>
            <blockquote className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-700 my-6">
              <p className="italic text-base">"Treason is a special kind of sin because it violates the bond of trust that binds society together. Judas's betrayal was the worst of all betrayals because he betrayed not merely a friend, but God Himself. The higher the person betrayed, the graver the sin. And he who betrays under the appearance of friendship adds hypocrisy to treachery."</p>
            </blockquote>

            <h3>St. Josemaría Escrivá on Loyalty</h3>
            <p>
              St. Josemaría wrote about remaining faithful to Christ:
            </p>
            <blockquote className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-700 my-6">
              <p className="italic text-base">"Loyalty is the virtue of keeping faith with those who have trusted us. Judas was disloyal; he broke faith with the Master who had chosen him. Let us be loyal to Christ, even when it costs us something. Let us not be 'fair-weather Christians' who follow Him only when it is convenient. True discipleship requires fidelity in good times and bad."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Catholic Perspective */}
          <section className="bg-vatican-red/5 p-8 md:p-12 rounded-2xl border border-vatican-red/20">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Church className="h-6 w-6 text-vatican-red mr-3" />
              Holy Wednesday in the Catholic Church
            </h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Spy Wednesday</h3>
              <p>
                Holy Wednesday is traditionally called <strong>"Spy Wednesday"</strong> (Latin: <em>Dies Speculatoris</em>) because it commemorates the day Judas acted as a spy, conspiring with the chief priests to betray Jesus. The liturgy reflects on the growing darkness and the approach of Christ's passion.
              </p>

              <h3>Tenebrae Services</h3>
              <p>
                In the traditional Roman Rite, the Office of <strong>Tenebrae</strong> ("Darkness") was celebrated on the mornings of Holy Thursday, Good Friday, and Holy Saturday. Some churches continue this practice on Spy Wednesday evening. The service involves the gradual extinguishing of candles, symbolizing the growing darkness of sin and the abandonment of Jesus by His disciples.
              </p>
              <p>
                A single candle remains lit at the end, representing Christ. It is hidden behind the altar, symbolizing His burial. Then, in total darkness, a loud noise (<em>strepitus</em>) is made, representing the earthquake at Christ's death or the closing of the tomb.
              </p>

              <h3>Spiritual Preparation</h3>
              <p>
                Spy Wednesday is a day for Catholics to examine their own hearts for any hint of betrayal. Do we profess faith in Jesus while living in unrepentant sin? Do we value money, status, or comfort above loyalty to Christ? Are we faithful disciples or merely going through religious motions?
              </p>
              <p>
                Many Catholics make their final confession on Spy Wednesday, preparing their souls for the Easter Triduum. The day invites deep repentance and renewed commitment to Christ.
              </p>

              <h3>Traditions</h3>
              <ul>
                <li><strong>The Lenten Fast Intensifies:</strong> Many Catholics increase their fasting and prayer on Spy Wednesday, entering more deeply into the spirit of penance.</li>
                <li><strong>Scripture Reading:</strong> The faithful are encouraged to read the Passion narratives, contemplating Christ's suffering and the betrayal of Judas.</li>
                <li><strong>Almsgiving:</strong> In contrast to Judas's greed, Spy Wednesday is a traditional day for increased almsgiving, especially to the poor.</li>
                <li><strong>Silent Reflection:</strong> Many churches observe periods of silence, symbolizing the darkness growing in Judas's heart and the approaching Passion.</li>
              </ul>

              <h3>The Chrism Mass</h3>
              <p>
                In many dioceses, the <strong>Chrism Mass</strong> is celebrated on Holy Wednesday (or Holy Tuesday or Thursday morning). During this Mass, the bishop blesses the three holy oils used throughout the year: the Oil of Catechumens (for those preparing for baptism), the Oil of the Sick (for the Anointing of the Sick), and the Sacred Chrism (for baptism, confirmation, ordination, and the consecration of churches and altars).
              </p>
              <p>
                Priests also renew their priestly promises during this Mass, reaffirming their commitment to serve Christ and His Church. This stands in stark contrast to Judas, who broke his commitment to the Master who had chosen him.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Modern Spiritual Application */}
          <section className="bg-purple-50 p-8 md:p-12 rounded-2xl border border-purple-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Living Holy Wednesday Today</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Questions for Personal Reflection</h3>
              <ul>
                <li>Am I like Judas—close to Jesus in appearance but far from Him in my heart?</li>
                <li>What is my "thirty pieces of silver"? What would I trade my faith for?</li>
                <li>Do I give Jesus my best like Mary, or do I calculate the cost like Judas?</li>
                <li>When I sin, do I respond with Peter's repentance or Judas's despair?</li>
                <li>Am I loyal to Christ even when it costs me something?</li>
              </ul>

              <h3>Practical Applications</h3>
              <ul>
                <li><strong>Examine Your Heart:</strong> Use Spy Wednesday for a thorough examination of conscience. Are there areas of hidden sin or compromise?</li>
                <li><strong>Go to Confession:</strong> If you haven't been to confession this Lent, Spy Wednesday is an ideal time to receive the Sacrament of Reconciliation.</li>
                <li><strong>Practice Generosity:</strong> In contrast to Judas's greed, give generously to the poor or to your parish.</li>
                <li><strong>Pray for Those Who Have Betrayed You:</strong> Jesus prayed for His betrayers. Ask God to heal your wounds and help you forgive.</li>
                <li><strong>Renew Your Commitment:</strong> Reaffirm your loyalty to Christ, asking for the grace to remain faithful even in difficult times.</li>
              </ul>

              <h3>A Prayer for Holy Wednesday</h3>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-purple-700 my-6">
                <p className="italic text-base">"Lord Jesus Christ, betrayed by one of Your own disciples, have mercy on us. Cleanse our hearts of all treachery and hypocrisy. Give us the grace to remain faithful to You, even when it costs us something. Help us to love You as Mary did, holding nothing back. And when we fall, give us the repentance of Peter, not the despair of Judas. Amen."</p>
              </blockquote>
            </div>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8">
            <Link 
              href="/christianity/holy-week/holy-tuesday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Holy Tuesday
            </Link>
            <Link 
              href="/christianity/holy-week/maundy-thursday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              Maundy Thursday <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
