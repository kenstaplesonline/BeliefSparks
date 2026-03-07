import Image from "next/image";
import { BookOpen, Sparkles, Mail } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 font-sans text-stone-100 flex flex-col">
      
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        
        {/* Logo */}
        <div className="mb-8">
          <Image 
            src="/logo-header-new.png" 
            alt="Belief Sparks" 
            width={400} 
            height={100} 
            className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Tagline */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
          Igniting Faith, <span className="text-vatican-gold">Sparking Conversation</span>
        </h1>
        
        <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          A Christian portal for open dialogue, honest questions, and meaningful reflection. 
          Exploring Roman Catholicism, Scripture, and the journey of faith.
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-vatican-red/20 border border-vatican-red/40 px-6 py-3 rounded-full mb-12">
          <Sparkles className="h-5 w-5 text-vatican-gold" />
          <span className="text-vatican-gold font-semibold uppercase tracking-wider text-sm">Coming Soon</span>
        </div>

        {/* Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 text-center hover:border-vatican-gold/50 transition-colors">
            <div className="bg-amber-900/30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-7 w-7 text-amber-500" />
            </div>
            <h3 className="font-serif font-bold text-white mb-2">Holy Week Series</h3>
            <p className="text-stone-400 text-sm">Journey through the final days of Jesus—from Palm Sunday to Easter Sunday</p>
          </div>
          
          <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 text-center hover:border-vatican-gold/50 transition-colors">
            <div className="bg-green-900/30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="font-serif font-bold text-white mb-2">Genesis Explorations</h3>
            <p className="text-stone-400 text-sm">Creation narratives, Eden, and humanity's origin story through Catholic lens</p>
          </div>
          
          <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 text-center hover:border-vatican-gold/50 transition-colors">
            <div className="bg-red-900/30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⛪</span>
            </div>
            <h3 className="font-serif font-bold text-white mb-2">Vatican II & Catholicism</h3>
            <p className="text-stone-400 text-sm">Deep dives into Church teaching, tradition, and the documents that shaped modern Catholicism</p>
          </div>
        </div>

        {/* Notify Me Section */}
        <div className="bg-stone-800/30 border border-stone-700 rounded-2xl p-8 max-w-md mx-auto">
          <h3 className="font-serif text-xl font-bold text-white mb-2">Be the First to Know</h3>
          <p className="text-stone-400 text-sm mb-4">Get notified when we launch and receive updates on new content.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-stone-900/50 border border-stone-600 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-vatican-gold transition-colors"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-vatican-red hover:bg-red-800 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Notify Me
            </button>
          </form>
          <p className="text-xs text-stone-500 mt-3">We respect your privacy. Unsubscribe anytime.</p>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image 
            src="/icon.png" 
            alt="Belief Sparks" 
            width={24} 
            height={24} 
            className="h-6 w-6 object-contain"
          />
          <span className="font-serif font-bold text-stone-300">Belief Sparks</span>
        </div>
        <p className="text-stone-500 text-sm">
          © 2026 Belief Sparks. All rights reserved.
        </p>
        <p className="text-stone-600 text-xs mt-2">
          Calgary, Alberta, Canada
        </p>
      </footer>

    </div>
  );
}
