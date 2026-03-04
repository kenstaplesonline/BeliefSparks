import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Scroll, BookOpen, ArrowRight, Church, Users, Globe, Flame } from "lucide-react";

export default function VaticanIIConstitutionsPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/catholicism/vatican-ii" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Vatican II</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Image src="/icon.png" alt="Logo" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-serif font-bold text-stone-900 hidden sm:inline">Belief Sparks</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-24">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <Scroll className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Vatican II Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Four Constitutions — <br />
            <span className="text-vatican-gold">Pillars of the Council</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            The Council produced 16 documents, but four Constitutions stand as the pillars of Vatican II's teaching. Each addresses a fundamental aspect of the Church's life and mission. Together, they form a comprehensive vision of Catholic faith in the modern world.
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction */}
          <section className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <Scroll className="h-6 w-6 mr-2 text-amber-600" />
              The Structure of the Council's Teaching
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              Vatican II issued four types of documents: Constitutions (highest authority), Decrees (on specific topics), and Declarations (shorter statements). The four Constitutions are the heart of the Council's teaching:
            </p>
            <ul className="space-y-2 text-stone-700">
              <li><strong>Sacrosanctum Concilium</strong> — On the Sacred Liturgy</li>
              <li><strong>Lumen Gentium</strong> — On the Church</li>
              <li><strong>Dei Verbum</strong> — On Divine Revelation</li>
              <li><strong>Gaudium et Spes</strong> — On the Church in the Modern World</li>
            </ul>
          </section>

          {/* Sacrosanctum Concilium */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Flame className="h-7 w-7 mr-3 text-vatican-red" />
              1. Sacrosanctum Concilium (On the Sacred Liturgy)
            </h2>

            <div className="bg-stone-100 p-4 rounded-lg mb-4">
              <p className="text-stone-600 italic">Approved: December 4, 1963 • First document of the Council</p>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              The Constitution on the Sacred Liturgy was the first document approved by the Council, and its effects are the most visible in the daily life of Catholics. Its central theme is "full, conscious, and active participation" in the liturgy — a phrase that would become a rallying cry for liturgical reform.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Why Liturgy First?</h3>
                <p className="text-stone-700 leading-relaxed">
                  The bishops recognized that the liturgy is "the source and summit" of the Church's life. If Catholics were to be renewed, their worship had to be renewed first. The liturgical movement had been preparing the ground for decades; the Council gave it official sanction.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Key Principles</h3>
                <ul className="space-y-2 text-stone-700">
                  <li><strong>Noble Simplicity:</strong> Rites should be "distinguished by a noble simplicity" — removing unnecessary duplications while preserving the essentials.</li>
                  <li><strong>Active Participation:</strong> "Mother Church earnestly desires that all the faithful should be led to that fully conscious and active participation in liturgical celebrations."</li>
                  <li><strong>Vernacular Languages:</strong> While Latin remains the official language of the Roman Rite, the Constitution opened the door for "a more extended use of the mother tongue" — a provision that would lead to widespread use of vernacular.</li>
                  <li><strong>Restoration of Ancient Practices:</strong> The Council called for restoring elements that had been lost over centuries, including the Prayer of the Faithful, concelebration, and communion under both kinds.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Lectionary Reform</h3>
                <p className="text-stone-700 leading-relaxed">
                  Perhaps the most significant change for ordinary Catholics was the reform of the lectionary — the cycle of Scripture readings at Mass. The Council mandated "more sacred scripture" be read to the faithful. The result was a three-year cycle for Sundays (covering all four Gospels and major epistles) and a two-year cycle for weekdays. Where Catholics once heard the same readings year after year, they now encounter the vast majority of the Bible over a few years.
                </p>
              </div>
            </div>
          </section>

          {/* Lumen Gentium */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Church className="h-7 w-7 mr-3 text-vatican-red" />
              2. Lumen Gentium (Dogmatic Constitution on the Church)
            </h2>

            <div className="bg-stone-100 p-4 rounded-lg mb-4">
              <p className="text-stone-600 italic">Approved: November 21, 1964 • The central ecclesiological document</p>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Lumen Gentium ("Light of the Nations") is perhaps the most theologically significant document of Vatican II. It reframed how Catholics understand the Church itself — not primarily as a hierarchical institution, but as the "People of God" on pilgrimage through history.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Church as Mystery</h3>
                <p className="text-stone-700 leading-relaxed">
                  The Constitution begins not with the hierarchy but with the Church as a "mystery" — a sacrament of communion with God and of unity among all people. The Church is not just an organization; she is a spiritual reality, the Body of Christ, the Bride of Christ, the Temple of the Holy Spirit. These images reveal the Church's deepest identity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The People of God</h3>
                <p className="text-stone-700 leading-relaxed">
                  Chapter Two of Lumen Gentium — on the People of God — comes before the chapter on the hierarchy. This was revolutionary. It established that the Church is first and foremost the whole body of the baptized, who share a common dignity and vocation. The hierarchy exists to serve the People of God, not the other way around. All the baptized — lay, religious, and ordained — share in Christ's priestly, prophetic, and kingly mission.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Universal Call to Holiness</h3>
                <p className="text-stone-700 leading-relaxed">
                  Chapter Five declares that all Christians — not just priests, monks, and nuns — are called to holiness. This was a radical affirmation of lay spirituality. "All the faithful of Christ of whatever rank or status are called to the fullness of the Christian life and to the perfection of charity." Holiness is not the preserve of a spiritual elite; it is the vocation of every baptized person.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Collegiality</h3>
                <p className="text-stone-700 leading-relaxed">
                  Lumen Gentium taught that the College of Bishops, together with the Pope as its head, has full and supreme authority over the universal Church. This doctrine of "collegiality" emphasized that the Pope and bishops share in the governance of the Church. The Pope is not an absolute monarch; he is the head of a college of bishops who together succeed the apostles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Mary, Mother of the Church</h3>
                <p className="text-stone-700 leading-relaxed">
                  The Constitution concludes with a chapter on the Blessed Virgin Mary — a reminder that the Council's theology was deeply rooted in Catholic devotion. Mary is presented as the model of faith and the mother of all the Church's members.
                </p>
              </div>
            </div>
          </section>

          {/* Dei Verbum */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <BookOpen className="h-7 w-7 mr-3 text-vatican-red" />
              3. Dei Verbum (On Divine Revelation)
            </h2>

            <div className="bg-stone-100 p-4 rounded-lg mb-4">
              <p className="text-stone-600 italic">Approved: November 18, 1965 • The shortest but profoundly influential</p>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Dei Verbum ("Word of God") is the shortest of the four Constitutions but has had enormous influence on Catholic life. It addressed a fundamental question: How does God reveal Himself, and how do we receive that revelation?
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Scripture and Tradition</h3>
                <p className="text-stone-700 leading-relaxed">
                  The Council clarified that Sacred Scripture and Sacred Tradition "are bound closely together and communicate one with the other." They flow "from the same divine well-spring" and "form one sacred deposit of the word of God." This rejected the idea that Tradition is merely a supplement to Scripture; rather, both are necessary channels of God's self-revelation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Role of the Magisterium</h3>
                <p className="text-stone-700 leading-relaxed">
                  The teaching office of the Church (the Magisterium) is "not above the word of God, but serves it." This was an important clarification: the Church's teaching authority exists to preserve and interpret revelation, not to create new revelation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Encouragement of Biblical Study</h3>
                <p className="text-stone-700 leading-relaxed">
                  "The sacred synod also earnestly and especially urges all the Christian faithful... to learn by frequent reading of the divine Scriptures the 'excelling knowledge of Jesus Christ.'" For the first time, an ecumenical council explicitly encouraged all Catholics to read the Bible. The document also endorsed modern methods of biblical scholarship, ending decades of suspicion toward critical study.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Full Meaning of Scripture</h3>
                <p className="text-stone-700 leading-relaxed">
                  The Constitution taught that to understand Scripture, we must consider "the content and unity of the whole Scripture" as well as "the living Tradition of the whole Church" and "the harmony that exists between elements of the faith." Interpretation is not a private matter; it takes place within the community of faith.
                </p>
              </div>
            </div>
          </section>

          {/* Gaudium et Spes */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Globe className="h-7 w-7 mr-3 text-vatican-red" />
              4. Gaudium et Spes (The Church in the Modern World)
            </h2>

            <div className="bg-stone-100 p-4 rounded-lg mb-4">
              <p className="text-stone-600 italic">Approved: December 7, 1965 • The longest and most innovative document</p>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Gaudium et Spes ("Joy and Hope") is the longest document of Vatican II and perhaps the most innovative. For the first time, a council addressed not just the internal life of the Church but the entire human family and its problems.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mb-4">
              <p className="text-stone-800 italic text-lg">
                "The joys and hopes, the griefs and anxieties of the people of this age, especially those who are poor or in any way afflicted, these are the joys and hopes, the griefs and anxieties of the followers of Christ."
              </p>
              <p className="text-stone-600 text-right mt-2">— Opening words of Gaudium et Spes</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Human Dignity</h3>
                <p className="text-stone-700 leading-relaxed">
                  The document grounds human dignity in the fact that every person is created in God's image and redeemed by Christ. This dignity is the foundation for human rights, social justice, and the Church's engagement with the world. "The social order and its development must constantly yield to the good of the person."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Church and the World</h3>
                <p className="text-stone-700 leading-relaxed">
                  Gaudium et Spes rejected the fortress mentality that had characterized Catholic attitudes toward modernity. Instead of condemning the modern world, the Church offers it "the light that she has received from God." The document engages with economics, politics, culture, science, and technology — not as threats but as areas where the Gospel speaks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Specific Issues</h3>
                <p className="text-stone-700 leading-relaxed">
                  The document addresses marriage and family, culture, economic and social life, politics, and peace. It calls for economic justice, the rights of workers, support for the poor, and the building of a just international order. It famously calls for an end to the arms race: "The arms race is an utterly treacherous trap for humanity."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Atheism</h3>
                <p className="text-stone-700 leading-relaxed">
                  Rather than simply condemning atheism, the document seeks to understand its causes — including the failure of believers to live authentically. "Believers themselves often bear some responsibility for this situation." The Church responds not with condemnation but with witness to the living God.
                </p>
              </div>
            </div>
          </section>

          {/* How They Work Together */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">How the Four Constitutions Work Together</h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              The four Constitutions form an integrated vision:
            </p>

            <div className="bg-stone-100 p-6 rounded-lg space-y-3">
              <p className="text-stone-800"><strong>Sacrosanctum Concilium</strong> renews our worship — the source and summit of Christian life.</p>
              <p className="text-stone-800"><strong>Lumen Gentium</strong> clarifies who we are — the People of God called to holiness.</p>
              <p className="text-stone-800"><strong>Dei Verbum</strong> reconnects us to God's Word — the foundation of faith.</p>
              <p className="text-stone-800"><strong>Gaudium et Spes</strong> sends us into the world — to share the Gospel with all humanity.</p>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Together, these documents chart a path for the Church that is both faithful to tradition and engaged with the modern world. They remain the foundation for understanding Vatican II's vision for Catholic life today.
            </p>
          </section>

          {/* Questions for Reflection */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Questions for Reflection</h2>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>Which of the four Constitutions has most affected your experience of Catholic life?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does the "People of God" vision change your understanding of the Church?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>Why do you think the Council encouraged all Catholics to read the Bible?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How should the Church engage with the "joys and hopes, griefs and anxieties" of our own age?</span>
              </li>
            </ul>
          </section>

          {/* Navigation */}
          <section className="border-t border-stone-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/catholicism/vatican-ii/context" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous: The World Before the Council
              </Link>
              <Link href="/catholicism/vatican-ii/liturgy" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Next: Liturgical Revolution
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
