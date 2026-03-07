import Link from "next/link";
import { ArrowRight, ArrowLeft, Church, BookOpen, Building2, Scroll } from "lucide-react";

export default function HolyTuesdayPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-blue-50 rounded-full">
            <span className="text-2xl mr-2">📖</span>
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Teaching in the Temple</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Holy Tuesday: <br />
            <span className="text-blue-700">Parables and Prophecy</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            On Holy Tuesday, Jesus taught in the Temple courts, delivering some of His most powerful parables and prophesying the destruction of Jerusalem. His authority was challenged by religious leaders, and He pronounced sharp warnings against hypocrisy and spiritual blindness. This was a day of confrontation and revelation, as Jesus exposed the emptiness of religious formalism.
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          
          {/* The Challenge to Jesus' Authority */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Question of Authority</h2>
            <p>
              Jesus returned to the Temple on Holy Tuesday and began teaching the people. The chief priests, scribes, and elders—the three groups that made up the Sanhedrin—approached Him with a challenge: "By what authority are You doing these things, and who gave You this authority?" (Matthew 21:23).
            </p>
            <p>
              This was a trap. If Jesus claimed divine authority, they could accuse Him of blasphemy. If He claimed merely human authority, they could dismiss Him as a pretender. Jesus responded with a counter-question about John the Baptist's authority: "The baptism of John, from where did it come? From heaven or from man?" (Matthew 21:25).
            </p>
            <p>
              They were trapped. If they said "from heaven," Jesus would ask why they didn't believe John's testimony about Him. If they said "from man," the crowds—who revered John as a prophet—would turn against them. They answered: "We do not know." Jesus replied: "Neither will I tell you by what authority I do these things" (Matthew 21:27).
            </p>
            <p>
              This exchange set the stage for a day of intense teaching and confrontation. Jesus had exposed their dishonesty and refusal to acknowledge divine truth when it confronted them. Now He would use parables to expose their hypocrisy and warn them of coming judgment.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Parable of the Two Sons */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Parable of the Two Sons</h2>
            <p>
              Jesus began with a simple but pointed parable: "A man had two sons. And he went to the first and said, 'Son, go and work in the vineyard today.' And he answered, 'I will not,' but afterward he changed his mind and went. And he went to the other son and said the same. And he answered, 'I go, sir,' but did not go. Which of the two did the will of his father?" (Matthew 21:28-31).
            </p>
            <p>
              The religious leaders answered: "The first." Jesus then delivered the application: "Truly, I say to you, the tax collectors and the prostitutes go into the kingdom of God before you. For John came to you in the way of righteousness, and you did not believe him, but the tax collectors and the prostitutes believed him. And even when you saw it, you did not afterward change your minds and believe him" (Matthew 21:31-32).
            </p>
            <p>
              <strong>The meaning was unmistakable:</strong> The religious leaders were like the son who said "I go" but didn't go. They professed obedience to God but didn't practice it. The tax collectors and sinners were like the son who refused but later repented. Despite their initial rejection of God, they entered the kingdom through repentance and faith.
            </p>
            <p>
              St. Augustine commented: "The first son represents the Gentiles, who at first did not obey God but afterward repented. The second son represents the Jews, who professed to obey God but did not. Let us not be hearers only, but doers of the word (James 1:22)."
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Parable of the Wicked Tenants */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <BookOpen className="h-8 w-8 text-blue-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Wicked Tenants</h2>
                <div className="w-12 h-1 bg-blue-700 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Matthew 21:33-46</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>The Parable</h3>
              <p>
                Jesus told a parable about a landowner who planted a vineyard, put a fence around it, dug a winepress, and built a tower—the very elements described in Isaiah's "Song of the Vineyard" (Isaiah 5:1-7). He leased it to tenants and went into another country. When harvest time came, he sent servants to collect his fruit.
              </p>
              <p>
                The tenants beat one servant, killed another, and stoned a third. The landowner sent more servants, but the tenants treated them the same way. Finally, he sent his son: "They will respect my son." But the tenants said: "This is the heir. Come, let us kill him and have his inheritance." They threw him out of the vineyard and killed him (Matthew 21:33-39).
              </p>
              <p>
                Jesus asked: "When therefore the owner of the vineyard comes, what will he do to those tenants?" The crowd answered: "He will put those wretches to a miserable death and let out the vineyard to other tenants who will give him the fruits in their seasons" (Matthew 21:40-41).
              </p>

              <h3>The Interpretation</h3>
              <p>
                Jesus then quoted Psalm 118:22-23: "The stone that the builders rejected has become the cornerstone; this was the Lord's doing, and it is marvelous in our eyes." He added: "Therefore I tell you, the kingdom of God will be taken away from you and given to a people producing its fruits" (Matthew 21:42-43).
              </p>
              <p>
                The meaning was unmistakable. The <strong>vineyard</strong> was Israel (Isaiah 5:7). The <strong>tenants</strong> were the religious leaders, entrusted with God's people. The <strong>servants</strong> were the prophets, repeatedly sent and rejected (2 Chronicles 36:15-16). The <strong>son</strong> was Jesus Himself. The <strong>other tenants</strong> were the Gentiles and the faithful remnant who would bear fruit for God.
              </p>
              <p>
                The chief priests and Pharisees understood that "He was speaking about them" (Matthew 21:45). They wanted to arrest Him, but they feared the crowds, who held Him to be a prophet.
              </p>

              <h3>Theological Significance</h3>
              <p>
                This parable reveals several profound truths:
              </p>
              <ul>
                <li><strong>God's patience:</strong> He sent servant after servant, giving repeated opportunities for repentance.</li>
                <li><strong>Human rebellion:</strong> The tenants' escalating violence shows the progression of sin.</li>
                <li><strong>Christ's uniqueness:</strong> The son is distinguished from the servants—Jesus is not just another prophet but the Son of God.</li>
                <li><strong>The rejection of the Messiah:</strong> Israel's leaders would kill the Son, fulfilling Old Testament patterns.</li>
                <li><strong>The inclusion of the Gentiles:</strong> The vineyard would be given to others—the gospel would go to all nations.</li>
              </ul>
              <p>
                St. Cyril of Alexandria wrote: "The Lord speaks this parable against the scribes and chief priests, showing that they were the wicked farmers who killed the heir. But the cornerstone, though rejected by the builders, became the head of the corner—Christ, though crucified, became the head of the Church."
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* The Parable of the Wedding Feast */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Parable of the Wedding Feast</h2>
            <p>
              Jesus continued with the <strong>Parable of the Wedding Feast</strong> (Matthew 22:1-14). A king gave a wedding feast for his son and sent servants to call those invited, but they would not come. He sent more servants: "Tell those who are invited, 'See, I have prepared my dinner, my oxen and fat calves have been slaughtered, and everything is ready. Come to the wedding feast.'" But they paid no attention and went off, one to his farm, another to his business. The rest seized his servants, treated them shamefully, and killed them (Matthew 22:2-6).
            </p>
            <p>
              The king was enraged, sent his troops, destroyed those murderers, and burned their city. Then he said to his servants: "The wedding feast is ready, but those invited were not worthy. Go therefore to the main roads and invite to the wedding feast as many as you find." The servants gathered all whom they found, both bad and good, and the wedding hall was filled with guests (Matthew 22:7-10).
            </p>
            <p>
              But the king noticed a man not wearing wedding clothes. He asked: "Friend, how did you get in here without wedding clothes?" The man was speechless. The king ordered him bound and cast into outer darkness (Matthew 22:11-13).
            </p>

            <h3>The Meaning</h3>
            <p>
              The <strong>king</strong> is God the Father. The <strong>son</strong> is Jesus Christ. The <strong>wedding feast</strong> is the kingdom of heaven. The <strong>invited guests</strong> are Israel, especially the religious leaders. The <strong>servants</strong> are the prophets and apostles. The <strong>destruction of the city</strong> foreshadows the destruction of Jerusalem in 70 AD. The <strong>guests from the roads</strong> are the Gentiles and sinners invited into the kingdom.
            </p>
            <p>
              The man <strong>without wedding clothes</strong> represents those who accept the invitation but don't undergo the transformation the kingdom requires. In first-century Jewish culture, wedding garments were often provided by the host. The man's lack of proper clothing indicated not poverty but refusal to accept the host's provision—a rejection of grace.
            </p>
            <p>
              St. Gregory the Great preached: "The wedding garment is charity. Some are in the Church but do not have charity. They may have faith, but faith without works is dead (James 2:17). Let us put on the wedding garment of love, that we may not be cast into outer darkness."
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Attempts to Trap Jesus */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Attempts to Trap Jesus</h2>
            <p>
              Throughout the day, various groups attempted to trap Jesus with questions designed to discredit Him or get Him in trouble with the authorities.
            </p>

            <h3>The Question About Taxes (Matthew 22:15-22)</h3>
            <p>
              The Pharisees and Herodians (an unusual alliance) asked: "Is it lawful to pay taxes to Caesar, or not?" If Jesus said "yes," He would alienate Jews who hated Roman occupation. If He said "no," He could be accused of sedition.
            </p>
            <p>
              Jesus asked for a coin: "Whose likeness and inscription is this?" They answered: "Caesar's." He said: "Therefore render to Caesar the things that are Caesar's, and to God the things that are God's" (Matthew 22:21).
            </p>
            <p>
              This brilliant answer affirmed the legitimacy of civil authority while affirming God's supreme claim. The coin bore Caesar's image—give it to him. Humans bear God's image (Genesis 1:27)—give ourselves to God.
            </p>

            <h3>The Question About the Resurrection (Matthew 22:23-33)</h3>
            <p>
              The Sadducees (who denied the resurrection) posed an absurd hypothetical: A woman married seven brothers in succession, each dying without children. "In the resurrection, therefore, of the seven, whose wife will she be?"
            </p>
            <p>
              Jesus answered: "You are wrong, because you know neither the Scriptures nor the power of God. For in the resurrection they neither marry nor are given in marriage, but are like angels in heaven" (Matthew 22:29-30). He then quoted Exodus 3:6, where God said to Moses: "I am the God of Abraham, and the God of Isaac, and the God of Jacob"—using the present tense to show that these patriarchs were still alive to God.
            </p>

            <h3>The Greatest Commandment (Matthew 22:34-40)</h3>
            <p>
              A lawyer asked: "Teacher, which is the great commandment in the Law?" Jesus answered with the <strong>Shema</strong> (Deuteronomy 6:5) and Leviticus 19:18:
            </p>
            <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="italic text-lg mb-2">"You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself. On these two commandments depend all the Law and the Prophets."</p>
              <p className="text-sm text-stone-600">— Matthew 22:37-40</p>
            </blockquote>
            <p>
              This answer summarized the entire Law: love God and love neighbor. All other commandments are applications of these two principles. The religious leaders could not fault His answer.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Seven Woes */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Seven Woes Against the Pharisees</h2>
            <p>
              In Matthew 23, Jesus pronounced seven "woes" against the scribes and Pharisees—perhaps His harshest words recorded in the Gospels. Each woe exposed a different aspect of religious hypocrisy.
            </p>

            <h3>Woe 1: Blocking the Kingdom (Matthew 23:13)</h3>
            <p>
              "Woe to you, scribes and Pharisees, hypocrites! For you shut the kingdom of heaven in people's faces. For you neither enter yourselves nor allow those who would enter to go in."
            </p>
            <p>
              The religious leaders, who should have been guides to the Messiah, became obstacles. They rejected Jesus and discouraged others from following Him.
            </p>

            <h3>Woe 2: Exploiting Converts (Matthew 23:15)</h3>
            <p>
              "Woe to you, scribes and Pharisees, hypocrites! For you travel across sea and land to make a single proselyte, and when he becomes a proselyte, you make him twice as much a child of hell as yourselves."
            </p>
            <p>
              Proselytes—Gentile converts to Judaism—often became more zealous than native Jews. The Pharisees exploited this zeal, turning converts into children of hell by teaching them hypocrisy.
            </p>

            <h3>Woe 3: Blind Oaths (Matthew 23:16-22)</h3>
            <p>
              "Woe to you, blind guides, who say, 'If anyone swears by the temple, it is nothing, but if anyone swears by the gold of the temple, he is bound by his oath.'"
            </p>
            <p>
              The Pharisees had developed elaborate distinctions about which oaths were binding, allowing people to evade their commitments. Jesus exposed this casuistry: the Temple, the altar, and heaven are greater than gold, gifts, and the throne of God. All oaths involve God.
            </p>

            <h3>Woe 4: Majoring on Minors (Matthew 23:23-24)</h3>
            <p>
              "Woe to you, scribes and Pharisees, hypocrites! For you tithe mint and dill and cumin, and have neglected the weightier matters of the Law: justice and mercy and faithfulness. These you ought to have done, without neglecting the others. You blind guides, straining out a gnat and swallowing a camel!"
            </p>
            <p>
              The Pharisees were scrupulous about tithing garden herbs (as required by Deuteronomy 14:22-23) but neglected justice, mercy, and faithfulness (Micah 6:8). They strained out the smallest unclean insect but swallowed the largest unclean animal—a vivid picture of misplaced priorities.
            </p>

            <h3>Woe 5: Clean Outside, Corrupt Inside (Matthew 23:25-26)</h3>
            <p>
              "Woe to you, scribes and Pharisees, hypocrites! For you clean the outside of the cup and the plate, but inside they are full of greed and self-indulgence."
            </p>
            <p>
              Ritual purity laws concerned clean and unclean vessels. The Pharisees focused on external cleanliness while their hearts were corrupt. Jesus called for inner cleansing: "First clean the inside of the cup and the plate, that the outside also may be clean."
            </p>

            <h3>Woe 6: Whitewashed Tombs (Matthew 23:27-28)</h3>
            <p>
              "Woe to you, scribes and Pharisees, hypocrites! For you are like whitewashed tombs, which outwardly appear beautiful, but within are full of dead people's bones and all uncleanness."
            </p>
            <p>
              Tombs were whitewashed to warn people away, preventing accidental defilement (Numbers 19:16). The Pharisees appeared righteous outwardly but were inwardly full of hypocrisy and lawlessness. Their religion was a facade covering spiritual death.
            </p>

            <h3>Woe 7: Children of Murderers (Matthew 23:29-36)</h3>
            <p>
              "Woe to you, scribes and Pharisees, hypocrites! For you build the tombs of the prophets and decorate the monuments of the righteous, saying, 'If we had lived in the days of our fathers, we would not have taken part with them in shedding the blood of the prophets.'"
            </p>
            <p>
              They claimed they would not have killed the prophets, but they were about to kill the greatest Prophet. Jesus declared: "Fill up, then, the measure of your fathers... I send you prophets and wise men and scribes, some of whom you will kill and crucify... so that on you may come all the righteous blood shed on earth" (Matthew 23:32-35).
            </p>
            <p>
              This prophecy was fulfilled in 70 AD when the Romans destroyed Jerusalem—a judgment on the generation that rejected the Messiah.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* The Olivet Discourse */}
          <section className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-36">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Building2 className="h-8 w-8 text-stone-700" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Olivet Discourse</h2>
                <div className="w-12 h-1 bg-stone-700 mx-auto my-4 rounded-full"></div>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-widest">Matthew 24-25</p>
              </div>
            </div>
            <div className="md:col-span-8 prose prose-stone prose-lg">
              <h3>Lament Over Jerusalem</h3>
              <p>
                As Jesus left the Temple, His disciples pointed out the magnificent buildings. Jesus responded with a stunning prophecy:
              </p>
              <blockquote className="bg-stone-100 p-6 rounded-lg border-l-4 border-stone-700">
                <p className="italic text-lg mb-2">"You see all these, do you not? Truly, I say to you, there will not be left here one stone upon another that will not be thrown down."</p>
                <p className="text-sm text-stone-600">— Matthew 24:2</p>
              </blockquote>
              <p>
                This prophecy was fulfilled in 70 AD when the Roman army, led by Titus, destroyed Jerusalem and burned the Temple. The golden ornaments melted in the fire, and Roman soldiers pried apart every stone to retrieve the gold—exactly as Jesus had predicted.
              </p>

              <h3>The Disciples' Questions</h3>
              <p>
                Sitting on the Mount of Olives, the disciples asked: "Tell us, when will these things be, and what will be the sign of Your coming and of the end of the age?" (Matthew 24:3). Jesus' response—the <strong>Olivet Discourse</strong>—addressed three questions:
              </p>
              <ul>
                <li>When will the Temple be destroyed?</li>
                <li>What will be the sign of Christ's coming?</li>
                <li>What will be the sign of the end of the age?</li>
              </ul>

              <h3>Signs of the End</h3>
              <p>
                Jesus described wars, rumors of wars, famines, earthquakes, persecution, false messiahs, and the spread of the Gospel to all nations. He warned of a "great tribulation" such as has not been from the beginning of the world (Matthew 24:21). The <strong>"abomination of desolation"</strong> (Matthew 24:15; Daniel 9:27; 11:31; 12:11) would signal the need to flee.
              </p>
              <p>
                Many interpreters see a <strong>double fulfillment</strong>: the immediate destruction of Jerusalem in 70 AD and the ultimate return of Christ at the end of history. The language often applies to both events simultaneously—a pattern called "prophetic foreshortening."
              </p>

              <h3>Call to Watchfulness</h3>
              <p>
                Jesus concluded with parables about watchfulness:
              </p>
              <ul>
                <li><strong>The Faithful and Wicked Servants (Matthew 24:45-51):</strong> Be found faithful when the Master returns.</li>
                <li><strong>The Ten Virgins (Matthew 25:1-13):</strong> Five were wise, prepared with oil; five were foolish, unprepared. "Watch therefore, for you know neither the day nor the hour."</li>
                <li><strong>The Talents (Matthew 25:14-30):</strong> Use your gifts faithfully; the one who buries his talent is cast into outer darkness.</li>
                <li><strong>The Sheep and Goats (Matthew 25:31-46):</strong> The final judgment will be based on how we treated "the least of these"—the hungry, thirsty, stranger, naked, sick, imprisoned.</li>
              </ul>
              <p>
                The consistent message: <strong>be ready</strong>. The timing of Christ's return is unknown, so His followers must live in constant expectation and faithfulness.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Historical Context of the Temple */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Temple in Jesus' Day</h2>
            <p>
              Understanding the Temple where Jesus taught on Holy Tuesday illuminates the significance of His words. Herod's Temple was one of the wonders of the ancient world—a massive complex covering 35 acres, with stones weighing up to 100 tons. Construction had begun 46 years before Jesus' ministry (John 2:20) and would continue until 63 AD, just seven years before its destruction.
            </p>

            <h3>The Temple Courts</h3>
            <p>
              The Temple had a series of courts with increasing levels of sanctity:
            </p>
            <ul>
              <li><strong>The Court of the Gentiles:</strong> The outermost court, open to all people. This is where the money changers and sellers operated.</li>
              <li><strong>The Court of Women:</strong> Where Jewish women could enter and pray.</li>
              <li><strong>The Court of Israel:</strong> For Jewish men to observe sacrifices.</li>
              <li><strong>The Court of the Priests:</strong> Where the altar stood and priests officiated.</li>
              <li><strong>The Holy Place:</strong> Containing the lampstand, table of showbread, and altar of incense.</li>
              <li><strong>The Holy of Holies:</strong> The innermost sanctuary, entered only by the high priest on Yom Kippur.</li>
            </ul>
            <p>
              Jesus likely taught in the <strong>Court of the Gentiles</strong> or the covered colonnades surrounding it (the "Royal Porch" on the south side could hold thousands). This was the public area where rabbis taught and debates occurred.
            </p>

            <h3>The Religious Leaders</h3>
            <p>
              The groups who challenged Jesus on Holy Tuesday represented the full Sanhedrin—the supreme Jewish council of 71 members:
            </p>
            <ul>
              <li><strong>Chief Priests:</strong> The high priest, former high priests, and leaders of priestly families. They were largely Sadducees and controlled Temple operations.</li>
              <li><strong>Scribes:</strong> Experts in the Law who copied, interpreted, and taught Scripture. Most were Pharisees.</li>
              <li><strong>Elders:</strong> Lay leaders from prominent families, representing the non-clerical leadership.</li>
            </ul>
            <p>
              These groups were normally rivals—Sadducees vs. Pharisees, priests vs. scribes. But Jesus brought them together in opposition. As John noted: "The Pharisees and the chief priests had given orders that if anyone knew where He was, he should let them know, so that they might arrest Him" (John 11:57).
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Church Fathers on Holy Tuesday */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Church Fathers on Holy Tuesday</h2>

            <h3>St. John Chrysostom on the Wicked Tenants</h3>
            <p>
              St. John Chrysostom preached on the Parable of the Wicked Tenants:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"See the longsuffering of God! He sent servant after servant, and they maltreated them. He did not immediately punish them, but waited. At last He sent His Son. 'They will reverence My Son,' He said. But they said, 'This is the heir; come, let us kill Him.' O the madness! The greater the honor shown them, the greater their insolence."</p>
            </blockquote>

            <h3>St. Augustine on the Wedding Feast</h3>
            <p>
              St. Augustine wrote in his <em>Tractates on John</em>:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The king sent his servants to call those who were invited to the marriage feast, and they would not come. He sent other servants, saying, 'Tell those who are invited, "Behold, I have prepared my dinner." But they made light of it and went their ways.' Who are these who made light of it? Those who prefer their own business to the kingdom of heaven. For what is it to make light of the feast, but to despise the word of God?"</p>
            </blockquote>

            <h3>St. Jerome on the Seven Woes</h3>
            <p>
              St. Jerome wrote in his <em>Commentary on Matthew</em>:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The Pharisees were whitewashed tombs—beautiful on the outside but full of dead men's bones within. Many today are like them: they wear religious garb, they pray long prayers, they fast twice a week, but their hearts are full of greed and self-indulgence. Let us not be like them, but let our righteousness exceed that of the scribes and Pharisees (Matthew 5:20)."</p>
            </blockquote>

            <h3>St. Gregory the Great on the Great Commandment</h3>
            <p>
              St. Gregory wrote on the twofold love:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"Love of God and love of neighbor are two commandments but they are not two separate loves. For he who does not love his neighbor whom he sees, cannot love God whom he does not see. The love of our neighbor is the test of our love for God. If we say we love God but hate our brother, we are liars (1 John 4:20)."</p>
            </blockquote>

            <h3>Origen on the Parable of the Two Sons</h3>
            <p>
              Origen wrote on the meaning of the two sons:
            </p>
            <blockquote className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold my-6">
              <p className="italic text-base">"The first son, who said 'I will not' but afterward went, represents the Gentiles. They did not have the Law, they did not promise obedience, but when the Gospel came, they repented and believed. The second son, who said 'I go' but did not go, represents the Jews. They had the Law, they promised obedience at Sinai, saying 'All that the Lord has spoken we will do' (Exodus 19:8), but they did not keep their promise."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Saints' Reflections */}
          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Saints' Reflections on Holy Tuesday</h2>

            <h3>St. Thomas Aquinas on Hypocrisy</h3>
            <p>
              St. Thomas wrote about the vice of hypocrisy:
            </p>
            <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700 my-6">
              <p className="italic text-base">"Hypocrisy is a vice contrary to the virtue of truthfulness. The hypocrite pretends to be what he is not, or promises what he does not intend to perform. Christ condemned the Pharisees not for their good deeds but for doing them to be seen by men. Let our righteousness be genuine, done for God's glory, not our own."</p>
            </blockquote>

            <h3>St. Francis de Sales on Watchfulness</h3>
            <p>
              St. Francis wrote about being prepared:
            </p>
            <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700 my-6">
              <p className="italic text-base">"We must always be ready, for we know neither the day nor the hour. The wise virgins had oil in their lamps—they were prepared. The foolish virgins had no oil—they were caught unprepared. Let us store up the oil of charity, the oil of good works, the oil of prayer, that when the Bridegroom comes, we may enter with Him into the marriage feast."</p>
            </blockquote>

            <h3>St. Josemaría Escrivá on Authenticity</h3>
            <p>
              St. Josemaría wrote about being genuine in faith:
            </p>
            <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700 my-6">
              <p className="italic text-base">"God does not want us to be like whitewashed tombs—beautiful outside but full of corruption within. He wants truth in the inward being (Psalm 51:6). Let us be sincere before God, not pretending to be what we are not. If we are sinners, let us admit it and ask for mercy. God prefers a humble sinner to a proud hypocrite."</p>
            </blockquote>
          </section>

          <hr className="border-stone-200" />

          {/* Catholic Perspective */}
          <section className="bg-vatican-red/5 p-8 md:p-12 rounded-2xl border border-vatican-red/20">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Church className="h-6 w-6 text-vatican-red mr-3" />
              Holy Tuesday in the Catholic Church
            </h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Liturgical Focus</h3>
              <p>
                The Gospel reading for Holy Tuesday often focuses on Jesus' prediction of His betrayal and the preparation for His passion. The Church invites the faithful to contemplate Christ's foreknowledge of His suffering and His willing acceptance of the Father's will.
              </p>
              <p>
                In some traditions, the <strong>Chrism Mass</strong> is celebrated on Holy Tuesday (if not on Holy Monday or Holy Thursday morning). This diocesan celebration brings together priests and people to bless the holy oils and renew priestly commitments.
              </p>

              <h3>Spiritual Themes</h3>
              <ul>
                <li><strong>Authenticity:</strong> Jesus' warnings against hypocrisy call Catholics to examine their own hearts. Are we living our faith authentically, or merely going through religious motions?</li>
                <li><strong>Vigilance:</strong> The call to watchfulness is especially relevant during Holy Week. Catholics are encouraged to intensify their prayer, fasting, and almsgiving in these final days before Easter.</li>
                <li><strong>Justice and Mercy:</strong> Jesus' critique of those who "tithe mint, dill, and cumin" while neglecting "the weightier matters of the Law" challenges Catholics to prioritize justice, mercy, and faithfulness in their own lives.</li>
                <li><strong>Love as the Foundation:</strong> The Great Commandment—to love God and neighbor—remains the foundation of Christian ethics. All other commandments flow from this twofold love.</li>
              </ul>

              <h3>Preparation for the Triduum</h3>
              <p>
                Holy Tuesday is a day of spiritual preparation for the sacred Triduum (Holy Thursday through Easter Sunday). Many Catholics use this day to make a thorough examination of conscience, preparing for the Sacrament of Reconciliation before Easter. It is also a traditional time for "spring cleaning" of homes, symbolizing the interior cleansing of the soul.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Modern Spiritual Application */}
          <section className="bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Living Holy Tuesday Today</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <h3>Questions for Personal Reflection</h3>
              <ul>
                <li>Am I like the son who says "I go" but doesn't go—professing obedience while living in disobedience?</li>
                <li>Am I bearing fruit for God's kingdom, or am I all leaves and no fruit?</li>
                <li>Do I "strain out a gnat and swallow a camel"—focusing on minor issues while neglecting justice, mercy, and faithfulness?</li>
                <li>Am I ready for Christ's return, or would I be caught unprepared like the foolish virgins?</li>
                <li>How do I treat "the least of these"—the hungry, thirsty, stranger, naked, sick, imprisoned?</li>
              </ul>

              <h3>Practical Applications</h3>
              <ul>
                <li><strong>Examine Your Priorities:</strong> Are you majoring on minors while neglecting what matters most to God?</li>
                <li><strong>Practice Justice and Mercy:</strong> Look for concrete ways to help the poor, defend the oppressed, and show compassion.</li>
                <li><strong>Be Authentic:</strong> Don't just go through religious motions—let your faith transform your heart and actions.</li>
                <li><strong>Stay Watchful:</strong> Live each day as if Christ might return, being faithful in small things.</li>
                <li><strong>Love God and Neighbor:</strong> Let love be the foundation of everything you do.</li>
              </ul>

              <h3>A Prayer for Holy Tuesday</h3>
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-blue-700 my-6">
                <p className="italic text-base">"Lord Jesus Christ, who taught in the Temple and warned against hypocrisy, cleanse my heart of all pretense. Help me to bear fruit for Your kingdom, to practice justice and mercy, and to love You with all my heart and my neighbor as myself. Keep me watchful and ready for Your return. Amen."</p>
              </blockquote>
            </div>
          </section>

          {/* Navigation */}
          <section className="flex justify-between items-center pt-8">
            <Link 
              href="/christianity/holy-week/holy-monday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Holy Monday
            </Link>
            <Link 
              href="/christianity/holy-week/holy-wednesday"
              className="inline-flex items-center text-vatican-red hover:text-vatican-gold font-semibold"
            >
              Holy Wednesday <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
