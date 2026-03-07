import Link from "next/link";
import { ArrowRight, ArrowLeft, Church, Sun, Sunrise, Star, Crown } from "lucide-react";

export default function EasterSundayPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-yellow-100 rounded-full">
            <Sunrise className="h-5 w-5 text-yellow-600 mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">He Is Risen</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Easter Sunday: <br />
            <span className="text-vatican-gold">The Resurrection</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            On the third day, Jesus Christ rose from the dead. The empty tomb proclaimed the victory of life over death, light over darkness, love over hate. Easter Sunday is the foundation of Christian faith—the day when God's promise was fulfilled and humanity's hope was born. Death has been swallowed up in victory. The stone is rolled away. He is not here—He is risen!
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          
          {/* Historical Context: Jewish Burial Practices */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">First-Century Jewish Burial Practices</h2>
            <p>
              To understand the significance of the empty tomb, we must understand how first-century Jews buried their dead. This context makes the Resurrection accounts all the more remarkable.
            </p>

            <h3>The Tomb and Its Seal</h3>
            <p>
              Wealthy Jewish families in first-century Jerusalem typically owned rock-hewn tombs outside the city walls. These tombs had a small entrance, usually less than three feet high, sealed by a large rolling stone (<em>golel</em>) that ran in a carved channel. The stone could weigh several hundred to a thousand kilograms.
            </p>
            <p>
              The Gospel of Matthew records that the chief priests and Pharisees went to Pilate: "Sir, we remember how that impostor said, while He was still alive, 'After three days I will rise.' Therefore order the tomb to be made secure until the third day, lest His disciples go and steal Him away and tell the people, 'He has risen from the dead,' and the last fraud will be worse than the first" (Matthew 27:62-64).
            </p>
            <p>
              Pilate responded: "You have a guard of soldiers. Go, make it as secure as you can." They sealed the stone and set a guard (Matthew 27:65-66). The seal was likely a cord stretched across the stone and fixed with clay, stamped with the Roman seal. Breaking the seal was a capital offense.
            </p>

            <h3>The Preparation of the Body</h3>
            <p>
              Jewish burial customs involved washing the body, anointing it with spices and perfumes, and wrapping it in linen cloths with a separate cloth for the head (<em>soudarion</em>). John's Gospel records that Joseph of Arimathea and Nicodemus wrapped Jesus' body "in linen cloths with the spices, as is the burial custom of the Jews" (John 19:40).
            </p>
            <p>
              Because the Sabbath was beginning at sundown, the preparation was hurried. The women who had followed Jesus from Galilee saw the tomb and how His body was laid, then returned and prepared spices and ointments. On the Sabbath they rested according to the commandment (Luke 23:55-56). They planned to return after the Sabbath to complete the anointing.
            </p>

            <h3>The "Third Day" Reckoning</h3>
            <p>
              Jesus had predicted: "The Son of Man must suffer many things and be rejected by the elders and chief priests and scribes, and be killed, and on the third day rise" (Luke 9:22; see also Matthew 16:21; 17:23; 20:19; Luke 18:33; 24:7, 46).
            </p>
            <p>
              In Jewish reckoning, any part of a day counted as the whole. Jesus died on Friday (the Day of Preparation), rested in the tomb on Saturday (the Sabbath), and rose on Sunday (the first day of the week). This counts as three days, even though the elapsed time was approximately 36-40 hours.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Archaeological Evidence */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Archaeological Evidence for First-Century Tombs</h2>
            <p>
              Archaeological discoveries illuminate the Gospel accounts of Jesus' burial and resurrection, confirming the accuracy of details and providing visual context for the events.
            </p>

            <h3>The Garden Tomb and the Church of the Holy Sepulchre</h3>
            <p>
              Two sites in Jerusalem claim to be the location of Jesus' tomb. The <strong>Garden Tomb</strong>, discovered in 1867, is a rock-hewn tomb with a rolling stone channel, located near a hill that resembles a skull (Golgotha). While it fits the biblical description, most scholars date it to the 8th-7th century BC (Iron Age), making it too old to be new in Jesus' time.
            </p>
            <p>
              The traditional site, enclosed within the <strong>Church of the Holy Sepulchre</strong>, has stronger historical claims. The Roman emperor Hadrian built a temple to Venus over the site in 135 AD to discourage Christian veneration. When Constantine converted to Christianity, his mother Helena identified the site beneath Hadrian's temple. The church built there in 335 AD has been destroyed and rebuilt multiple times, but the site has been venerated since the earliest days of the Church.
            </p>
            <p>
              Archaeological investigations have confirmed that the area was a quarry in the 8th-7th centuries BC, then used for tombs in the 1st century AD. It was outside the city walls in Jesus' time (as required by Jewish law for executions and burials) but inside the later walls built in 41-44 AD—explaining why the site was preserved and could be identified.
            </p>

            <h3>First-Century Rolling Stones</h3>
            <p>
              Archaeologists have discovered several first-century Jewish tombs with rolling stones in the Jerusalem area. The <strong>Tomb of Herod's Family</strong> (discovered in 1892) had a rolling stone about 5 feet in diameter. The <strong>Tomb of the Kings</strong> (actually the tomb of Queen Helena of Adiabene) features a rolling stone 4.5 feet in diameter.
            </p>
            <p>
              These discoveries confirm the Gospel description of a stone that could be "rolled away" (Mark 16:3-4). The women's question: "Who will roll away the stone for us from the entrance of the tomb?" (Mark 16:3) reflects the practical difficulty of moving such stones.
            </p>

            <h3>The Shroud of Turin</h3>
            <p>
              The <strong>Shroud of Turin</strong>—a linen cloth bearing the image of a crucified man—has been the subject of intense study and debate. Carbon-14 dating in 1988 suggested a medieval origin (1260-1390 AD), but recent studies have challenged these results, citing contamination and sample selection issues.
            </p>
            <p>
              Regardless of its authenticity, the Shroud provides a remarkable visual representation of a Roman crucifixion, consistent with Gospel details and archaeological evidence. The image shows a man who suffered scourging, crowning with thorns, crucifixion with nails through the wrists, and a stab wound to the chest—all consistent with the Gospel accounts.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Empty Tomb */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-vatican-gold/30 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Sun className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Empty Tomb</h2>
                <div className="w-12 h-1 bg-vatican-gold mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">John 20:1-18</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>While It Was Still Dark</h3>
              <p>
                Early on the first day of the week, while it was still dark, <strong>Mary Magdalene</strong> came to the tomb and saw that the stone had been rolled away. She ran to Simon Peter and the beloved disciple: "They have taken the Lord out of the tomb, and we do not know where they have laid Him" (John 20:1-2).
              </p>
              <p>
                The other Gospels add details. Matthew records an earthquake and an angel rolling back the stone (Matthew 28:2). Mark notes that the women wondered who would roll away the stone, but found it already moved (Mark 16:3-4). Luke mentions multiple women: Mary Magdalene, Joanna, Mary the mother of James, and others (Luke 24:10).
              </p>
              <p>
                Peter and the beloved disciple ran to the tomb. The beloved disciple outran Peter and arrived first, but did not go in. When Peter arrived, he entered and saw the linen cloths lying there, and the face cloth (<em>soudarion</em>) folded up in a place by itself. The beloved disciple entered, saw, and <strong>believed</strong> (John 20:3-8).
              </p>
              <p>
                John notes: "for as yet they did not understand the Scripture, that He must rise from the dead" (John 20:9). They returned to their homes, but Mary stood weeping outside the tomb.
              </p>

              <h3>The Significance of the Grave Clothes</h3>
              <p>
                The detail about the grave clothes is significant. If someone had stolen the body, they would not have unwrapped it first—especially not carefully folding the head cloth. The scene suggested not a hasty theft but a deliberate departure. Jesus had passed through the grave clothes as He would later pass through locked doors (John 20:19, 26).
              </p>
              <p>
                St. John Chrysostom preached: "Why did He leave the burial cloths behind in the tomb? So that those who were seeking Him might not only see that He was risen, but also learn from what was left behind the manner of the resurrection. For if they had taken the body, they would not have stripped it first; nor would they have taken the trouble to remove the cloths and fold them so carefully."
              </p>

              <h3>Mary Magdalene and the Risen Christ</h3>
              <p>
                As Mary wept, she stooped to look into the tomb and saw two angels in white, sitting where Jesus' body had lain. They asked: "Woman, why are you weeping?" She answered: "They have taken away my Lord, and I do not know where they have laid Him."
              </p>
              <p>
                Turning around, she saw Jesus standing there, but she did not recognize Him. The resurrection body, though continuous with the crucified body, was transformed. Jesus could be unrecognized until He chose to reveal Himself (Luke 24:16, 31; John 21:4, 12).
              </p>
              <p>
                He asked: "Woman, why are you weeping? Whom are you seeking?" Supposing Him to be the gardener, she said: "Sir, if You have carried Him away, tell me where You have laid Him, and I will take Him away."
              </p>
              <p>
                Jesus said one word: <strong>"Mary."</strong>
              </p>
              <p>
                The Good Shepherd calls His own sheep by name, and they know His voice (John 10:3-4). In that one word, Mary recognized Him. She turned and said: <strong>"Rabboni!"</strong> (Teacher)—a more intimate form of "Rabbi."
              </p>
              <p>
                Jesus said: "Do not cling to Me, for I have not yet ascended to the Father; but go to My brothers and say to them, 'I am ascending to My Father and your Father, to My God and your God'" (John 20:17). The resurrection marked the beginning of Jesus' return to the Father—a process that would culminate in the Ascension.
              </p>
              <p>
                Mary Magdalene became the <strong>"apostle to the apostles"</strong>—the first to announce the Resurrection. "I have seen the Lord," she told them (John 20:18). The medieval Church honored her with this title, recognizing that God chose a woman to be the first witness of the central event of salvation history.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Appearances of the Risen Christ */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Appearances</h2>
                <div className="w-12 h-1 bg-blue-500 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">1 Corinthians 15:3-8</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>To the Women (Matthew 28:8-10)</h3>
              <p>
                The women who had visited the tomb ran to tell the disciples with fear and great joy. Suddenly, Jesus met them: "Greetings!" They took hold of His feet and worshiped Him. Jesus said: "Do not be afraid; go and tell My brothers to go to Galilee, and there they will see Me."
              </p>
              <p>
                The detail that they "took hold of His feet" confirms the physicality of the resurrection. Jesus was not a ghost or a vision but a real, touchable body—though transformed.
              </p>

              <h3>To the Disciples in the Upper Room (John 20:19-23)</h3>
              <p>
                On the evening of Resurrection day, the disciples were gathered behind locked doors for fear of the Jews. Jesus came and stood among them: <strong>"Peace be with you."</strong> He showed them His hands and His side. The disciples were glad when they saw the Lord.
              </p>
              <p>
                Jesus then commissioned them: "As the Father has sent Me, even so I am sending you." He breathed on them: "Receive the Holy Spirit. If you forgive the sins of any, they are forgiven them; if you withhold forgiveness from any, it is withheld." This gift of the Spirit, distinct from Pentecost, empowered them for their apostolic mission—including the sacrament of reconciliation.
              </p>

              <h3>To Thomas (John 20:24-29)</h3>
              <p>
                Thomas was not with them. When told: "We have seen the Lord," he replied: "Unless I see in His hands the mark of the nails, and place my finger into the mark of the nails, and place my hand into His side, I will never believe."
              </p>
              <p>
                Eight days later, Jesus appeared again. He said to Thomas: "Put your finger here, and see My hands; and put out your hand, and place it in My side. Do not disbelieve, but believe." Thomas answered: <strong>"My Lord and my God!"</strong> (John 20:28). This is the highest Christological confession in the Gospels—Thomas addressed Jesus as God.
              </p>
              <p>
                Jesus said: "Have you believed because you have seen Me? Blessed are those who have not seen and yet have believed." This beatitude extends to all believers throughout history who trust in the Risen Christ without physical sight.
              </p>

              <h3>The Road to Emmaus (Luke 24:13-35)</h3>
              <p>
                Two disciples walked to Emmaus on Resurrection day, discussing the crucifixion. Jesus joined them, but they did not recognize Him. He explained from all the Scriptures the things concerning Himself, beginning with Moses and the prophets.
              </p>
              <p>
                At Emmaus, as He blessed and broke bread, <strong>"their eyes were opened, and they recognized Him"</strong> (Luke 24:31). He vanished. They said: "Did not our hearts burn within us while He talked to us on the road, while He opened to us the Scriptures?" (Luke 24:32). They returned immediately to Jerusalem to tell the eleven.
              </p>
              <p>
                This appearance established the pattern of Christian worship: Scripture (the opening of the Word) followed by Eucharist (the breaking of bread). The Church has always recognized the Risen Christ in the liturgy of the Word and the liturgy of the Eucharist.
              </p>

              <h3>Multiple Witnesses (1 Corinthians 15:3-8)</h3>
              <p>
                St. Paul summarizes the appearances in 1 Corinthians 15:3-8:
              </p>
              <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="italic text-lg mb-2">"For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that He was buried, that He was raised on the third day in accordance with the Scriptures, and that He appeared to Cephas [Peter], then to the twelve. Then He appeared to more than five hundred brothers at one time, most of whom are still alive, though some have fallen asleep. Then He appeared to James, then to all the apostles. Last of all, as to one untimely born, He appeared also to me."</p>
                <p className="text-sm text-stone-600">— 1 Corinthians 15:3-8</p>
              </blockquote>
              <p>
                Paul emphasizes that there were <strong>hundreds of eyewitnesses</strong>, many still alive when he wrote (around 55 AD). The Resurrection was not a private vision or a hallucination—it was a public, verifiable event. Critics could have investigated by interviewing surviving witnesses.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Theological Significance */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Victory Over Death</h2>
            <p>
              The Resurrection is not merely a happy ending to a tragic story. It is the <strong>decisive victory of God over sin, death, and Satan</strong>. As Paul writes: "If Christ has not been raised, your faith is futile and you are still in your sins" (1 Corinthians 15:17).
            </p>
            <p>
              But Christ <em>has</em> been raised. Therefore:
            </p>
            <ul>
              <li><strong>Sin is forgiven:</strong> The Cross has paid the penalty. The Resurrection is God's receipt, proving the debt is satisfied. Jesus "was delivered up for our trespasses and raised for our justification" (Romans 4:25).</li>
              <li><strong>Death is defeated:</strong> "O death, where is your victory? O death, where is your sting?" (1 Corinthians 15:55). Death is no longer the end—it is a doorway to eternal life. Jesus said: "I am the resurrection and the life. Whoever believes in Me, though he die, yet shall he live, and everyone who lives and believes in Me shall never die" (John 11:25-26).</li>
              <li><strong>Hope is secure:</strong> Because Christ rose, those who belong to Him will also rise. "But in fact Christ has been raised from the dead, the firstfruits of those who have fallen asleep. For as by a man came death, by a Man has come also the resurrection of the dead. For as in Adam all die, so also in Christ shall all be made alive" (1 Corinthians 15:20-22).</li>
              <li><strong>Creation is redeemed:</strong> The Resurrection is the firstfruits of the new creation. All things will be made new. "Behold, I am making all things new" (Revelation 21:5).</li>
            </ul>

            <h3>The Bodily Resurrection</h3>
            <p>
              It is crucial to note that Jesus rose <strong>bodily</strong>, not just spiritually. The tomb was empty. He could be touched, He ate food, He showed His wounds. Yet His resurrection body was transformed—He could appear and disappear, pass through locked doors, and was no longer subject to death or decay.
            </p>
            <p>
              This matters because Christianity is <strong>physical</strong>. We do not believe in the immortality of the soul alone but in the resurrection of the body. The Creed confesses: "I believe in... the resurrection of the body." At the end of time, all the dead will rise, and body and soul will be reunited for eternal life (or eternal separation from God, for those who reject Him).
            </p>
            <p>
              St. Augustine wrote: "The flesh shall rise, the very flesh which fell. It shall rise, not as it fell, but changed. For the mortal shall put on immortality, and the corruptible shall put on incorruption (1 Corinthians 15:53). The flesh shall rise, therefore—yes, the flesh, but not the corruption of the flesh."
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Church Fathers on the Resurrection */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Church Fathers on the Resurrection</h2>

            <h3>St. Athanasius on the Victory of Life</h3>
            <p>
              St. Athanasius (c. 296-373 AD) wrote in <em>On the Incarnation</em>:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"He, the Life of all, our Lord and Savior, did not, when proceeding to His death for the salvation of all, shrink from... death... For by the sacrifice of His own body He put an end to the law which lay against us, and made a new beginning of life for us, by the hope of resurrection. For by His resurrection, He destroyed death, and became the firstfruits of the resurrection."</p>
            </blockquote>

            <h3>St. John Chrysostom on the Empty Tomb</h3>
            <p>
              St. John Chrysostom's famous <strong>Easter Homily</strong> has been read in Orthodox churches every Easter for over 1,500 years:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Let no one fear death, for the Death of our Savior has set us free. He has destroyed it by enduring it. He destroyed Hell when He descended into it. He put it into an uproar even as it tasted of His flesh... Hell took a body, and discovered God. It took earth, and encountered Heaven. It took what it saw, and was overcome by what it did not see. O death, where is thy sting? O Hell, where is thy victory? Christ is Risen, and you, O death, are annihilated! Christ is Risen, and the evil ones are cast down! Christ is Risen, and the angels rejoice! Christ is Risen, and life is liberated!"</p>
            </blockquote>

            <h3>St. Augustine on the Resurrection Body</h3>
            <p>
              St. Augustine wrote in <em>The City of God</em>:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Christ's resurrection is the pattern of our own. He rose with the same body in which He died, and we shall rise with the same bodies in which we die. But His body was glorified, and ours shall be glorified like His. For 'we shall be like Him, for we shall see Him as He is' (1 John 3:2)."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Catholic Perspective */}
          <section className="bg-vatican-gold/10 p-8 md:p-12 rounded-2xl border border-vatican-gold/30">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Church className="h-6 w-6 text-vatican-gold mr-3" />
              Easter Sunday in the Catholic Church
            </h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>The Celebration of the Resurrection</h3>
              <p>
                Easter Sunday celebrates the Resurrection with <strong>Masses of great joy</strong>. The altar is decorated with flowers (traditionally white lilies). White or gold vestments are worn. The Gloria and Alleluia, absent during Lent, return with full force.
              </p>
              <p>
                The Gospel reading is from one of the Resurrection accounts (Matthew, Mark, Luke, or John, depending on the year in the three-year cycle). The homily focuses on the empty tomb and the victory of life over death.
              </p>

              <h3>The Easter Season</h3>
              <p>
                Easter is not just one day—it is a <strong>season of fifty days</strong> (from Easter Sunday to Pentecost), called "The Great Fifty Days." The Church celebrates:
              </p>
              <ul>
                <li><strong>Divine Mercy Sunday:</strong> The Sunday after Easter (based on St. Faustina's revelations)</li>
                <li><strong>Ascension Thursday:</strong> 40 days after Easter (or transferred to Sunday in many dioceses)</li>
                <li><strong>Pentecost:</strong> 50 days after Easter, the coming of the Holy Spirit</li>
              </ul>
              <p>
                The Easter candle remains in a prominent place in the sanctuary throughout the season.
              </p>

              <h3>Catholic Traditions</h3>
              <ul>
                <li><strong>Easter Vigil Attendance:</strong> Many Catholics consider the Easter Vigil the most important liturgy of the year</li>
                <li><strong>Easter Duty:</strong> Catholics are obliged to receive Communion at least once during the Easter season</li>
                <li><strong>Baptism:</strong> Easter is the traditional time for baptism, especially for adults at the Vigil</li>
                <li><strong>Easter Eggs:</strong> Symbol of new life and the stone rolled away; traditionally blessed at church</li>
                <li><strong>Easter Foods:</strong> Special meals celebrating the end of Lenten fasting</li>
              </ul>

              <h3>The Octave of Easter</h3>
              <p>
                The first eight days of Easter (Easter Sunday through the following Sunday) are celebrated as one continuous day. Each day is a solemnity, the Gloria is said or sung at every Mass, and the double Alleluia is added to the dismissal.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Saints on the Resurrection */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Saints on the Resurrection</h2>

            <h3>St. Paul on the Risen Christ</h3>
            <p>
              St. Paul, the apostle to the Gentiles, met the Risen Christ on the road to Damascus (Acts 9:1-19). His entire ministry and theology flowed from that encounter. He wrote to the Philippians: "That I may know Him and the power of His resurrection, and may share His sufferings, becoming like Him in His death, that by any means possible I may attain the resurrection from the dead" (Philippians 3:10-11).
            </p>
            <p>
              For Paul, to be a Christian meant participating in Christ's death and resurrection: "We were buried therefore with Him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life" (Romans 6:4).
            </p>

            <h3>St. Maria Faustina Kowalska on Divine Mercy</h3>
            <p>
              St. Faustina (1905-1938), the Polish mystic who received the Divine Mercy revelations, wrote in her diary: "The Lord said to me, 'My daughter, do not tire of proclaiming My mercy. In this way you will refresh this Heart of Mine, which burns with a flame of pitying love... Tell suffering humanity to snuggle close to My merciful Heart, and I will fill it with peace.'"
            </p>
            <p>
              The Sunday after Easter is celebrated as <strong>Divine Mercy Sunday</strong>, based on these revelations. The resurrection is the supreme manifestation of God's mercy—the triumph of love over sin and death.
            </p>

            <h3>Pope St. John Paul II on the Resurrection</h3>
            <p>
              Pope St. John Paul II wrote in his encyclical <em>Fides et Ratio</em>: "In Jesus Christ, who is the Truth, faith recognizes the ultimate appeal to humanity, an appeal to which man must respond if he is not to deny the truth of his own being. The truth made known to us by Revelation is neither the product nor the consummation of an argument devised by human reason. It appears instead as something gratuitous, which itself stirs thought and seeks acceptance as an expression of love."
            </p>
            <p>
              The resurrection is both historical event and transcendent mystery—something that happened in space and time, yet which transcends space and time. It is the fulcrum of history, the turning point of the ages.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Historical Evidence for the Resurrection */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Historical Evidence for the Resurrection</h2>
            <p>
              While the Resurrection is ultimately an object of faith, historians have noted several facts that require explanation and point toward its reality.
            </p>

            <h3>The Empty Tomb</h3>
            <p>
              Even critical scholars acknowledge that Jesus' tomb was found empty. The earliest Christian proclamation assumed an empty tomb. The Jewish authorities, wanting to stop the Christian movement, could have produced Jesus' body—but they didn't. Instead, they claimed the disciples stole it (Matthew 28:11-15). This polemic presupposes the empty tomb.
            </p>
            <p>
              The women's testimony is significant. In first-century Jewish culture, women's testimony was considered less reliable than men's. If the Gospel writers were inventing a story, they would not have made women the primary witnesses. The fact that they did suggests they were recording what actually happened, not crafting propaganda.
            </p>

            <h3>The Transformation of the Disciples</h3>
            <p>
              The disciples were transformed from fearful, discouraged men into bold proclaimers of the Resurrection. Peter, who had denied knowing Jesus, preached fearlessly at Pentecost. James, Jesus' brother who had been skeptical, became a leader of the Jerusalem church. Paul, a persecutor of the Church, became its greatest missionary.
            </p>
            <p>
              What caused this transformation? They claimed they had seen the Risen Christ. People will die for what they believe to be true, but they will not die for what they know to be false. The disciples were in a position to know whether they had actually seen Jesus or not. Their willingness to suffer and die for their testimony suggests they genuinely believed they had encountered the Risen Christ.
            </p>

            <h3>The Birth of the Church</h3>
            <p>
              The Christian Church began in Jerusalem, the very city where Jesus was crucified. This is remarkable. A movement based on a crucified Messiah would have been easily discredited by producing the body or by pointing to the tomb. Instead, the Church grew rapidly in the very place where its central claim could have been falsified.
            </p>
            <p>
              The Church's worship centered on Sunday (the "Lord's Day") rather than the Jewish Sabbath (Saturday). This shift requires explanation. The early Christians, who were Jewish, would not have abandoned Sabbath observance without a compelling reason. The Resurrection on the first day of the week provided that reason.
            </p>

            <h3>The Conversion of Skeptics</h3>
            <p>
              Not only the disciples but skeptics and enemies were converted. James, Jesus' brother, did not believe in Him during His ministry (John 7:5). Yet after the Resurrection, he became a pillar of the Church (Galatians 2:9). Paul, who persecuted the Church, met the Risen Christ and became an apostle (1 Corinthians 15:8-10).
            </p>
            <p>
              What converted them? They testified that they had seen the Risen Lord. Their conversions were not based on philosophical arguments or secondhand reports but on personal encounters with the living Christ.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Additional Saints' Reflections */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">More Saints on the Resurrection</h2>

            <h3>St. Teresa of Avila</h3>
            <p>
              St. Teresa of Avila (1515-1582), the great Carmelite reformer and doctor of the Church, wrote: "God alone is sufficient." Her mystical theology centered on union with the Risen Christ. She experienced visions of Christ and wrote extensively on the interior life of prayer.
            </p>
            <p>
              In <em>The Interior Castle</em>, she described the soul's journey toward union with God, culminating in spiritual marriage with Christ. The Resurrection is not just an external event but an interior reality that transforms the believer from within.
            </p>

            <h3>St. Maximus the Confessor</h3>
            <p>
              St. Maximus the Confessor (c. 580-662 AD) wrote extensively on Christ's resurrection as the renewal of human nature: "The Resurrection of the Lord is the renewal of human nature, the recreation and restoration of the first Adam to life, the recapitulation of the whole of existence. For in Christ, who is our life, all things are gathered up and given new being."
            </p>
            <p>
              For Maximus, the resurrection was cosmic in scope—not just the raising of one man from the dead, but the transformation of all creation.
            </p>

            <h3>St. Elizabeth of the Trinity</h3>
            <p>
              St. Elizabeth of the Trinity (1880-1906), the French Carmelite nun, wrote: "My Heaven is hidden in this little Host... It is God Himself, God in His essence, God in His humanity, God in His life of love." Her Eucharistic devotion flowed from faith in the Risen Christ, truly present in the Blessed Sacrament.
            </p>
            <p>
              She prayed: "O my beloved Christ, crucified by love, I am Your bride and Your victim... Make me live Your life, Your life of love, Your life of praise and adoration, Your life of union with the Father."
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Modern Spiritual Application */}
          <section className="bg-vatican-gold/10 p-8 md:p-12 rounded-2xl border border-vatican-gold/30">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Living Easter Sunday Today</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Personal and Family Practices</h3>
              <ul>
                <li><strong>Celebrate the Vigil:</strong> If possible, attend the Easter Vigil—the most beautiful liturgy of the year.</li>
                <li><strong>Receive the Eucharist:</strong> Fulfill your Easter duty by receiving Communion during the Easter season.</li>
                <li><strong>Renew Baptismal Promises:</strong> At Easter, renew your own baptismal promises and reject sin.</li>
                <li><strong>Share the Joy:</strong> Greet others with "Christ is risen!" and teach children this ancient greeting.</li>
                <li><strong>Feast and Celebrate:</strong> End the Lenten fast with joyful celebration—good food, family, and fellowship.</li>
              </ul>

              <h3>Questions for Reflection</h3>
              <ul>
                <li>Do I live as if Christ is truly risen, or as if He were still in the tomb?</li>
                <li>What "deaths" in my life need the power of the Resurrection?</li>
                <li>Am I willing to be a witness to the Risen Christ, as Mary Magdalene was?</li>
                <li>How can I share the hope of the Resurrection with those who are hopeless?</li>
                <li>Am I living the new life I received in baptism, or am I still living in the old ways?</li>
              </ul>

              <h3>A Prayer for Easter Sunday</h3>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
                <p className="italic text-base">"Lord Jesus Christ, who rose from the dead on the third day and conquered death forever, fill me with the power of Your resurrection. Make me alive in You, dead to sin, and bold in witness. May I live as a child of the light, sharing Your victory with a world still in darkness. Alleluia! Amen."</p>
              </blockquote>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Conclusion */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 text-center">He Is Risen Indeed!</h2>
            <p className="text-center text-xl">
              The ancient Easter greeting proclaims the Church's faith:
            </p>
            <blockquote className="bg-vatican-gold/10 p-8 rounded-2xl text-center border-2 border-vatican-gold/30">
              <p className="text-2xl font-serif font-bold text-stone-900 mb-2">Christ is risen!</p>
              <p className="text-2xl font-serif font-bold text-vatican-gold">He is risen indeed! Alleluia!</p>
            </blockquote>
            <p className="text-center">
              This is not just a historical statement. It is a present reality. Jesus Christ is alive, and because He lives, we also shall live. Death has lost its sting. The grave has lost its victory. The light shines in the darkness, and the darkness has not overcome it.
            </p>
            <p className="text-center">
              As St. Paul proclaimed: "Death is swallowed up in victory. O death, where is your victory? O death, where is your sting? The sting of death is sin, and the power of sin is the law. But thanks be to God, who gives us the victory through our Lord Jesus Christ" (1 Corinthians 15:54-57).
            </p>
            <p className="text-center">
              <strong>Christ is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!</strong>
            </p>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8">
            <Link 
              href="/christianity/holy-week/easter-saturday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Easter Saturday
            </Link>
            <Link 
              href="/christianity/holy-week"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              Holy Week Overview <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
