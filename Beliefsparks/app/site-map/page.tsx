import Link from "next/link";
import { BookOpen, Map, ArrowRight } from "lucide-react";

export default function Sitemap() {
  const sections = [
    {
      title: "Main",
      links: [
        { name: "Home", href: "/" },
        { name: "Catholicism", href: "/catholicism" },
        { name: "Catholicism: Vatican II", href: "/catholicism/vatican-ii" },
        { name: "Christianity", href: "/christianity" },
      ],
    },
    {
      title: "Genesis Series",
      links: [
        { name: "Genesis Overview", href: "/genesis" },
        { name: "Two Creation Stories", href: "/genesis/two-creation-stories" },
        { name: "Eden's Rivers", href: "/genesis/edens-rivers" },
        { name: "Eden as Temple?", href: "/genesis/eden-temple-question" },
        { name: "The Serpent, Tree, and Choice", href: "/genesis/serpent-tree-choice" },
        { name: "Ancient Creation Myths", href: "/genesis/ancient-myths" },
      ],
    },
    {
      title: "St. Michael Series",
      links: [
        { name: "St. Michael Overview", href: "/st-michael" },
        { name: "Angels in the Bible", href: "/st-michael/angels-in-bible" },
        { name: "Defender of the Church", href: "/st-michael/defender-of-church" },
        { name: "Michael in the End Times", href: "/st-michael/end-times" },
        { name: "Devotional Practices", href: "/st-michael/devotion-practice" },
        { name: "Intercessory Prayer", href: "/st-michael/intercessory-prayer" },
      ],
    },
    {
      title: "Transfiguration Series",
      links: [
        { name: "Transfiguration Overview", href: "/transfiguration" },
        { name: "The Dazzling Light", href: "/transfiguration/dazzling-light" },
        { name: "Moses and Elijah", href: "/transfiguration/moses-elijah" },
        { name: "Voice from Heaven", href: "/transfiguration/voice-from-heaven" },
        { name: "The Tent/Tabernacle", href: "/transfiguration/the-tent" },
        { name: "Glory to Suffering", href: "/transfiguration/glory-to-suffering" },
      ],
    },
    {
      title: "Heterodox Explorations",
      links: [
        { name: "Heterodox Overview", href: "/heterodox" },
        { name: "Tower of Babel", href: "/heterodox/tower-of-babel" },
        { name: "View from Babylon", href: "/heterodox/view-from-babylon" },
        { name: "Science as High Definition", href: "/heterodox/science-as-hd" },
        { name: "Eden as Temple", href: "/heterodox/eden-as-temple" },
        { name: "Ages of Ministry", href: "/heterodox/ages-of-ministry" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-stone-200/50 rounded-full mb-6">
            <Map className="h-6 w-6 text-vatican-red" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            Site Map
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Navigate through our content and discover the diverse paths of faith we explore.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <h2 className="text-xl font-serif font-bold text-stone-800 mb-4 border-b border-stone-100 pb-2">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="group flex items-center justify-between text-stone-600 hover:text-vatican-red transition-colors duration-200"
                    >
                      <span className="font-medium text-sm">{link.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* XML Sitemap Link */}
        <div className="mt-16 text-center border-t border-stone-200 pt-8">
          <p className="text-stone-500 mb-4">Looking for our XML Sitemap?</p>
          <Link 
            href="/sitemap.xml" 
            className="inline-flex items-center px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-sm font-medium transition-colors"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            View sitemap.xml
          </Link>
        </div>

      </div>
    </div>
  );
}
