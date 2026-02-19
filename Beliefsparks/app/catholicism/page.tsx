import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Scroll, Users, Split, BookOpen, Church } from "lucide-react";

export default function CatholicismHistory() {
  const timelineEvents = [
    {
      year: "325 AD",
      title: "First Council of Nicaea",
      description: "The first ecumenical council, convened by Emperor Constantine. It defined the divinity of Christ against Arianism and produced the Nicene Creed, the fundamental statement of Christian belief still recited today.",
      icon: <Users className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1054 AD",
      title: "The Great Schism",
      description: "The formal separation between the Western (Catholic) and Eastern (Orthodox) churches. While theological and political tensions had brewed for centuries, this event marked the first major rupture in the unified Christian body.",
      icon: <Split className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1517 AD",
      title: "The Protestant Reformation",
      description: "Martin Luther published his 95 Theses, sparking a movement that challenged Church authority and practices. This led to the formation of Protestant denominations and prompted the Catholic Church's own internal renewal at the Council of Trent.",
      icon: <BookOpen className="h-6 w-6 text-vatican-gold" />,
    },
    {
      year: "1962-1965",
      title: "Second Vatican Council",
      description: "A landmark council focused on spiritual renewal and opening the Church to the modern world. It brought major changes to the liturgy (vernacular languages), emphasized the role of the laity, and promoted ecumenical dialogue.",
      icon: <Church className="h-6 w-6 text-vatican-gold" />,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Image 
              src="/icon.png" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="h-8 w-8 object-contain"
            />
            <span className="font-serif font-bold text-stone-900 hidden sm:inline">Belief Sparks</span>
          </div>
        </div>
      </header>

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
                  <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{event.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
