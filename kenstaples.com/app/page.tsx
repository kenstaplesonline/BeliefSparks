'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github, Linkedin, Mail, User, Briefcase, Camera, Code, FileText, MessageSquare, Star, Menu, X, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProfessionalPage() {
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

  const projects = [
    {
      title: 'CACNAE Studios',
      description: 'Inspire, educate, and entertain through content that bridges science and spirituality, celebrates community, and sparks curiosity. Rooted in Calgary, expanding outward.',
      url: 'https://kenstaples.com',
      tags: ['Content Studio', 'Calgary', 'Science-Spirituality'],
      icon: '✨'
    },
    {
      title: 'Belief Sparks',
      description: 'A Christian portal for faith dialogue and reflection featuring comprehensive Holy Week series, theological discussions, and Catholic faith resources for spiritual growth.',
      url: 'https://www.beliefsparks.com',
      tags: ['Faith', 'Christianity', 'Roman Catholicism'],
      icon: '✝️'
    },
    {
      title: 'The Neighbourhoods',
      description: 'Showcasing Calgary\'s neighborhoods with data-driven insights, community stories, and local insights celebrating each area\'s unique character.',
      url: 'https://theneighbourhoods.com',
      tags: ['Calgary', 'Neighborhoods', 'Data'],
      icon: '🏠'
    },
    {
      title: 'Totally Random Thoughts',
      description: 'Personal blog for random thoughts and reflections on life, technology, faith, and everything in between.',
      url: 'https://totallyrandomthoughts.com',
      tags: ['Blog', 'Personal'],
      icon: '💭'
    },
    {
      title: 'Confluence Curiosity',
      description: 'Science stories and events around Calgary, focusing on astronomy, meteorology, geology, history, and other fields. A Calgary-focused cross between Natgeo.com and SI.edu.',
      url: 'https://confluencecuriosity.com',
      tags: ['Science', 'Calgary', 'Stories'],
      icon: '🌌'
    },
    {
      title: 'Horsepower Hiking',
      description: 'Hiking day trips from Calgary to locations around Alberta, featuring Google Earth Studio videos with audio narration and itinerary planning.',
      url: 'https://horsepowerhiking.com',
      tags: ['Hiking', 'Alberta', 'Videos'],
      icon: '🏔️'
    }
  ]

  const skills = [
    { name: 'Web Development', icon: <Code className="h-6 w-6" /> },
    { name: 'HTML/CSS/JS', icon: <Code className="h-6 w-6" /> },
    { name: 'React & Next.js', icon: <Code className="h-6 w-6" /> },
    { name: 'Microsoft Office', icon: <FileText className="h-6 w-6" /> },
    { name: 'Photography', icon: <Camera className="h-6 w-6" /> },
    { name: 'Problem Solving', icon: <Star className="h-6 w-6" /> },
    { name: 'Communication', icon: <MessageSquare className="h-6 w-6" /> },
    { name: 'Learning', icon: <Star className="h-6 w-6" /> },
    { name: 'Creativity', icon: <Star className="h-6 w-6" /> }
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
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="text-gray-700 hover:text-calgary-red transition-colors">About</Link>
              <Link href="#projects" className="text-gray-700 hover:text-calgary-red transition-colors">Projects</Link>
              <Link href="#photography" className="text-gray-700 hover:text-calgary-red transition-colors">Photography</Link>
              <Link href="#skills" className="text-gray-700 hover:text-calgary-red transition-colors">Skills</Link>
              <Link href="#contact" className="text-gray-700 hover:text-calgary-red transition-colors">Contact</Link>
              <Link href="/personal" className="inline-flex items-center gap-2 px-4 py-2 bg-calgary-red text-white rounded-lg hover:bg-calgary-red transition-colors">
                <span>🎯</span>
                <span>Personal</span>
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
              <div className="flex flex-col gap-4">
                <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-calgary-red transition-colors">About</Link>
                <Link href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-calgary-red transition-colors">Projects</Link>
                <Link href="#photography" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-calgary-red transition-colors">Photography</Link>
                <Link href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-calgary-red transition-colors">Skills</Link>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-calgary-red transition-colors">Contact</Link>
                <Link href="/personal" className="inline-flex items-center gap-2 px-4 py-2 bg-calgary-red text-white rounded-lg hover:bg-calgary-red transition-colors w-fit">
                  <span>🎯</span>
                  <span>Personal</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Ken Staples
              <br />
              <br />
              <span className="text-calgary-red">Creator & Developer</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Exploring ideas, building things, and sharing stories from Calgary, Alberta. 
              Always curious about technology, science, faith, and the world around us.
            </p>
            <div className="mb-8">
              <p className="text-xl text-gray-700 italic">"Curious. Create. Inspire."</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-calgary-red text-white font-semibold rounded-lg hover:bg-calgary-red transition-colors shadow-lg shadow-calgary-red/30"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/personal"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-calgary-red hover:text-calgary-red transition-colors"
              >
                <span>🎯</span>
                Personal Side
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
              <Image
                src="/selfie.png"
                alt="Ken Staples - Professional Profile"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-calgary-red mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Who I Am</h3>

              {/* About Me Image - Smaller */}
              <p className="text-gray-600 leading-relaxed mb-4">
                Born in Calgary on December 18, 1975, I grew up in Airdrie before returning to Calgary where I've lived ever since. I have a diverse work background in customer service and retail, including Amazon, Dairy Queen, Calgary Stampede Food Services, and more.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What sets me apart is my passion for technology and continuous learning. I'm comfortable writing code in HTML, CSS, and JavaScript, and I love building websites that help people. Microsoft Office proficiency rounds out my technical skills. Experimenting with AI techonology such as LLMs and OpenClaw.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in the power of authentic storytelling to connect people and inspire change. Whether it's through technology, photography, or just sharing stories, I'm always looking for ways to make a positive impact.
              </p>

              {/* Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-calgary-red">20+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-calgary-red">15+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-calgary-red">10+</div>
                    <div className="text-sm text-gray-600">Technologies</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-calgary-red pl-4">
                  <h4 className="font-semibold text-gray-900">Customer Service & Retail</h4>
                  <p className="text-sm text-gray-600">Amazon, Dairy Queen, Calgary Stampede, Real Canadian Superstore, HomeSense, Delta Airlines</p>
                </div>
                <div className="border-l-4 border-calgary-red pl-4">
                  <h4 className="font-semibold text-gray-900">Web Development</h4>
                  <p className="text-sm text-gray-600">Building websites with coding and AI</p>
                </div>
                <div className="border-l-4 border-calgary-red pl-4">
                  <h4 className="font-semibold text-gray-900">Content Creation</h4>
                  <p className="text-sm text-gray-600">CACNAE Studios - Creating content that bridges science and spirituality</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-calgary-red mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Here are some of the projects I've been working on
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-calgary-red text-white text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.url}
                    className="inline-flex items-center gap-2 text-calgary-red font-semibold hover:text-calgary-red transition-colors"
                  >
                    Visit Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-calgary-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow hover:border-calgary-red"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-calgary-red p-3 rounded-lg">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                </div>
                <p className="text-sm text-gray-600">
                  Proficient in building modern web applications and solving complex problems with code.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Photography Gallery Section */}
      <section id="photography" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Photography Gallery</h2>
            <div className="w-20 h-1 bg-calgary-red mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Capturing moments in nature, cityscapes, and architecture around Calgary and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/Picture10.png', alt: 'Photography 1' },
              { src: '/Picture11.png', alt: 'Photography 2' },
              { src: '/Picture13.png', alt: 'Photography 3' },
              { src: '/Picture24.png', alt: 'Photography 4' },
              { src: '/Picture27.png', alt: 'Photography 5' },
              { src: '/Picture35.png', alt: 'Photography 6' },
              { src: '/Picture38.png', alt: 'Photography 7' }
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Camera className="h-6 w-6 text-white mb-2" />
                    <p className="text-white text-sm font-medium">{photo.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Equipment: Canon Rebel T6I, Google Pixel 4XL, Google Pixel 7 Pro, Google Pixel 9 Pro XL
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
              <Camera className="h-4 w-4" />
              <span>Amateur Photographer</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-calgary-red mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Interested in working together? Let's talk about your project.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="mailto:hello@kenstaples.com?subject=I%27d%20like%20to%20connect"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-calgary-red text-white font-semibold rounded-lg hover:bg-calgary-red hover:text-white transition-colors shadow-lg"
            >
              <Mail className="h-5 w-5" />
              Get in Touch
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com/Ken-Staples" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-calgary-red transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/ken-staples/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-calgary-red transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Land Acknowledgement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="relative rounded-lg overflow-hidden shadow-lg mb-8 mx-auto" style={{ width: 300, height: 300 }}>
            <Image
              src="/LA.jpg"
              alt="Land Acknowledgement Photography"
              width={300}
              height={300}
              className="object-cover"
            />
            
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-800 mb-6">
              KenStaples.com acknowledges that we are on the traditional, ancestral, and unceded territory of the Blackfoot Confederacy (Kainai, Piikani, Amskapi Piikani, Siksika), the Tsuut'ina Nation, the Stoney Nakoda First Nations (including Chiniki, Bearspaw, and Goodstoney), and the Métis Nation (Historical Northwest Métis Homeland, Battle River Territory).
            </p>
            <p className="text-lg text-gray-800 mb-4">
              We recognize the history, resilience, and ongoing contributions of these First Nations and Métis communities to the land we share.
            </p>
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
