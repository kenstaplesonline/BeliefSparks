import Link from "next/link";
import { ArrowRight, ArrowLeft, Church, Wine, Heart, Scroll } from "lucide-react";

export default function MaundyThursdayPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-yellow-50 rounded-full">
            <span className="text-2xl mr-2">🍷</span>
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">The Last Supper</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Maundy Thursday: <br />
            <span className="text-yellow-700">The New Commandment</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            On Maundy Thursday, Jesus gathered with His disciples in the Upper Room for the Last Supper. There He instituted the Eucharist, washed their feet, and gave them a new commandment: "Love one another as I have loved you." This sacred night also saw His agony in the Garden of Gethsemane, where He accepted the Father's will and prepared for the Cross.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          
          {/* The Passover Context */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Passover Seder: Context of the Last Supper</h2>
            <p>
              To understand the Last Supper, we must understand the Passover Seder—the ritual meal that commemorated Israel's deliverance from Egypt. The Seder was (and remains) a highly structured liturgy, with specific foods, prayers, and symbolic actions that told the story of redemption.
            </p>
            <p>
              The Seder included four cups of wine, each associated with a distinct aspect of the Exodus story. Scholars have noted that the Gospel accounts of the Last Supper appear to follow this structure, with Jesus taking the third cup (the "Cup of Blessing") and transforming it into the cup of the New Covenant in His blood.
            </p>
            <p>
              The <strong>four cups</strong> corresponded to the four expressions of redemption in Exodus 6:6-7:
            </p>
            <ul>
              <li><strong>First Cup (Sanctification):</strong> "I will bring you out" — setting apart Israel from Egypt</li>
              <li><strong>Second Cup (Deliverance):</strong> "I will deliver you" — freedom from bondage</li>
              <li><strong>Third Cup (Redemption):</strong> "I will redeem you" — God's mighty acts</li>
              <li><strong>Fourth Cup (Completion):</strong> "I will take you to be My people" — covenant relationship</li>
            </ul>
            <p>
              Scholars have long debated whether Jesus completed the Seder or deliberately left it unfinished. The Gospels record that Jesus did not drink the fourth cup until His death on the Cross (Matthew 26:29; Mark 14:25; Luke 22:18), suggesting that His passion was the completion of the Passover liturgy. The Cross was the fourth cup—the final "I will take you to be My people" — the establishment of the new and eternal covenant.
            </p>
            <p>
              St. John Chrysostom (c. 347-407 AD) preached on this connection: "He who had said, 'I have earnestly desired to eat this Passover with you' (Luke 22:15), was the same Passover that was then being celebrated. For the Law was a shadow, but the reality is Christ."
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Last Supper */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Wine className="h-8 w-8 text-yellow-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Eucharist</h2>
                <div className="w-12 h-1 bg-yellow-700 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Matthew 26:26-29</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>The Institution of the Eucharist</h3>
              <p>
                During the meal, Jesus took bread, blessed it, broke it, and gave it to His disciples with words that would change the world:
              </p>
              <blockquote className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-700">
                <p className="italic text-lg mb-2">"Take, eat; this is My body."</p>
                <p className="text-sm text-stone-600">— Matthew 26:26</p>
              </blockquote>
              <p>
                Then He took a cup, gave thanks, and gave it to them:
              </p>
              <blockquote className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-700">
                <p className="italic text-lg mb-2">"Drink of it, all of you, for this is My blood of the covenant, which is poured out for many for the forgiveness of sins."</p>
                <p className="text-sm text-stone-600">— Matthew 26:27-28</p>
              </blockquote>
              <p>
                With these words, Jesus instituted the <strong>Holy Eucharist</strong>—the source and summit of Christian worship for two thousand years. The Passover lamb, whose blood had protected Israel from death in Egypt, was fulfilled in <strong>the Lamb of God who takes away the sin of the world</strong> (John 1:29).
              </p>

              <h3>The Real Presence</h3>
              <p>
                For Catholics, the Eucharist is not merely a symbol or a memorial. It is the <strong>Real Presence</strong> of Christ—His body, blood, soul, and divinity—under the appearances of bread and wine. This teaching is rooted in Christ's own words: "This IS My body... This IS My blood." He did not say "This represents My body" or "This symbolizes My blood."
              </p>
              <p>
                The Catechism of the Catholic Church teaches: "The mode of Christ's presence under the Eucharistic species is unique. It raises the Eucharist above all the sacraments as 'the perfection of the spiritual life and the end to which all the sacraments tend.' In the most blessed sacrament of the Eucharist 'the body and blood, together with the soul and divinity, of our Lord Jesus Christ and, therefore, the whole Christ is truly, really, and substantially contained'" (CCC 1374).
              </p>
              <p>
                This doctrine was understood from the earliest days of the Church. St. Ignatius of Antioch (c. 35-108 AD), writing to the Smyrnaeans around 110 AD, condemned those who "abstain from the Eucharist and from prayer, because they do not confess that the Eucharist is the Flesh of our Savior Jesus Christ."
              </p>

              <h3>The Priesthood Instituted</h3>
              <p>
                By commanding the apostles to "do this in remembrance of Me" (Luke 22:19), Jesus also instituted the <strong>ministerial priesthood</strong>. The apostles were given the power to consecrate the Eucharist, to act <em>in persona Christi</em> (in the person of Christ). This priesthood would be handed down through apostolic succession to the present day.
              </p>
              <p>
                St. Thomas Aquinas (1225-1274) explained: "The priest, in consecrating the Eucharist, acts in the person of Christ, by the power of Christ. Hence the priest does not say, 'This is the body of Christ,' but 'This is My body'; for he acts in the person of Christ."
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* The Washing of Feet */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🦶</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Mandatum</h2>
                <div className="w-12 h-1 bg-blue-500 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">John 13:1-20</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>A Shocking Act of Humility</h3>
              <p>
                John's Gospel does not record the institution of the Eucharist at the Last Supper. Instead, it records another profound act: Jesus washing His disciples' feet. This was the task of the lowest servant in a household—not something a rabbi would do for his students.
              </p>
              <p>
                The historical context makes this act even more striking. In first-century Palestine, people walked on dusty roads in open sandals. Their feet became dirty and foul. Foot washing was considered so demeaning that Jewish servants were not required to perform it—only Gentile slaves. Yet Jesus, the Master and Lord, took the place of the lowest slave.
              </p>
              <p>
                Jesus rose from supper, laid aside His outer garments, tied a towel around His waist, poured water into a basin, and began to wash the disciples' feet. Peter protested: "Lord, do You wash my feet?" Jesus answered: "What I am doing you do not understand now, but afterward you will understand" (John 13:6-7).
              </p>
              <p>
                When Peter refused, Jesus replied: "If I do not wash you, you have no share with Me." Peter then exclaimed: "Lord, not my feet only but also my hands and my head!" (John 13:8-9). This exchange reveals both the necessity of Christ's cleansing and Peter's impulsive devotion.
              </p>

              <h3>The New Commandment</h3>
              <p>
                After washing their feet, Jesus explained:
              </p>
              <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="italic text-lg mb-2">"Do you understand what I have done to you? You call Me Teacher and Lord, and you are right, for so I am. If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another's feet. For I have given you an example, that you also should do just as I have done to you."</p>
                <p className="text-sm text-stone-600">— John 13:12-15</p>
              </blockquote>
              <p>
                Jesus then gave the <strong>new commandment</strong> (Latin: <em>mandatum novum</em>), from which "Maundy Thursday" derives its name:
              </p>
              <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="italic text-lg mb-2">"A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. By this all people will know that you are My disciples, if you have love for one another."</p>
                <p className="text-sm text-stone-600">— John 13:34-35</p>
              </blockquote>
              <p>
                St. Augustine preached on this passage: "The Lord Jesus, about to depart from this world to the Father, said to His disciples, 'A new commandment I give to you, that you love one another.' But was not this commandment already in the Law?... How then is it new? Because He has added, 'as I have loved you.'"
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* The Upper Room Discourse */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Upper Room Discourse: Christ's Final Teaching</h2>
            <p>
              After Judas left the Upper Room to betray Him, Jesus delivered His longest recorded teaching—John 14-17, often called the "Upper Room Discourse" or "Farewell Discourse." In these chapters, Jesus prepared His disciples for His departure, promised the Holy Spirit, and prayed His High Priestly Prayer.
            </p>

            <h3>Key Themes of the Discourse</h3>
            <p>
              <strong>The Way to the Father (John 14):</strong> Jesus comforted His troubled disciples: "Let not your hearts be troubled. Believe in God; believe also in Me" (John 14:1). He declared Himself to be "the way, and the truth, and the life. No one comes to the Father except through Me" (John 14:6). This exclusive claim remains foundational to Christian faith.
            </p>
            <p>
              <strong>The Promise of the Spirit (John 14-16):</strong> Jesus promised to send "another Helper" (<em>Paraclete</em>), the Holy Spirit, who would teach them all things and bring to remembrance all that He had said (John 14:26). The Spirit would guide them into all truth, convict the world of sin, and glorify Christ.
            </p>
            <p>
              <strong>Abiding in Christ (John 15):</strong> Using the metaphor of the vine and branches, Jesus taught the necessity of remaining connected to Him: "Abide in Me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in Me" (John 15:4). This abiding relationship produces spiritual fruit and enables effective prayer.
            </p>
            <p>
              <strong>Peace in Tribulation (John 16):</strong> Jesus acknowledged that His disciples would face persecution and sorrow, but promised: "I have said these things to you, that in Me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world" (John 16:33).
            </p>

            <h3>The High Priestly Prayer (John 17)</h3>
            <p>
              Before leaving the Upper Room, Jesus prayed what has been called His "High Priestly Prayer"—one of the most profound prayers in Scripture. He prayed for Himself ("Glorify Your Son"), for His disciples ("Sanctify them in the truth"), and for all who would believe through their word ("That they may all be one").
            </p>
            <p>
              St. Cyril of Alexandria (c. 376-444 AD) wrote: "This prayer is truly great and worthy of Christ. For as a high priest He offers Himself to God the Father, interceding not only for those who were then present, but also for all who would believe through their word—that is, for the Church throughout all ages."
            </p>
            <p>
              The prayer reveals Christ's deep desire for unity among His followers: "That they may all be one, just as You, Father, are in Me, and I in You, that they also may be in Us, so that the world may believe that You have sent Me" (John 17:21). This unity is both Trinitarian (reflecting the unity of Father and Son) and evangelistic (so that the world may believe).
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Agony in the Garden */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Agony in the Garden of Gethsemane</h2>
            <p>
              After the Last Supper, Jesus went with His disciples to the Garden of Gethsemane on the Mount of Olives. The name "Gethsemane" means "oil press," and it was here that Jesus would be pressed to the limits of human endurance.
            </p>

            <h3>The Weight of the World's Sin</h3>
            <p>
              Jesus told His disciples: "My soul is very sorrowful, even to death; remain here, and watch with Me" (Matthew 26:38). He went a little farther, fell on His face, and prayed:
            </p>
            <blockquote className="bg-stone-100 p-6 rounded-lg border-l-4 border-stone-700 my-6">
              <p className="italic text-lg mb-2">"My Father, if it be possible, let this cup pass from Me; nevertheless, not as I will, but as You will."</p>
              <p className="text-sm text-stone-600">— Matthew 26:39</p>
            </blockquote>
            <p>
              The "cup" Jesus spoke of was not merely fear of physical suffering. In the Old Testament, the "cup" often symbolized God's wrath against sin (Psalm 75:8; Isaiah 51:17; Jeremiah 25:15). Jesus was about to bear the weight of the world's sin—to experience the wrath of God against human evil. The horror He faced was spiritual, not merely physical.
            </p>
            <p>
              Luke's Gospel adds a medical detail: "And being in agony He prayed more earnestly; and His sweat became like great drops of blood falling down to the ground" (Luke 22:44). This phenomenon, known as <strong>hematidrosis</strong>, occurs under extreme stress when tiny blood vessels rupture into sweat glands. It testifies to the intensity of Christ's suffering.
            </p>

            <h3>Three Prayers and Three Responses</h3>
            <p>
              Jesus prayed three times, each time submitting to the Father's will: "My Father, if this cannot pass unless I drink it, Your will be done" (Matthew 26:42). This threefold prayer echoes the three temptations in the wilderness (Matthew 4:1-11) and the threefold denial of Peter (Matthew 26:69-75). In each case, Jesus remained faithful where others fell.
            </p>
            <p>
              Meanwhile, the disciples slept. Jesus said to Peter: "So, could you not watch with Me one hour? Watch and pray that you may not enter into temptation. The spirit indeed is willing, but the flesh is weak" (Matthew 26:40-41). This warning applies to all disciples: without vigilant prayer, we fall into temptation.
            </p>

            <h3>The Betrayal</h3>
            <p>
              While Jesus was still speaking, Judas arrived with a crowd armed with swords and clubs, sent by the chief priests and elders. Judas had given them a sign: "The one I will kiss is the man; seize Him." Approaching Jesus, Judas said, "Greetings, Rabbi!" and kissed Him.
            </p>
            <p>
              Jesus' response reveals both sorrow and dignity: "Friend, do what you came to do" (Matthew 26:50). Even at this moment of ultimate betrayal, Jesus addressed Judas as "friend" (<em>hetaire</em>). He who would soon pray for His executioners, "Father, forgive them" (Luke 23:34), offered no word of condemnation to His betrayer.
            </p>
            <p>
              The disciples attempted to defend Jesus. Peter drew his sword and struck the high priest's servant, cutting off his ear. Jesus stopped him: "Put your sword back into its place. For all who take the sword will perish by the sword. Do you think that I cannot appeal to My Father, and He will at once send Me more than twelve legions of angels? But how then should the Scriptures be fulfilled, that it must be so?" (Matthew 26:52-54).
            </p>
            <p>
              Luke's Gospel adds that Jesus healed the servant's ear (Luke 22:51)—His last miracle before the Cross, an act of mercy to an enemy. The disciples then fled, fulfilling Jesus' prediction: "You will all fall away because of Me this night" (Matthew 26:31).
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Church Fathers on Maundy Thursday */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Church Fathers on Maundy Thursday</h2>
            
            <h3>St. John Chrysostom on the Eucharist</h3>
            <p>
              St. John Chrysostom, the great preacher of Antioch and Constantinople, delivered profound homilies on the Eucharist. In his Homily 82 on Matthew, he wrote:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Christ is present at that Table. The One who prepared the Table is the same who sanctifies it. For it is not a man who changes the offerings into the Body and Blood of Christ by the words of Christ, but Christ Himself, who was crucified for us. The priest stands there as His representative, speaking the words; but the power and grace are of God. 'This is My body,' He says. This statement transforms the offerings."</p>
            </blockquote>

            <h3>St. Augustine on the Foot Washing</h3>
            <p>
              St. Augustine of Hippo (354-430 AD) preached on the meaning of the foot washing in his Tractates on John:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The Lord washed the feet of His disciples... to show us the humility that we ought to have. For if the Lord was not ashamed to wash the feet of His servants, how much more ought we to be ashamed to despise the feet of our fellow servants! But perhaps someone says, 'I am a rich man, I am a noble, I am a consul; I cannot debase myself to wash the feet of my slave.' Then you are greater than your Lord. For He who was Lord of heaven and earth, before whom all the angels tremble, bent down to wash the feet of His servants."</p>
            </blockquote>

            <h3>St. Thomas Aquinas on the Priesthood</h3>
            <p>
              St. Thomas Aquinas (1225-1274), the great Dominican theologian, wrote in his <em>Summa Theologiae</em> about the institution of the priesthood:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The priestly power consists in two things: in consecrating and in forgiving sins. Both of these are signified in the washing of the feet. For the washing of feet signifies the washing away of sins. And that the priest should have power to do this, is shown by the Lord saying to Peter, 'If I do not wash you, you will have no part with Me.' And therefore the Church, in ordaining priests, washes their feet, to signify that they should be humble and ready to serve."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Catholic Perspective - Extended */}
          <section className="bg-vatican-red/5 p-8 md:p-12 rounded-2xl border border-vatican-red/20">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Church className="h-6 w-6 text-vatican-red mr-3" />
              Maundy Thursday in the Catholic Church
            </h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>The Mass of the Lord's Supper</h3>
              <p>
                Maundy Thursday begins the <strong>Easter Triduum</strong> ("Three Days")—the most sacred liturgical celebration of the year. The evening Mass of the Lord's Supper commemorates the institution of the Eucharist and the priesthood.
              </p>
              <p>
                The liturgy includes the <strong>Washing of the Feet</strong> (<em>Mandatum</em>), where the priest washes the feet of twelve people, following Christ's example. Pope Francis expanded this rite in 2016 to include women and girls, emphasizing that Christ's love and service extend to all. The decree <em>In Missa in Cena Domini</em> stated: "The pastors of the Church may choose a small group of the faithful to represent the variety and unity of the one People of God."
              </p>

              <h3>Transfer of the Blessed Sacrament</h3>
              <p>
                At the end of Mass, the Blessed Sacrament is solemnly transferred to a "reposition" chapel or altar, decorated with flowers and candles. This represents Jesus' arrest and imprisonment. The faithful are invited to spend time in adoration, keeping watch with Christ as He asked His disciples in Gethsemane: "Could you not watch with Me one hour?" (Matthew 26:40).
              </p>
              <p>
                The main altar is then stripped bare, and all candles and decorations are removed. This symbolizes Christ's humiliation and the abandonment by His disciples. The church is left stark and empty, preparing for the solemnity of Good Friday.
              </p>

              <h3>The Chrism Mass</h3>
              <p>
                In many dioceses, the <strong>Chrism Mass</strong> is celebrated on Holy Thursday morning (though some celebrate it earlier in Holy Week). The bishop blesses the three holy oils:
              </p>
              <ul>
                <li><strong>Oil of Catechumens:</strong> Used in baptism to strengthen catechumens against temptation</li>
                <li><strong>Oil of the Sick:</strong> Used in the Anointing of the Sick for healing and strength</li>
                <li><strong>Sacred Chrism:</strong> Used in baptism, confirmation, ordination, and the consecration of churches and altars</li>
              </ul>
              <p>
                Priests also renew their <strong>priestly promises</strong> during this Mass, reaffirming their commitment to serve Christ and His Church faithfully. This connects beautifully with Jesus' institution of the priesthood at the Last Supper.
              </p>

              <h3>Traditions and Devotions</h3>
              <ul>
                <li><strong>Visita Iglesia:</strong> Visiting seven churches to pray before the Blessed Sacrament, keeping watch with Christ</li>
                <li><strong>Watching and Praying:</strong> Spending time in adoration, "watching one hour" with Christ in His agony</li>
                <li><strong>Acts of Service:</strong> Following Christ's example by performing acts of charity and service</li>
                <li><strong>Seder Meals:</strong> Some Catholic families celebrate a Christian Seder meal, connecting the Passover to the Eucharist</li>
              </ul>

              <h3>Spiritual Themes for Meditation</h3>
              <p>
                The Church invites the faithful to meditate on several themes during Maundy Thursday:
              </p>
              <ul>
                <li><strong>The Gift of the Eucharist:</strong> Christ gave us Himself—His body, blood, soul, and divinity—as food for our journey. Do we receive Him worthily? Do we adore Him in the Blessed Sacrament?</li>
                <li><strong>The Priesthood:</strong> Christ instituted the priesthood to continue His presence and sacrifice in the world. Do we pray for our priests? Do we support their ministry?</li>
                <li><strong>Humility and Service:</strong> Christ washed His disciples' feet, modeling servant leadership. Do we serve others with humility, or do we seek positions of honor?</li>
                <li><strong>The New Commandment of Love:</strong> "Love one another as I have loved you." Do we love sacrificially? Do we forgive our enemies?</li>
                <li><strong>Agony and Surrender:</strong> In Gethsemane, Jesus surrendered to the Father's will. Do we trust God in our own agonies? Do we say, "Not my will, but Yours be done"?</li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Archaeological and Historical Context */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Archaeology and the Upper Room</h2>
            <p>
              The traditional site of the Upper Room (Latin: <em>Cenaculum</em>) is located on Mount Zion in Jerusalem, outside the current Old City walls but within the ancient city at the time of Jesus. While the current structure dates to the Crusader period (12th century), it may stand on the site of an earlier Byzantine church that commemorated the location.
            </p>

            <h3>The Upper Room in First-Century Jerusalem</h3>
            <p>
              Archaeological evidence confirms that first-century Jerusalem had many large upper rooms (<em>anelon</em> in Greek) used for gatherings. These were typically reached by an external staircase and were the largest room in a house—suitable for a group the size of Jesus and the Twelve.
            </p>
            <p>
              The Upper Room was likely in the home of a wealthy supporter of Jesus. Mark's Gospel records that Jesus told His disciples to follow a man carrying a jar of water—an unusual sight, as water carrying was typically women's work. This secret signal suggests the homeowner wished to avoid alerting authorities to Jesus' location during Passover (Mark 14:12-16; Luke 22:7-13).
            </p>

            <h3>The Garden of Gethsemane</h3>
            <p>
              The Garden of Gethsemane is located at the foot of the Mount of Olives, across the Kidron Valley from Jerusalem. The name means "oil press," and olive groves have been cultivated there since ancient times. Jesus often went there with His disciples (John 18:2), making it a familiar place of prayer.
            </p>
            <p>
              Today, the Church of All Nations (also called the Basilica of the Agony) stands at the traditional site of Jesus' prayer. Built in 1924 over the ruins of earlier Byzantine and Crusader churches, it enshrines a section of bedrock believed to be where Jesus prayed. The garden still contains olive trees, some of which are hundreds of years old—though none date to the time of Christ.
            </p>
            <p>
              The proximity of Gethsemane to Jerusalem is significant. Jesus could see the city lights, the Temple Mount, and the Eastern Gate from the Mount of Olives. He knew that Judas would soon arrive with soldiers. He had only to cross the Kidron Valley and climb the slopes of the Mount of Olives to escape into the wilderness of Judea, where He could evade capture. Yet He stayed and prayed, "Not My will, but Yours be done."
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Eucharistic Miracles and Devotion */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Eucharistic Devotion Through the Centuries</h2>
            <p>
              From the earliest days of the Church, Christians have recognized the profound mystery of the Eucharist. St. Justin Martyr (c. 100-165 AD), writing to the Roman emperor Antoninus Pius around 155 AD, described the Eucharistic liturgy in terms that would be recognizable to Catholics today:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"This food we call the Eucharist, of which no one is allowed to partake except one who believes that the things we teach are true, and has received the washing for forgiveness of sins and for rebirth, and who lives as Christ handed down to us. For we do not receive these things as common bread or common drink; but as Jesus Christ our Savior being incarnate by God's word took flesh and blood for our salvation, so also we have been taught that the food consecrated by the word of prayer which comes from Him, from which our flesh and blood are nourished by transformation, is the flesh and blood of that incarnate Jesus."</p>
              <p className="text-sm text-stone-600 mt-2">— Justin Martyr, <em>First Apology</em> 66</p>
            </blockquote>

            <h3>Eucharistic Adoration</h3>
            <p>
              The practice of <strong>Eucharistic adoration</strong>—praying before the exposed Blessed Sacrament—developed gradually in the Church. While the early Christians always reverenced the Eucharist, extended adoration outside of Mass became more common in the Middle Ages, particularly after the establishment of the feast of Corpus Christi (Body of Christ) in 1264.
            </p>
            <p>
              St. Thomas Aquinas, who composed the liturgical texts for Corpus Christi, wrote hymns that are still sung today, including <strong>"Pange Lingua"</strong> ("Sing, My Tongue") and <strong>"Tantum Ergo"</strong> ("Down in Adoration Falling"). These hymns express profound Eucharistic theology in poetic form.
            </p>
            <p>
              The <strong>Perpetual Adoration</strong> movement, where the Blessed Sacrament is exposed for adoration 24 hours a day, spread widely in the 20th century. Pope John Paul II was a strong advocate, writing in his encyclical <em>Ecclesia de Eucharistia</em> (2003): "The Church and the world have a great need for Eucharistic worship. Jesus awaits us in this sacrament of love."
            </p>

            <h3>Maundy Thursday Night Adoration</h3>
            <p>
              On Maundy Thursday night, Catholics are invited to spend time in adoration before the Blessed Sacrament at the altar of repose. This practice responds to Jesus' question in Gethsemane: "Could you not watch with Me one hour?" Many parishes offer extended hours of adoration until midnight, allowing the faithful to keep vigil with Christ on the night before His crucifixion.
            </p>
            <p>
              Pope Benedict XVI reflected on this practice: "On Holy Thursday, the day on which the Lord entrusted to the Church the gift of the Eucharist and with it the priesthood, we are invited to remain with Him in adoration... This watching with Jesus is a sign of our gratitude and love."
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Modern Spiritual Application */}
          <section className="bg-vatican-gold/10 p-8 md:p-12 rounded-2xl border border-vatican-gold/30">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Living Maundy Thursday Today</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Personal and Family Practices</h3>
              <ul>
                <li><strong>Attend the Evening Mass:</strong> Participate fully in the Mass of the Lord's Supper, including the washing of feet.</li>
                <li><strong>Spend Time in Adoration:</strong> Stay after Mass to pray before the Blessed Sacrament. If possible, visit different churches for Visita Iglesia.</li>
                <li><strong>Wash Someone's Feet:</strong> In your family or community, perform an act of humble service—literally washing feet or metaphorically serving others.</li>
                <li><strong>Forgive Someone:</strong> The new commandment is to love as Christ loved. Is there someone you need to forgive? Maundy Thursday is the perfect day.</li>
                <li><strong>Pray for Priests:</strong> On the day Christ instituted the priesthood, pray for your parish priest, for vocations, and for the Pope.</li>
                <li><strong>Prepare for Good Friday:</strong> Begin the fast and abstinence that will continue through Good Friday.</li>
              </ul>

              <h3>Questions for Reflection</h3>
              <ul>
                <li>Do I receive the Eucharist worthily, with proper preparation and gratitude?</li>
                <li>How can I better adore Christ in the Blessed Sacrament?</li>
                <li>Am I willing to serve others in humility, or do I seek recognition?</li>
                <li>Is there someone I need to forgive or reconcile with?</li>
                <li>Do I trust God in my own "Gethsemane" moments? Can I say, "Not my will, but Yours be done"?</li>
              </ul>

              <h3>A Prayer for Maundy Thursday</h3>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
                <p className="italic text-base">"Lord Jesus, on this holy night You gave us the gift of Your Body and Blood in the Eucharist. You washed Your disciples' feet and taught us to serve one another in humility. You prayed in the Garden and accepted the Father's will. Grant that we may receive You worthily, serve You in the poor, and surrender our wills to Yours. Amen."</p>
              </blockquote>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Saints on Maundy Thursday */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Saints' Reflections on Maundy Thursday</h2>
            
            <h3>St. Padre Pio on the Eucharist</h3>
            <p>
              St. Padre Pio of Pietrelcina (1887-1968), the famous stigmatist priest, had a profound devotion to the Eucharist. He wrote: "The heavens are not large enough to hold God's greatness, and yet He makes Himself so small that He comes into the white host."
            </p>
            <p>
              He also said: "It would be easier for the world to survive without the sun than to do so without the Holy Mass." Padre Pio spent hours in preparation before Mass and hours in thanksgiving afterward, recognizing the infinite value of the Eucharistic sacrifice.
            </p>

            <h3>St. Teresa of Calcutta on the Priesthood</h3>
            <p>
              St. Teresa of Calcutta (1910-1997) wrote: "The priest is not a priest for himself; he does not give himself absolution; he does not administer the Sacraments to himself. He is not for himself—he is for you."
            </p>
            <p>
              She also said: "If I were a priest, I would spend one hour every day before the Blessed Sacrament. For in the Eucharist we have Jesus, and where Jesus is, there is heaven." Mother Teresa's deep love for priests and the Eucharist exemplifies the connection between Maundy Thursday's two great gifts.
            </p>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8">
            <Link 
              href="/christianity/holy-week/holy-wednesday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Holy Wednesday
            </Link>
            <Link 
              href="/christianity/holy-week/good-friday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              Good Friday <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
