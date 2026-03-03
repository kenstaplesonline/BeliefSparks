import Image from "next/image";
import Link from "next/link";
import { Shield, Feather, Heart, Sparkles, Scale } from "lucide-react";

export default function StMichaelPage() {
  const articles = [
    {
      title: "St. Michael — Defender of the Church",
      excerpt: "In Catholic tradition, St. Michael is commander of the heavenly host — defender of the faithful against evil. But what does 'defender' mean in today's world? His battle is fought in prayer, not physical combat.",
      href: "/st-michael/defender-of-church",
      icon: Shield,
    },
    {
      title: "Angels in the Bible — Friends or Fearsome Beings?",
      excerpt: "The Bible mentions angels 300+ times — messengers, protectors, and warriors. But popular culture often portrays them incorrectly. Scripture reveals angels as powerful, radiant, and sometimes terrifying — but always serving God.",
      href: "/st-michael/angels-in-bible",
      icon: Feather,
    },
    {
      title: "The Power of Intercessory Prayer",
      excerpt: "When we pray to St. Michael, we're joining our voice with his in the heavenly court, as part of the mystical body of Christ. Saints can intercede for us — they don't replace Christ, but they bring our petitions to him.",
      href: "/st-michael/intercessory-prayer",
      icon: Heart,
    },
    {
      title: "St. Michael at the End Time — Hope and Judgment",
      excerpt: "Catholic tradition teaches that St. Michael has a special role in the end times — weighing souls and fighting the final battle. But the end times are meant to be times of hope, not fear. Christ's victory is assured.",
      href: "/st-michael/end-times",
      icon: Scale,
    },
    {
      title: "Devotion to St. Michael — Superstition or Spiritual Practice?",
      excerpt: "Devotion to saints is deeply rooted in Catholic tradition. But when does devotion become superstition? The Catholic Church teaches careful discernment: authentic devotion strengthens faith, but superstition distorts it.",
      href: "/st-michael/devotion-practice",
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-stone-600 hover:text-vatican-red transition-colors">
            <span className="font-medium">← Back to Home</span>
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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-stone-100 rounded-full">
            <Shield className="h-5 w-5 text-vatican-red mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">St. Michael Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Defender of the <span className="text-vatican-red">Faithful</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Exploring the Catholic tradition of St. Michael the Archangel — his role as defender, the power of angelic intercession, and authentic devotion in the modern world.
          </p>
        </section>

        {/* Articles Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="bg-vatican-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-vatican-red/20 transition-colors">
                    <article.icon className="h-6 w-6 text-vatican-red" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-vatican-red transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
