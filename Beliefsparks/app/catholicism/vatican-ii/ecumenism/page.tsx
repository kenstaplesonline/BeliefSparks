import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Users, BookOpen, ArrowRight, Globe, Heart, Shield } from "lucide-react";

export default function VaticanIIEcumenismPage() {
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
            <Users className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Vatican II Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Ecumenism & Interfaith Dialogue — <br />
            <span className="text-vatican-gold">Opening Doors to the World</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            For centuries, the Catholic Church had defined itself against other Christians and world religions. Vatican II revolutionized this stance, committing the Church to dialogue, respect, and cooperation with all people of good will.
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 flex items-center">
              <Globe className="h-6 w-6 mr-2 text-blue-600" />
              A Revolutionary Shift
            </h2>
            <p className="text-stone-800 text-lg leading-relaxed mb-4">
              Before Vatican II, the Catholic Church's relationship with other Christians was defined by mutual suspicion. Protestants were "heretics" or "separated brethren." Eastern Orthodox were "schismatics." Jews were often viewed through the lens of ancient prejudices. The idea of dialogue was almost unthinkable.
            </p>
            <p className="text-stone-800 text-lg leading-relaxed">
              Vatican II changed everything. Through three key documents — Unitatis Redintegratio, Nostra Aetate, and Dignitatis Humanae — the Council opened doors that had been closed for centuries.
            </p>
          </section>

          {/* Unitatis Redintegratio */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Users className="h-7 w-7 mr-3 text-vatican-red" />
              Unitatis Redintegratio: Christian Unity
            </h2>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              The Decree on Ecumenism, approved November 21, 1964, committed the Catholic Church to the ecumenical movement for the first time. It recognized that other Christians are not enemies but "separated brethren" who share in baptism and faith in Christ.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Separated Brethren</h3>
                <p className="text-stone-700 leading-relaxed">
                  The decree acknowledged that many elements of sanctification and truth are found outside the visible boundaries of the Catholic Church. "The Spirit of Christ has not refrained from using them as means of salvation." This was a significant shift from seeing non-Catholic Christians as merely outside the Church to recognizing the work of the Holy Spirit in their communities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Dialogue, Not Condemnation</h3>
                <p className="text-stone-700 leading-relaxed">
                  The decree called for "dialogue" between Catholics and other Christians — a word that had rarely appeared in official Church documents. This dialogue would include theological discussion, prayer in common, and practical cooperation in service to the world.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Ecumenical Movement Endorsed</h3>
                <p className="text-stone-700 leading-relaxed">
                  The Council formally endorsed the ecumenical movement that had been growing among Protestants and Orthodox since the early 20th century. Catholic observers were sent to the World Council of Churches. National and local ecumenical dialogues were encouraged.
                </p>
              </div>
            </div>
          </section>

          {/* Nostra Aetate */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Heart className="h-7 w-7 mr-3 text-vatican-red" />
              Nostra Aetate: A New Relationship with Jews
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Perhaps the most groundbreaking document of Vatican II, Nostra Aetate ("In Our Time") transformed Catholic-Jewish relations and laid the foundation for dialogue with all world religions.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mb-4">
              <p className="text-stone-800 text-lg mb-4">
                "The Church recalls to mind that the patriarchs, prophets and other leading figures of the Old Testament have always been and will always be held in honor as saints in the Church's liturgical tradition."
              </p>
              <p className="text-stone-600 text-right">— Nostra Aetate</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Rejecting the Deicide Charge</h3>
                <p className="text-stone-700 leading-relaxed">
                  For the first time, a council explicitly rejected the charge that Jews as a people are responsible for Jesus' death. "True, the Jewish authorities and those who followed their lead pressed for the death of Christ; still, what happened in His passion cannot be charged against all the Jews, without distinction, then alive, nor against the Jews of today."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Condemning Antisemitism</h3>
                <p className="text-stone-700 leading-relaxed">
                  The Council "decries hatred, persecutions, displays of antisemitism, directed against Jews at any time and by anyone." This was a powerful repudiation of centuries of Christian anti-Jewish teaching and practice.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Affirming Jewish Roots</h3>
                <p className="text-stone-700 leading-relaxed">
                  "The Church, then, recalling that she has a common spiritual heritage with the Jews, desires to foster and recommend that mutual understanding and respect which is the fruit, above all, of biblical and theological studies as well as of fraternal dialogues."
                </p>
              </div>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">
              Nostra Aetate also addressed relations with Muslims, Hindus, Buddhists, and other world religions, affirming that the Catholic Church "rejects nothing that is true and holy" in these traditions and encourages dialogue and cooperation.
            </p>
          </section>

          {/* Dignitatis Humanae */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Shield className="h-7 w-7 mr-3 text-vatican-red" />
              Dignitatis Humanae: Religious Freedom
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              The Declaration on Religious Freedom, approved December 7, 1965, taught that every person has a right to religious liberty based on human dignity. This ended the old political ideal that Catholic states should enforce Catholic truth.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Right to Religious Freedom</h3>
                <p className="text-stone-700 leading-relaxed">
                  "The human person has a right to religious freedom. This freedom means that all men are to be immune from coercion on the part of individuals or of social groups and of any human power, in such wise that no one is to be forced to act in a manner contrary to his own beliefs."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Freedom of Conscience</h3>
                <p className="text-stone-700 leading-relaxed">
                  The Council taught that the human person is bound to follow conscience faithfully in all activity. "He must not be forced to act contrary to his conscience. Nor must he be prevented from acting according to his conscience, especially in religious matters."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Church and State</h3>
                <p className="text-stone-700 leading-relaxed">
                  The declaration endorsed separation of church and state, while affirming that the Church has a right to exist and operate freely in society. This was a significant development from the older view that Catholic states should privilege the Catholic faith.
                </p>
              </div>
            </div>
          </section>

          {/* Impact Today */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">The Impact Today</h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Sixty years later, the ecumenical and interfaith vision of Vatican II has transformed Catholic relationships:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-stone-100 p-5 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">Jewish-Catholic Dialogue</h4>
                <p className="text-stone-700 text-sm">Popes have visited synagogues, recognized Israel, and condemned antisemitism repeatedly. The Vatican has established formal dialogue with Jewish leaders.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">Christian Unity</h4>
                <p className="text-stone-700 text-sm">Catholic-Lutheran, Catholic-Anglican, and Catholic-Orthodox dialogues have produced significant agreements. Joint prayer services are common.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">Interfaith Cooperation</h4>
                <p className="text-stone-700 text-sm">Assisi gatherings, interfaith prayer services, and cooperation on social issues reflect the Council's vision.</p>
              </div>
              <div className="bg-stone-100 p-5 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">Religious Freedom</h4>
                <p className="text-stone-700 text-sm">Catholic institutions worldwide defend religious freedom for all, not just Catholics.</p>
              </div>
            </div>
          </section>

          {/* Questions for Reflection */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Questions for Reflection</h2>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How has Nostra Aetate changed your understanding of Jewish-Catholic relations?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What does "separated brethren" mean for how Catholics view other Christians?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How does religious freedom serve both the Church and society?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What opportunities for ecumenical or interfaith dialogue exist in your community?</span>
              </li>
            </ul>
          </section>

          {/* Navigation */}
          <section className="border-t border-stone-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/catholicism/vatican-ii/liturgy" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous: Liturgical Revolution
              </Link>
              <Link href="/catholicism/vatican-ii/legacy" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Next: Legacy Today
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
