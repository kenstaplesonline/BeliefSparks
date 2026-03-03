import Image from "next/image";
import Link from "next/link";
import { Sun, Mountain, Users, Home, Cross } from "lucide-react";

export default function TransfigurationPage() {
  const articles = [
    {
      title: "The Voice from Heaven — Divine Affirmation",
      excerpt: "The Transfiguration wasn't just a miraculous event — it was God the Father speaking from heaven: 'This is my beloved Son, in whom I am well pleased.' What does this divine affirmation tell us about Jesus' identity?",
      href: "/transfiguration/voice-from-heaven",
      icon: Sun,
    },
    {
      title: "Dazzling Light and Transformed Glory",
      excerpt: "Jesus' face shone like the sun, and his clothes became dazzlingly bright. But the Transfiguration wasn't about light — it was about glory. How does seeing beyond human limitations change how we understand Christ's nature?",
      href: "/transfiguration/dazzling-light",
      icon: Mountain,
    },
    {
      title: "Moses, Elijah, and the Mountain — Old Testament Fulfillment",
      excerpt: "Why did Moses and Elijah appear with Jesus? They represent the Law and the Prophets — all pointing to Jesus. The Transfiguration was a climax of God's plan revealed in stages.",
      href: "/transfiguration/moses-elijah",
      icon: Users,
    },
    {
      title: "The Tent — Peter's Temporary Vision vs. Eternal Reality",
      excerpt: "Peter wanted to preserve this mountaintop moment. But the voice from heaven interrupted. The Transfiguration was a glimpse of glory, not a permanent dwelling place. How does this change how we understand spiritual experiences?",
      href: "/transfiguration/the-tent",
      icon: Home,
    },
    {
      title: "Preparing for the Cross — From Glory to Suffering",
      excerpt: "Six days after the Transfiguration, Jesus told his disciples about his coming death. The glory they witnessed on the mountain was meant to prepare them for what would follow. Discipleship means following Jesus down — to suffering and resurrection.",
      href: "/transfiguration/glory-to-suffering",
      icon: Cross,
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
            <Sun className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Transfiguration Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Glory on the <span className="text-vatican-gold">Mountain</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Exploring the moment when Jesus' divine glory was revealed to Peter, James, and John — and what it means for our faith today.
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
                  <div className="bg-vatican-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-vatican-gold/20 transition-colors">
                    <article.icon className="h-6 w-6 text-vatican-gold" />
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
