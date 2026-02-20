import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6">
        <div>
          <span className="font-serif text-xl font-bold text-stone-900">Belief Sparks</span>
          <p className="text-sm text-stone-500 mt-2">© 2026 Belief Sparks. All rights reserved.</p>
        </div>
        <div className="flex space-x-8">
          <Link href="/site-map" className="text-stone-500 hover:text-stone-900 font-medium transition-colors">Sitemap</Link>
          <Link href="/privacy" className="text-stone-500 hover:text-stone-900 font-medium transition-colors">Privacy</Link>
          <Link href="/terms" className="text-stone-500 hover:text-stone-900 font-medium transition-colors">Terms</Link>
          <Link href="#" className="text-stone-500 hover:text-stone-900 font-medium transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
