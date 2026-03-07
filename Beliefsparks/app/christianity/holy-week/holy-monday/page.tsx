import Link from "next/link";
import { ArrowRight, ArrowLeft, Church, Temple, TreeDeciduous, Scroll } from "lucide-react";

export default function HolyMondayPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-amber-50 rounded-full">
            <span className="text-2xl mr-2">🏛️</span>
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Cleansing and Judgment</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Holy Monday: <br />
            <span className="text-amber-700">Purifying the Temple</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            On Holy Monday, Jesus entered the Temple in Jerusalem and drove out the money changers and merchants. He also cursed a barren fig tree—a powerful dual act of purification and judgment that revealed His zeal for true worship and the consequences of spiritual fruitlessness. These actions set in motion the final confrontation with the religious authorities.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          
          {/* Herod's Temple: Historical Context */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Herod's Temple: The Magnificent Edifice</h2>
            <p>
              To understand the significance of Jesus' cleansing of the Temple, we must appreciate what the Temple represented in first-century Judaism. <strong>Herod's Temple</strong>—also called the Second Temple or Herod's Temple—was one of the most magnificent architectural achievements of the ancient world.
            </p>

            <h3>The History of the Temple</h3>
            <p>
              The First Temple, built by King Solomon around 957 BC, was destroyed by the Babylonians in 586 BC. The Second Temple was constructed after the Babylonian Exile, completed in 516 BC under the leadership of Zerubbabel and the preaching of Haggai and Zechariah. This modest structure paled in comparison to Solomon's Temple.
            </p>
            <p>
              In 20 BC, <strong>Herod the Great</strong> began a massive renovation and expansion of the Temple. The project employed 10,000 workers and 1,000 priests trained as masons (since only priests could work on the sacred areas). The main structure was completed in 18 months, but the entire complex was not finished until 64 AD—just six years before the Romans destroyed it.
            </p>
            <p>
              The Jewish historian <strong>Josephus</strong> provides detailed descriptions of the Temple. He wrote: "The exterior of the building wanted nothing that could astound either mind or eye. For, being covered on all sides with massive plates of gold, the sun was no sooner up than it radiated so fiery a flash that persons straining to look at it were compelled to avert their eyes, as from the solar rays" (<em>The Jewish War</em> 5.5.6).
            </p>

            <h3>The Layout of the Temple Courts</h3>
            <p>
              The Temple complex was divided into progressively more restricted courts:
            </p>
            <ul>
              <li><strong>The Court of the Gentiles:</strong> The outermost court, open to everyone, including non-Jews. This was the only area where Gentiles could pray and worship the God of Israel. It covered approximately 35 acres—larger than 25 football fields.</li>
              <li><strong>The Court of Women:</strong> Also called the Treasury, where Jewish women could enter. This court contained the thirteen trumpet-shaped chests for monetary offerings.</li>
              <li><strong>The Court of Israel:</strong> Accessible to Jewish men, where they could observe the sacrifices.</li>
              <li><strong>The Court of the Priests:</strong> Restricted to priests, where the altar of burnt offering stood.</li>
              <li><strong>The Holy Place:</strong> The first room of the Temple building, containing the altar of incense, the table of showbread, and the golden lampstand.</li>
              <li><strong>The Holy of Holies:</strong> The innermost sanctuary, separated by a thick veil, where the high priest entered once a year on Yom Kippur. By Jesus' time, it was empty—the Ark of the Covenant had been lost centuries earlier.</li>
            </ul>

            <h3>The Money-Changing Operation</h3>
            <p>
              The <strong>Court of the Gentiles</strong>—the outermost court—had become a bustling marketplace. This was where Jesus' cleansing took place. The commercial operation served legitimate needs: pilgrims needed to purchase sacrificial animals, and they needed to exchange their foreign currency for the <strong>Tyrian shekel</strong>, the only acceptable coin for the Temple tax (the half-shekel required of every Jewish male over twenty).
            </p>
            <p>
              Tyrian shekels were minted in Tyre (in modern Lebanon) and contained high-quality silver (about 94%). The Jewish authorities accepted these coins despite bearing the image of the Phoenician god Melqart (called "Baal of Tyre")—an ironic tolerance of idolatrous imagery in the name of purity standards.
            </p>
            <p>
              The problem was not the legitimate service but the <strong>exploitation</strong> that had developed. Money changers charged exorbitant exchange rates (some sources suggest up to 12% commission). Animal vendors sold doves—the offering of the poor—at vastly inflated prices. The Mishnah records that Rabbi Simeon ben Gamaliel later protested: "It used to be that a pair of doves cost a golden denar. He said: 'By this service that I perform this day, I shall bring their price down to a quarter of a silver denar'" (<em>Kerithoth</em> 1:7). This suggests prices had been artificially inflated.
            </p>
            <p>
              The poor—those whom God had specially commanded Israel to protect—were being exploited in the very place where they came to seek God's mercy. The Temple system had become a means of oppression rather than a means of grace.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Cleansing of the Temple */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Temple className="h-8 w-8 text-amber-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Cleansing the Temple</h2>
                <div className="w-12 h-1 bg-amber-700 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Matthew 21:12-17</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>Jesus' Prophetic Action</h3>
              <p>
                Jesus entered the Temple courts and found the commercial activity in full swing. What He did next was not a loss of temper but a deliberate <strong>prophetic action</strong>—a symbolic act meant to communicate God's judgment, like the prophets of old who performed dramatic signs (Jeremiah smashing a clay jar, Ezekiel lying on his side, Hosea marrying a prostitute).
              </p>
              <p>
                The Gospels describe Him making a whip of cords and driving out the merchants and their animals:
              </p>
              <blockquote className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-700">
                <p className="italic text-lg mb-2">"In the temple He found those who were selling oxen and sheep and pigeons, and the money-changers sitting there. And making a whip of cords, He drove them all out of the temple, with the sheep and oxen. And He poured out the coins of the money-changers and overturned their tables. And He told those who sold the pigeons, 'Take these things away; do not make my Father's house a house of trade.'"</p>
                <p className="text-sm text-stone-600">— John 2:14-16</p>
              </blockquote>
              <p>
                The synoptic Gospels record Jesus saying: "It is written, 'My house shall be called a house of prayer,' but you make it a den of robbers" (Matthew 21:13; Mark 11:17; Luke 19:46). This combines two Old Testament quotations: Isaiah 56:7 ("My house shall be called a house of prayer for all peoples") and Jeremiah 7:11 ("Has this house, which is called by My name, become a den of robbers in your eyes?").
              </p>
              <p>
                The phrase <strong>"den of robbers"</strong> (<em>spēlaion lēstōn</em>) is significant. A "den" is where robbers retreat after committing crimes. Jeremiah's point was that the people of Judah treated the Temple as a safe haven—a place where they could perform rituals while continuing in injustice and oppression. They thought the Temple's presence guaranteed God's protection, regardless of their behavior. Jesus applied this same prophetic critique to His contemporaries.
              </p>

              <h3>"Destroy This Temple"</h3>
              <p>
                When the Jewish leaders demanded a sign to justify His actions, Jesus gave them a cryptic response:
              </p>
              <blockquote className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-700">
                <p className="italic text-lg mb-2">"Destroy this temple, and in three days I will raise it up."</p>
                <p className="text-sm text-stone-600">— John 2:19</p>
              </blockquote>
              <p>
                They misunderstood Him, thinking He spoke of the physical Temple, which had taken forty-six years to build. But John clarifies: "He was speaking about the temple of His body" (John 2:21). After His resurrection, the disciples remembered this statement and believed.
              </p>
              <p>
                This was a radical claim. The Temple was the center of Israel's religious life—the place where God's presence dwelt, where sacrifices were offered, where sins were atoned. Jesus was saying that <strong>He Himself</strong> would become the new Temple—the new meeting place between God and humanity. The old system was passing away; a new covenant was being established.
              </p>

              <h3>Healing in the Temple</h3>
              <p>
                Matthew adds a beautiful detail: after the cleansing, "the blind and the lame came to Him in the temple, and He healed them" (Matthew 21:14). The space that had been filled with commerce was now filled with healing. The Court of the Gentiles—meant to be a place of prayer for all nations—became a place of mercy for the marginalized.
              </p>
              <p>
                The chief priests and scribes were indignant at the wonderful things He did and at the children crying out: "Hosanna to the Son of David!" (Matthew 21:15). Jesus quoted Psalm 8:2 in response: "Yes; have you never read, 'Out of the mouth of infants and nursing babies You have prepared praise'?" Even the children recognized what the religious leaders refused to see.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Old Testament Background */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Old Testament Prophecy Fulfilled</h2>
            <p>
              Jesus' cleansing of the Temple was not a spontaneous outburst but the fulfillment of specific Messianic prophecies. The early Church saw in this event the realization of long-awaited promises.
            </p>

            <h3>Malachi 3:1-5: The Lord Comes to His Temple</h3>
            <p>
              The prophet Malachi had written: "Behold, I send My messenger, and he will prepare the way before Me. And the Lord whom you seek will suddenly come to His temple; and the messenger of the covenant in whom you delight, behold, He is coming, says the LORD of hosts" (Malachi 3:1).
            </p>
            <p>
              Malachi continued: "He will sit as a refiner and purifier of silver, and He will purify the sons of Levi and refine them like gold and silver, and they will bring offerings in righteousness to the LORD" (Malachi 3:3). The Messiah would purify the priesthood and restore true worship. Jesus' cleansing of the Temple was the beginning of this purification.
            </p>

            <h3>Isaiah 56:7: A House of Prayer for All Nations</h3>
            <p>
              Jesus quoted Isaiah 56:7: "My house shall be called a house of prayer for all peoples." This prophecy looked forward to the day when Gentiles would join themselves to the LORD and worship Him. The Court of the Gentiles was supposed to be the place where this began—a space where non-Jews could draw near to the God of Israel.
            </p>
              But the commercial activity had effectively excluded the Gentiles. The noise, the stench, the chaos made prayer impossible. By cleansing the Temple, Jesus restored it to its intended purpose: a house of prayer for all nations.
            </p>

            <h3>Zechariah 14:21: No Trader in the House of the LORD</h3>
            <p>
              Zechariah prophesied about the Day of the LORD: "And there shall no longer be a trader in the house of the LORD of hosts on that day" (Zechariah 14:21). The Hebrew word <em>Canaanite</em> (<em>k'na'an</em>) can also mean "trader" or "merchant." This prophecy envisioned a purified Temple, free from commercial corruption. Jesus' action pointed toward this eschatological hope.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Cursing of the Fig Tree */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TreeDeciduous className="h-8 w-8 text-green-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Barren Fig Tree</h2>
                <div className="w-12 h-1 bg-green-700 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Mark 11:12-14, 20-25</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>A Living Parable</h3>
              <p>
                On the way from Bethany to Jerusalem, Jesus saw a fig tree in full leaf from a distance. Being hungry, He approached it, looking for fruit. But when He reached it, He found nothing but leaves—it had no figs.
              </p>
              <p>
                Mark's Gospel provides a crucial detail: <strong>"it was not the season for figs"</strong> (Mark 11:13). This seems puzzling—why would Jesus expect fruit out of season? The answer lies in understanding how fig trees grow in Palestine.
              </p>
              <p>
                Fig trees typically produce early figs (<em>pag</em>) in spring before the leaves fully appear, then the main crop later in summer. A tree in full leaf should have had at least some early fruit. This tree had all the appearance of fruitfulness—the full leaves suggested abundant fruit—but offered nothing to the hungry traveler.
              </p>
              <p>
                Jesus pronounced a curse on the tree:
              </p>
              <blockquote className="bg-green-50 p-6 rounded-lg border-l-4 border-green-700">
                <p className="italic text-lg mb-2">"May no one ever eat fruit from you again."</p>
                <p className="text-sm text-stone-600">— Mark 11:14</p>
              </blockquote>
              <p>
                The next morning, as Jesus and His disciples passed by, the fig tree had withered from the roots. Peter noticed and said: "Rabbi, look! The fig tree that You cursed has withered."
              </p>

              <h3>The Fig Tree in Jewish Symbolism</h3>
              <p>
                The fig tree was one of the seven species of the Promised Land (Deuteronomy 8:8). It symbolized peace, prosperity, and the blessing of God. "Every man under his vine and under his fig tree" (1 Kings 4:25) became a proverb for the good life.
              </p>
              <p>
                But the fig tree also symbolized <strong>Israel</strong> itself. The prophets frequently used the fig tree as a metaphor for God's people. Hosea wrote: "Like grapes in the wilderness, I found Israel. Like the first fruit on the fig tree in its first season, I saw your fathers" (Hosea 9:10). Jeremiah saw two baskets of figs—one good, one bad—as representing the exiles and those who remained in Jerusalem (Jeremiah 24).
              </p>
              <p>
                Jesus had previously told the Parable of the Barren Fig Tree (Luke 13:6-9): a man had a fig tree that bore no fruit for three years. He told the vinedresser to cut it down, but the vinedresser asked for one more year to dig around it and fertilize it. If it still bore no fruit, then cut it down. The parable warned Israel that the time for repentance was running out.
              </p>
              <p>
                Now, in Holy Week, the time was up. The fig tree with leaves but no fruit represented <strong>Israel's religious establishment</strong>—especially the Temple authorities. They had the appearance of godliness—the rituals, the sacrifices, the Temple itself—but they lacked the fruit God desired: justice, mercy, and faithfulness (Micah 6:8).
              </p>

              <h3>Jesus' Teaching on Faith and Prayer</h3>
              <p>
                Jesus used the withered fig tree as an opportunity to teach about faith and prayer:
              </p>
              <blockquote className="bg-green-50 p-6 rounded-lg border-l-4 border-green-700">
                <p className="italic text-lg mb-2">"Have faith in God. Truly, I say to you, whoever says to this mountain, 'Be taken up and thrown into the sea,' and does not doubt in his heart, but believes that what he says will come to pass, it will be done for him. Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours."</p>
                <p className="text-sm text-stone-600">— Mark 11:22-24</p>
              </blockquote>
              <p>
                This teaching connects the judgment on fruitlessness with the call to faithful, fruitful prayer. The "mountain" may refer to the Mount of Olives (where they were standing) or, metaphorically, to the Temple Mount—the center of the old system that was about to be swept away. Faith can move mountains, but faith without works is dead (James 2:17).
              </p>
              <p>
                Jesus also connected prayer to forgiveness: "And whenever you stand praying, forgive, if you have anything against anyone, so that your Father also who is in heaven may forgive you your trespasses" (Mark 11:25). The fruit God desires includes reconciliation and mercy.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Church Fathers on Holy Monday */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Church Fathers on the Temple Cleansing</h2>

            <h3>St. John Chrysostom on Jesus' Zeal</h3>
            <p>
              St. John Chrysostom (c. 347-407 AD), the "Golden-Mouthed" preacher of Antioch and Constantinople, delivered powerful homilies on the Temple cleansing. In his <em>Homilies on the Gospel of John</em>, he wrote:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"He who had nowhere to lay His head (Matthew 8:20) was zealous for the house of God. He who was meek and lowly in heart (Matthew 11:29) showed such wrath against the profaners of the Temple. For zeal for God's house consumed Him (John 2:17; Psalm 69:9). Let us learn from this that meekness does not preclude righteous anger when God's honor is at stake."</p>
            </blockquote>

            <h3>St. Augustine on the New Temple</h3>
            <p>
              St. Augustine of Hippo (354-430 AD) saw in the cleansing of the Temple a symbol of Christ purifying the human heart:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"What did He do in the Temple? He cast out those who sold and bought. What does He do in the soul? He casts out the desires of earthly things, that He may establish there the traffic of eternity. For the Temple of God is holy, which temple you are (1 Corinthians 3:17). Let Christ come to His Temple, and cast out whatever He finds there that is not fitting."</p>
            </blockquote>

            <h3>Origen on the Spiritual Meaning</h3>
            <p>
              Origen (c. 185-254 AD), the great Alexandrian biblical scholar, interpreted the Temple cleansing allegorically:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The Temple is the soul of the believer. The money changers are the deceitful thoughts that exchange truth for error. The sellers of doves are those who sell the grace of the Holy Spirit for gain. Christ must enter our souls and drive out all that hinders true worship, that we may be a house of prayer."</p>
            </blockquote>

            <h3>St. Cyril of Alexandria on Christ's Authority</h3>
            <p>
              St. Cyril of Alexandria (c. 376-444 AD) emphasized Jesus' divine authority in cleansing the Temple:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"He called it 'My Father's house,' claiming equality with God. For no mere prophet would dare to call the Temple his own father's house. But Christ, being the Son by nature, has the right to call God His Father in a unique sense. By cleansing the Temple, He showed Himself to be the Lord of the Temple."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Catholic Perspective */}
          <section className="bg-vatican-red/5 p-8 md:p-12 rounded-2xl border border-vatican-red/20">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Church className="h-6 w-6 text-vatican-red mr-3" />
              Holy Monday in the Catholic Church
            </h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>The Chrism Mass</h3>
              <p>
                In many dioceses, the <strong>Chrism Mass</strong> is celebrated on Holy Monday (or Holy Tuesday or Thursday morning). This diocesan celebration brings together the bishop, priests, and people to bless the three holy oils that will be used throughout the diocese for the coming year.
              </p>

              <h4>The Three Holy Oils</h4>
              <ul>
                <li><strong>Oil of Catechumens (Oleum Catechumenorum):</strong> Used in the preparation of catechumens for baptism, this oil strengthens them to reject sin and profess the faith. The bishop breathes over the oil, symbolizing the Spirit's life-giving power.</li>
                <li><strong>Oil of the Sick (Oleum Infirmorum):</strong> Used in the Sacrament of the Anointing of the Sick, this oil brings spiritual and sometimes physical healing. The priest anoints the forehead and hands of the sick person, praying: "Through this holy anointing may the Lord in His love and mercy help you with the grace of the Holy Spirit."</li>
                <li><strong>Sacred Chrism (Sanctum Chrisma):</strong> A mixture of olive oil and balsam (a fragrant perfume), consecrated by the bishop's breath. This oil is used in baptism, confirmation, ordination to the priesthood, and the consecration of churches and altars. The balsam represents the "aroma of Christ" (2 Corinthians 2:15).</li>
              </ul>

              <h4>Renewal of Priestly Promises</h4>
              <p>
                During the Chrism Mass, priests renew their <strong>priestly promises</strong>:
              </p>
              <ul>
                <li>To be more united with Christ the High Priest</li>
                <li>To be faithful stewards of the mysteries of God</li>
                <li>To discharge the duties of their ministry worthily</li>
                <li>To celebrate the Eucharist and other liturgies with devotion</li>
                <li>To be obedient to the bishop</li>
              </ul>
              <p>
                This connects beautifully with Jesus' cleansing of the Temple—a call to purified, faithful priesthood. As Jesus purged the Temple of corruption, so priests are called to purify their hearts and ministries.
              </p>

              <h3>Liturgical Readings and Themes</h3>
              <p>
                The Gospel reading for Holy Monday is typically from John 12:1-11, recounting Mary's anointing of Jesus' feet at Bethany—another act of devotion and preparation for His burial. Some traditions also read the account of the Temple cleansing on this day.
              </p>
              <p>
                The spiritual themes of Holy Monday include:
              </p>
              <ul>
                <li><strong>Purity of Heart:</strong> The cleansing of the Temple invites examination of conscience—have I allowed anything to clutter the temple of my heart?</li>
                <li><strong>Authentic Worship:</strong> God desires worship in spirit and truth (John 4:24), not mere external ritual.</li>
                <li><strong>Bearing Fruit:</strong> The cursing of the fig tree warns against religious hypocrisy—all leaves and no fruit.</li>
                <li><strong>Faith and Prayer:</strong> Jesus' teaching on faith that moves mountains challenges us to pray with confidence.</li>
              </ul>

              <h3>Traditions and Devotions</h3>
              <ul>
                <li><strong>Visita Iglesia:</strong> In some Catholic cultures, the faithful visit seven churches during Holy Week, praying at each one.</li>
                <li><strong>Scripture Reading:</strong> Many Catholics commit to reading the Passion narratives in all four Gospels during Holy Week, beginning on Holy Monday.</li>
                <li><strong>Almsgiving:</strong> In response to Jesus' anger at exploitation in the Temple, many Catholics increase their almsgiving during Holy Week.</li>
                <li><strong>Sacrament of Reconciliation:</strong> Many Catholics go to confession on Holy Monday or Tuesday, preparing their souls for Easter.</li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-200" />

          <hr className="border-stone-200" />

          {/* Archaeological Evidence */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Archaeological Evidence for Herod's Temple</h2>
            <p>
              While the Temple itself was destroyed in 70 AD, archaeological discoveries have illuminated its grandeur and the context of Jesus' cleansing.
            </p>

            <h3>The Temple Mount Excavations</h3>
            <p>
              Excavations around the Temple Mount, especially those conducted by Benjamin Mazar after 1967, have revealed the massive scale of Herod's construction. The retaining walls of the Temple Mount platform—of which the Western Wall (Wailing Wall) is part—consist of stones weighing up to 400 tons each. The platform expanded the natural hill to create a level area of about 35 acres—one of the largest man-made platforms in the ancient world.
            </p>
            <p>
              Archaeologists have discovered remains of the <strong>Royal Stoa</strong>—a magnificent basilica that ran along the southern wall of the Temple Mount. This may have been where the money changers operated. Josephus described it as "a structure more noteworthy than any under the sun" (<em>Antiquities</em> 15.11.5).
            </p>

            <h3>The Temple Warning Inscription</h3>
            <p>
              In 1871, a stone inscription was discovered in Jerusalem bearing a Greek warning: "No foreigner is to enter within the forecourt and the balustrade around the sanctuary. Whoever is caught will have himself to blame for his subsequent death." This was one of several such signs placed at the boundary between the Court of the Gentiles and the restricted areas.
            </p>
            <p>
              This inscription confirms the reality of the <strong>separation between Jews and Gentiles</strong> in the Temple. The Court of the Gentiles was indeed the only place where non-Jews could worship—and it was precisely this court that had been turned into a marketplace, effectively excluding the Gentiles.
            </p>

            <h3>Tyrian Shekels and Temple Tax</h3>
            <p>
              Archaeologists have found numerous Tyrian shekels and half-shekels in Israel, confirming their use in the first century. These coins, minted in Tyre from 126 BC to 57 AD, contained about 14 grams of high-quality silver. The annual Temple tax of a half-shekel (Exodus 30:11-16) was required of every Jewish male over twenty.
            </p>
            <p>
              The Mishnah tractate <em>Sheqalim</em> describes the collection of the Temple tax and the money-changing operation. On the 15th of Adar (one month before Passover), money changers set up tables in the provinces. On the 25th of Adar, they set up tables in the Temple court itself. This confirms the Gospel accounts of money changers operating during the Passover season.
            </p>

            <h3>The Destruction of 70 AD</h3>
            <p>
              Excavations have revealed evidence of the Roman destruction of Jerusalem in 70 AD. The <strong>Robinson's Arch</strong> excavation uncovered stones from the Temple's upper courses, hurled down by Roman soldiers—a vivid confirmation of Jesus' prophecy: "Not one stone shall be left upon another" (Matthew 24:2).
            </p>
            <p>
              The Roman general Titus wanted to spare the Temple, but a soldier, ignoring orders, threw a burning torch through a window. The Temple was consumed by fire, and the gold melted into the cracks between the stones. Roman soldiers pried apart the stones to retrieve the gold—exactly as Jesus had predicted.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Additional Church Fathers */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">More Church Fathers on Holy Monday</h2>

            <h3>St. Gregory the Great on the Fig Tree</h3>
            <p>
              St. Gregory the Great (c. 540-604 AD), pope and doctor of the Church, wrote in his <em>Homilies on the Gospels</em>:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The fig tree that had leaves but no fruit represents the Jewish people, who had the leaves of the Law but not the fruit of righteousness. They gloried in the knowledge of God's commandments, but they did not fulfill them in works. Therefore the Lord withered it, showing that the outward profession without the inward reality is worthy of condemnation."</p>
            </blockquote>

            <h3>St. Jerome on the Cleansing</h3>
            <p>
              St. Jerome (c. 347-420 AD), the translator of the Vulgate Bible, wrote in his <em>Commentary on Matthew</em>:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Twice He cleansed the Temple—once at the beginning of His ministry (John 2), and once at the end (Matthew 21). The first cleansing was an invitation; the second was a judgment. The priests and Pharisees had not repented at His first sign, so now He came with whip in hand to drive out the profaners. Let us take warning: if we do not cleanse our hearts when Christ invites, He will come in judgment."</p>
            </blockquote>

            <h3>St. Bede the Venerable</h3>
            <p>
              St. Bede (c. 673-735 AD), the English monk and biblical scholar, wrote:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The Lord found in the Temple those who sold oxen and sheep and doves, and the money changers sitting. The oxen represent the proud, who are subject to the yoke of the Law. The sheep represent the simple and innocent. The doves represent those who soar in contemplation of heavenly things. But all were being sold—that is, all were corrupted by the avarice of the priests, who sought gain rather than souls."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Saints' Devotions */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Saints on Temple Cleansing and Fruitfulness</h2>

            <h3>St. Francis of Assisi on True Worship</h3>
            <p>
              St. Francis of Assisi (1181-1226) exemplified the fruit that Christ desires. He wrote in his <em>Admonitions</em>: "Where there is charity and wisdom, there is neither fear nor ignorance. Where there is patience and humility, there is neither anger nor disturbance. Where there is poverty with joy, there is neither covetousness nor avarice."
            </p>
            <p>
              Francis' radical poverty was a living protest against the commercialization of religion. He rebuilt churches with his own hands and preached the Gospel without charge, embodying the purified worship Jesus demanded.
            </p>

            <h3>St. Thérèse of Lisieux on Spiritual Fruitfulness</h3>
            <p>
              St. Thérèse of Lisieux (1873-1897), the "Little Flower," wrote about bearing fruit through small acts of love: "Miss no single opportunity of making some small sacrifice, here by a smiling look, there by a kindly word; always doing the smallest right and doing it all for love."
            </p>
            <p>
              Her "Little Way" demonstrates that fruitfulness is not about spectacular deeds but about faithful love in ordinary circumstances. The fig tree that Christ seeks is one that bears the fruit of charity in daily life.
            </p>

            <h3>St. John Paul II on the Purified Heart</h3>
            <p>
              Pope St. John Paul II (1920-2005) wrote in his encyclical <em>Dives in Misericordia</em>: "The Church must bear witness to the mercy of God revealed in Christ... This witness is not only a sign of the credibility of the Church's mission but also an essential condition of that mission."
            </p>
            <p>
              The Temple cleansing reminds us that the Church's mission is not about commerce or power but about mercy. A Church that loses sight of mercy becomes like the fig tree—all leaves and no fruit.
            </p>
          </section>

          {/* Modern Spiritual Application */}
          <section className="bg-amber-50 p-8 md:p-12 rounded-2xl border border-amber-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Living Holy Monday Today</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Questions for Personal Reflection</h3>
              <ul>
                <li>What "money changers" have I allowed in the temple of my heart—thoughts, desires, habits that crowd out true worship?</li>
                <li>Do I have the appearance of fruitfulness (religious activity) but lack the fruit of the Spirit (love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control)?</li>
                <li>Am I exploiting others, even in religious contexts, or am I seeking justice and mercy?</li>
                <li>Is my prayer life characterized by faith that moves mountains, or by doubt and fear?</li>
                <li>Whom do I need to forgive, that my prayers may not be hindered?</li>
              </ul>

              <h3>Practical Applications</h3>
              <ul>
                <li><strong>Examine Your Conscience:</strong> Use Holy Monday to prepare for the Sacrament of Reconciliation.</li>
                <li><strong>Purify Your Heart:</strong> Identify one area of sin or clutter in your spiritual life and surrender it to Christ.</li>
                <li><strong>Bear Fruit:</strong> Perform one concrete act of mercy today—feed the hungry, visit the sick, give to the poor.</li>
                <li><strong>Pray with Faith:</strong> Spend time in prayer, asking God for something specific and trusting in His goodness.</li>
                <li><strong>Forgive Someone:</strong> Release a grudge, extend mercy, reconcile with someone you've been avoiding.</li>
              </ul>

              <h3>A Prayer for Holy Monday</h3>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-amber-700 my-6">
                <p className="italic text-base">"Lord Jesus Christ, who drove out the merchants from Your Father's house and cursed the barren fig tree, cleanse the temple of my heart. Drive out all that hinders true worship. Make me fruitful in good works, that I may offer to You not just the appearance of godliness but the reality of love. Amen."</p>
              </blockquote>
            </div>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8">
            <Link 
              href="/christianity/holy-week/palm-sunday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Palm Sunday
            </Link>
            <Link 
              href="/christianity/holy-week/holy-tuesday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              Holy Tuesday <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
