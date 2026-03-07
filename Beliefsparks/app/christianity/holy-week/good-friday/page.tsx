import Link from "next/link";
import { ArrowRight, ArrowLeft, Church, Cross, Heart, Scale } from "lucide-react";

export default function GoodFridayPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-red-100 rounded-full">
            <Cross className="h-5 w-5 text-red-800 mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">The Day of the Cross</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Good Friday: <br />
            <span className="text-red-800">It Is Finished</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            On Good Friday, Jesus Christ was crucified under Pontius Pilate. He suffered, died, and was buried. This is the most solemn day in the Christian calendar—the day when the Lamb of God offered Himself as the perfect sacrifice for the sins of the world. From the horror of the Cross flows the mercy of redemption. This is the day death died.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          
          {/* Historical Context of Crucifixion */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Crucifixion in the Roman World</h2>
            <p>
              Crucifixion was one of the most brutal forms of execution ever devised. The Romans did not invent it—they learned it from the Carthaginians, who likely learned it from the Persians—but they perfected it as a tool of terror and control. It was reserved for the lowest classes: slaves, pirates, and rebels against Rome. Roman citizens were generally exempt from crucifixion, except in cases of treason.
            </p>
            <p>
              The Jewish historian Josephus called crucifixion "the most wretched of deaths." The Roman statesman Cicero wrote: "The very word 'cross' should be far removed not only from the person of a Roman citizen but from his thoughts, his eyes, and his ears. For it is not only the actual occurrence of these things or the endurance of them, but liability to them, the expectation, indeed the very mention of them, that is unworthy of a Roman citizen and a free man."
            </p>
            <p>
              The Romans used crucifixion as a public spectacle and deterrent. Crosses were erected along busy roads, outside city gates, and on hillsides, so that all could see the fate awaiting those who challenged Roman authority. Victims were often left hanging for days, their bodies exposed to the elements and scavenging birds, until they finally died. The psychological terror was as important as the physical suffering.
            </p>
            <p>
              In Judea, crucifixion was particularly associated with the suppression of rebellion. After the Jewish revolt of 4 BC following the death of Herod the Great, the Roman general Quintilius Varus crucified 2,000 Jewish rebels in and around Jerusalem. During the siege of Jerusalem in 70 AD, the Roman general Titus crucified as many as 500 Jews per day outside the city walls, until there was no more wood for crosses.
            </p>
            <p>
              Against this brutal historical backdrop, Jesus' crucifixion was not unique in method—but uniquely significant in meaning. What the Romans meant as a display of power and shame, God transformed into the means of salvation.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Trial and Condemnation */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scale className="h-8 w-8 text-stone-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Trial</h2>
                <div className="w-12 h-1 bg-stone-700 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Matthew 27:11-26</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>Before the Sanhedrin</h3>
              <p>
                After His arrest in Gethsemane, Jesus was taken first to Annas, the former high priest and father-in-law of Caiaphas, the current high priest. Annas questioned Jesus about His disciples and teaching. Jesus replied: "I have spoken openly to the world. I have always taught in synagogues and in the Temple, where all Jews come together. I have said nothing in secret. Why do you ask Me? Ask those who have heard Me what I said to them; they know what I said" (John 18:20-21).
              </p>
              <p>
                An officer struck Jesus: "Is that how You answer the high priest?" Jesus answered: "If what I said is wrong, bear witness about the wrong; but if what I said is right, why do you strike Me?" (John 18:22-23). This exchange reveals the illegality of the proceeding—Jewish law forbade striking a defendant during trial.
              </p>
              <p>
                Jesus was then taken to Caiaphas, where the chief priests, elders, and scribes had gathered. The Sanhedrin sought false testimony against Jesus, but their witnesses contradicted each other. Finally, two witnesses came forward: "This man said, 'I am able to destroy the Temple of God, and to rebuild it in three days'" (Matthew 26:61). This was a distortion of Jesus' words in John 2:19: "Destroy this temple, and in three days I will raise it up"—words He spoke about His body.
              </p>
              <p>
                The high priest asked Jesus: "Do You answer nothing? What is it these men testify against You?" Jesus remained silent. Then Caiaphas put Him under oath: "I adjure You by the living God, tell us if You are the Christ, the Son of God" (Matthew 26:63). Jesus answered: "You have said so. But I tell you, from now on you will see the Son of Man seated at the right hand of Power and coming on the clouds of heaven" (Matthew 26:64).
              </p>
              <p>
                Caiaphas tore his robes (a sign of mourning or horror) and declared: "He has uttered blasphemy. What further witnesses do we need? You have now heard His blasphemy. What is your judgment?" They answered: "He deserves death" (Matthew 26:65-66). They spat in His face, struck Him, slapped Him, and mocked Him: "Prophesy to us, You Christ! Who is it that struck You?" (Matthew 26:68).
              </p>

              <h3>Before Pilate</h3>
              <p>
                The Sanhedrin lacked the authority to execute criminals under Roman rule. So early Friday morning, they bound Jesus and led Him to <strong>Pontius Pilate</strong>, the Roman prefect (governor) of Judea from 26-36 AD. Pilate resided in the Praetorium, likely the former palace of Herod the Great in Jerusalem.
              </p>
              <p>
                The Jewish leaders would not enter the Praetorium, to avoid ritual defilement before Passover. This irony was not lost on John: they were scrupulous about ceremonial purity while plotting the murder of the Son of God. Pilate came out to them and asked: "What accusation do you bring against this man?" They answered: "If this man were not doing evil, we would not have delivered Him over to you" (John 18:29-30).
              </p>
              <p>
                Pilate's interview with Jesus is recorded in all four Gospels. He asked: "Are You the King of the Jews?" Jesus replied: "Do you say this of your own accord, or did others say it to you about Me?" Pilate answered: "Am I a Jew? Your own nation and the chief priests have delivered You over to me. What have You done?" Jesus answered: "My kingdom is not of this world. If My kingdom were of this world, My servants would have been fighting, that I might not be delivered over to the Jews. But My kingdom is not from the world" (John 18:33-36).
              </p>
              <p>
                Pilate asked: "So You are a king?" Jesus answered: "You say that I am a king. For this purpose I was born and for this purpose I have come into the world—to bear witness to the truth. Everyone who is of the truth listens to My voice." Pilate famously replied: "What is truth?" (John 18:37-38). He then went out to the Jews and declared: "I find no guilt in Him" (John 18:38).
              </p>

              <h3>Before Herod and Back to Pilate</h3>
              <p>
                When Pilate learned that Jesus was from Galilee, he sent Him to Herod Antipas, the tetrarch of Galilee, who was in Jerusalem for Passover. Herod had wanted to see Jesus for a long time, hoping to see a sign performed by Him. He questioned Jesus at length, but Jesus gave him no answer. The chief priests and scribes stood by, vehemently accusing Him. Herod and his soldiers mocked Him, arrayed Him in splendid clothing, and sent Him back to Pilate (Luke 23:8-11).
              </p>
              <p>
                Pilate then declared to the chief priests and the people: "You brought me this man as one who was misleading the people. And after examining Him before you, behold, I did not find this man guilty of any of your charges against Him. Neither did Herod, for he sent Him back to us. Look, nothing deserving death has been done by Him. I will therefore punish and release Him" (Luke 23:14-16).
              </p>

              <h3>The Crowd Chooses Barabbas</h3>
              <p>
                Pilate had a custom of releasing one prisoner at Passover. He offered the crowd a choice: Jesus, called Christ, or <strong>Barabbas</strong> (whose name means "son of the father"—a grim irony). Matthew tells us that Pilate knew it was out of envy that the chief priests had delivered Jesus up (Matthew 27:18).
              </p>
              <p>
                While Pilate was sitting on the judgment seat, his wife sent word: "Have nothing to do with that righteous Man, for I have suffered much over Him today in a dream" (Matthew 27:19). Pilate tried to release Jesus, but the crowd, stirred up by the chief priests, shouted: "If you release this man, you are not Caesar's friend. Everyone who makes himself a king opposes Caesar" (John 19:12).
              </p>
              <p>
                This was a threat. If Pilate released a man accused of claiming kingship, his enemies could accuse him of disloyalty to Caesar. Pilate's position was already precarious—he had twice provoked riots by bringing Roman standards bearing the emperor's image into Jerusalem, and he had used Temple funds to build an aqueduct. He could not afford another incident.
              </p>
              <p>
                Pilate took water and washed his hands before the crowd: "I am innocent of this man's blood; see to it yourselves." The people answered: "His blood be on us and on our children!" (Matthew 27:24-25). This cry has been tragically misused throughout history to justify anti-Semitism, but the Church now teaches that it cannot be understood as a condemnation of the Jewish people as a whole. The Catechism states: "Jews are not collectively responsible for Jesus' death" (CCC 597).
              </p>
              <p>
                Pilate released Barabbas—a terrorist and murderer—and had Jesus scourged, then handed Him over to be crucified.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* The Scourging and Mockery */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Scourging and Mockery</h2>
            <p>
              <strong>Scourging</strong> (<em>flagellatio</em>) was a brutal Roman punishment, sometimes a prelude to crucifixion, sometimes a punishment in itself. The victim was stripped, tied to a post, and beaten with a <em>flagrum</em>—a whip with multiple leather thongs embedded with pieces of bone, metal, or stone.
            </p>
            <p>
              The <em>flagrum</em> tore through skin, muscle, and sometimes even exposed internal organs. Many victims died from scourging alone. The loss of blood could be substantial, leading to hypovolemic shock. The pain was excruciating, and the psychological trauma profound.
            </p>
            <p>
              After the scourging, the Roman soldiers engaged in a mock coronation. They clothed Jesus in a purple robe (or scarlet, according to Matthew), pressed a crown of thorns onto His head, placed a reed in His hand as a scepter, and knelt before Him: "Hail, King of the Jews!" They spat on Him, struck Him with the reed, and struck His head with a rod (Matthew 27:27-31; Mark 15:16-20; John 19:1-3).
            </p>
            <p>
              This mockery reveals the depth of human cruelty but also the supreme irony. The soldiers thought they were mocking a pathetic pretender. In fact, they were crowning the true King—not just of the Jews, but of the universe. The purple robe, the crown, the scepter, the kneeling—these were the elements of a true coronation, though perverted by hatred. As St. John Chrysostom preached: "They did these things in mockery, but they were actually proclaiming the truth. For He truly is the King."
            </p>
            <p>
              The <strong>crown of thorns</strong> is particularly rich in symbolism. Thorns were part of the curse resulting from Adam's sin: "Cursed is the ground because of you; in pain you shall eat of it all the days of your life; thorns and thistles it shall bring forth for you" (Genesis 3:17-18). By wearing the crown of thorns, Jesus bore the curse of the Fall. He who was blessed became a curse for us (Galatians 3:13).
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Crucifixion */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Cross className="h-8 w-8 text-red-800" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Crucifixion</h2>
                <div className="w-12 h-1 bg-red-800 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Matthew 27:32-56</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>The Way of the Cross</h3>
              <p>
                Weakened by scourging, Jesus struggled to carry His crossbeam (<em>patibulum</em>) to the execution site. The upright post (<em>stipes</em>) was likely already in place at Golgotha. The complete cross would have been too heavy for one man to carry, especially after scourging.
              </p>
              <p>
                The Gospels record that <strong>Simon of Cyrene</strong> was compelled to carry Jesus' cross (Matthew 27:32; Mark 15:21; Luke 23:26). Cyrene was a city in North Africa (modern Libya) with a large Jewish population. Mark mentions that Simon was the father of Alexander and Rufus—suggesting these men were known in the early Christian community. Perhaps Simon's encounter with the dying Christ led to conversion for his whole family.
              </p>
              <p>
                A large crowd followed, including women who mourned and lamented. Jesus turned to them: "Daughters of Jerusalem, do not weep for Me, but weep for yourselves and for your children. For behold, the days are coming when they will say, 'Blessed are the barren and the wombs that never bore and the breasts that never nursed!' Then they will begin to say to the mountains, 'Fall on us,' and to the hills, 'Cover us.' For if they do these things when the wood is green, what will happen when it is dry?" (Luke 23:28-31).
              </p>
              <p>
                This prophecy was fulfilled in 70 AD when the Romans destroyed Jerusalem. Josephus records that during the siege, mothers ate their own children, and thousands perished. Jesus predicted this catastrophe and mourned over a city that rejected the Prince of Peace.
              </p>

              <h3>Golgotha: The Place of the Skull</h3>
              <p>
                The execution site was called <strong>Golgotha</strong> (Aramaic for "skull") or <strong>Calvary</strong> (from Latin <em>calvaria</em>, "skull"). The name may refer to the shape of the hill, which resembled a skull, or to a place where skulls were deposited after executions.
              </p>
              <p>
                The traditional site of Calvary is now enclosed within the Church of the Holy Sepulchre in Jerusalem. Archaeological evidence confirms that this area was outside the city walls in Jesus' time and had been used as a quarry. A rocky outcrop identified as Calvary can still be seen in the church, though much altered by centuries of construction.
              </p>
              <p>
                Jesus was offered wine mixed with myrrh (or gall, according to Matthew)—a mild sedative to dull the pain. He refused it (Matthew 27:34; Mark 15:23). He would face death fully conscious, drinking the cup of God's wrath to the dregs.
              </p>

              <h3>Nailed to the Cross</h3>
              <p>
                Jesus was stripped and laid on the crossbeam. His wrists (not palms—the flesh would tear) were nailed to the wood with iron spikes 5-7 inches long. The nail would have crushed the median nerve, causing excruciating pain (the word "excruciating" literally means "out of the cross").
              </p>
              <p>
                His feet were then nailed to the upright post, either one foot over the other or side by side. The position made breathing difficult—the weight of the body pulled down on the arms, expanding the chest but preventing exhalation. The victim had to push up on the nailed feet to breathe, causing searing pain, until exhaustion set in and suffocation occurred.
              </p>
              <p>
                The crucifixion began at the <strong>third hour</strong> (9:00 AM) according to Mark 15:25. A sign was placed above His head: "This is Jesus, the King of the Jews" (Matthew 27:37). Pilate had ordered this inscription, written in Hebrew, Latin, and Greek, as a final insult to the Jewish leaders and perhaps as a subtle rebuke to those who had forced his hand. The chief priests protested: "Do not write, 'The King of the Jews,' but rather, 'This man said, I am King of the Jews.'" Pilate answered: "What I have written I have written" (John 19:21-22).
              </p>

              <h3>The Seven Last Words</h3>
              <p>
                From the Cross, Jesus spoke seven times, traditionally called the <strong>"Seven Last Words"</strong>:
              </p>
              <ol>
                <li><strong>Father, forgive them:</strong> "Father, forgive them, for they know not what they do" (Luke 23:34). Even in agony, Jesus prayed for His executioners. This prayer was answered in the conversion of the centurion and countless others throughout history.</li>
                <li><strong>Today in Paradise:</strong> To the penitent thief: "Truly, I say to you, today you will be with Me in Paradise" (Luke 23:43). This promise shows that salvation is by grace through faith, not works—and that it's never too late to repent.</li>
                <li><strong>Behold your mother:</strong> To John: "Woman, behold, your son!" To the disciple: "Behold, your mother!" (John 19:26-27). Even on the Cross, Jesus cared for His mother, entrusting her to the beloved disciple. Catholic tradition sees Mary as the mother of all believers.</li>
                <li><strong>My God, My God:</strong> "My God, My God, why have You forsaken Me?" (Matthew 27:46; Mark 15:34). This cry from Psalm 22:1 expresses the depth of Christ's suffering—not just physical but spiritual, as He bore the wrath of God against sin.</li>
                <li><strong>I thirst:</strong> "I thirst" (John 19:28). This was both physical need and spiritual longing—the thirst of a soul in agony. The soldiers offered Him sour wine on a hyssop branch, fulfilling Psalm 69:21.</li>
                <li><strong>It is finished:</strong> "It is finished" (<em>Tetelestai</em>) (John 19:30). This was not a cry of defeat but of triumph. The work of redemption was accomplished. The debt was paid in full.</li>
                <li><strong>Father, into Your hands:</strong> "Father, into Your hands I commit My spirit!" (Luke 23:46). From Psalm 31:5, this was the prayer Jewish children learned to say before sleep. Jesus died in trust, surrendering His spirit to the Father.</li>
              </ol>

              <h3>The Death of the Son of God</h3>
              <p>
                At the <strong>ninth hour</strong> (3:00 PM), Jesus cried out with a loud voice and died. This was the hour of the evening sacrifice in the Temple, when the Passover lambs were being slaughtered. The Lamb of God died at the same time as the Passover lambs.
              </p>
              <p>
                At the moment of His death, extraordinary events occurred:
              </p>
              <ul>
                <li><strong>The Temple veil was torn in two:</strong> From top to bottom—signifying that God did it, not men. The veil separated the Holy of Holies (where God's presence dwelt) from the rest of the Temple. Only the high priest could enter, once a year, on Yom Kippur. The torn veil signified that the way to God was now open to all through Christ's sacrifice (Hebrews 10:19-22).</li>
                <li><strong>The earth shook, rocks split, and tombs opened:</strong> Creation responded to the death of its Creator. The earthquake signaled that this was no ordinary death—it was a cosmic event.</li>
                <li><strong>The dead were raised:</strong> Matthew records that many bodies of the saints who had fallen asleep were raised, and coming out of their tombs after His resurrection, they went into the holy city and appeared to many (Matthew 27:52-53). This prefigured the general resurrection.</li>
                <li><strong>The centurion's confession:</strong> When the centurion and those with him saw the earthquake and what took place, they were filled with awe and said: "Truly this was the Son of God!" (Matthew 27:54). A Roman soldier—a Gentile—became the first to confess Christ's divinity after His death.</li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Theology of the Cross */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Why "Good" Friday?</h2>
            <p>
              It may seem strange to call the day of Christ's execution "good." The name likely evolved from "God's Friday" (similar to how "goodbye" evolved from "God be with ye"). But theologically, it is truly good because on this day, <strong>the work of salvation was accomplished</strong>.
            </p>

            <h3>The Atonement: Christ Our Substitute</h3>
            <p>
              The central meaning of the Cross is <strong>substitutionary atonement</strong>: Christ died in our place, bearing the punishment we deserved. As Isaiah prophesied: "He was pierced for our transgressions; He was crushed for our iniquities; upon Him was the chastisement that brought us peace, and with His wounds we are healed. All we like sheep have gone astray; we have turned—every one—to his own way; and the LORD has laid on Him the iniquity of us all" (Isaiah 53:5-6).
            </p>
            <p>
              St. Peter wrote: "He Himself bore our sins in His body on the tree, that we might die to sin and live to righteousness. By His wounds you have been healed" (1 Peter 2:24). St. Paul explained: "For our sake He made Him to be sin who knew no sin, so that in Him we might become the righteousness of God" (2 Corinthians 5:21).
            </p>
            <p>
              This is the <strong>Great Exchange</strong>: Christ took our sin; we receive His righteousness. He bore our curse; we receive His blessing. He died our death; we receive His life.
            </p>

            <h3>The Cross as Victory</h3>
            <p>
              The Cross is not only a sacrifice but a victory. Through it, Christ defeated sin, death, and Satan. St. Paul wrote: "He disarmed the rulers and authorities and put them to open shame, by triumphing over them in Him" (Colossians 2:15). The early Church spoke of the <strong>Harrowing of Hell</strong>—Christ's descent to the dead to liberate the righteous who had died before His coming.
            </p>
            <p>
              The image of the Cross as victory is especially prominent in the Eastern Church. The Orthodox hymn for Good Friday proclaims: "Today is suspended upon the Tree He who suspended the earth upon the waters. A crown of thorns crowns Him who is the King of the angels. He is wrapped in the purple robe of mockery who wraps the heavens in clouds."
            </p>

            <h3>The Love of God Revealed</h3>
            <p>
              Ultimately, the Cross is the supreme demonstration of God's love: "God shows His love for us in that while we were still sinners, Christ died for us" (Romans 5:8). "In this is love, not that we loved God, but that He loved us and sent His Son to be the propitiation for our sins" (1 John 4:10).
            </p>
            <p>
              St. Augustine preached: "God loved us so that we might love Him. He loved us when we were not worthy to be loved. He loved us when we were His enemies. He loved us when we were sinners. This is the love of Christ, which passes knowledge."
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Church Fathers on the Cross */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Church Fathers on Good Friday</h2>

            <h3>St. Athanasius on the Cross</h3>
            <p>
              St. Athanasius (c. 296-373 AD), the great defender of Christ's divinity, wrote in his treatise <em>On the Incarnation</em>:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"He took our body, and not only so, but He took it from a virgin, without a father... He, the Life of all, our Lord and Savior, did not, when proceeding to His death for the salvation of all, shrink from taking the body which was ours... For by the sacrifice of His own body He put an end to the law which lay against us, and made a new beginning of life for us, by the hope of resurrection."</p>
            </blockquote>

            <h3>St. John Chrysostom on the Crucifixion</h3>
            <p>
              St. John Chrysostom preached on Good Friday:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"I see Him crucified, and I am crucified with Him. I see Him dead, and I die with Him. I see Him buried, and I am buried with Him. I see Him risen, and I rise with Him. Let us, then, be crucified with Him, that we may also reign with Him. Let us die with Him, that we may also live with Him. Let us be buried with Him, that we may also rise with Him."</p>
            </blockquote>

            <h3>St. Augustine on the Cross</h3>
            <p>
              St. Augustine wrote: "The Lord was crucified; that is the Christian's pattern. He died for us; that is our lesson. He rose again; that is our hope."
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The cross was not a defeat for Christ, but a triumph. For He did not suffer death unwillingly, but He conquered death by suffering. He died, but He conquered death. For death thought it had conquered Him, but it was conquered by Him."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Catholic Perspective - Extended */}
          <section className="bg-vatican-red/5 p-8 md:p-12 rounded-2xl border border-vatican-red/20">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Church className="h-6 w-6 text-vatican-red mr-3" />
              Good Friday in the Catholic Church
            </h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>The Celebration of the Lord's Passion</h3>
              <p>
                Good Friday is the only day of the year when <strong>Mass is not celebrated</strong> anywhere in the world. Instead, the Church gathers in the afternoon (traditionally at 3:00 PM, the hour of Christ's death) for the <strong>Celebration of the Lord's Passion</strong>.
              </p>
              <p>
                The liturgy has three parts:
              </p>
              <ol>
                <li><strong>Liturgy of the Word:</strong> Scripture readings including Isaiah 52:13-53:12 (the Suffering Servant), Hebrews 4:14-16; 5:7-9 (Christ the High Priest), and the Passion from John's Gospel (John 18:1-19:42). This is followed by solemn intercessions for the Church and the world—the oldest form of the Prayer of the Faithful.</li>
                <li><strong>Veneration of the Cross:</strong> The faithful approach a crucifix to venerate it—by kissing, touching, or genuflecting—honoring Christ's sacrifice. The cross is gradually unveiled, accompanied by the chant: "Behold the wood of the Cross, on which hung the Savior of the world. Come, let us worship."</li>
                <li><strong>Holy Communion:</strong> Hosts consecrated on Holy Thursday are distributed. The service ends in silence.</li>
              </ol>

              <h3>Fasting and Abstinence</h3>
              <p>
                Good Friday is a day of <strong>fasting and abstinence</strong> for Catholics:
              </p>
              <ul>
                <li><strong>Fasting:</strong> Ages 18-59: One full meal plus two smaller meals that together do not equal a full meal. No eating between meals.</li>
                <li><strong>Abstinence:</strong> Ages 14 and up: No meat.</li>
              </ul>
              <p>
                This physical hunger unites the faithful with Christ's suffering and cultivates spiritual hunger for God. The Catechism teaches: "The days and times of penance for the universal Church are each Friday of the whole year and the season of Lent" (CCC 1438). Good Friday is the most solemn of these days.
              </p>

              <h3>The Stations of the Cross</h3>
              <p>
                Many Catholics pray the <strong>Stations of the Cross</strong> (<em>Via Crucis</em>) on Good Friday, meditating on fourteen events from Jesus' condemnation to His burial:
              </p>
              <ol className="grid grid-cols-2 gap-2 text-sm">
                <li>Jesus is condemned to death</li>
                <li>Jesus carries His cross</li>
                <li>Jesus falls the first time</li>
                <li>Jesus meets His mother</li>
                <li>Simon helps carry the cross</li>
                <li>Veronica wipes Jesus' face</li>
                <li>Jesus falls the second time</li>
                <li>Jesus meets the women of Jerusalem</li>
                <li>Jesus falls the third time</li>
                <li>Jesus is stripped</li>
                <li>Jesus is nailed to the cross</li>
                <li>Jesus dies on the cross</li>
                <li>Jesus is taken down from the cross</li>
                <li>Jesus is laid in the tomb</li>
              </ol>
              <p>
                This devotion originated in Jerusalem, where pilgrims walked the actual route Jesus took to Calvary (<em>Via Dolorosa</em>). The Franciscans, who were given custody of the holy places in 1342, promoted the devotion throughout Europe. By the 16th century, the Stations were a common feature in Catholic churches.
              </p>

              <h3>Traditions Around the World</h3>
              <ul>
                <li><strong>Three Hours' Devotion:</strong> Meditating on Christ's Seven Last Words from noon to 3:00 PM</li>
                <li><strong>Processions:</strong> In many countries, elaborate processions reenact the Passion with floats (<em>pasos</em>) depicting the scenes</li>
                <li><strong>Veneration of Relics:</strong> In Rome, the relics of the True Cross are displayed for veneration</li>
                <li><strong>Hot Cross Buns:</strong> Traditional food with a cross marked on top</li>
                <li><strong>Stations of the Cross:</strong> Outdoor processions following the Via Dolorosa in Jerusalem</li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Modern Spiritual Application */}
          <section className="bg-red-50 p-8 md:p-12 rounded-2xl border border-red-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Living Good Friday Today</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Personal and Family Practices</h3>
              <ul>
                <li><strong>Fast and Abstain:</strong> Observe the Good Friday fast as an act of solidarity with Christ and the poor</li>
                <li><strong>Attend the Liturgy:</strong> Participate in the Celebration of the Lord's Passion at 3:00 PM</li>
                <li><strong>Venerate the Cross:</strong> Approach the crucifix with reverence, kissing the feet of Christ or touching the wood</li>
                <li><strong>Pray the Stations:</strong> Walk with Jesus through His passion, either at church or in private prayer</li>
                <li><strong>Silence:</strong> Observe silence from noon to 3:00 PM, or throughout the day</li>
                <li><strong>Read the Passion:</strong> Meditate on the Gospel accounts of Christ's death</li>
              </ul>

              <h3>Questions for Reflection</h3>
              <ul>
                <li>What sins in my life contributed to Christ's suffering?</li>
                <li>Do I take up my cross daily and follow Jesus, or do I seek to avoid suffering?</li>
                <li>How can I share in Christ's redemptive work by offering my own sufferings?</li>
                <li>Am I willing to forgive those who have hurt me, as Christ forgave His executioners?</li>
                <li>Do I venerate the Cross as the instrument of my salvation?</li>
              </ul>

              <h3>A Prayer for Good Friday</h3>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-red-800 my-6">
                <p className="italic text-base">"Lord Jesus Christ, by Your holy Cross You have redeemed the world. You suffered death for our salvation. You bore our sins in Your body on the tree. Grant that we may die to sin and live to righteousness. May we never be ashamed of Your Cross, but glory in it as the power of God for salvation. Amen."</p>
              </blockquote>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Saints on the Cross */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Saints on the Holy Cross</h2>
            
            <h3>St. Francis of Assisi</h3>
            <p>
              St. Francis of Assisi (1181-1226) had such devotion to the Cross that he received the stigmata—the wounds of Christ—in 1224, two years before his death. He wrote in his <em>Praises of God</em>: "You are our eternal life, You are our light and our salvation, You are our hope and our resurrection, You are our wisdom and our sanctification, You are our mercy and our consolation."
            </p>
            <p>
              The prayer attributed to St. Francis, "Lord, make me an instrument of Your peace," reflects the transformation that contemplating the Cross brings: "Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; where there is sadness, joy."
            </p>

            <h3>St. Gemma Galgani</h3>
            <p>
              St. Gemma Galgani (1878-1903), a young Italian mystic who also bore the stigmata, wrote in her diary: "Jesus, for love of You I accept everything that You will send me. Suffering is a great grace. If You ask it of me, I will suffer for the rest of my life."
            </p>
            <p>
              On Good Friday 1899, she experienced a vision of the crucified Christ and wrote: "I saw Jesus crucified. He looked at me with such tenderness that I felt myself dying of love. He said to me: 'Look at My wounds, My daughter. I have suffered so much for you. Do you want to suffer something for Me?'"
            </p>

            <h3>St. Maximilian Kolbe</h3>
            <p>
              St. Maximilian Kolbe (1894-1941), the Franciscan priest who volunteered to die in place of a stranger at Auschwitz, lived the mystery of the Cross. He said: "No one in the world can change truth. What we can do and should do is seek truth and to serve it when we have found it. The real conflict is the inner conflict. Beyond armies of occupation and the catacombs of concentration camps, there are two irreconcilable enemies in the depth of every soul: good and evil, sin and love."
            </p>
            <p>
              His martyrdom on August 14, 1941—the vigil of the Assumption—was a living participation in Christ's sacrifice. He not only died for another; he comforted his fellow prisoners, leading them in prayer and hymns as they starved. His death was a triumph of love over hatred, of the Cross over the swastika.
            </p>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8">
            <Link 
              href="/christianity/holy-week/maundy-thursday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Maundy Thursday
            </Link>
            <Link 
              href="/christianity/holy-week/easter-saturday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              Easter Saturday <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
