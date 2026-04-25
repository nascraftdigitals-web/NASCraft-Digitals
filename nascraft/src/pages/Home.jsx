import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Ticker from '../components/Ticker'
import { PORTFOLIO, STATS } from '../data/index'
import { useRevealAll } from '../hooks/useReveal'
import { cn } from '../lib/utils'

const serviceCategories = [
  {
    category: 'SOFTWARE DEVELOPMENT',
    icon: '⚙️',
    services: [
      { id: 0, icon: '💻', title: 'Web Application', desc: 'Custom web apps built with React, Next.js and modern tech stack for speed and scale.' },
      { id: 1, icon: '📱', title: 'Mobile Application', desc: 'Native and cross-platform apps for iOS and Android with seamless user experiences.' }
    ]
  },
  {
    category: 'DIGITAL MARKETING',
    icon: '📊',
    services: [
      { id: 2, icon: '🎯', title: 'Meta Marketing', desc: 'Strategic Meta Ads, Instagram growth and Facebook campaigns that drive real ROI.' }
    ]
  },
  {
    category: 'DIGITAL MEDIA',
    icon: '🎭',
    services: [
      { id: 3, icon: '🎬', title: 'Video Editing', desc: 'Professional video editing, motion graphics and post-production for all platforms.' },
      { id: 4, icon: '📸', title: 'Photo Editing', desc: 'Photo retouching, color grading and editing for products, events and personal projects.' },
      { id: 5, icon: '✏️', title: 'Graphic Designing', desc: 'Stunning graphics, illustrations and design assets that elevate your brand visually.' }
    ]
  },
  {
    category: 'SHOOT',
    icon: '📹',
    services: [
      { id: 6, icon: '📷', title: 'Photography', desc: 'Professional photography for products, events, portraits and commercial shoots.' },
      { id: 7, icon: '🎥', title: 'Videography', desc: 'High-quality video production for events, reels, commercials and brand storytelling.' }
    ]
  }
]

export default function Home() {
  const [expandedCategory, setExpandedCategory] = useState(null)
  useRevealAll()

  const toggleCategory = (catIdx) => {
    setExpandedCategory(expandedCategory === catIdx ? null : catIdx)
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden bg-void pt-24 pb-16">
        <div className="absolute inset-0 grid-bg opacity-20 animate-grid-drift" />
        <div className="absolute inset-0 bg-repeat opacity-[0.08] pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.08) 3px,rgba(0,0,0,.08) 4px)'
        }} />

        {/* Glow Orbs */}
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-teal/10 blur-[100px] rounded-full opacity-75" />
        <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-mag/5 blur-[100px] rounded-full opacity-75" />

        {/* Corner Brackets */}
        <div className="absolute top-20 left-12 w-10 h-10 border-t-2 border-l-2 border-teal/20" />
        <div className="absolute top-20 right-12 w-10 h-10 border-t-2 border-r-2 border-mag/20" />
        <div className="absolute bottom-16 left-12 w-10 h-10 border-b-2 border-l-2 border-mag/20" />
        <div className="absolute bottom-16 right-12 w-10 h-10 border-b-2 border-r-2 border-teal/20" />

        <div className="relative z-20 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-6 bg-teal" />
            <span className="font-mono text-teal text-[11px] tracking-[0.35em] font-bold">◈ DIGITAL INNOVATION STUDIO ◈</span>
            <div className="h-[1px] w-6 bg-teal" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight flex flex-col items-center font-display font-black tracking-tight text-white space-y-2">
            <motion.span
              initial={{ translateY: '110%', opacity: 0 }}
              animate={{ translateY: '0%', opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              NASCRAFT DIGITALS
            </motion.span>
            <motion.span
              initial={{ translateY: '110%', opacity: 0 }}
              animate={{ translateY: '0%', opacity: 1 }}
              transition={{ delay: 0.52, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              WE BUILD
            </motion.span>
            <motion.span
              initial={{ translateY: '110%', opacity: 0 }}
              animate={{ translateY: '0%', opacity: 1 }}
              transition={{ delay: 0.66, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="block flex items-center justify-center gap-2"
            >
              DIGITAL BRANDS FOR
            </motion.span>
            <motion.span
              initial={{ translateY: '110%', opacity: 0 }}
              animate={{ translateY: '0%', opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="block text-teal font-black text-xl md:text-2xl lg:text-4xl"
            >
              BUSINESSES
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-white text-sm md:text-base max-w-xl mx-auto mb-6 font-body leading-relaxed"
          >
            We engineer bold digital experiences — websites, brands & automation — for businesses that refuse to be ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              to="/services"
              className="font-mono text-xs font-bold px-8 py-3 bg-teal text-void hover:bg-teal-d transition-all w-full sm:w-auto text-center"
              style={{clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'}}
            >
              VIEW SERVICES
            </Link>
            <Link
              to="/contact"
              className="font-mono text-xs font-bold px-8 py-3 border-2 border-mag text-mag hover:bg-mag hover:text-void transition-all w-full sm:w-auto text-center"
              style={{clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'}}
            >
              LET'S CONNECT
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-10 bg-teal/40" />
          <span className="font-mono text-[9px] text-white tracking-widest font-bold">SCROLL</span>
        </motion.div>
      </section>

      <Ticker />

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 bg-obsidian reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="group p-8 border border-teal/5 bg-deep hover:bg-navy transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <h3 className={cn("text-5xl md:text-6xl mb-2 font-display font-black", i % 2 === 0 ? 'text-teal' : 'text-mag')}>
                {stat.value}{stat.suffix}
              </h3>
              <p className="font-mono text-[11px] text-white tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 px-6 md:px-12 bg-void reveal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-teal text-[13px] mb-4 tracking-widest font-bold">// WHAT WE DO</p>
          <h2 className="text-5xl md:text-7xl mb-20 font-display font-black text-white">Our <span className="text-teal">Services</span></h2>

          <div className="space-y-5">
            {serviceCategories.map((cat, catIdx) => {
              const isExpanded = expandedCategory === catIdx
              return (
                <div key={catIdx} className="border-2 border-teal/25 rounded-xl overflow-hidden bg-obsidian/50 hover:bg-obsidian transition-all duration-400">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(catIdx)}
                    className="w-full p-7 md:p-10 flex items-center justify-between group hover:bg-navy/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6 flex-1">
                      <span className="text-4xl md:text-5xl">{cat.icon}</span>
                      <div className="text-left">
                        <h3 className="text-2xl md:text-3xl font-display font-black text-white group-hover:text-teal transition-colors duration-300">{cat.category}</h3>
                        <p className="text-xs md:text-sm text-teal/80 font-mono mt-1">{cat.services.length} service{cat.services.length > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                    <div className={`text-3xl font-bold text-teal transition-all duration-500 transform ${isExpanded ? 'rotate-45 scale-125' : 'group-hover:scale-110'}`}>
                      +
                    </div>
                  </button>

                  {/* Services Grid - Accordion Content */}
                  {isExpanded && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8 md:p-10 bg-deep/40 border-t-2 border-teal/15 animate-fadeIn">
                      {cat.services.map((service, sIdx) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: sIdx * 0.08, duration: 0.35 }}
                          className="p-6 md:p-7 border-2 border-teal/20 bg-obsidian/80 hover:bg-obsidian hover:border-teal/50 hover:shadow-lg hover:shadow-teal/20 transition-all duration-300 rounded-lg group relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative z-10">
                            <span className="text-5xl mb-4 block">{service.icon}</span>
                            <h4 className="text-lg md:text-xl font-display font-bold text-white mb-3 group-hover:text-teal transition-colors duration-300">{service.title}</h4>
                            <p className="text-white/70 text-sm leading-relaxed">{service.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="font-mono text-sm font-bold px-12 py-4 border-2 border-mag text-mag hover:bg-mag hover:text-void transition-all duration-300 inline-block"
              style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-6 md:px-12 bg-obsidian reveal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-mag text-[13px] mb-4 tracking-widest font-bold">// OUR WORK</p>
          <h2 className="text-5xl md:text-7xl mb-16 font-display font-black text-white">Work That <span className="text-teal">Speaks.</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO.slice(0, 3).map((project, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden border border-teal/10 bg-deep">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] text-8xl font-display pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  {project.category.split(' ')[0]}
                </div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="font-mono text-[9px] px-3 py-2 bg-teal/10 border border-teal/30 text-teal font-bold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10" />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-2xl text-void mb-2 font-display font-bold">{project.title}</h4>
                  <p className="text-void/90 text-sm mb-4 font-medium">{project.description}</p>
                  <div className="text-4xl font-display text-void font-black">{project.result}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/portfolio"
              className="font-mono text-sm font-bold px-10 py-4 border-2 border-teal/60 text-teal hover:bg-teal hover:text-void transition-all inline-block"
              style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}
            >
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
      </section>

      {/* Why Nascraft */}
      <section className="py-24 px-6 md:px-12 bg-void reveal">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-teal text-[13px] mb-4 tracking-widest font-bold">// WHY NASCRAFT</p>
          <h2 className="text-5xl md:text-7xl mb-16 font-display font-black text-white">Built <span className="text-teal">Different.</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: '01', icon: '⚡', title: 'Speed Without Compromise', desc: 'Most projects launch within 2–4 weeks.' },
              { id: '02', icon: '🎯', title: 'Premium Quality', desc: 'Every pixel, interaction and line of code is crafted with obsessive attention to detail.' },
              { id: '03', icon: '🤝', title: 'Radical Transparency', desc: 'Full visibility into your project. Real communication. Zero ghosting. Ever.' },
              { id: '04', icon: '🚀', title: 'Innovation First', desc: 'We bring the latest AI and modern web tech so your brand always stays ahead of the curve.' }
            ].map((item, i) => (
              <div key={i} className="group p-12 border border-teal/10 bg-obsidian hover:bg-navy transition-all relative overflow-hidden">
                <span className="absolute -top-4 -right-4 text-9xl font-display text-teal/5 group-hover:text-teal/10 transition-colors pointer-events-none font-black">
                  {item.id}
                </span>
                <span className="text-5xl mb-8 block">{item.icon}</span>
                <h4 className="text-2xl mb-4 group-hover:text-teal transition-colors font-display font-bold text-white">{item.title}</h4>
                <p className="text-white leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 px-6 md:px-12 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-teal/20" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-mag/20" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-mag/20" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-teal/20" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl mb-8 font-display font-black text-white">Ready to Build Something <span className="text-teal">Brilliant?</span></h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="font-mono text-sm font-bold px-10 py-4 bg-teal text-void hover:bg-teal-d transition-all w-full sm:w-auto text-center"
              style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}
            >
              START A PROJECT
            </Link>
            <Link
              to="/booking"
              className="font-mono text-sm font-bold px-10 py-4 border-2 border-mag text-mag hover:bg-mag hover:text-void transition-all w-full sm:w-auto text-center"
              style={{clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'}}
            >
              BOOK A FREE CALL
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
