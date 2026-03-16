'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Github, Linkedin, Mail, Menu, X, User, Briefcase, Camera, Code, BookOpen, Star, ChevronRight, FileText, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

export default function KenStaplesPage() {
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
      description: 'A Christian portal for faith dialogue and reflection',
      url: 'https://www.beliefsparks.com',
      tags: ['Faith', 'Christianity', 'Roman Catholicism'],
      icon: '✝️'
    },
    {
      title: 'The Neighbourhoods',
      description: 'Showcasing Calgary\'s neighborhoods with data-driven insights',
      url: 'https://theneighbourhoods.com',
      tags: ['Calgary', 'Neighborhoods', 'Data'],
      icon: '🏠'
    },
    {
      title: 'Totally Random Thoughts',
      description: 'Personal blog for random thoughts and reflections',
      url: '#',
      tags: ['Blog', 'Personal'],
      icon: '💭'
    }
  ]

  const skills = [
    { name: 'Web Development', icon: <Code className="h-6 w-6" /> },
    { name: 'HTML/CSS/JavaScript', icon: <Code className="h-6 w-6" /> },
    { name: 'Microsoft Office', icon: <FileText className="h-6 w-6" /> },
    { name: 'Photography', icon: <Camera className="h-6 w-6" /> },
    { name: 'Problem Solving', icon: <Star className="h-6 w-6" /> },
    { name: 'Communication', icon: <MessageSquare className="h-6 w-6" /> }
  ]

  const interests = [
    {
      title: 'Science Fiction',
      description: 'Loves Star Trek, Transformers, Ghostbusters, and works by Robert L. Forward',
      icon: '🚀',
      image: '/startrek.jpg'
    },
    {
      title: 'Science',
      description: 'Fascinated with astronomy, astrophysics, meteorology, and technology',
      icon: '🔭',
      image: '/space2.png'
    },
    {
      title: 'Faith',
      description: 'Roman Catholic, passionate about biblical history and science-religion dialogue',
      icon: '✝️',
      image: '/church.jpg'
    },
    {
      title: 'Photography',
      description: 'Capturing beauty in outdoors, architecture, and family moments',
      icon: '📷',
      image: '/camera1.png'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">👨‍💻</span>
              <span className="font-semibold text-gray-900">Ken Staples</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="flex items-center gap-2 text-gray-700 hover:text-calgary-red transition-colors">
                <User className="h-4 w-4" />
                About
              </Link>
              <Link href="#projects" className="flex items-center gap-2 text-gray-700 hover:text-calgary-red transition-colors">
                <Briefcase className="h-4 w-4" />
                Projects
              </Link>
              <Link href="#contact" className="flex items-center gap-2 text-gray-700 hover:text-calgary-red transition-colors">
                <Mail className="h-4 w-4" />
                Contact
              </Link>
              <a
                href="https://github.com/kenstaplesonline"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-calgary-red transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
            <button className="md:hidden text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-calgary-red rounded-full text-sm font-medium text-black mb-6">
              <span>👋</span>
              <span>Hello, I'm Ken Staples</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Calgarian • Technology Enthusiast •
              <br />
              <span className="text-calgary-red">Science & Faith Explorer</span>
            </h1>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I'm a passionate developer with a love for technology, science fiction, and helping others learn. Based in Calgary, Alberta, I build digital experiences that make a difference.
            </p>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-calgary-red rounded-full text-sm font-medium text-white mb-3">
                <span className="text-lg">✨</span>
                <span>CACNAE Studios</span>
              </div>
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
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-calgary-red hover:text-calgary-red transition-colors"
              >
                View My Work
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
                src="/selfie4.png"
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
              <p className="text-gray-600 leading-relaxed">
                Born in Calgary on December 18, 1975, I grew up in Airdrie before returning to Calgary where I've lived ever since. I have a diverse work background in customer service and retail, including Amazon, Dairy Queen, Calgary Stampede Food Services, and more.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                What sets me apart is my passion for technology and continuous learning. I'm comfortable writing code in HTML, CSS, and JavaScript, and I love building websites that help people. Microsoft Office proficiency rounds out my technical skills.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Beyond coding, I'm a lifelong learner fascinated by science, technology, and the intersection of faith and reason. I enjoy photography, especially capturing moments in nature and cityscapes around Calgary. My favorite team? The Calgary Stampeders, Flames, Calvary, Surge, Hitmen, Wranglers, Wilds, Roughnecks!!!!
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                I believe in the power of authentic storytelling to connect people and inspire change. Whether it's through technology, photography, or just sharing stories, I'm always looking for ways to make a positive impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-calgary-red to-calgary-red rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Years of Experience</span>
                  <span className="text-2xl font-bold text-calgary-red">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Projects Completed</span>
                  <span className="text-2xl font-bold text-calgary-red">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Technologies</span>
                  <span className="text-2xl font-bold text-calgary-red">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Coffee Consumed</span>
                  <span className="text-2xl font-bold text-calgary-red">∞</span>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Creators Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">YouTube Creators I Follow</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <a
                href="https://www.youtube.com/c/linustechtips"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">💻</div>
                  <span className="font-medium text-gray-900">Linus Tech Tips</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/c/PecosHank"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">🤠</div>
                  <span className="font-medium text-gray-900">Pecos Hank</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/user/Vsauce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">🧠</div>
                  <span className="font-medium text-gray-900">Vsauce</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/c/Veritasium"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">🔬</div>
                  <span className="font-medium text-gray-900">Veritasium</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/c/The8BitGuy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">🎮</div>
                  <span className="font-medium text-gray-900">The 8-Bit Guy</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/c/PBSSpacetime"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">🌟</div>
                  <span className="font-medium text-gray-900">PBS Space Time</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/c/ClaireLuvcat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">🐱</div>
                  <span className="font-medium text-gray-900">Claire Luvcat</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/c/SarahnTuned"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">🚗</div>
                  <span className="font-medium text-gray-900">Sarah-n-Tuned</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/@CertifiablyIngame"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-calgary-red transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">🎮</div>
                  <span className="font-medium text-gray-900">Certifiably Ingame</span>
                </div>
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-calgary-red p-3 rounded-lg">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">
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
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-calgary-red text-calgary-red text-sm font-medium rounded-full"
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
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                    <Image
                      src={interest.image}
                      alt={interest.title}
                      fill
                      className="object-cover transform hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{interest.title}</h3>
                    <p className="text-gray-600">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Calgary Sports Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calgary Sports & Teams</h2>
            <div className="w-20 h-1 bg-calgary-red mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer aspect-video">
              <Image
                src="/stampeders.jpg"
                alt="Calgary Stampeders"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-calgary-red to-calgary-red/80 p-6">
                <h4 className="text-2xl font-bold text-white">Calgary Stampeders</h4>
                <p className="text-white">CFL Team - Proud supporter of the Red and White</p>
              </div>
            </div>
          </div>

          {/* Calgary Sports Teams Carousel */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Other Calgary Teams I Support</h3>
            <p className="text-gray-600 text-center mb-6">Swipe to see more! →</p>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
              {/* Calgary Flames */}
              <div className="flex-shrink-0 w-72 snap-center bg-gradient-to-br from-orange-600 to-red-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <Image
                    src="/flames-logo.svg"
                    alt="Calgary Flames Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Calgary Flames</h4>
                <p className="text-orange-100">NHL Team - Proud supporter of the Red and Gold</p>
              </div>

              {/* Calgary Surge */}
              <div className="flex-shrink-0 w-72 snap-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <Image
                    src="/surge-logo.png"
                    alt="Calgary Surge Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Calgary Surge</h4>
                <p className="text-blue-100">CEBL Team - Supporting the best in Canadian basketball</p>
              </div>

              {/* Cavalry FC */}
              <div className="flex-shrink-0 w-72 snap-center bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <Image
                    src="/cavalry-logo.svg"
                    alt="Cavalry FC Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Cavalry FC</h4>
                <p className="text-orange-100">CPL Team - The best of Canadian soccer</p>
              </div>

              {/* Calgary Hitmen */}
              <div className="flex-shrink-0 w-72 snap-center bg-gradient-to-br from-red-700 to-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <Image
                    src="/hitmen-logo.svg"
                    alt="Calgary Hitmen Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Calgary Hitmen</h4>
                <p className="text-red-200">WHL Team - Junior hockey excellence</p>
              </div>

              {/* Calgary Wild FC */}
              <div className="flex-shrink-0 w-72 snap-center bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <Image
                    src="/wild-logo.svg"
                    alt="Calgary Wild FC Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Calgary Wild FC</h4>
                <p className="text-green-100">FC Team - Professional soccer excellence</p>
              </div>

              {/* Calgary Roughnecks */}
              <div className="flex-shrink-0 w-72 snap-center bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <Image
                    src="/roughnecks-logo.svg"
                    alt="Calgary Roughnecks Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Calgary Roughnecks</h4>
                <p className="text-slate-200">NLL Team - Lacrosse champions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-gradient-to-br from-calgary-red to-calgary-red text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-calgary-red max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:hello@kenstaples.com?subject=I%27d%20like%20to%20connect"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-calgary-red font-semibold rounded-lg hover:bg-calgary-red transition-colors"
            >
              <Mail className="h-5 w-5" />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/kenstaples"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-calgary-red text-white font-semibold rounded-lg hover:bg-calgary-red transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/kenstaplesonline"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-calgary-red hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:hello@kenstaples.com?subject=I%27d%20like%20to%20connect"
              className="flex items-center gap-2 text-calgary-red hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
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
    </div>
  )
}
