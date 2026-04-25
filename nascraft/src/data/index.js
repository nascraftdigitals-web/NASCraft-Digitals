export const SERVICES = [
  {
    id: 0,
    icon: '💻',
    label: 'WEB DEV',
    title: 'Website Development',
    description: 'Business sites, landing pages, e-commerce stores and portfolios built for speed, conversion and mobile-first performance.',
    desc: 'Business sites, landing pages, e-commerce stores and portfolios built for speed, conversion and mobile-first performance.',
    deliverables: ['Responsive business website', 'Landing page & funnel', 'E-commerce + payments', 'SEO-optimized structure', 'Speed optimization', 'CMS integration'],
    timeline: '2–4 Weeks',
    price: '₹15,000',
    stack: 'React / Next.js',
  },
  {
    id: 1,
    icon: '🎨',
    label: 'BRANDING',
    title: 'Branding & Identity',
    description: 'Logo design, complete brand systems, color palettes, typography and style guides that make your brand instantly recognizable.',
    desc: 'Logo design, complete brand systems, color palettes, typography and style guides that make your brand instantly recognizable.',
    deliverables: ['Primary & alternate logos', 'Brand color system', 'Typography kit', 'Business card & stationery', 'Brand style guide PDF', 'Social media kit'],
    timeline: '1–2 Weeks',
    price: '₹8,000',
    stack: 'Figma / Illustrator',
  },
  {
    id: 2,
    icon: '✏️',
    label: 'GRAPHIC DESIGN',
    title: 'Graphic Design',
    description: 'Social media creatives, posters, banners, flyers and presentation decks that stop the scroll and communicate your brand.',
    desc: 'Social media creatives, posters, banners, flyers and presentation decks that stop the scroll and communicate your brand.',
    deliverables: ['Social media templates', 'Event posters & banners', 'Presentation decks', 'Infographics', 'Product mockups', 'Print-ready files'],
    timeline: '3–7 Days',
    price: '₹3,000',
    stack: 'Figma / Photoshop',
  },
  {
    id: 3,
    icon: '📈',
    label: 'MARKETING',
    title: 'Digital Marketing',
    description: 'SEO, social media strategy, content marketing and paid ad campaigns that drive real traffic and produce measurable ROI.',
    desc: 'SEO, social media strategy, content marketing and paid ad campaigns that drive real traffic and produce measurable ROI.',
    deliverables: ['SEO audit & optimization', 'Social media management', 'Content calendar', 'Google / Meta ads', 'Monthly analytics report', 'Competitor analysis'],
    timeline: 'Monthly Retainer',
    price: '₹12,000/mo',
    stack: 'Meta / Google Ads',
  },
]

export const portfolioItems = [
  { id: 1, title: 'StartupX Landing Page', service: 'Web Development', category: 'Web Development', serviceId: 0, result: '+312% Traffic', desc: 'Full-funnel landing page with A/B tested hero, animated testimonials and integrated booking.', description: 'Full-funnel landing page with A/B tested hero, animated testimonials and integrated booking.', tags: ['React', 'GSAP', 'Vercel'], color: 'teal' },
  { id: 2, title: 'RetailMax Rebrand', service: 'Branding', category: 'Branding', serviceId: 1, result: '+280% Revenue', desc: 'Complete brand overhaul — logo, packaging, social kit and brand guidelines for a D2C retail brand.', description: 'Complete brand overhaul — logo, packaging, social kit and brand guidelines for a D2C retail brand.', tags: ['Figma', 'Illustrator', 'Print'], color: 'mag' },
  { id: 4, title: 'TastyBite Restaurant', service: 'Digital Marketing', category: 'Digital Marketing', serviceId: 3, result: '+4.2x Orders', desc: 'Full digital marketing package — SEO, Instagram growth, Google Ads and WhatsApp automation.', description: 'Full digital marketing package — SEO, Instagram growth, Google Ads and WhatsApp automation.', tags: ['Meta Ads', 'SEO', 'n8n'], color: 'mag' },
]

export const PORTFOLIO = portfolioItems

export const processSteps = [
  { n: '01', title: 'Discovery', icon: '🔍', desc: 'We deep-dive into your goals, target audience and competitive landscape to form a clear picture of what success looks like.' },
  { n: '02', title: 'Planning', icon: '📋', desc: 'Strategy, sitemap, wireframes and a clear project roadmap with milestones. No surprises, no scope creep.' },
  { n: '03', title: 'Design', icon: '🎨', desc: 'Stunning, user-focused designs crafted for both aesthetics and conversion. Full Figma prototype for your review.' },
  { n: '04', title: 'Development', icon: '💻', desc: 'Clean, optimized, fully responsive code. We build fast, accessible and SEO-ready from day one.' },
  { n: '05', title: 'Launch', icon: '🚀', desc: 'QA, deployment, domain setup and a smooth, monitored go-live. We handle every technical detail.' },
  { n: '06', title: 'Support', icon: '🛡️', desc: 'Ongoing care, monthly updates, performance monitoring and continuous improvements post-launch.' },
]

export const tools = [
  { name: 'React / Next.js', cat: 'Dev' }, { name: 'Figma', cat: 'Design' },
  { name: 'GSAP', cat: 'Animation' }, { name: 'Tailwind CSS', cat: 'Styling' },
  { name: 'OpenAI API', cat: 'AI' }, { name: 'n8n', cat: 'Automation' },
  { name: 'EmailJS', cat: 'Comms' }, { name: 'Vercel', cat: 'Deploy' },
  { name: 'Photoshop', cat: 'Graphics' }, { name: 'Illustrator', cat: 'Brand' },
  { name: 'Meta Ads', cat: 'Marketing' }, { name: 'Google Ads', cat: 'Marketing' },
]

export const faqs = [
  { q: 'How long does a project take?', a: 'Typical website projects take 2–4 weeks. Branding 1–2 weeks. AI automations 1–4 weeks. We always give you a clear timeline before starting.' },
  { q: 'Do you work with international clients?', a: 'Yes — we work with clients across India and globally. All communication is in English and payments are accepted in INR and USD.' },
  { q: 'What do you need from me to get started?', a: 'Just a brief about your business, goals, and any references you like. We handle the rest — discovery call, planning, and a proposal within 48 hours.' },
  { q: 'Do you offer post-launch support?', a: 'Yes. All projects include 30 days of free bug-fix support. We also offer monthly maintenance plans starting at ₹2,500/mo.' },
  { q: 'Can I see the design before development starts?', a: 'Always. We deliver a full Figma prototype for your approval before writing a single line of code.' },
  { q: 'What payment methods do you accept?', a: 'Bank transfer, UPI, Razorpay, and international wire transfers. We work on a 50% advance, 50% on delivery model.' },
]

export const team = [
  { name: 'Nascraft Team', role: 'Founders & Creatives', bio: 'A passionate team of designers, developers and marketers who build digital products that perform.', emoji: '⚡' },
]

export const directors = [
  {
    name: 'Srihariharan',
    role: 'Founder',
    image: '/photos/hari.png?v=1',
    bio: 'Leading concept, design, and visual storytelling with sharp focus on clarity, emotion, and brand impact.'
  },
  {
    name: 'Aaruhya Kumar',
    role: 'Co-Founder',
    image: '/photos/aaruhya.webp?v=1',
    bio: 'Overseeing visual design, aesthetics, and execution with strong focus on detail, balance, and consistency.'
  },
  {
    name: 'Nishanth Ravikumar',
    role: 'Co-Founder',
    image: '/photos/nishanth.jpg?v=1',
    bio: 'Driving strategy, client relationships, and growth while aligning creative vision with business goals.'
  }
]

export const developers = [
  { name: 'Rahav', role: 'Application Developer', image: '/photos/rahav.jpg?v=1', bio: 'Building intuitive, high-performance mobile apps with focus on usability and clean design.' },
  { name: 'Monick Kannan', role: 'Software Developer', image: '/photos/monick.jpeg?v=1', bio: 'Developing responsive, scalable websites that blend performance, design, and functionality.' },
]

export const designUnit = [
  { name: 'Harish', role: 'Video Editor', image: '/photos/harish.jpg?v=1', bio: 'Crafting compelling visual stories through expert video editing, motion graphics, and post-production.' },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 7, suffix: '', label: 'Core Services' },
  { value: 100, suffix: '%', label: 'Quality Focus' },
]

export const filterTabs = ['All', 'Web Development', 'Branding', 'Graphic Design', 'Digital Marketing']

// Backwards compatibility exports
export const services = SERVICES
export const stats = STATS
