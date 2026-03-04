import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Church, BookOpen, ArrowRight, Clock, AlertTriangle, Sparkles } from "lucide-react";

export default function VaticanIILegacyPage() {
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
            <Church className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Vatican II Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Legacy: 60 Years Later — <br />
            <span className="text-vatican-gold">A Church Still Learning</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Sixty years after its conclusion, Vatican II continues to shape Catholicism. Its interpretation remains contested, but its impact is undeniable. The Church lives in the world Vatican II created — and continues to wrestle with what the Council meant and means today.
          </p>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Introduction */}
          <section className="bg-stone-900 text-stone-100 p-8 rounded-2xl">
            <h2 className="text-2xl font-serif font-bold mb-4 text-vatican-gold flex items-center">
              <Clock className="h-6 w-6 mr-2" />
              A Living Council
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-4">
              "The Council was not a break with the past, but a growth. Like a tree that spreads its branches but remains rooted in the same soil, the Church grew in understanding while remaining faithful to the deposit of faith."
            </p>
            <p className="text-stone-400 text-sm">This principle — continuity amid development — remains the key to understanding Vatican II's legacy.</p>
          </section>

          {/* Lasting Changes */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <Sparkles className="h-7 w-7 mr-3 text-vatican-red" />
              Lasting Changes: What Vatican II Accomplished
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Sixty years later, the changes wrought by Vatican II are embedded in Catholic life:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Liturgy</h3>
                <p className="text-stone-700 leading-relaxed">
                  Mass in vernacular languages, priest facing the people, expanded lectionary, lay ministers — these changes are now so familiar that many Catholics cannot imagine the Church without them. The liturgy is more accessible, more participatory, more connected to daily life.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Laity</h3>
                <p className="text-stone-700 leading-relaxed">
                  Lay ministries have exploded. Catholics serve as lectors, catechists, parish council members, and extraordinary ministers of communion. The Universal Call to Holiness has empowered lay people to take ownership of their faith and mission in the world.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Ecumenism</h3>
                <p className="text-stone-700 leading-relaxed">
                  Formal dialogues with Orthodox, Anglicans, Lutherans, and other Christians continue. Joint declarations have been signed. Catholics now pray with other Christians, serve alongside them, and recognize the work of the Holy Spirit in their communities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Interfaith Relations</h3>
                <p className="text-stone-700 leading-relaxed">
                  Nostra Aetate transformed Catholic-Jewish relations and opened dialogue with Muslims, Hindus, Buddhists, and others. Popes have visited synagogues and mosques. Interfaith cooperation on peace, justice, and environmental issues is now common.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-red">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Scripture Study</h3>
                <p className="text-stone-700 leading-relaxed">
                  Catholics are now encouraged to read and study the Bible. Biblical scholarship flourishes in Catholic universities. The lectionary ensures that Mass-goers hear far more Scripture than ever before. Dei Verbum's vision has largely been realized.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-vatican-gold">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Social Teaching</h3>
                <p className="text-stone-700 leading-relaxed">
                  Gaudium et Spes laid the groundwork for modern Catholic social teaching. Popes since the Council have addressed economics, politics, peace, human rights, and environmental issues with increasing sophistication and urgency.
                </p>
              </div>
            </div>
          </section>

          {/* Ongoing Debates */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center">
              <AlertTriangle className="h-7 w-7 mr-3 text-vatican-red" />
              Ongoing Debates: What Did the Council Really Mean?
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Vatican II remains the subject of intense debate. Sixty years later, Catholics still argue about what the Council meant and how far its reforms should go.
            </p>

            <div className="space-y-4">
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Hermeneutic of Continuity vs. Rupture</h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Pope Benedict XVI famously distinguished between two ways of reading Vatican II: the "hermeneutic of continuity" (reading the Council in harmony with tradition) and the "hermeneutic of rupture" (seeing the Council as a break from the past).
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Those who emphasize continuity argue that Vatican II developed the Church's teaching without contradicting it. Those who emphasize rupture see the Council as a radical departure that must be either embraced or resisted. This debate continues to shape Catholic discourse.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">The Traditional Latin Mass</h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Pope Benedict XVI's 2007 motu proprio Summorum Pontificum liberalized permission for the 1962 Missal (the "Extraordinary Form"). But Pope Francis's 2021 Traditionis Custodes restricted it again, arguing that the Council's liturgical reform must be accepted.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  This back-and-forth reflects deeper tensions about the Council's authority and the meaning of liturgical reform. Traditionalists argue that the old Mass was never abrogated; reformers insist that the new Mass is the legitimate expression of the Council's vision.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-bold text-stone-900 mb-2 text-xl">Implementation Gaps</h3>
                <p className="text-stone-700 leading-relaxed">
                  Some argue that Vatican II's reforms were never fully implemented — that the "spirit" of the Council was captured by progressives who went beyond what the documents actually said. Others insist that the reforms didn't go far enough and that the Church needs another council to complete what Vatican II began.
                </p>
              </div>
            </div>
          </section>

          {/* Relevance Today */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Relevance for the Future</h2>

            <p className="text-lg text-stone-700 leading-relaxed">
              Sixty years after its conclusion, Vatican II remains relevant for several reasons:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">1. The Church's Relationship with Modernity</h3>
                <p className="text-stone-700">Vatican II ended the Church's defensive posture toward the modern world. That engagement continues to be necessary as culture changes at an accelerating pace.</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">2. Ecumenical Urgency</h3>
                <p className="text-stone-700">In a secularizing world, Christian unity is more urgent than ever. Vatican II's ecumenical vision remains the roadmap for dialogue and cooperation.</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">3. Lay Empowerment</h3>
                <p className="text-stone-700">The Church cannot rely on clergy alone to evangelize. The Universal Call to Holiness means that every Catholic has a role in the Church's mission.</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">4. Interfaith Dialogue</h3>
                <p className="text-stone-700">In a globalized world, dialogue with other religions is essential. Nostra Aetate's vision of respect and cooperation remains the standard.</p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2">5. Social Witness</h3>
                <p className="text-stone-700">Gaudium et Spes's vision of the Church engaging with the "joys and hopes, griefs and anxieties" of the world remains the foundation for Catholic social teaching.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">The Council That Continues</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Vatican II was not a single event but a process. The Council met for four years, produced sixteen documents, and set in motion changes that continue to unfold. Sixty years later, the Church is still absorbing what the Council taught.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Whether you see Vatican II as a renewal of tradition, a necessary adaptation, or something in between, one thing is clear: the Council changed Catholicism forever. Every Catholic today lives in the world Vatican II created — celebrating vernacular liturgy, reading Scripture, engaging in ecumenical dialogue, and bearing witness to the Gospel in a pluralistic world.
            </p>
            <p className="text-stone-700 leading-relaxed italic">
              The Council opened windows. Fresh air came in. The Church breathed more freely. And the work of renewal continues.
            </p>
          </section>

          {/* Questions for Reflection */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Questions for Reflection</h2>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How has Vatican II shaped your experience of Catholic life?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What do you think is the most important legacy of the Council?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>How do you understand the "hermeneutic of continuity"?</span>
              </li>
              <li className="flex items-start">
                <span className="text-vatican-gold mr-3">◆</span>
                <span>What aspects of Vatican II's vision still need to be implemented today?</span>
              </li>
            </ul>
          </section>

          {/* Navigation */}
          <section className="border-t border-stone-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/catholicism/vatican-ii/ecumenism" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous: Ecumenism & Interfaith
              </Link>
              <Link href="/catholicism" className="inline-flex items-center text-vatican-red hover:text-vatican-gold transition-colors font-medium">
                Back to Catholicism
                <ChevronLeft className="h-5 w-5 ml-1 rotate-180" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
