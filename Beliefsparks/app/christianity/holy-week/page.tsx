import Link from "next/link";
import { Calendar, ArrowRight, Church, Cross, Sunrise, BookOpen, Scroll, Crown } from "lucide-react";

export default function HolyWeekPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-vatican-red/10 rounded-full">
            <Calendar className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">The Most Sacred Week</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Holy Week: <br />
            <span className="text-vatican-red">The Final Days</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Holy Week is the most sacred time in the Christian calendar, commemorating the final days of Jesus Christ's earthly ministry, from His triumphant entry into Jerusalem to His glorious resurrection. For Roman Catholics, these eight days are the liturgical year's climax, inviting deep reflection on the mysteries of redemption.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          
          {/* Introduction */}
          <section className="prose prose-stone prose-lg max-w-none">
            <p>
              Holy Week, known as <strong>Hebdomas Sancta</strong> in Latin, begins on Palm Sunday and concludes with Easter Sunday. Each day carries profound spiritual significance, inviting Christians to walk alongside Jesus through His passion, death, and resurrection. For Catholics, this week is marked by special liturgies, including the Chrism Mass, the Mass of the Lord's Supper, the Celebration of the Lord's Passion, and the Easter Vigil—the most sacred liturgy of the entire year.
            </p>
            <p>
              The liturgical colors shift dramatically throughout the week: red for Palm Sunday (symbolizing both Christ's kingship and His blood), white or gold for Holy Thursday (celebrating the Eucharist and priesthood), red again for Good Friday (the Precious Blood), and finally, the glorious white and gold of Easter (resurrection and triumph). This progression tells the story of salvation through color and ceremony.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Historical Context */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Scroll className="h-8 w-8 text-amber-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Historical Context</h2>
                <div className="w-12 h-1 bg-amber-700 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Jerusalem, 33 AD</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>Passover in Jerusalem</h3>
              <p>
                Holy Week took place during Passover, the most important Jewish festival, which commemorated Israel's deliverance from slavery in Egypt. Jerusalem's population swelled from about 50,000 to over 200,000 as pilgrims flooded the city. Every Jewish male within fifteen miles of Jerusalem was required to attend, and Jews from across the diaspora—Egypt, Syria, Rome, Babylon—made the pilgrimage.
              </p>
              <p>
                The city was a tinderbox. Roman authorities, aware of the Messianic expectations that accompanied Passover, reinforced their garrison. The Antonia Fortress, overlooking the Temple, was manned by additional troops. Pontius Pilate, the Roman prefect, normally resided in Caesarea but came to Jerusalem during festivals to suppress potential uprisings.
              </p>
              <p>
                This was the atmosphere into which Jesus rode on Palm Sunday. The crowds, filled with Passover fervor and nationalistic hopes, hailed Him as the Son of David. Within days, some of the same voices would cry "Crucify Him!"
              </p>

              <h3>The Chronology of Holy Week</h3>
              <p>
                Scholars debate the exact chronology, but the traditional understanding is:
              </p>
              <ul>
                <li><strong>Saturday before Palm Sunday:</strong> Jesus arrives in Bethany, staying at the home of Lazarus, Mary, and Martha (John 12:1).</li>
                <li><strong>Sunday (Palm Sunday):</strong> Jesus enters Jerusalem on a donkey, fulfilling Zechariah 9:9 (Matthew 21:1-11).</li>
                <li><strong>Monday:</strong> Jesus cleanses the Temple and curses the fig tree (Matthew 21:12-22).</li>
                <li><strong>Tuesday:</strong> Jesus teaches in the Temple, debates with religious leaders, delivers the Olivet Discourse (Matthew 21:23-25:46).</li>
                <li><strong>Wednesday:</strong> Judas agrees to betray Jesus (Matthew 26:14-16).</li>
                <li><strong>Thursday:</strong> The Last Supper, Gethsemane, arrest (Matthew 26:17-56).</li>
                <li><strong>Friday:</strong> Trials, crucifixion, death, burial (Matthew 26:57-27:61).</li>
                <li><strong>Saturday:</strong> Christ rests in the tomb (Matthew 27:62-66).</li>
                <li><strong>Sunday:</strong> The Resurrection (Matthew 28:1-10).</li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Theological Significance */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Theological Significance of Holy Week</h2>
            <p>
              Holy Week is not merely a historical commemoration but a <strong>sacramental participation</strong> in the Paschal Mystery—the passion, death, and resurrection of Jesus Christ. The events of this week are the fulfillment of all Old Testament prophecy and the foundation of Christian faith.
            </p>

            <h3>The New Exodus</h3>
            <p>
              Jesus died during Passover, presenting Himself as the true Passover Lamb. As the blood of the lamb delivered Israel from death in Egypt, so the blood of Christ delivers humanity from eternal death. Paul writes: "Christ, our Passover Lamb, has been sacrificed" (1 Corinthians 5:7).
            </p>
            <p>
              The original Exodus freed Israel from physical slavery. The new Exodus frees humanity from spiritual slavery—to sin, death, and the devil. Holy Week is the new Exodus, with Christ as the new Moses leading His people from bondage to freedom.
            </p>

            <h3>The Atonement</h3>
            <p>
              The Cross is the center of Holy Week and of Christian theology. On Good Friday, Christ bore the sins of the world, satisfying divine justice and reconciling humanity to God. This is the doctrine of <strong>atonement</strong>—literally "at-one-ment"—making sinners at one with God.
            </p>
            <p>
              The Church has never defined a single theory of atonement, but Scripture presents multiple images:
            </p>
            <ul>
              <li><strong>Sacrifice:</strong> Christ as the Lamb of God who takes away the sins of the world (John 1:29)</li>
              <li><strong>Ransom:</strong> Christ giving His life as a ransom for many (Mark 10:45)</li>
              <li><strong>Propitiation:</strong> Christ as the propitiation for our sins (1 John 2:2)</li>
              <li><strong>Victory:</strong> Christ triumphing over principalities and powers (Colossians 2:15)</li>
              <li><strong>Reconciliation:</strong> God reconciling the world to Himself in Christ (2 Corinthians 5:19)</li>
            </ul>

            <h3>The Resurrection</h3>
            <p>
              The Resurrection is not merely the reversal of death but the beginning of the new creation. Jesus rose with a glorified body, the firstfruits of those who have fallen asleep (1 Corinthians 15:20). His resurrection guarantees our resurrection.
            </p>
            <p>
              As St. Paul wrote: "If Christ has not been raised, your faith is futile and you are still in your sins... But in fact Christ has been raised from the dead, the firstfruits of those who have fallen asleep" (1 Corinthians 15:17, 20). Everything depends on the Resurrection.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Day-by-Day Navigation */}
          <section>
            <div className="text-center mb-12">
              <Church className="h-10 w-10 text-vatican-gold mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold text-stone-900">The Eight Sacred Days</h2>
              <p className="text-lg text-stone-600 mt-4">Journey through each day of Holy Week</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Palm Sunday */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="flex items-start mb-4">
                  <div className="bg-red-50 p-3 rounded-full mr-4">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Palm Sunday</h3>
                    <p className="text-sm text-stone-500">Sunday before Easter</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm mb-4">
                  Jesus enters Jerusalem as King, hailed by crowds with palm branches. The liturgy shifts from triumph to the reading of the Passion narrative.
                </p>
                <Link href="/christianity/holy-week/palm-sunday" className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold text-sm">
                  Explore Palm Sunday <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Holy Monday */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="flex items-start mb-4">
                  <div className="bg-amber-50 p-3 rounded-full mr-4">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Holy Monday</h3>
                    <p className="text-sm text-stone-500">Monday of Holy Week</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm mb-4">
                  Jesus cleanses the Temple, driving out the money changers, and curses the barren fig tree—powerful acts of judgment and purification.
                </p>
                <Link href="/christianity/holy-week/holy-monday" className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold text-sm">
                  Explore Holy Monday <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Holy Tuesday */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <span className="text-2xl">📖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Holy Tuesday</h3>
                    <p className="text-sm text-stone-500">Tuesday of Holy Week</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm mb-4">
                  Jesus teaches in the Temple, delivers parables, and prophesies the destruction of Jerusalem. His authority is questioned by religious leaders.
                </p>
                <Link href="/christianity/holy-week/holy-tuesday" className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold text-sm">
                  Explore Holy Tuesday <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Holy Wednesday */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="flex items-start mb-4">
                  <div className="bg-purple-50 p-3 rounded-full mr-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Holy Wednesday</h3>
                    <p className="text-sm text-stone-500">Wednesday of Holy Week</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm mb-4">
                  Judas Iscariot conspires with the chief priests to betray Jesus for thirty pieces of silver. The shadow of betrayal falls over the week.
                </p>
                <Link href="/christianity/holy-week/holy-wednesday" className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold text-sm">
                  Explore Holy Wednesday <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Maundy Thursday */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-50 p-3 rounded-full mr-4">
                    <span className="text-2xl">🍷</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Maundy Thursday</h3>
                    <p className="text-sm text-stone-500">Thursday of Holy Week</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm mb-4">
                  The Last Supper: Jesus institutes the Eucharist and the priesthood, washes His disciples' feet, and gives the new commandment of love.
                </p>
                <Link href="/christianity/holy-week/maundy-thursday" className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold text-sm">
                  Explore Maundy Thursday <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Good Friday */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="flex items-start mb-4">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Cross className="h-6 w-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Good Friday</h3>
                    <p className="text-sm text-stone-500">Friday of Holy Week</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm mb-4">
                  The Crucifixion: Jesus suffers and dies on the Cross for the salvation of humanity. The supreme sacrifice of love is offered for our redemption.
                </p>
                <Link href="/christianity/holy-week/good-friday" className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold text-sm">
                  Explore Good Friday <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Easter Saturday */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <div className="flex items-start mb-4">
                  <div className="bg-stone-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">🕯️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Easter Saturday</h3>
                    <p className="text-sm text-stone-500">Saturday of Holy Week</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm mb-4">
                  Holy Saturday: Christ lies in the tomb, descending to the dead. The Easter Vigil at nightfall celebrates the Light of Christ dispelling darkness.
                </p>
                <Link href="/christianity/holy-week/easter-saturday" className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold text-sm">
                  Explore Easter Saturday <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Easter Sunday */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-vatican-gold/50">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Sunrise className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">Easter Sunday</h3>
                    <p className="text-sm text-vatican-gold font-semibold">The Resurrection</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm mb-4">
                  The Resurrection: Jesus rises from the dead, conquering sin and death forever. The empty tomb proclaims the victory of life over death.
                </p>
                <Link href="/christianity/holy-week/easter-sunday" className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold text-sm">
                  Explore Easter Sunday <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Church Fathers on Holy Week */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Church Fathers on Holy Week</h2>

            <h3>St. Leo the Great on the Passion</h3>
            <p>
              St. Leo preached on the meaning of Holy Week:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"True reverence for the Lord's passion means fixing the eyes of our hearts on Jesus crucified and recognizing in Him our own humanity. For the Son of God took our nature upon Himself, that in it He might suffer and die. He suffered for us, He died for us, and He rose again for us. Let us follow Him in His passion, that we may also follow Him in His resurrection."</p>
            </blockquote>

            <h3>St. Augustine on the Cross</h3>
            <p>
              St. Augustine reflected on the paradox of the Cross:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The Lord's cross was not a punishment, but a remedy. It was not a defeat, but a victory. For on it the devil was conquered, not the Lord. The devil thought to destroy Christ, but he destroyed himself. He thought to extinguish the Light, but he was himself extinguished. The cross is the trophy of victory, the throne of mercy, the altar of grace."</p>
            </blockquote>

            <h3>St. John Chrysostom on the Resurrection</h3>
            <p>
              St. John Chrysostom proclaimed the victory of Easter:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Hell was in an uproar because it was destroyed. It was in an uproar because it is mocked. It was in an uproar, for it is annihilated. It is in an uproar, for it is now made captive. Hell took a body, and discovered God. It took earth, and encountered Heaven. It took what it saw, and was overcome by what it did not see. Christ is risen, and you are overthrown!"</p>
            </blockquote>

            <h3>St. Cyril of Jerusalem on Holy Week</h3>
            <p>
              St. Cyril instructed catechumens about Holy Week:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"In these holy days, we commemorate the sufferings of Christ. Let us not be spectators only, but participants. Let us suffer with Him, that we may also be glorified with Him. For if we have been united with Him in a death like His, we shall certainly be united with Him in a resurrection like His (Romans 6:5)."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Saints on Holy Week */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Saints' Reflections on Holy Week</h2>

            <h3>St. Thomas Aquinas on the Eucharist</h3>
            <p>
              St. Thomas wrote about the institution of the Eucharist on Holy Thursday:
            </p>
            <blockquote className="bg-vatican-red/5 p-6 rounded-lg border-l-4 border-vatican-red my-6">
              <p className="italic text-base">"The Eucharist is the sacrament of love, the sign of unity, the bond of charity. At the Last Supper, Christ gave us His Body and Blood under the appearances of bread and wine. He who receives this sacrament worthily is incorporated into Christ and united with all the faithful in one body. This is the bread come down from heaven, that a man may eat of it and not die."</p>
            </blockquote>

            <h3>St. Francis of Assisi on the Cross</h3>
            <p>
              St. Francis had a deep devotion to the Passion:
            </p>
            <blockquote className="bg-vatican-red/5 p-6 rounded-lg border-l-4 border-vatican-red my-6">
              <p className="italic text-base">"We adore You, O Lord Jesus Christ, here and in all Your churches throughout the whole world, and we bless You, because by Your holy Cross You have redeemed the world. May the holy Cross of our Lord Jesus Christ, which is our only hope, be ever with us. Let us glory in nothing but the Cross of our Lord Jesus Christ."</p>
            </blockquote>

            <h3>St. Teresa of Calcutta on the Passion</h3>
            <p>
              Mother Teresa reflected on suffering united to Christ:
            </p>
            <blockquote className="bg-vatican-red/5 p-6 rounded-lg border-l-4 border-vatican-red my-6">
              <p className="italic text-base">"Suffering in itself is not a grace, but suffering accepted and offered to God becomes a grace. It purifies us, it unites us to Christ, it makes us channels of His grace to others. Holy Week teaches us that suffering is not meaningless when it is united to the suffering of Christ. On the Cross, He turned suffering into redemption."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Catholic Significance */}
          <section className="bg-vatican-red/5 p-8 md:p-12 rounded-2xl border border-vatican-red/20">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Holy Week in the Catholic Church</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <p>
                For Roman Catholics, Holy Week is not merely a historical commemoration but a <strong>sacramental participation</strong> in the Paschal Mystery—the passion, death, and resurrection of Jesus Christ. Through the Church's liturgy, the events of Holy Week are made present to the faithful, allowing them to enter into the very heart of redemption.
              </p>
              <h3>Key Liturgical Highlights:</h3>
              <ul>
                <li><strong>The Chrism Mass:</strong> Usually celebrated on Holy Thursday morning, the bishop blesses the sacred oils (Oil of Catechumens, Oil of the Sick, and Sacred Chrism) that will be used throughout the diocese for the coming year. Priests also renew their priestly promises.</li>
                <li><strong>Mass of the Lord's Supper:</strong> On Holy Thursday evening, the Church commemorates the institution of the Eucharist and the priesthood. The washing of feet (<em>Mandatum</em>) reenacts Christ's example of servant leadership.</li>
                <li><strong>The Celebration of the Lord's Passion:</strong> On Good Friday afternoon (traditionally at 3:00 PM, the hour of Christ's death), the faithful gather for the Liturgy of the Word, Veneration of the Cross, and Holy Communion. It is the only day of the year when Mass is not celebrated.</li>
                <li><strong>The Easter Vigil:</strong> The "mother of all vigils" takes place after nightfall on Holy Saturday. It includes the blessing of the Easter fire, the lighting of the Paschal Candle, the Exsultet (Easter proclamation), extensive Scripture readings tracing salvation history, the baptism of catechumens, and the first Mass of Easter.</li>
              </ul>
              <p>
                Catholics are encouraged to make Holy Week a time of intensified prayer, fasting, and almsgiving. Many parishes offer additional opportunities for the Sacrament of Reconciliation (confession) during this sacred time. The faithful are also invited to participate in the <strong>Stations of the Cross</strong>, a devotion that prayerfully walks through the events of Christ's passion.
              </p>

              <h3>The Paschal Triduum</h3>
              <p>
                The <strong>Paschal Triduum</strong> ("Three Days") is the summit of the liturgical year. It begins with the evening Mass of the Lord's Supper on Holy Thursday, continues through Good Friday and Holy Saturday, and concludes with Evening Prayer on Easter Sunday. These three days are celebrated as one continuous liturgy—the Church's passage with Christ from death to life.
              </p>
              <p>
                During the Triduum, the Church fasts from certain liturgical elements: there is no Gloria on Thursday (after it is sung), no bells ring from Thursday to the Vigil, no Mass is celebrated on Friday or Saturday morning. The altar is stripped, the tabernacle is empty, and the Church waits in silence. This liturgical emptiness reflects the absence of Christ in death.
              </p>

              <h3>Spiritual Practices for Holy Week</h3>
              <ul>
                <li><strong>Daily Mass:</strong> Attend Mass each day of Holy Week if possible</li>
                <li><strong>Confession:</strong> Make a thorough confession before Easter</li>
                <li><strong>Fasting and Abstinence:</strong> Observe Good Friday as a day of fasting and abstinence</li>
                <li><strong>Prayer:</strong> Spend extra time in prayer, especially before the Blessed Sacrament</li>
                <li><strong>Scripture Reading:</strong> Read the Passion narratives in all four Gospels</li>
                <li><strong>Stations of the Cross:</strong> Pray this devotion, either in church or privately</li>
                <li><strong>Almsgiving:</strong> Give generously to the poor as a sign of gratitude for Christ's gift</li>
                <li><strong>Silence:</strong> Observe periods of silence, especially on Good Friday and Holy Saturday</li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Modern Spiritual Application */}
          <section className="bg-stone-100 p-8 md:p-12 rounded-2xl border border-stone-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Living Holy Week Today</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Questions for Personal Reflection</h3>
              <ul>
                <li>How can I enter more deeply into the mystery of Christ's passion this Holy Week?</li>
                <li>What sins need to be confessed before I can worthily celebrate Easter?</li>
                <li>How can I unite my sufferings with Christ's sufferings on the Cross?</li>
                <li>Am I ready to welcome the Risen Christ into my heart?</li>
                <li>How can I share the hope of the Resurrection with others?</li>
              </ul>

              <h3>Practical Applications</h3>
              <ul>
                <li><strong>Clear Your Schedule:</strong> Make Holy Week different from other weeks. Prioritize liturgical celebrations and prayer.</li>
                <li><strong>Fast from Distractions:</strong> Limit media, entertainment, and unnecessary activities.</li>
                <li><strong>Read the Gospels:</strong> Read one Passion account each day: Matthew (Monday), Mark (Tuesday), Luke (Wednesday), John (Thursday/Friday).</li>
                <li><strong>Attend the Triduum:</strong> Participate in the Mass of the Lord's Supper, Good Friday service, and Easter Vigil.</li>
                <li><strong>Practice Charity:</strong> Perform acts of mercy for others, especially the poor and suffering.</li>
              </ul>

              <h3>A Prayer for Holy Week</h3>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-red my-6">
                <p className="italic text-base">"Lord Jesus Christ, who for our sake suffered death on the Cross and rose again in glory, grant that we may follow You in Your passion and share in Your resurrection. Cleanse us from sin, strengthen us in faith, and fill us with the hope of eternal life. May this Holy Week transform our hearts and draw us closer to You. Amen."</p>
              </blockquote>
            </div>
          </section>

          {/* Back to Christianity */}
          <section className="text-center pt-8">
            <Link 
              href="/christianity"
              className="inline-block px-8 py-3 bg-vatican-red text-white font-semibold rounded-lg hover:bg-stone-900 transition-colors duration-300"
            >
              ← Back to Christianity
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
