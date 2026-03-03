import Image from "next/image";
import Link from "next/link";
import { BookOpen, Sparkles, TreeDeciduous, Scroll, HelpCircle } from "lucide-react";

export default function GenesisPage() {
  const articles = [
    {
      title: "Eden — God's Temple or Just a Garden?",
      excerpt: "Was the Garden of Eden a physical garden, or something deeper? Some scholars see Eden as God's sanctuary on earth — a place where divine presence dwelt, worship flowed naturally, and creation and Creator shared intimacy.",
      href: "/genesis/eden-temple-question",
      icon: TreeDeciduous,
    },
    {
      title: "Two Creation Stories — One Author, Multiple Perspectives",
      excerpt: "Genesis contains two distinct creation accounts. Chapter 1 presents a cosmic overview, while Chapter 2 zooms in on Adam and Eve's intimate beginning. Why the repetition? Perhaps these aren't contradictions — but complementary perspectives.",
      href: "/genesis/two-creation-stories",
      icon: Scroll,
    },
    {
      title: "Ancient Creation Myths and What Genesis Shares",
      excerpt: "Ancient Mesopotamian cultures told stories of gods creating humans from clay, rivers flowing from divine gardens, and battles between chaos and order. Genesis shares these motifs — but transforms them.",
      href: "/genesis/ancient-myths",
      icon: Sparkles,
    },
    {
      title: "The Serpent, Tree, and Choice — Or Something Else?",
      excerpt: "Every child knows the story: serpent tempts Eve, she eats forbidden fruit, Adam follows, humanity falls. But could this be about more than literal disobedience?",
      href: "/genesis/serpent-tree-choice",
      icon: HelpCircle,
    },
    {
      title: "Eden's Rivers — Life, Wisdom, and Restoration",
      excerpt: "Genesis describes four rivers flowing from Eden: Pishon, Gihon, Tigris, and Euphrates. Some see these as literal rivers. Others see them as symbolic. Strikingly, Revelation 22 describes a river flowing from God's throne — Eden restored.",
      href: "/genesis/edens-rivers",
      icon: BookOpen,
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
            <TreeDeciduous className="h-5 w-5 text-vatican-gold mr-2" />
            <span className="text-sm font-semibold text-stone-600 uppercase tracking-wide">Genesis Series</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            In the <span className="text-vatican-gold">Beginning</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed italic">
            Exploring the creation narratives, the Garden of Eden, and the profound theological insights hidden within humanity's origin story.
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
