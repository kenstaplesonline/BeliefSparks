import Image from "next/image";
import Link from "next/link";
import { BookOpen, Globe, Users, Church, ExternalLink, Quote, Flame } from "lucide-react";

export default function VaticanIIPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <Church className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">1962 - 1965</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            The Second <br />
            <span className="text-vatican-red">Vatican Council</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            "I want to throw open the windows of the Church so that we can see out and the people can see in." <br/>— Pope St. John XXIII
          </p>
        </section>

        {/* Content Container */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section 1: The Context */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Globe className="h-8 w-8 text-vatican-gold mr-3" />
              The World Before the Council
            </h2>
            <div className="prose prose-stone prose-lg">
              <p>
                To understand Vatican II, one must understand the world of the mid-20th century. The Catholic Church had spent nearly 400 years in a defensive posture following the Council of Trent (1545-1563), resisting the waves of the Protestant Reformation, the Enlightenment, and modern secularism.
              </p>
              <p>
                By the 1950s, the world had been shattered by two global wars, the Holocaust, and the rise of atheistic communism. The Church remained a fortress of stability, yet inside, there was a growing sense that the faith was becoming disconnected from the lived reality of modern people.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-stone-700">
                <li><strong>Liturgical Detachment:</strong> The Mass was celebrated entirely in Latin, with the priest facing the altar (ad orientem), often leaving the congregation as silent spectators rather than active participants.</li>
                <li><strong>Theological Stagnation:</strong> Neo-Scholasticism had become rigid, often focused on rote memorization and defense of dogma rather than engagement with scripture and the early Church Fathers (<i>Ressourcement</i>).</li>
                <li><strong>Ecumenical Isolation:</strong> Relationships with other Christian denominations were virtually non-existent, defined by mutual suspicion and exclusion.</li>
              </ul>
              <p className="mt-4">
                When Pope John XXIII announced the council in 1959, it shocked the world. There was no immediate crisis or heresy to combat. Instead, he called for <i>Aggiornamento</i>—a "bringing up to date"—not to change the truth of the faith, but to change how that truth was expressed and lived in a transformed world.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 2: The Council Entailed */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Users className="h-8 w-8 text-vatican-gold mr-3" />
              What the Council Entailed
            </h2>
            <div className="prose prose-stone prose-lg">
              <p>
                Vatican II was the largest gathering in Church history. Over 2,600 bishops from 116 countries gathered in St. Peter's Basilica for four autumn sessions between 1962 and 1965. Unlike previous councils that issued condemnations (anathemas), Vatican II issued pastoral constitutions, decrees, and declarations meant to invite and inspire.
              </p>
              <p>
                The Council produced 16 major documents. Four "Constitutions" serve as the pillars of the Council's teaching:
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded-xl border-l-4 border-vatican-red shadow-sm">
                  <h3 className="font-bold text-xl text-stone-900 mb-2">1. Sacrosanctum Concilium (On the Sacred Liturgy)</h3>
                  <p className="text-stone-600 text-base">
                    Called for "full, conscious, and active participation" of the laity in the Mass. It authorized the use of vernacular languages alongside Latin and initiated a revision of liturgical rites to restore "noble simplicity."
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-vatican-gold shadow-sm">
                  <h3 className="font-bold text-xl text-stone-900 mb-2">2. Lumen Gentium (Dogmatic Constitution on the Church)</h3>
                  <p className="text-stone-600 text-base">
                    Shifted the focus from the Church as a hierarchy to the "People of God." It emphasized the "Universal Call to Holiness"—that all baptized Christians, not just priests and nuns, are called to be saints.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-vatican-red shadow-sm">
                  <h3 className="font-bold text-xl text-stone-900 mb-2">3. Dei Verbum (On Divine Revelation)</h3>
                  <p className="text-stone-600 text-base">
                    Encouraged Catholics to read and study the Bible. It clarified that Tradition and Scripture flow from the same divine wellspring, and endorsed modern methods of biblical scholarship.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-vatican-gold shadow-sm">
                  <h3 className="font-bold text-xl text-stone-900 mb-2">4. Gaudium et Spes (The Church in the Modern World)</h3>
                  <p className="text-stone-600 text-base">
                    Addressed the Church's relationship with modern culture, science, politics, and economics. It famously began: "The joys and the hopes, the griefs and the anxieties of the men of this age... are the joys and hopes, the griefs and anxieties of the followers of Christ."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 3: The Impact */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <Flame className="h-8 w-8 text-vatican-gold mr-3" />
              How It Changed Catholicism
            </h2>
            <div className="prose prose-stone prose-lg">
              <p>
                The impact of Vatican II was immediate and seismic. It fundamentally altered the daily life of every Catholic and the Church's posture toward the world.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2">The Liturgy</h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    Masses moved from Latin to local languages. The altar was turned so the priest faced the people. Lay people began reading scriptures and distributing communion. The liturgy became more accessible, though debates about the "spirit vs. the letter" of these changes continue today.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2">The Laity</h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    Lay ministries exploded. Catholics were encouraged to take ownership of their faith, leading Bible studies, serving on parish councils, and engaging in social justice work as an expression of the Gospel.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2">Ecumenism & Interfaith Relations</h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    The Church formally committed to dialogue with Protestant and Orthodox Christians, recognizing them as "separated brethren." It also revolutionized relations with Jews (<i>Nostra Aetate</i>), decrying antisemitism and acknowledging the Jewish roots of Christianity.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 mb-2">Religious Freedom</h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    In <i>Dignitatis Humanae</i>, the Council taught that the human person has a right to religious freedom based on their dignity. This ended the old political ideal that the State must enforce Catholic truth, embracing instead the free conscience of the individual.
                  </p>
                </div>
              </div>
              
              <p className="mt-6 italic text-stone-600 border-l-4 border-stone-300 pl-4 py-2 bg-stone-50">
                "The Council was not a break with the past, but a growth. Like a tree that spreads its branches but remains rooted in the same soil, the Church grew in understanding while remaining faithful to the deposit of faith."
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Section 4: Sources */}
          <section className="bg-stone-100 p-8 rounded-2xl">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-stone-500 mr-3" />
              Sources & Further Reading
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Quote className="h-5 w-5 text-vatican-red mr-3 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-stone-900">The Documents of Vatican II</p>
                  <p className="text-sm text-stone-600 mb-1">Vatican Archive (Official Text)</p>
                  <a href="https://www.vatican.va/archive/hist_councils/ii_vatican_council/index.htm" target="_blank" rel="noopener noreferrer" className="text-vatican-red hover:underline inline-flex items-center text-sm font-medium">
                    Read Full Texts <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Quote className="h-5 w-5 text-vatican-red mr-3 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-stone-900">What Happened at Vatican II</p>
                  <p className="text-sm text-stone-600 mb-1">John W. O'Malley, Harvard University Press, 2008.</p>
                  <a href="https://www.hup.harvard.edu/books/9780674047495" target="_blank" rel="noopener noreferrer" className="text-vatican-red hover:underline inline-flex items-center text-sm font-medium">
                    View Book <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Quote className="h-5 w-5 text-vatican-red mr-3 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-stone-900">The Rhine Flows into the Tiber</p>
                  <p className="text-sm text-stone-600 mb-1">Ralph M. Wiltgen, TAN Books.</p>
                  <span className="text-sm text-stone-500">A classic account of the theological debates during the Council.</span>
                </div>
              </div>

              <div className="flex items-start">
                <Quote className="h-5 w-5 text-vatican-red mr-3 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-stone-900">Humanae Salutis (Bull Convoking the Council)</p>
                  <p className="text-sm text-stone-600 mb-1">Pope John XXIII, December 25, 1961.</p>
                  <a href="https://www.vatican.va/content/john-xxiii/la/apost_constitutions/1961/documents/hf_j-xxiii_apc_19611225_humanae-salutis.html" target="_blank" rel="noopener noreferrer" className="text-vatican-red hover:underline inline-flex items-center text-sm font-medium">
                    Read Document <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}
