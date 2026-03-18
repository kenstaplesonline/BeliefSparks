'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, User, Menu, X, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'

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
    { name: 'Calgary Stampeders', league: 'CFL', colors: 'Red & White', logo: '/stampeders-logo.png' },
    { name: 'Calgary Flames', league: 'NHL', colors: 'Red & Gold', logo: '/flames-logo.svg' },
    { name: 'Calgary Surge', league: 'CEBL', colors: 'Blue', logo: '/surge-logo.png' },
    { name: 'Cavalry FC', league: 'CPL', colors: 'Orange', logo: '/cavalry-logo.svg' },
    { name: 'Calgary Hitmen', league: 'WHL', colors: 'Red & Black', logo: '/hitmen-logo.svg' },
    { name: 'Calgary Wild FC', league: 'FC', colors: 'Green', logo: '/wild-logo.svg' },
    { name: 'Calgary Roughnecks', league: 'NLL', colors: 'Slate', logo: '/roughnecks-logo.svg' },
    { name: 'Calgary Wranglers', league: 'AHL', colors: 'Red', logo: '/wranglers-logo.svg' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
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
              <span className="font-semibold text-gray-900">Ken Staples</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-calgary-red transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Professional</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-calgary-red transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-gray-700 hover:text-calgary-red transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Professional</span>
              </Link>
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Beyond the <span className="text-calgary-red">Code</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              src="/stampeders-logo.svg"
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
                className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-calgary-red hover:shadow-md transition-all"
              >
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <Image
                    src={team.logo}
                    alt={`${team.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{team.name}</h4>
                <p className="text-xs text-gray-600">{team.league}</p>
                <p className="text-xs text-calgary-red mt-1">{team.colors}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">YouTube Creators I Follow</h2>
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
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">{creator.emoji}</div>
                  <span className="font-medium text-gray-900 text-sm">{creator.name}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-gray-600">© 2024 CACNAE Studios. All rights reserved.</span>
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
