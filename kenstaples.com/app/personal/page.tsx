'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, User, Menu, X, ChevronUp, X as XIcon, Youtube, Facebook, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '../../components/ThemeToggle'

export default function PersonalPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const interests = [
    {
      title: 'Science Fiction',
      description: 'Loves Star Trek, Transformers, Ghostbusters, and works by Robert L. Forward. Fascinated by hard science fiction and futuristic technology.',
      icon: '🚀',
      image: '/startrek.jpg'
    },
    {
      title: 'Science',
      description: 'Fascinated with astronomy, astrophysics, meteorology, and technology. Follows leading scientists and researchers.',
      icon: '🔭',
      image: '/space2.png'
    },
    {
      title: 'Faith',
      description: 'Roman Catholic, passionate about biblical history and science-religion dialogue. Deep believer in finding harmony between faith and reason.',
      icon: '✝️',
      image: '/church.jpg'
    },
    {
      title: 'Photography',
      description: 'Capturing beauty in outdoors, architecture, and family moments. Canon and Google Pixel enthusiast.',
      icon: '📷',
      image: '/camera1.png'
    }
  ]

  const youtubeCreators = [
    { name: 'Linus Tech Tips', emoji: '💻', url: 'https://www.youtube.com/c/linustechtips' },
    { name: 'Pecos Hank', emoji: '🌪', url: 'https://www.youtube.com/c/PecosHank' },
    { name: 'Vsauce', emoji: '🧠', url: 'https://www.youtube.com/c/Vsauce' },
    { name: 'Veritasium', emoji: '🔬', url: 'https://www.youtube.com/c/Veritasium' },
    { name: 'The 8-Bit Guy', emoji: '💾', url: 'https://www.youtube.com/c/The8-BitGuy' },
    { name: 'PB Space Time', emoji: '🌌', url: 'https://www.youtube.com/c/PBSpaceTime' },
    { name: 'Claire Luvcat', emoji: '🐱', url: 'https://www.youtube.com/@ClaireLuvcat' },
    { name: 'Sarah-n-Tuned', emoji: '🚗', url: 'https://www.youtube.com/c/SarahnTuned' },
    { name: 'Certifiably Ingame', emoji: '🎮', url: 'https://www.youtube.com/@CertifiablyIngame' }
  ]

  const sportsTeams = [
    { name: 'Calgary Stampeders', league: 'CFL', colors: 'Red & White', logo: '/stampeders-logo.svg', url: 'https://www.stampeders.com/', fanStory: 'Following since childhood! The Stamps have been my CFL team since the 90s. Love the tradition, the Grey Cup memories, and the red & white pride!' },
    { name: 'Calgary Flames', league: 'NHL', colors: 'Red & Gold', logo: '/flames-logo.svg', url: 'https://www.nhl.com/flames', fanStory: 'Been a Flames fan since the 2004 Stanley Cup run. The C of Red is electric! Forever grateful for the Jarome Iginla era.' },
    { name: 'Calgary Surge', league: 'CEBL', colors: 'Blue', logo: '/surge-logo.png', url: 'https://www.calgarysurge.ca/', fanStory: 'Following since their inaugural 2023 season! Love having pro basketball in Calgary and the energy at WinSport is amazing.' },
    { name: 'Cavalry FC', league: 'CPL', colors: 'Orange', logo: '/cavalry-logo.svg', url: 'https://cavalryfc.canpl.ca/', fanStory: 'Supporting since day one in 2019! Canadian Premier League soccer at ATCO Field is a must-see. The Cavalry passion is real!' },
    { name: 'Calgary Hitmen', league: 'WHL', colors: 'Red & Black', logo: '/hitmen-logo.svg', url: 'https://www.whl.ca/team/calgary-hitmen', fanStory: 'Following since the 90s! Great memories at the Saddledome watching future NHL stars. Affordable family hockey at its best.' },
    { name: 'Calgary Wild FC', league: 'FC', colors: 'Green', logo: '/wild-logo.svg', url: 'https://www.nsl.ca/calgary-wild-fc', fanStory: 'Excited to support Calgary\'s newest pro team! Women\'s soccer in Calgary is long overdue and I\'m here for it!' },
    { name: 'Calgary Roughnecks', league: 'NLL', colors: 'Slate', logo: '/roughnecks-logo.svg', url: 'https://www.nll.com/team/calgary-roughnecks/', fanStory: 'Lacrosse fan since the early 2000s! The Roughnecks bring fast-paced action and championship pedigree. Multiple Champion\'s Cup wins!' },
    { name: 'Calgary Wranglers', league: 'AHL', colors: 'Red', logo: '/wranglers-logo.svg', url: 'https://www.nhl.com/flames/wranglers', fanStory: 'Following the Flames affiliate since they moved to Calgary in 2022! Great to watch future Flames develop up close.' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/KSlogo1.png"
                alt="Ken Staples Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-semibold text-gray-900 dark:text-white">Ken Staples</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-calgary-red transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Professional</span>
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-calgary-red transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col gap-4">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-calgary-red transition-colors">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Professional</span>
                </Link>
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-calgary-red rounded-full text-sm font-medium text-white mb-6">
            <span>🎯</span>
            <span>Personal Side</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Beyond the <span className="text-calgary-red">Code</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            When I'm not building websites, you'll find me exploring science fiction, cheering for Calgary teams, 
            capturing moments through photography, and diving deep into faith and science.
          </p>
        </motion.div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interests & Passions</h2>
            <div className="w-20 h-1 bg-calgary-red mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{interest.title}</h3>
                  <p className="text-gray-600">{interest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sports Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calgary Sports Teams</h2>
            <div className="w-20 h-1 bg-calgary-red mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Proud supporter of all Calgary teams! Red and White runs deep.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/stampeders-main.jpg"
              alt="Calgary Stampeders"
              width={1200}
              height={600}
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-calgary-red to-transparent p-6">
              <h4 className="text-2xl font-bold text-white">Calgary Stampeders</h4>
              <p className="text-white">CFL Team - Proud supporter of the Red and White</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sportsTeams.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-48"
                style={{ perspective: '1000px' }}
              >
                <a
                  href={team.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-full group cursor-pointer"
                >
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Front */}
                    <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center" style={{ backfaceVisibility: 'hidden' }}>
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <Image
                          src={team.logo}
                          alt={`${team.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{team.name}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{team.league}</p>
                      <p className="text-xs text-calgary-red mt-1">{team.colors}</p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-calgary-red rounded-lg p-4 text-center flex flex-col items-center justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                      <h4 className="font-bold text-white text-sm mb-2">{team.name}</h4>
                      <p className="text-xs text-white/90 leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>
                        {team.fanStory}
                      </p>
                      <span className="text-xs text-white/70 mt-2">Click to visit →</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">YouTube Creators I Follow</h2>
            <div className="w-20 h-1 bg-calgary-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {youtubeCreators.map((creator, index) => (
              <motion.a
                key={index}
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">{creator.emoji}</div>
                  <span className="font-medium text-gray-900 dark:text-white text-sm">{creator.name}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Let's Connect Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-calgary-red mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Follow along on social media for updates, behind-the-scenes content, and more!
            </p>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://x.com/kenstaples" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-calgary-red transition-colors" title="X (Twitter)">
              <XIcon className="h-8 w-8" />
            </a>
            <a href="https://instagram.com/kenstaples" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-calgary-red transition-colors" title="Instagram">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="https://www.youtube.com/@KenStaples" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-calgary-red transition-colors" title="YouTube">
              <Youtube className="h-8 w-8" />
            </a>
            <a href="https://bsky.app/profile/kenstaples.bsky.social" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-calgary-red transition-colors" title="Bluesky">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@kennethstaples1975" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-calgary-red transition-colors" title="TikTok">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a href="https://www.facebook.com/ken.staples" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-calgary-red transition-colors" title="Facebook">
              <Facebook className="h-8 w-8" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-gray-600">© 2026 CACNAE Studios. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <span className="text-red-500">❤</span>
              <span>in Calgary, Alberta</span>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <p className="text-sm text-gray-500 italic">"Curious. Create. Inspire."</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-calgary-red text-white rounded-full shadow-lg hover:bg-calgary-red transition-all z-50"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}
