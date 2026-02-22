import Link from "next/link";
import { BookOpen, Map, ArrowRight } from "lucide-react";

export default function Sitemap() {
  const sections = [
    {
      title: "Main",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/#about" }, // Assuming anchor or future page
        { name: "Contact", href: "/contact" }, // Assuming future page or anchor
      ],
    },
    {
      title: "Faith Traditions",
      links: [
        { name: "Catholicism", href: "/catholicism" },
        { name: "Christianity", href: "/christianity" },
        { name: "Heterodox", href: "/heterodox" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" }, // Placeholder
        { name: "Terms of Service", href: "/terms" }, // Placeholder
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sections.map((section) => (
            <div key={section.title} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 border-b border-stone-100 pb-2">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="group flex items-center justify-between text-stone-600 hover:text-vatican-red transition-colors duration-200"
                    >
                      <span className="font-medium">{link.name}</span>
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
