import Link from "next/link";
import { ArrowRight, ArrowLeft, Church, Crown, BookOpen } from "lucide-react";

export default function PalmSundayPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-red-50 rounded-full">
            <span className="text-2xl mr-2">🌿</span>
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">The Triumphal Entry</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Palm Sunday: <br />
            <span className="text-vatican-red">Hosanna to the King</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Palm Sunday marks the beginning of Holy Week, commemorating Jesus' triumphant entry into Jerusalem. Crowds welcomed Him with palm branches and shouts of "Hosanna!"—unaware that within days, these same voices would cry "Crucify Him!" This day reveals the paradox of Christ's kingship: a King who comes in peace, riding on a donkey, whose throne would be a Cross.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          
          {/* Historical Context */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Jerusalem at Passover: The Historical Context</h2>
            <p>
              To understand the significance of Palm Sunday, we must transport ourselves to Jerusalem in approximately 30 or 33 AD, during the Passover season. This was no ordinary time in the Jewish calendar—it was the commemoration of Israel's deliverance from Egypt, the defining moment of their national identity.
            </p>
            <p>
              The historian Josephus records that during Passover, Jerusalem's population would swell from around 50,000 to possibly 200,000 or more. Pilgrims from across the Jewish diaspora—Egypt, Syria, Asia Minor, Rome, and beyond—streamed into the holy city. The roads were crowded with travelers. The air was thick with anticipation and religious fervor. Roman authorities, ever wary of insurrection, increased their military presence, knowing that memories of the Exodus could easily ignite revolutionary hopes.
            </p>
            <p>
              Against this backdrop, Jesus approached Jerusalem. For three years, He had ministered in Galilee and Judea, teaching, healing, and performing signs that many interpreted as evidence that He was the long-awaited Messiah. The raising of Lazarus from the dead, reported in John's Gospel, had particularly electrified the region. Many now wondered: Would this Jesus finally reveal Himself as the conquering King who would drive out the Romans and restore the kingdom to Israel?
            </p>
            <p>
              The timing was deliberate. Jesus had avoided such public demonstrations earlier in His ministry, often withdrawing when crowds sought to make Him king by force (John 6:15). But now, with His "hour" approaching, He intentionally staged a public entry into Jerusalem that would fulfill prophecy and force a confrontation with the religious authorities. The die was cast.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Biblical Account */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Crown className="h-8 w-8 text-red-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The King Arrives</h2>
                <div className="w-12 h-1 bg-vatican-red mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Matthew 21:1-11</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>The Deliberate Fulfillment of Prophecy</h3>
              <p>
                As Jesus and His disciples approached Jerusalem from the east, coming through the Mount of Olives, He paused at Bethphage ("House of Unripe Figs") and Bethany. There He gave His disciples remarkably specific instructions: "Go into the village opposite you, and immediately you will find a donkey tied, and a colt with her; untie them and bring them to Me. If anyone says anything to you, you shall say, 'The Lord has need of them,' and immediately he will send them" (Matthew 21:2-3).
              </p>
              <p>
                Matthew notes that this was done to fulfill what was spoken by the prophet Zechariah, quoting directly from Zechariah 9:9. But Jesus' actions were not merely reactive to prophecy—He was actively, deliberately fulfilling it. The early Church Father St. John Chrysostom (c. 347-407 AD) observed: "He does not merely prophesy, but He also shows His authority. For He who knows where the donkey is, and that its owners will permit it to be taken, is not a mere man."
              </p>
              <p>
                The prophecy from Zechariah is worth examining in detail. Zechariah 9:9 reads: "Rejoice greatly, O daughter of Zion! Shout aloud, O daughter of Jerusalem! Behold, your king comes to you; triumphant and victorious is he, humble and riding on a donkey, on a colt, the foal of a donkey."
              </p>
              <p>
                This prophecy was given during the post-exilic period, when Israel had returned from Babylon but still lived under Persian domination. It promised a King who would come not as a conqueror on a warhorse, but in humility. The Jewish people had long interpreted this as a Messianic prophecy, but many expected the Messiah to also be a military deliverer. Jesus' deliberate enactment of this prophecy was a public claim to Messiahship—while simultaneously redefining what kind of Messiah He would be.
              </p>

              <h3>The Royal Procession</h3>
              <p>
                The disciples went and did as Jesus had directed them. They brought the donkey and the colt, laid their cloaks on them, and Jesus sat on the cloaks. This detail is significant: the placing of cloaks on the animal and on the road was a recognized act of royal homage. In 2 Kings 9:13, when Jehu was anointed king, his followers spread their cloaks on the bare steps before him, proclaiming: "Jehu is king!"
              </p>
              <p>
                Matthew tells us: "Most of the crowd spread their cloaks on the road, and others cut branches from the trees and spread them on the road" (Matthew 21:8). John's Gospel specifies that the branches were palm branches—a symbol of Jewish nationalism and victory. During the Maccabean revolt (2nd century BC), Judas Maccabeus had entered Jerusalem in triumph after defeating the Seleucid forces, and palm branches were carried in celebration. The palm branch appeared on coins minted during the Jewish revolt against Rome (66-70 AD).
              </p>
              <p>
                The crowd's acclamation drew from Psalm 118:25-26, part of the Hallel psalms (Psalms 113-118) sung during Passover:
              </p>
              <blockquote className="bg-red-50 p-6 rounded-lg border-l-4 border-vatican-red">
                <p className="italic text-lg mb-2">"Hosanna to the Son of David! Blessed is He who comes in the name of the Lord! Hosanna in the highest!"</p>
                <p className="text-sm text-stone-600">— Matthew 21:9</p>
              </blockquote>

              <h3>The Meaning of "Hosanna"</h3>
              <p>
                The word <strong>"Hosanna"</strong> comes from the Hebrew <em>hoshia-na</em>, meaning "Save, we pray!" or "Save now!" It appears in Psalm 118:25: "Save us, we beseech You, O LORD! O LORD, we beseech You, give us success!"
              </p>
              <p>
                By the first century, "Hosanna" had acquired a liturgical usage as a shout of praise and welcome. Yet it retained its original meaning—a cry for salvation. The crowds were not merely praising Jesus; they were calling upon Him to save them. The addition of "Son of David" was a Messianic title, explicitly acknowledging Jesus as the promised descendant of David who would restore the kingdom.
              </p>
              <p>
                St. Augustine (354-430 AD) wrote in his commentary on John's Gospel: "They were shouting 'Hosanna,' which means 'Save, I beseech You.' They were calling upon Him to save, not knowing that He had come to die, in order to save them by His blood."
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* The Symbolism of the Donkey */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Symbolism of the Donkey: A King of Peace</h2>
            <p>
              Jesus' choice of a donkey rather than a horse was laden with symbolic meaning that His contemporaries would have immediately recognized. In the ancient Near East, kings and conquerors rode horses, especially in military contexts. A king coming in war rode a horse or drove a chariot. A king coming in peace rode a donkey or mule.
            </p>
            <p>
              This symbolism was deeply rooted in Israel's history. King David had ridden a mule (1 Kings 1:33, 38, 44), and Solomon was anointed king while riding on David's mule. The donkey was thus associated with the Davidic monarchy—but specifically with kingship exercised in peace, not war.
            </p>
            <p>
              St. Jerome (c. 347-420 AD), the great biblical scholar and translator of the Vulgate, wrote: "The Lord sits upon the donkey, for He bears the Gentiles; and He sits upon the colt, for He bears the Jews. He sits upon both, for He gathers together into one both the near and the far off."
            </p>
            <p>
              The early Church Fathers saw additional layers of meaning. Origen (c. 185-254 AD) interpreted the donkey and her colt as symbols of the Old and New Testaments, or of the Jews and Gentiles. Jesus riding on the colt that had never been ridden (Mark 11:2; Luke 19:30) was seen as representing the Gentile world, previously untamed, now brought into submission to Christ.
            </p>
            <p>
              But the most profound symbolism was political and theological. Jesus was making a deliberate contrast with the Roman imperial procession that would have been familiar to His contemporaries. When a Roman general or emperor entered a city in triumph, it was a display of military might: soldiers, weapons, spoils of war, captives in chains. The Pax Romana (Roman Peace) was maintained through the threat of overwhelming violence.
            </p>
            <p>
              Jesus came differently. His kingship was not established by the sword but by sacrifice. His "triumphal entry" would lead not to a throne but to a Cross. His victory would be won not by killing His enemies but by dying for them. As He would later tell Pilate: "My kingdom is not of this world. If My kingdom were of this world, My servants would have been fighting, that I might not be delivered over to the Jews. But My kingdom is not from here" (John 18:36).
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Fickle Crowd */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <BookOpen className="h-8 w-8 text-stone-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Fickle Crowd</h2>
                <div className="w-12 h-1 bg-stone-600 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">From Hosanna to Crucify</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>From Triumph to Tragedy</h3>
              <p>
                Palm Sunday contains one of the most sobering lessons in all of Scripture: the same crowds that shouted "Hosanna!" on Sunday would shout "Crucify Him!" on Friday. This dramatic reversal reveals profound truths about human nature, religious enthusiasm, and the nature of genuine faith.
              </p>
              <p>
                The Gospels suggest that different groups were involved in these opposing reactions. The crowds welcoming Jesus into Jerusalem were likely Galilean pilgrims who had witnessed His miracles and heard His teaching. The crowds before Pilate may have been different—Jerusalem residents swayed by the chief priests, or a hand-picked mob assembled for the purpose of demanding crucifixion.
              </p>
              <p>
                Yet the essential point remains: popular opinion is fickle. Crowds are easily manipulated. Enthusiasm can turn to hatred when expectations are disappointed. Many who welcomed Jesus did so because they hoped He would be the kind of Messiah they wanted—a political liberator, a wonder-working provider, a national hero. When He failed to meet those expectations—when He spoke of suffering and death rather than conquest, when He cleared the Temple rather than purifying it for nationalistic purposes—their adoration turned to disillusionment.
              </p>
              <p>
                St. John Chrysostom preached powerfully on this theme: "Let us learn from this how unstable is the favor of the multitude. Today they say, 'Hosanna!' Tomorrow, 'Crucify Him!' Today they spread their garments in the way; tomorrow they pierce His hands and feet. Today they honor Him with branches; tomorrow they crown Him with thorns."
              </p>

              <h3>The Danger of Conditional Faith</h3>
              <p>
                The Palm Sunday crowd's conditional faith—they would follow Jesus as long as He met their expectations—serves as a warning for every generation. It is possible to be enthusiastic about Jesus for the wrong reasons, to want Him as a political ally, a social reformer, a genie who grants wishes, rather than as Lord and Savior.
              </p>
              <p>
                Jesus had encountered this before. After the feeding of the five thousand, the crowd wanted to seize Him and make Him king by force (John 6:15). But He withdrew. Later, He said to them: "Truly, truly, I say to you, you are seeking Me, not because you saw signs, but because you ate your fill of the loaves" (John 6:26). They wanted bread, not the Bread of Life.
              </p>
              <p>
                Genuine faith, Jesus taught, is not based on what we can get from God but on who God is. It persists not only in moments of triumph but also in seasons of suffering, confusion, and apparent defeat. The true disciple says with Peter: "Lord, to whom shall we go? You have the words of eternal life" (John 6:68)—even when those words are hard, even when the path leads to a Cross.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Catholic Perspective - Extended */}
          <section className="bg-vatican-red/5 p-8 md:p-12 rounded-2xl border border-vatican-red/20">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Church className="h-6 w-6 text-vatican-red mr-3" />
              Palm Sunday in the Catholic Church
            </h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>The Liturgy of Palms</h3>
              <p>
                Palm Sunday, also called <strong>Passion Sunday</strong> (<em>Dominica in Palmis</em>) in the Roman Catholic Church, begins with the <strong>Liturgy of the Palms</strong>. This liturgy has ancient roots. The pilgrim Egeria, who traveled to Jerusalem in the late 4th century, described the Palm Sunday celebration there:
              </p>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-red my-6">
                <p className="italic text-base">"At the seventh hour all the people go up to the Mount of Olives, that is, to the Eleona... And when the ninth hour approaches, they go up to the Imbomon, that is, to the place from which the Lord ascended into heaven. And when they arrive, the bishop and the people... take branches of palm or olive trees in their hands, and from the top of the Mount of Olives they go on foot to the city, repeating all the while: 'Blessed is He who comes in the name of the Lord.'"</p>
                <p className="text-sm text-stone-600 mt-2">— Egeria, <em>Peregrinatio Aetheriae</em></p>
              </blockquote>
              <p>
                The current Roman Missal provides for the blessing of palms outside the church, a procession into the church, and the solemn entrance of the celebrant. The priest wears red vestments, symbolizing both the royal blood of Christ the King and the Precious Blood He would soon shed. The Gospel account of Jesus' entry into Jerusalem (taken from the Gospel of the year in the three-year cycle) is proclaimed.
              </p>
              <p>
                The palms themselves are <strong>sacramentals</strong>—sacred signs that prepare us to receive grace and dispose us to cooperate with it. The Catechism of the Catholic Church teaches that sacramentals "prepare us to receive grace and dispose us to cooperate with it" (CCC 1670). The blessed palms are not magic objects but physical signs that point beyond themselves to spiritual realities.
              </p>

              <h3>The Passion Gospel</h3>
              <p>
                The most striking feature of the Palm Sunday liturgy is the proclamation of the <strong>Passion narrative</strong>—the detailed account of Jesus' suffering and death. This is one of the few times during the year when a Gospel reading is not simply read but dramatically proclaimed, often with multiple readers taking different parts: narrator, Jesus, Peter, Pilate, and other characters.
              </p>
              <p>
                The congregation participates by speaking the words of the crowd, including the haunting cry: "Crucify Him! Crucify Him!" This participation is intentionally uncomfortable. It forces the faithful to acknowledge their own complicity in Christ's death—not because they were physically present in Jerusalem, but because their sins contributed to the necessity of His sacrifice.
              </p>
              <p>
                St. Paul wrote: "I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures" (1 Corinthians 15:3). The "our" includes all of us. The Passion reading confronts us with this uncomfortable truth: we are not merely spectators of Christ's suffering; we are its cause.
              </p>

              <h3>From Triumph to Tragedy: The Liturgical Movement</h3>
              <p>
                The Palm Sunday liturgy enacts a dramatic movement from triumph to tragedy, from "Hosanna!" to "Crucify Him!" This movement is not meant to discourage the faithful but to prepare them for the journey through Holy Week. The joy of the palm procession gives way to the somber reading of the Passion, reminding us that the way to glory leads through suffering.
              </p>
              <p>
                Pope Benedict XVI reflected on this liturgical movement in his homily for Palm Sunday 2011: "The Palm Sunday procession can be regarded as a symbol of the Church's pilgrimage... It is the image of the Church, of the pilgrim Church, which, in the course of the year, walks behind the Lord, who advances in the sign of the Cross."
              </p>

              <h3>Traditions and Customs</h3>
              <p>
                <strong>Palm Weaving:</strong> In many Catholic cultures, the faithful weave their blessed palms into intricate crosses, braids, and other religious symbols. In Poland, Lithuania, and other Eastern European countries, elaborate "palms" are made using dried flowers and willow branches. In the Philippines, palm fronds are woven into <em>palaspas</em>, elaborate decorations that are carried in procession and kept in homes throughout the year.
              </p>
              <p>
                <strong>The Cycle of Palms and Ashes:</strong> Traditionally, the palms from the previous year are burned, and their ashes are used for the imposition of ashes on Ash Wednesday. This creates a beautiful liturgical cycle: the triumph of Palm Sunday becomes the penance of Ash Wednesday. The palms that symbolized Christ's kingship are transformed into ashes that symbolize our mortality and need for repentance.
              </p>
              <p>
                <strong>Processions:</strong> In many countries, elaborate Palm Sunday processions reenact Jesus' entry into Jerusalem. In Jerusalem itself, pilgrims still process from the Mount of Olives into the Old City, just as Egeria described in the 4th century. In the Philippines, the priest rides on horseback in some processions, blessing the crowds with holy water. In Spain and Latin America, elaborate floats (<em>pasos</em>) depicting Christ's entry into Jerusalem are carried through the streets.
              </p>

              <h3>Spiritual Themes for Meditation</h3>
              <p>
                The Church invites the faithful to meditate on several themes during Palm Sunday:
              </p>
              <ul>
                <li><strong>The Nature of Christ's Kingship:</strong> He is King, but His kingdom is not of this world. His crown is of thorns, His throne is the Cross. Do we accept Him as King on His terms, or only on ours?</li>
                <li><strong>The Fickleness of Human Approval:</strong> The same crowd that shouted "Hosanna!" shouted "Crucify Him!" Do we follow Jesus only when it is popular, only when He meets our expectations?</li>
                <li><strong>The Cost of Discipleship:</strong> To follow Jesus means following Him to Calvary. Are we willing to suffer with Him, or do we want only the triumph without the Cross?</li>
                <li><strong>Our Complicity in Christ's Death:</strong> As we speak the words "Crucify Him!" during the Passion reading, we acknowledge that our sins contributed to His suffering. This recognition leads to repentance and gratitude for His mercy.</li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* The Church Fathers */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Church Fathers on Palm Sunday</h2>
            <p>
              The early Church Fathers saw profound theological significance in Jesus' triumphal entry. Their reflections enrich our understanding of this pivotal moment.
            </p>

            <h3>St. Andrew of Crete (c. 650-740 AD)</h3>
            <p>
              St. Andrew of Crete preached a famous Palm Sunday homily that has become part of the Church's liturgical tradition. He wrote:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Let us go to meet Christ on the Mount of Olives. Let us spread before His feet, not garments or leafy branches, which delight the eye for a few hours and then wither, but ourselves, clothed in His grace, or rather, clothed completely in Him... Let us present to Him the triumphal procession of our faith and our love."</p>
            </blockquote>

            <h3>St. Cyril of Alexandria (c. 376-444 AD)</h3>
            <p>
              St. Cyril of Alexandria emphasized the significance of the donkey as a symbol of the unclean Gentiles being brought into subjection to Christ:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The donkey was bound, and by its side stood its colt. The donkey represents the Jewish people, accustomed to the yoke of the Law, while the colt, which had not yet been broken in, represents the Gentile peoples, who had not been subject to the Law. Both are brought to Christ, that He may sit upon them."</p>
            </blockquote>

            <h3>St. Ephrem the Syrian (c. 306-373 AD)</h3>
            <p>
              The great Syriac poet-theologian composed hymns for Palm Sunday that captured the paradox of Christ's kingship:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The foal on which He rode, though it was a beast, perceived the King who sat upon it, and it was silent... The stones also perceived the King, and would have cried out, had the children not sung His praise... The King of heaven rode upon a humble colt, for He was humble. Had He desired, He could have ridden upon the Cherubim."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Application for Today */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Palm Sunday for Today: Living the Mystery</h2>
            <p>
              Palm Sunday is not merely a historical commemoration but a living mystery in which we participate. Each year, the Church invites us to join the procession, to wave our palms, to shout "Hosanna!"—and then to listen to the Passion and confront our own weakness and sin.
            </p>
            <p>
              <strong>Which crowd are we in?</strong> This is the question Palm Sunday forces us to face. Do we follow Jesus only when it is popular, only when He meets our expectations? Or are we willing to follow Him even to Calvary, even when His way contradicts our desires?
            </p>
            <p>
              <strong>What kind of Messiah do we want?</strong> Many in the Palm Sunday crowd wanted a political liberator, a wonder-worker, a provider of bread. Jesus refused to be those things on their terms. He came to be Savior and Lord—to die for their sins and to call them to take up their crosses. Do we accept Him as He is, or do we try to remake Him in our image?
            </p>
            <p>
              <strong>Are we willing to enter Jerusalem with Him?</strong> Jesus knew what awaited Him in Jerusalem. He had predicted His death three times. Yet He set His face to go there (Luke 9:51). To follow Him means entering our own "Jerusalem"—the place of trial, surrender, and death to self. It means trusting that beyond the Cross lies resurrection.
            </p>
            <p>
              As we begin Holy Week, the Church invites us to walk with Jesus through these sacred days—not as spectators but as participants. The liturgy will take us to the Upper Room for the Last Supper, to Gethsemane for the agony, to Calvary for the crucifixion, and finally to the empty tomb for the resurrection. The journey begins with palm branches and shouts of "Hosanna!" It will end with the triumph of Easter. But in between lies the Cross.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Historical Context: Passover Pilgrimages */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Passover Pilgrimages in First-Century Jerusalem</h2>
            <p>
              The Passover pilgrimage was one of three required festivals where Jewish men were commanded to appear before the Lord in Jerusalem (Deuteronomy 16:16). The other two were Pentecost (Shavuot) and Tabernacles (Sukkot). By the first century, the Passover pilgrimage had become the largest and most significant of these gatherings, drawing Jews from across the Mediterranean world and beyond.
            </p>
            <p>
              The Jewish historian Flavius Josephus provides invaluable testimony about the scale of these gatherings. In his work <em>The Jewish War</em>, he records that during one Passover in the time of Emperor Nero, the priests counted 256,500 lambs sacrificed. Since each lamb was shared by a minimum of ten people (as required by Jewish law), this suggests a population in Jerusalem of approximately 2.7 million people during the festival—a staggering number for an ancient city.
            </p>
            <p>
              Modern scholars debate these figures, suggesting they may be exaggerated, but even conservative estimates indicate that Jerusalem's population swelled dramatically during Passover. The city's normal population of 50,000-80,000 could easily triple or quadruple. Every available space was used: pilgrims camped in the hills surrounding the city, stayed with relatives, or rented rooms at inflated prices.
            </p>
            <p>
              The economic impact was enormous. Money changers set up tables to convert foreign currency into Tyrian shekels (the only acceptable currency for Temple tax). Merchants sold sacrificial animals, food, and supplies. The Temple courts bustled with activity as priests conducted thousands of sacrifices. The atmosphere was charged with religious fervor and nationalistic hopes—memories of the Exodus blending with desires for liberation from Roman rule.
            </p>
            <p>
              The Roman authorities watched these gatherings with concern. They knew that the celebration of Israel's liberation from Egypt could easily inspire thoughts of liberation from Rome. Pontius Pilate, the Roman prefect of Judea from 26-36 AD, would have traveled from his usual residence in Caesarea Maritima to Jerusalem during Passover, bringing additional troops to maintain order. The Roman garrison at the Antonia Fortress, overlooking the Temple courts, was on high alert.
            </p>
            <p>
              Against this backdrop of pilgrimage, sacrifice, political tension, and messianic expectation, Jesus approached Jerusalem. The crowds that welcomed Him were caught up in the Passover spirit—remembering God's past deliverance and hoping for a new deliverance. They saw in Jesus a potential Messiah who might finally fulfill their national hopes. Little did they know that the deliverance He would bring would be far greater than anything they imagined.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Liturgical Music and Hymnody */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Sacred Music of Palm Sunday</h2>
            <p>
              The Church has always celebrated Palm Sunday with song, recognizing that music lifts the heart to God and helps the faithful enter into the mystery of the liturgy. The hymns and chants of Palm Sunday are among the most beloved in the Catholic tradition.
            </p>

            <h3>"All Glory, Laud, and Honor"</h3>
            <p>
              The most famous Palm Sunday hymn in the English-speaking world is "All Glory, Laud, and Honor" (<em>Gloria, laus et honor</em>), written by St. Theodulf of Orléans (c. 760-821 AD) while he was imprisoned in Angers, France. According to tradition, Theodulf composed the hymn while in prison, and when Emperor Louis the Pious passed by during the Palm Sunday procession and heard it sung, he was so moved that he ordered Theodulf's release.
            </p>
            <p>
              The hymn is structured as a dialogue between the choir and the congregation, reflecting the antiphonal singing that characterized early Christian worship. The text draws directly from the Gospel accounts of the triumphal entry:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"All glory, laud, and honor,<br/>
              To Thee, Redeemer, King!<br/>
              To whom the lips of children<br/>
              Made sweet hosannas ring."</p>
            </blockquote>
            <p>
              Each verse of the hymn adds theological depth to the Gospel narrative. One verse proclaims: "The multitude of pilgrims / With palms before Thee went; / Our praise and prayer and anthems / Before Thee we present." This connects the ancient pilgrims to the present congregation—we, too, are pilgrims bringing our praise to the King.
            </p>

            <h3>Gregorian Chant: "Pueri Hebraeorum"</h3>
            <p>
              The traditional Gregorian chant for Palm Sunday is <strong>"Pueri Hebraeorum"</strong> ("The Children of the Hebrews"), which serves as the antiphon during the procession with palms. The Latin text reads:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Pueri Hebraeorum, portantes ramos olivarum, obviaverunt Domino, clamantes et dicentes: Hosanna in excelsis."</p>
              <p className="text-sm text-stone-600 mt-2">Translation: "The children of the Hebrews, carrying olive branches, went to meet the Lord, crying out and saying: Hosanna in the highest."</p>
            </blockquote>
            <p>
              This chant has been sung in the Church for over a thousand years, connecting modern Catholics to the universal Church across time and space. The simplicity of the chant allows the words to shine, focusing attention on the Gospel event being commemorated.
            </p>

            <h3>Modern Catholic Hymns</h3>
            <p>
              Contemporary Catholic composers have also contributed beautiful music for Palm Sunday. Hymns like "Hosanna, Loud Hosanna" by Jeanette Threlfall (1821-1880) remain popular in many parishes. The refrain captures the children's role in the Gospel narrative: "Hosanna, loud hosanna, the little children sang."
            </p>
            <p>
              Many contemporary settings of the Passion have been composed for Palm Sunday, allowing congregations to participate in the dramatic reading. Composers like Bob Hurd, Marty Haugen, and David Haas have created settings that combine fidelity to the biblical text with musical accessibility for contemporary congregations.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Archaeological Evidence */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Archaeological Evidence for the Triumphal Entry</h2>
            <p>
              While archaeology cannot prove the theological claims of Palm Sunday, it illuminates the historical and geographical context of Jesus' entry into Jerusalem, helping us visualize the event with greater clarity.
            </p>

            <h3>The Road from Bethany</h3>
            <p>
              Jesus approached Jerusalem from the east, coming from Bethany (modern-day Al-Eizariya) on the eastern slope of the Mount of Olives. Archaeological surveys have identified the ancient road that Jesus would have traveled. The distance from Bethany to Jerusalem is approximately two miles (three kilometers), a journey that would have taken about 45 minutes on foot or by donkey.
            </p>
            <p>
              The road wound up the western slope of the Mount of Olives, offering spectacular views of Jerusalem across the Kidron Valley. As Jesus crested the Mount of Olives, the city would have come into view—the gleaming white stones of Herod's Temple, the impressive walls, the Antonia Fortress. It was at this point, Luke's Gospel tells us, that Jesus wept over the city (Luke 19:41-44).
            </p>

            <h3>The Golden Gate</h3>
            <p>
              The traditional location of Jesus' entry into the city is the <strong>Golden Gate</strong> (also called the Eastern Gate or Beautiful Gate), located in the eastern wall of the Temple Mount. While the current gate dates to the 6th or 7th century AD (with later renovations), it likely stands on the site of an earlier gate from the Second Temple period.
            </p>
            <p>
              The Golden Gate holds profound messianic significance in Jewish and Christian tradition. Ezekiel 44:1-3 prophesied that the eastern gate of the Temple would be closed and that only the "prince" would enter by it. This was interpreted messianically, and the gate's closure in 1541 by Ottoman Sultan Suleiman the Magnificent (to prevent the Messiah's entry) ironically fulfilled Ezekiel's prophecy.
            </p>

            <h3>Bethphage and Bethany</h3>
            <p>
              Excavations at <strong>Bethphage</strong> ("House of Unripe Figs") have identified the remains of a small village on the eastern slope of the Mount of Olives, consistent with the Gospel account. A Crusader-era chapel marks the traditional site where Jesus sent His disciples to find the donkey.
            </p>
            <p>
              <strong>Bethany</strong> ("House of Affliction" or "House of Dates") has been continuously identified since the 4th century. Archaeological excavations have revealed a settlement from the Second Temple period, with tombs, dwellings, and agricultural installations. The traditional tomb of Lazarus is located here, and a church built over the traditional site of Martha and Mary's house commemorates Jesus' friendship with this family.
            </p>

            <h3>The Mount of Olives</h3>
            <p>
              The Mount of Olives rises about 100 meters higher than the Temple Mount, providing a commanding view of Jerusalem. In Jesus' time, it was covered with olive groves (hence its name) and was a place of prayer and retreat. Jesus spent His final nights here during Passion Week (Luke 21:37), and it was here that He taught His disciples about the end times (the Olivet Discourse).
            </p>
            <p>
              Today, the Mount of Olives is home to several churches commemorating events from Holy Week: the Church of the Pater Noster (where Jesus taught the Lord's Prayer), Dominus Flevit (where He wept over Jerusalem), the Church of All Nations (Gethsemane), and the Church of Mary Magdalene. The slope facing Jerusalem contains a vast Jewish cemetery, as the Mount of Olives is traditionally associated with the resurrection of the dead (Zechariah 14:4).
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Modern Spiritual Application */}
          <section className="bg-vatican-gold/10 p-8 md:p-12 rounded-2xl border border-vatican-gold/30">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Living Palm Sunday Today</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Personal and Family Traditions</h3>
              <p>
                Palm Sunday offers rich opportunities for spiritual growth and family bonding. Here are some ways Catholics can enter more deeply into this sacred day:
              </p>
              <ul>
                <li><strong>Attend the Full Liturgy:</strong> Arrive early for the blessing of palms and the procession. Participate fully in the Passion reading, even when it requires speaking difficult words.</li>
                <li><strong>Keep Blessed Palms in the Home:</strong> Place palms behind a crucifix or religious image. They serve as a reminder of Christ's kingship throughout the year.</li>
                <li><strong>Family Reflection:</strong> After Mass, discuss the contrast between "Hosanna!" and "Crucify Him!" Ask: Which crowd are we in? How do we welcome Jesus into our lives?</li>
                <li><strong>Begin Holy Week Practices:</strong> Use Palm Sunday to begin intensified prayer, fasting, and almsgiving for the coming week.</li>
                <li><strong>Teach Children:</strong> Explain to children why Jesus rode a donkey instead of a horse. Help them understand that His kingdom is different from earthly kingdoms.</li>
              </ul>

              <h3>Questions for Personal Reflection</h3>
              <p>
                Palm Sunday invites us to examine our own discipleship:
              </p>
              <ul>
                <li>Do I follow Jesus only when it is convenient or popular?</li>
                <li>Have I created Jesus in my own image, wanting Him to be what I want rather than accepting Him as He is?</li>
                <li>Am I willing to follow Jesus even to Calvary, or do I want only the triumph without the Cross?</li>
                <li>How do I welcome Jesus into my daily life—in prayer, in the poor, in the Eucharist?</li>
                <li>What "garments" can I spread before the Lord—the offering of my time, talents, and treasures?</li>
              </ul>

              <h3>Connecting to Daily Life</h3>
              <p>
                The palm procession is not just a historical reenactment; it is a symbol of our entire Christian journey. Each day, we are called to welcome Christ into our hearts, to lay down our "garments" before Him, to cry "Hosanna!"—Save us, Lord!—and to follow Him wherever He leads.
              </p>
              <p>
                Pope Francis, in his Palm Sunday homily of 2020, reflected: "Jesus Himself provides the interpretive key to understanding the 'hosanna' and the 'crucify him.' He does so at the Last Supper, when He takes the bread, blesses it, breaks it, and gives it to His disciples... The hosanna and the crucify him are brought together in the silent love of Jesus, in His own broken body, in His own blood poured out."
              </p>
              <p>
                May we, as we wave our palms and listen to the Passion, be drawn more deeply into that silent love, that broken body, that poured-out blood. May we follow Jesus not only on Palm Sunday but through Holy Week and throughout our lives, until we join the eternal procession of the saints, singing: "Salvation belongs to our God who sits on the throne, and to the Lamb!" (Revelation 7:10).
              </p>
            </div>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8">
            <Link 
              href="/christianity/holy-week"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Holy Week Overview
            </Link>
            <Link 
              href="/christianity/holy-week/holy-monday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              Holy Monday <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
