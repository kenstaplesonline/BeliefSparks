import Link from "next/link";
import { ArrowRight, ArrowLeft, Church, Moon, Flame, BookOpen, Scroll } from "lucide-react";

export default function EasterSaturdayPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-200 rounded-full">
            <Moon className="h-5 w-5 text-stone-600 mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">The Quiet Day</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Easter Saturday: <br />
            <span className="text-stone-600">The Sabbath Rest</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Holy Saturday is the day of Christ's rest in the tomb. It is a day of silence and waiting, when the Church meditates on Christ's descent to the dead. At nightfall, the Easter Vigil begins—the most sacred liturgy of the year, celebrating the Light of Christ dispelling the darkness of sin and death.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          
          {/* Christ in the Tomb */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🌑</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">In the Tomb</h2>
                <div className="w-12 h-1 bg-stone-500 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Matthew 27:57-66</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>The Burial of Jesus</h3>
              <p>
                When Jesus died, Joseph of Arimathea—a wealthy member of the Sanhedrin who had not consented to the crucifixion—went to Pilate and requested Jesus' body. Pilate granted permission, and Joseph, with Nicodemus, took the body, wrapped it in linen with spices (about seventy-five pounds), and laid it in Joseph's own new tomb carved from rock.
              </p>
              <p>
                A great stone was rolled against the entrance. Mary Magdalene and the other Mary sat opposite the tomb, watching. It was Preparation Day, and the Sabbath was beginning at sundown.
              </p>

              <h3>The Guard at the Tomb</h3>
              <p>
                The chief priests and Pharisees remembered Jesus' words: "After three days I will rise." They went to Pilate: "Sir, we remember how that impostor said, while He was still alive, 'After three days I will rise.' Therefore order the tomb to be made secure until the third day, lest His disciples go and steal Him away and tell the people, 'He has risen from the dead'" (Matthew 27:63-64).
              </p>
              <p>
                Pilate gave them a guard of soldiers. They sealed the stone and set a watch. Unknowingly, they were providing evidence that would later confirm the Resurrection—the tomb was guarded, making theft impossible.
              </p>

              <h3>The Harrowing of Hell</h3>
              <p>
                While His body lay in the tomb, Christ's soul descended to <strong>Sheol</strong> (the realm of the dead). This is called the <strong>"Harrowing of Hell"</strong> (or "Descent into Hell") and is confessed in the Apostles' Creed: "He descended into hell."
              </p>
              <p>
                This does not mean Christ went to the place of the damned. Rather, He went to the realm of the dead—the abode of all who had died, including the righteous who awaited redemption. Peter writes: "He went and proclaimed to the spirits in prison" (1 Peter 3:19).
              </p>
              <p>
                Christ's descent was a proclamation of victory. He announced to the souls of the righteous that the price had been paid, the victory won. The gates of paradise, closed since Adam's sin, were opened. This is why an ancient homily for Holy Saturday, read in the Catholic liturgy, imagines Christ saying: "Awake, O sleeper, and rise from the dead, and Christ will give you light."
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Jewish Burial Practices */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Jewish Burial Practices in the First Century</h2>
            <p>
              Understanding first-century Jewish burial customs illuminates the Gospel accounts of Jesus' burial and the empty tomb. Jewish law required that bodies be buried before sundown, especially before the Sabbath (Deuteronomy 21:22-23). This urgency explains why Joseph of Arimathea had to act quickly.
            </p>

            <h3>The Tomb</h3>
            <p>
              Wealthy families in first-century Judea often owned rock-hewn tombs outside the city walls. These were not graves dug in the ground but chambers carved into limestone cliffs. A typical tomb had a small entrance leading to a chamber with benches (arcosolia) where bodies were laid. After the flesh decomposed (usually about a year), the bones were collected into ossuaries—small stone boxes—to make room for new burials.
            </p>
            <p>
              The "new tomb" of Joseph of Arimathea had never been used, fulfilling Isaiah 53:9: "They made His grave with the wicked and with a rich man in His death." Jesus would not be buried in a common grave but in the tomb of a wealthy man, and His body would not be defiled by contact with other corpses.
            </p>

            <h3>The Stone</h3>
            <p>
              Tombs were sealed with large disc-shaped stones that rolled in a track in front of the entrance. These stones could weigh hundreds or even thousands of pounds. The women's question on Easter morning—"Who will roll away the stone for us?" (Mark 16:3)—indicates they knew they could not move it themselves.
            </p>
            <p>
              Archaeological evidence from first-century tombs shows that some stones were even carved with seals to prevent tampering. Matthew records that the chief priests sealed the stone (Matthew 27:66), making any attempt to move it obvious.
            </p>

            <h3>The Spices</h3>
            <p>
              Nicodemus brought "a mixture of myrrh and aloes, about seventy-five pounds" (John 19:39). This enormous quantity indicates a royal burial. The spices were packed in linen wrappings around the body to partially mask the smell of decomposition. The women returned after the Sabbath to complete the anointing (Mark 16:1), suggesting the burial was rushed and incomplete.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Day of Waiting */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Day of Silence</h2>
            <p>
              Holy Saturday is unique in the Church's calendar. It is a day of <strong>suspended time</strong>—between the horror of Good Friday and the glory of Easter Sunday. The Church waits in silence, meditating on Christ's rest in the tomb and His descent to the dead.
            </p>
            <p>
              For the disciples, this was a day of despair. Their hopes were shattered. The One they believed to be the Messiah was dead, His body cold in a borrowed tomb. They hid behind locked doors, fearing they would be next. The Sabbath's rest must have felt like a tomb itself—a day when they could not even visit the grave.
            </p>
            <p>
              Yet in the mystery of God's providence, this day of apparent defeat was actually the preparation for the greatest victory in history. As the sun set on Saturday, something was about to happen that would change everything.
            </p>

            <h3>The Sabbath Rest</h3>
            <p>
              Jesus rested in the tomb on the Sabbath, just as God rested on the seventh day of creation (Genesis 2:2-3). This is not coincidence. Jesus had said: "I am the Lord of the Sabbath" (Matthew 12:8). His Sabbath rest in the tomb fulfilled the deepest meaning of the Sabbath—the completion of the new creation.
            </p>
            <p>
              The first creation ended with God's rest on the seventh day. The new creation ended with Christ's rest in the tomb. And just as the first creation was followed by a new beginning, so Christ's rest was followed by resurrection—the dawn of the new creation.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Harrowing of Hell - Expanded */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">⛓️</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Harrowing of Hell</h2>
                <div className="w-12 h-1 bg-amber-700 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">1 Peter 3:18-20</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>The Descent to the Dead</h3>
              <p>
                The Apostles' Creed confesses: "He descended into hell." The word "hell" here does not refer to the place of eternal punishment but to <strong>Sheol</strong> (Hebrew) or <strong>Hades</strong> (Greek)—the realm of the dead where all souls went before Christ's resurrection.
              </p>
              <p>
                Scripture teaches that before Christ's death, the gates of heaven were closed. Even the righteous dead could not enter God's presence. They waited in "Abraham's bosom" or "paradise" (Luke 16:22; 23:43)—a place of comfort but not yet the fullness of heaven.
              </p>

              <h3>Scriptural Foundations</h3>
              <p>
                Several passages illuminate this mystery:
              </p>
              <ul>
                <li><strong>1 Peter 3:18-20:</strong> "He went and proclaimed to the spirits in prison, because they formerly did not obey, when God's patience waited in the days of Noah."</li>
                <li><strong>1 Peter 4:6:</strong> "For this is why the gospel was preached even to those who are dead, that though judged in the flesh the way people are, they might live in the spirit the way God does."</li>
                <li><strong>Ephesians 4:8-10:</strong> "When He ascended on high He led a host of captives... He who descended is the One who also ascended far above all the heavens."</li>
                <li><strong>Psalm 68:18:</strong> "You ascended on high, leading a host of captives in Your train."</li>
              </ul>

              <h3>The Victory Proclamation</h3>
              <p>
                Christ did not descend to suffer or to atone—His work on the Cross was finished. He descended to <strong>proclaim victory</strong>. The righteous dead, who had waited in faith for the Messiah, now received the good news: the price was paid, the victory won, the gates of heaven were opening.
              </p>
              <p>
                This is depicted powerfully in Christian art: Christ stands on the broken gates of hell, reaching down to pull Adam and Eve from their tombs. The righteous of the Old Testament—Abraham, Moses, David, the prophets—follow in the train of captives He leads to heaven.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Ancient Homily */}
          <section className="bg-stone-100 p-8 md:p-12 rounded-2xl border border-stone-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">An Ancient Homily for Holy Saturday</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <p>
                The Church reads an anonymous ancient homily during the Office of Readings on Holy Saturday. It is one of the most dramatic and beautiful reflections on Christ's descent to the dead:
              </p>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
                <p className="italic text-base mb-4">"Something strange is happening—there is a great silence on earth today, a great silence and stillness. The whole earth keeps silence because the King is asleep. The earth trembled and is still because God has fallen asleep in the flesh and He has raised up all who have slept ever since the world began."</p>
                <p className="italic text-base mb-4">"God has died in the flesh and hell trembles with fear. He has gone to search for our first parent, as for a lost sheep. Greatly desiring to visit those who live in darkness and in the shadow of death, He has gone to free from sorrow the captives Adam and Eve, He who is both God and the Son of Eve."</p>
                <p className="italic text-base mb-4">"The Lord approached them bearing the Cross, the weapon that had won Him the victory. At His sight, Adam rose and said to Eve: 'What is this? He who is God has been made like us? If He has died, then He can also rise again!'</p>
                <p className="italic text-base mb-4">"Christ answered: 'I am your God, who for your sake have become your son. Out of love for you and for your descendants I now by My own authority command all who are held in bondage to come forth, and all who are in darkness to be enlightened, all who are sleeping to arise. I order you, O sleeper, to awake. I did not create you to be held a prisoner in hell. Rise from the dead, for I am the life of the dead. Rise, let us leave this place, for you are in Me and I in you; together we form one person and cannot be separated."</p>
              </blockquote>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Church Fathers */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Church Fathers on Holy Saturday</h2>

            <h3>St. John Chrysostom on the Descent</h3>
            <p>
              St. John Chrysostom preached on the significance of Christ's descent:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Hell was in an uproar because it was destroyed. It was in an uproar because it is mocked. It was in an uproar, for it is annihilated. It is in an uproar, for it is now made captive. Hell took a body, and discovered God. It took earth, and encountered Heaven. It took what it saw, and was overcome by what it did not see. O death, where is thy sting? O hell, where is thy victory? Christ is risen, and you are overthrown."</p>
            </blockquote>

            <h3>St. Augustine on the Sabbath Rest</h3>
            <p>
              St. Augustine connected Christ's rest in the tomb with God's rest on the seventh day:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"God rested on the seventh day from all His works. And the Lord Jesus also rested on the Sabbath in the tomb. For as He finished His works on the Cross, saying 'It is finished,' so He rested on the Sabbath. And as God's rest was not from weariness but from completion, so Christ's rest was not from exhaustion but from triumph. The new creation was complete."</p>
            </blockquote>

            <h3>St. Cyril of Alexandria on the Victory</h3>
            <p>
              St. Cyril wrote about Christ's victory over death:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Christ descended alone to hell, but He ascended with a multitude. He went down to the realm of death as a conqueror, and He led captivity captive. The gates of bronze were broken, the iron bars shattered. Death could not hold the Author of Life, and those who were held in the bonds of death were set free."</p>
            </blockquote>

            <h3>St. Gregory of Nyssa on the Resurrection</h3>
            <p>
              St. Gregory reflected on the transformation of death:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"What happened in the death of Christ was this: death swallowed Him as a bait, but was itself caught on the hook of His divinity. As when a fish swallows the bait along with the hook, it is itself caught, so death swallowed the body of Christ, which was the bait, but was itself caught by the divinity that was within. Having swallowed the bait, it died and released those it had held."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Saints' Reflections */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Saints' Reflections on Waiting and Hope</h2>

            <h3>St. Teresa of Avila on Trust in Darkness</h3>
            <p>
              St. Teresa wrote about trusting God in times of spiritual darkness:
            </p>
            <blockquote className="bg-stone-100 p-6 rounded-lg border-l-4 border-stone-700 my-6">
              <p className="italic text-base">"The dark night of the soul is a time of purification, when God strips away all consolations to draw the soul into deeper union with Himself. Holy Saturday teaches us to wait in hope, even when God seems absent. For the darkness is not the absence of God but the presence of His hidden work. The tomb is not the end but the womb of resurrection."</p>
            </blockquote>

            <h3>St. John of the Cross on Spiritual Darkness</h3>
            <p>
              The great mystic wrote about the "dark night":
            </p>
            <blockquote className="bg-stone-100 p-6 rounded-lg border-l-4 border-stone-700 my-6">
              <p className="italic text-base">"In the dark night, the soul journeys by faith alone, without the lights of understanding or the warmth of consolations. This is the path Christ trod on Holy Saturday—His body in the tomb, His soul descending to the dead. He asks us to follow Him into the darkness, trusting that the dawn will come."</p>
            </blockquote>

            <h3>St. Elizabeth of the Trinity on Silence</h3>
            <p>
              St. Elizabeth wrote about the value of silence:
            </p>
            <blockquote className="bg-stone-100 p-6 rounded-lg border-l-4 border-stone-700 my-6">
              <p className="italic text-base">"Holy Saturday is the day of silence. The Church keeps vigil at the tomb, waiting in prayerful stillness. Let us enter into this silence, silencing the noise of the world, the clamor of our thoughts, the restlessness of our hearts. In this silence, we hear the heartbeat of God preparing for resurrection."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Catholic Perspective - Easter Vigil */}
          <section className="bg-vatican-red/5 p-8 md:p-12 rounded-2xl border border-vatican-red/20">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Church className="h-6 w-6 text-vatican-red mr-3" />
              The Easter Vigil in the Catholic Church
            </h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>The Mother of All Vigils</h3>
              <p>
                The <strong>Easter Vigil</strong> (<em>Vigilia Paschalis</em>) is the most sacred liturgy of the entire year. St. Augustine called it "the mother of all holy vigils." It begins after nightfall on Holy Saturday and celebrates Christ's passage from death to life.
              </p>
              <p>
                The vigil has four parts:
              </p>

              <h4>1. The Service of Light (Lucernarium)</h4>
              <p>
                The church is in darkness. A fire is blessed outside, and the <strong>Paschal Candle</strong>—a large candle representing Christ, the Light of the World—is lit from it. A priest inscribes the candle with a cross, the Greek letters Alpha and Omega (Christ is the beginning and end), and the current year. Five grains of incense are inserted into the candle, representing the five wounds of Christ.
              </p>
              <p>
                The candle is carried into the dark church, and the deacon or priest chants: <strong>"Lumen Christi"</strong> ("The Light of Christ"). The people respond: "Deo gratias" ("Thanks be to God"). From the Paschal Candle, the faithful light their own candles, and the church gradually fills with light—symbolizing the light of Christ spreading through the world.
              </p>
              <p>
                The <strong>Exsultet</strong>—an ancient hymn of triumph—is then proclaimed, praising God for the light that dispels darkness and for the "truly blessed night" when heaven is wedded to earth:
              </p>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
                <p className="italic text-base">"This is the night, when Christ broke the bonds of death and rose victorious from the grave. What good would life have been to us, had Christ not come as our Redeemer? O truly blessed night, worthy alone to know the time and hour when Christ rose from the underworld!"</p>
              </blockquote>

              <h4>2. The Liturgy of the Word</h4>
              <p>
                The Church reads the great stories of salvation history, tracing God's plan from creation to resurrection:
              </p>
              <ul>
                <li><strong>Genesis 1:1–2:2:</strong> Creation—God makes all things good</li>
                <li><strong>Genesis 22:1-18:</strong> Abraham's sacrifice—God provides the Lamb</li>
                <li><strong>Exodus 14:15–15:1:</strong> The Crossing of the Red Sea—God saves His people</li>
                <li><strong>Isaiah 54:5-14:</strong> God's everlasting love for His people</li>
                <li><strong>Isaiah 55:1-11:</strong> The invitation to the thirsty</li>
                <li><strong>Ezekiel 36:16-28:</strong> The promise of the Spirit and new heart</li>
              </ul>
              <p>
                These readings show how God has been working throughout history, preparing for this night—the night when the old creation is redeemed and the new creation begins.
              </p>

              <h4>3. The Liturgy of Baptism</h4>
              <p>
                The baptismal font is blessed with a solemn prayer recalling the symbolism of water in salvation history: the Spirit hovering over the waters of creation, the flood that purified the earth, the Red Sea that saved Israel, the Jordan where Christ was baptized.
              </p>
              <p>
                Catechumens (adults preparing for baptism) are baptized and confirmed. The whole congregation renews their baptismal promises, renouncing Satan and professing faith in the Creed. Holy water is sprinkled on the faithful, reminding them of their own baptism.
              </p>

              <h4>4. The Liturgy of the Eucharist</h4>
              <p>
                Finally, the <strong>first Mass of Easter</strong> is celebrated. The Gloria is sung for the first time since Lent began, bells ring, the organ plays, the Alleluia returns after forty days of silence, and the Church celebrates the Eucharist—the sacrament of the Risen Christ.
              </p>
              <p>
                The faithful receive Holy Communion, uniting themselves with Christ who died and rose again. The Easter Vigil typically lasts two to three hours, but the joy it celebrates extends through the entire Easter season.
              </p>

              <h3>Holy Saturday Traditions</h3>
              <ul>
                <li><strong>Food Blessing (Święconka):</strong> In many cultures, especially Polish and Eastern European, Easter foods (eggs, bread, meat, butter shaped as a lamb) are brought to church on Holy Saturday morning for blessing. These blessed foods are then eaten at the Easter breakfast.</li>
                <li><strong>Preparation:</strong> Homes are cleaned and decorated, Easter baskets prepared, new clothes laid out for Easter Sunday.</li>
                <li><strong>Rest:</strong> The morning and afternoon are quiet—a continuation of Good Friday's solemnity. No Mass is celebrated until the Vigil.</li>
                <li><strong>Confession:</strong> Final opportunity for Easter confession before the Vigil.</li>
                <li><strong>Visit to the Tomb:</strong> In some countries, faithful visit specially decorated "tombs" in churches to pray before the Blessed Sacrament.</li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Modern Spiritual Application */}
          <section className="bg-stone-100 p-8 md:p-12 rounded-2xl border border-stone-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Living Holy Saturday Today</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Questions for Personal Reflection</h3>
              <ul>
                <li>Where in my life am I waiting for God to act? Can I trust Him in the waiting?</li>
                <li>What "tombs" in my life need Christ's resurrection power?</li>
                <li>Do I believe that God is working even when I cannot see it?</li>
                <li>Have I experienced "dark nights of the soul"? How did God bring me through?</li>
                <li>Am I ready for the light of Christ to dispel my darkness?</li>
              </ul>

              <h3>Practical Applications</h3>
              <ul>
                <li><strong>Embrace Silence:</strong> Spend time in silent prayer, listening for God's voice.</li>
                <li><strong>Wait in Hope:</strong> Bring your unanswered prayers to God, trusting that His timing is perfect.</li>
                <li><strong>Prepare for Easter:</strong> Make ready your heart and home for the celebration of the Resurrection.</li>
                <li><strong>Practice Patience:</strong> Use the day to grow in the virtue of patience, accepting God's timing.</li>
                <li><strong>Read the Scriptures:</strong> Meditate on the readings that will be proclaimed at the Easter Vigil.</li>
              </ul>

              <h3>A Prayer for Holy Saturday</h3>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-stone-700 my-6">
                <p className="italic text-base">"Lord Jesus Christ, who rested in the tomb on the Sabbath and descended to the dead to proclaim victory, we wait in hope for Your resurrection. In our darkness, be our light. In our waiting, be our hope. In our death, be our life. Awaken us from the sleep of sin, that we may rise with You to newness of life. Amen."</p>
              </blockquote>
            </div>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8">
            <Link 
              href="/christianity/holy-week/good-friday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Good Friday
            </Link>
            <Link 
              href="/christianity/holy-week/easter-sunday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              Easter Sunday <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
