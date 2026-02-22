import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Scroll, Users, Split, BookOpen, Church, Flame, Globe, Anchor, Crown, Sword, X, Feather, Sun, ShieldCheck, HeartHandshake, ArrowRight, ExternalLink } from "lucide-react";

export default function CatholicismHistory() {
  const timelineEvents = [
    {
      year: "33 AD",
      title: "Pentecost: The Birth of the Church",
      description: "Fifty days after the Resurrection, the Holy Spirit descended upon the Apostles, empowering them to preach the Gospel. Peter, the first Pope, baptized 3,000 people, marking the public beginning of the Church.",
      icon: <Flame className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "49 AD",
      title: "Council of Jerusalem",
      description: "The Apostles decided that Gentile converts did not need to follow Jewish dietary laws or circumcision, establishing the Church as a universal (Catholic) body open to all nations.",
      icon: <Globe className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "64-67 AD",
      title: "Martyrdom of Peter and Paul",
      description: "Under Emperor Nero's persecution, St. Peter was crucified upside down and St. Paul beheaded in Rome. Their blood became the seed of the Church in the imperial capital.",
      icon: <Sword className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "313 AD",
      title: "Edict of Milan",
      description: "Emperor Constantine issued this decree, granting religious freedom to Christians and ending centuries of Roman persecution.",
      icon: <Sun className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "325 AD",
      title: "First Council of Nicaea",
      description: "The first ecumenical council, convened by Constantine. It defined the divinity of Christ against Arianism and produced the Nicene Creed, the fundamental statement of belief still recited today.",
      icon: <Users className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "380 AD",
      title: "Edict of Thessalonica",
      description: "Emperor Theodosius I made Nicene Christianity the official state religion of the Roman Empire.",
      icon: <Crown className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "397 AD",
      title: "Council of Carthage",
      description: "The canon of the Bible was finalized, confirming the 73 books (46 Old Testament, 27 New Testament) recognized by the Catholic Church.",
      icon: <BookOpen className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "451 AD",
      title: "Council of Chalcedon",
      description: "This council defined that Christ has two natures—fully human and fully divine—united in one person, settling major theological debates.",
      icon: <Anchor className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "529 AD",
      title: "Benedictine Monasticism",
      description: "St. Benedict of Nursia founded Monte Cassino and wrote his 'Rule'. Monasteries became centers of learning, preserving Western civilization through the Dark Ages.",
      icon: <Scroll className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "800 AD",
      title: "Coronation of Charlemagne",
      description: "Pope Leo III crowned Charlemagne as Holy Roman Emperor, solidifying the alliance between the Papacy and secular rulers in Europe.",
      icon: <Crown className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1054 AD",
      title: "The Great Schism",
      description: "The formal separation between the Western (Catholic) and Eastern (Orthodox) churches. Theological (Filioque) and political tensions led to mutual excommunications.",
      icon: <Split className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1095 AD",
      title: "The First Crusade",
      description: "Pope Urban II called for aid to Eastern Christians and the recovery of the Holy Land, launching a complex era of military campaigns.",
      icon: <ShieldCheck className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1225-1274",
      title: "Era of St. Thomas Aquinas",
      description: "The 'Angelic Doctor' wrote the Summa Theologica, harmonizing faith and reason (Aristotelian philosophy), shaping Catholic theology for centuries.",
      icon: <Feather className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1378-1417",
      title: "Western Schism",
      description: "A period of crisis where multiple claimants to the papacy existed simultaneously, eventually resolved by the Council of Constance.",
      icon: <X className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1517 AD",
      title: "The Protestant Reformation",
      description: "Martin Luther published his 95 Theses. The movement challenged Church authority, leading to the formation of Protestant denominations.",
      icon: <BookOpen className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1531 AD",
      title: "Our Lady of Guadalupe",
      description: "The Virgin Mary appeared to St. Juan Diego in Mexico. This miraculous event led to the conversion of millions of indigenous people in the Americas.",
      icon: <Sun className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1545-1563",
      title: "Council of Trent",
      description: "The Church's response to the Reformation (Counter-Reformation). It clarified doctrine, standardized the Mass (Tridentine), and reformed abuses.",
      icon: <ShieldCheck className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1854 AD",
      title: "Dogma of the Immaculate Conception",
      description: "Pope Pius IX infallibly defined that Mary was conceived without original sin.",
      icon: <Crown className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1869-1870",
      title: "First Vatican Council",
      description: "Defined the dogma of Papal Infallibility, stating the Pope is preserved from error when defining doctrine on faith and morals ex cathedra.",
      icon: <Users className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1962-1965",
      title: "Second Vatican Council",
      description: "A landmark council focused on spiritual renewal. It brought major changes to the liturgy (vernacular), emphasized the role of the laity, and promoted ecumenical dialogue.",
      icon: <Church className="h-6 w-6 text-vatican-gold" />,
      link: "/catholicism/vatican-ii"
    },
    {
      year: "1978-2005",
      title: "Pontificate of John Paul II",
      description: "One of the longest papacies in history. He traveled globally, fought communism, established World Youth Day, and emphasized the 'New Evangelization'.",
      icon: <Globe className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "2025 AD",
      title: "Election of Pope Leo XIV",
      description: "Elected following the death of Pope Francis in 2025, Pope Leo XIV dedicated his pontificate to restoring tradition and unity within the Church, honoring the great teaching popes of the past.",
      icon: <Crown className="h-6 w-6 text-vatican-gold" />,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <Scroll className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Church History</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Two Millennia of <br />
            <span className="text-vatican-red">Tradition & Truth</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            The history of the Catholic Church is a 2,000-year journey of faith, struggle, definition, and renewal. From a small group of disciples to a global family of over 1.3 billion believers.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-stone-200 ml-4 md:ml-6 space-y-12 md:space-y-16 py-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute top-0 left-[-9px] w-[18px] h-[18px] rounded-full bg-stone-50 border-4 border-vatican-gold group-hover:bg-vatican-gold transition-colors duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  {/* Date & Icon */}
                  <div className="flex items-center md:w-48 shrink-0">
                    <div className="bg-vatican-red/10 p-2 rounded-lg mr-3">
                      {event.icon}
                    </div>
                    <span className="font-bold text-vatican-red font-serif text-xl">{event.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 w-full relative">
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{event.title}</h3>
                    <p className="text-stone-600 leading-relaxed mb-4">{event.description}</p>
                    
                    {/* Render Link if present */}
                    {event.link && (
                      <Link 
                        href={event.link}
                        className="inline-flex items-center text-vatican-red hover:text-stone-900 font-semibold transition-colors mt-2"
                      >
                        Read Full History <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sources Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-stone-100 p-8 rounded-2xl">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <BookOpen className="h-5 w-5 text-stone-500 mr-3" />
              Sources Used for Timeline
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 text-sm text-stone-600">
              <li className="flex items-start">
                <span className="text-vatican-red mr-2">•</span>
                <span>
                  <a href="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 hover:text-vatican-red transition-colors inline-flex items-center">
                    Catechism of the Catholic Church <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  — <em>Libreria Editrice Vaticana</em>. The official compendium of Catholic doctrine and historical reference.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-red mr-2">•</span>
                <span>
                  <a href="https://yalebooks.yale.edu/book/9780300115970/saints-and-sinners/" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 hover:text-vatican-red transition-colors inline-flex items-center">
                    Saints and Sinners: A History of the Popes <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  — <em>Eamon Duffy</em>. A comprehensive scholarly history of the papacy.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-red mr-2">•</span>
                <span>
                  <a href="https://www.HarperCollins.com/products/the-story-of-christianity-vol-1-justo-l-gonzalez" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 hover:text-vatican-red transition-colors inline-flex items-center">
                    The Story of Christianity, Vol. 1 & 2 <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  — <em>Justo L. González</em>. Standard historical text on the development of the early and modern church.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-red mr-2">•</span>
                <span>
                  <a href="https://www.vatican.va/archive/index.htm" target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 hover:text-vatican-red transition-colors inline-flex items-center">
                    Vatican.va Archives <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  — Official documents from the Councils of Nicaea, Trent, Vatican I, and Vatican II.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Conclusion / CTA */}
        <section className="mt-20 max-w-3xl mx-auto px-4 text-center">
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-serif font-bold mb-4 text-vatican-gold">A Living History</h2>
            <p className="text-lg text-stone-300 mb-8 leading-relaxed">
              History isn't just about the past—it shapes who we are today. The Church continues to evolve, guided by the Holy Spirit, carrying the deposit of faith into the future.
            </p>
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-vatican-red text-white font-semibold rounded-lg hover:bg-white hover:text-stone-900 transition-colors duration-300"
            >
              Continue Exploring
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
