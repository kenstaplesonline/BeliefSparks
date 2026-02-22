import Image from "next/image";
import Link from "next/link";
import { BookOpen, MessageCircle, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden min-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
             <Image 
               src="/hero-bg.png" 
               alt="Background" 
               fill 
               className="object-cover opacity-20"
               priority
             />
             <div className="absolute inset-0 bg-stone-50/80 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 via-transparent to-stone-50/80"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center justify-center p-2 mb-8 bg-stone-200/80 backdrop-blur-sm rounded-full border border-stone-300 shadow-sm">
              <span className="px-3 py-1 text-sm font-semibold text-vatican-red uppercase tracking-wide">Igniting Faith</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              Spark Thoughtful <br/>
              <span className="text-vatican-gold drop-shadow-sm">Conversation</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-stone-600 mb-10 font-light">
              Open dialogue, honest questions, and meaningful reflection for all spiritual journeys. Whether you're deeply rooted, exploring, or reconsidering faith.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-vatican-red text-white font-serif font-semibold rounded-lg hover:bg-stone-900 transition-colors shadow-lg shadow-stone-300/50">
                Start Exploring
              </button>
              <button className="px-8 py-4 bg-white text-stone-900 font-serif font-semibold rounded-lg border border-stone-200 hover:border-vatican-gold transition-colors shadow-sm">
                Our Mission
              </button>
            </div>
          </div>
        </section>

        {/* Gospel Mission Section */}
        <section className="py-24 bg-white border-y border-stone-100 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="mb-12 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-stone-200 mx-auto w-full md:w-3/4">
              <Image 
                src="/mission.png" 
                alt="Faith Conversation" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
            </div>

            <div className="space-y-10">
              <div className="inline-flex items-center justify-center space-x-3 opacity-90">
                <Image 
                  src="/icon.png" 
                  alt="Logo" 
                  width={40} 
                  height={40} 
                  className="h-10 w-10 object-contain"
                />
                <span className="font-serif text-xl font-bold text-stone-900">Scripture & Spirit</span>
              </div>
              
              <blockquote className="font-serif text-3xl md:text-4xl text-stone-800 italic leading-relaxed">
                "Were not our hearts burning within us while he talked with us on the road and opened the Scriptures to us?"
              </blockquote>
              <cite className="block text-lg font-bold text-vatican-red not-italic uppercase tracking-widest text-sm">— Luke 24:32</cite>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 text-left md:text-center">
                <div className="space-y-3">
                  <div className="flex justify-center"><BookOpen className="h-8 w-8 text-vatican-gold" /></div>
                  <h3 className="font-bold text-xl text-stone-900">Deep Roots</h3>
                  <p className="text-stone-600 leading-relaxed">Exploring the rich traditions of Roman Catholicism and Christian history.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-center"><MessageCircle className="h-8 w-8 text-vatican-gold" /></div>
                  <h3 className="font-bold text-xl text-stone-900">Open Dialogue</h3>
                  <p className="text-stone-600 leading-relaxed">Creating space for honest questions and respectful conversation.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-center"><Heart className="h-8 w-8 text-vatican-gold" /></div>
                  <h3 className="font-bold text-xl text-stone-900">Modern Faith</h3>
                  <p className="text-stone-600 leading-relaxed">Connecting ancient truths to the challenges of today's digital world.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Prayer to St. Carlo Acutis */}
        <section className="relative py-24 bg-stone-900 text-stone-100 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
               src="/prayer-bg.png" 
               alt="Prayer Background" 
               fill 
               className="object-cover opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-stone-900/80"></div>
          </div>
          
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="w-16 h-1 bg-vatican-gold mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
            <h2 className="text-3xl font-serif font-bold text-white mb-8 drop-shadow-md">Prayer to Blessed Carlo Acutis</h2>
            <p className="text-lg md:text-xl font-serif leading-relaxed text-stone-300 italic mb-10">
              "O God our Father, we thank you for giving us Carlo, a model of life for young people, and a message of love for all. We pray that through his intercession, we may use technology as a tool for evangelization and bring others closer to Christ through our witness. Help us to put the Eucharist at the center of our lives, as the highway to heaven."
            </p>
            <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">Patron of the Internet</p>
          </div>
        </section>
      </main>
    </div>
  );
}
