import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Globe, BookOpen, ArrowRight, Shield, Castle, Scroll, AlertTriangle } from "lucide-react";

export default function VaticanIIContextPage() {
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
            <Globe className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Vatican II Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The World Before the Council — <br />
            <span className="text-vatican-gold">A Church at the Crossroads</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            By the 1950s, the Catholic Church had spent nearly 400 years in a defensive posture. The world had changed dramatically. The Church needed to respond — but how? Enter Pope John XXIII and his surprising call for a council.
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <Globe className="h-6 w-6 mr-2 text-blue-600" />
              A World Transformed
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              To understand Vatican II, one must understand the world of the mid-20th century. The Church had survived two world wars, the rise and fall of fascism, the spread of communism, and the beginning of the atomic age. Inside the Church, there was a growing sense that the faith was becoming disconnected from the lived reality of modern people.
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              The call for a council came as a shock to almost everyone. There was no crisis to address, no heresy to condemn. Pope John XXIII simply believed the time had come to "open the windows" and let in fresh air.
            </p>
          </section>

          {/* The Fortress Church */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Castle className="h-7 w-7 mr-3 text-vatican-red" />
              The Fortress Church: 400 Years of Defense
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              Following the Council of Trent (1545-1563), the Catholic Church had adopted what historians call a "fortress mentality." This defensive posture served the Church well in preserving Catholic doctrine against the Protestant Reformation, but it also created a culture of suspicion toward the modern world.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              The Syllabus of Errors (1864), issued by Pope Pius IX, famously condemned "progress, liberalism, and modern civilization." The Church had positioned itself as a bulwark against the forces of secularism, rationalism, and religious indifferentism. By the 1950s, this defensive stance had become deeply ingrained in Catholic culture.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Liturgical Detachment</h3>
                <p className="text-stone-700 leading-relaxed">
                  The Mass was celebrated entirely in Latin, with the priest facing the altar (ad orientem) rather than the congregation. The faithful followed along in missals or prayed the rosary privately during Mass. Active participation was limited to receiving communion and making responses in Latin that many didn't understand. The liturgy was beautiful but distant — a sacred drama observed rather than shared.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Theological Stagnation</h3>
                <p className="text-stone-700 leading-relaxed">
                  Neo-Scholasticism had become the dominant theological method — a highly structured, logical approach rooted in St. Thomas Aquinas but often reduced to rote memorization of definitions and distinctions. Theology was taught in Latin, disconnected from Scripture studies and the Church Fathers. The "manualist" tradition produced clergy who could defend the faith but struggled to communicate it to ordinary people. The "ressourcement" movement — a return to the sources of Scripture and the Fathers — was viewed with suspicion in Rome.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Ecumenical Isolation</h3>
                <p className="text-stone-700 leading-relaxed">
                  The Catholic Church had virtually no formal relationship with other Christian denominations. Protestants were often viewed as heretics or schismatics. Eastern Orthodox Christians were "separated brethren" but dialogue was minimal. The Jewish people were still widely misunderstood, and the ancient charge of deicide — collective responsibility for Christ's death — had never been formally rejected. Interfaith dialogue was almost non-existent.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Index and Censorship</h3>
                <p className="text-stone-700 leading-relaxed">
                  The Index of Forbidden Books still existed, listing works Catholics were forbidden to read. Catholic scholars needed a "nihil obstat" and "imprimatur" to publish theological works. Modern biblical scholarship was viewed with suspicion. Philosophers and scientists often felt the Church was hostile to intellectual inquiry outside approved channels.
                </p>
              </div>
            </div>
          </section>

          {/* The World in Crisis */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <AlertTriangle className="h-7 w-7 mr-3 text-vatican-red" />
              The World in Crisis: Why Change Was Needed
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              The mid-20th century had witnessed unprecedented upheaval. The Church could not ignore what had happened to the world:
            </p>

            <div className="bg-stone-100 p-6 rounded-lg space-y-4">
              <div className="border-b border-stone-200 pb-4">
                <h3 className="font-bold text-stone-900 mb-2">Two World Wars</h3>
                <p className="text-stone-700">The First and Second World Wars had killed over 70 million people and shattered the European order. The "Christian civilization" that the Church had long defended had failed to prevent unprecedented violence. The Holocaust had revealed the depths of human evil, raising profound questions about God, suffering, and human nature.</p>
              </div>
              
              <div className="border-b border-stone-200 pb-4">
                <h3 className="font-bold text-stone-900 mb-2">Rise of Communism</h3>
                <p className="text-stone-700">Atheistic communism controlled Eastern Europe and Russia, persecuting the Church wherever it gained power. The Church needed a response that went beyond mere condemnation — it needed to present a positive vision of human dignity and social justice.</p>
              </div>
              
              <div className="border-b border-stone-200 pb-4">
                <h3 className="font-bold text-stone-900 mb-2">Decolonization</h3>
                <p className="text-stone-700">European empires were crumbling. New nations in Africa, Asia, and Latin America were emerging. The Church, long associated with colonial powers, needed to become truly "catholic" — universal — embracing the cultures and peoples of the Global South.</p>
              </div>
              
              <div className="border-b border-stone-200 pb-4">
                <h3 className="font-bold text-stone-900 mb-2">Scientific and Social Change</h3>
                <p className="text-stone-700">Atomic energy, television, jet travel, and early computers were transforming daily life. Urbanization was accelerating. Traditional social structures were dissolving. The Church's old ways of communicating were becoming obsolete.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-stone-900 mb-2">The Laity Awakens</h3>
                <p className="text-stone-700">Catholic lay movements — Catholic Action, the Young Christian Workers, the Grail, Opus Dei — were growing. Educated lay Catholics were hungry for deeper engagement with their faith, not just as passive recipients but as active participants in the Church's mission.</p>
              </div>
            </div>
          </section>

          {/* Signs of Renewal */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Signs of Renewal Before the Council</h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Even before John XXIII announced the council, there were signs that the Holy Spirit was stirring:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">The Liturgical Movement</h3>
                <p className="text-stone-700">Since the early 20th century, scholars and pastors had been studying the history of Christian worship and calling for reform. They emphasized the "active participation" of the faithful and studied the ancient practices of the Church. This movement prepared the ground for Sacrosanctum Concilium.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">The Biblical Renewal</h3>
                <p className="text-stone-700">Pope Pius XII's encyclical Divino Afflante Spiritu (1943) had encouraged Catholic biblical scholars to use modern methods of interpretation. The Jerusalem Bible was published in 1956, making Scripture more accessible. Catholics were beginning to read the Bible again.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">The Ecumenical Movement</h3>
                <p className="text-stone-700">Protestant churches were engaging in ecumenical dialogue through the World Council of Churches (founded 1948). Some Catholic theologians were quietly meeting with Protestant and Orthodox scholars. The desire for Christian unity was growing.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">The Worker Priest Movement</h3>
                <p className="text-stone-700">In France, priests were leaving their parishes to work in factories and live among the working class. They wanted to understand the struggles of ordinary people and bring the Gospel to those who had abandoned the Church. This movement anticipated the Council's emphasis on engagement with the modern world.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">The Nouvelle Théologie</h3>
                <p className="text-stone-700">Theologians like Henri de Lubac, Yves Congar, Karl Rahner, and Joseph Ratzinger were calling for a return to the sources — Scripture and the Church Fathers — rather than relying solely on scholastic manuals. This "ressourcement" would profoundly shape Vatican II's documents.</p>
              </div>
            </div>
          </section>

          {/* The Surprise Announcement */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">The Surprise Announcement</h2>

            <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-500">
              <p className="text-stone-800 text-lg leading-relaxed mb-4">
                On January 25, 1959, just three months after his election, Pope John XXIII made an announcement that stunned the world. Addressing a group of cardinals in the Basilica of St. Paul Outside the Walls, he declared his intention to convene an ecumenical council for the universal Church.
              </p>
              
              <p className="text-stone-800 text-lg leading-relaxed mb-4">
                There was no crisis to address, no heresy to condemn, no urgent matter requiring definition. John XXIII simply believed the time had come for the Church to examine herself and her relationship to the world. He called it <em>Aggiornamento</em> — "bringing up to date."
              </p>

              <p className="text-stone-700 italic text-xl leading-relaxed border-t border-amber-300 pt-4 mt-4">
                "I want to throw open the windows of the Church so that we can see out and the people can see in."
              </p>
              <p className="text-stone-600 text-right">— Pope St. John XXIII</p>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              The reaction was mixed. Many cardinals were skeptical. The Roman Curia, the Church's administrative apparatus, was resistant to change. But John XXIII pressed forward with infectious optimism. He established preparatory commissions to draft documents, invited bishops worldwide to submit suggestions, and set the date for October 11, 1962.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              The world watched with curiosity. What would this council do? Would it condemn errors, as previous councils had? Would it define new dogmas? Or would it do something entirely different?
            </p>
          </section>

          {/* What Made This Council Different */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">What Made This Council Different</h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Vatican II was unlike any previous ecumenical council in Church history:
            </p>

            <div className="space-y-4">
              <div className="bg-stone-100 p-5 rounded-lg">
                <p className="text-stone-800"><strong>Pastoral, Not Doctrinal:</strong> Previous councils had been called to define doctrine or condemn heresy. Vatican II was called to be pastoral — to help the Church communicate the unchanging faith to a changing world.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <p className="text-stone-800"><strong>Global, Not European:</strong> Over 2,600 bishops from 116 countries attended. For the first time, the voice of the Church in Africa, Asia, and Latin America was heard alongside Europe and North America.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <p className="text-stone-800"><strong>Ecumenical in Spirit:</strong> Protestant and Orthodox observers were invited as guests. The Council would address not just Catholics but "all people of good will."</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <p className="text-stone-800"><strong>Open to the World:</strong> John XXIII insisted the Church engage with modern culture, science, and politics rather than retreating from them.</p>
              </div>
            </div>
          </section>

          {/* Questions for Reflection */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Questions for Reflection</h2>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How do you think the Church's "fortress mentality" affected its ability to share the Gospel?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What parallels do you see between the pre-Vatican II Church and the Church today?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>Why do you think Pope John XXIII called the Council even though there was no crisis to address?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does understanding the context before Vatican II help you understand the Council itself?</span>
              </li>
            </ul>
          </section>

          {/* Navigation */}
          <section className="border-t border-stone-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/catholicism/vatican-ii" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Vatican II Overview
              </Link>
              <Link href="/catholicism/vatican-ii/constitutions" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Next: The Four Constitutions
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
