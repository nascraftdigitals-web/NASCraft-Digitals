export const serviceCategories = [
  {
    category: 'SOFTWARE DEVELOPMENT',
    icon: '⚙️',
    services: [
      {
        id: 0,
        icon: '💻',
        label: 'WEB',
        title: 'Web Application',
        desc: 'Business sites, landing pages, e-commerce stores and portfolios built for speed, conversion and mobile-first performance.',
        deliverables: ['Responsive business website','Landing page & funnel','E-commerce + payments','SEO-optimized structure','Speed optimization','CMS integration'],
        timeline: '2–4 Weeks',
        price: '₹15,000',
        stack: 'React / Next.js',
      },
      {
        id: 1,
        icon: '📱',
        label: 'MOBILE',
        title: 'Mobile Application',
        desc: 'Native and cross-platform mobile applications designed for performance, user engagement and seamless deployment.',
        deliverables: ['iOS/Android app','User-friendly UI/UX','API integration','App store deployment','Performance optimization','Post-launch support'],
        timeline: '4–8 Weeks',
        price: '₹25,000',
        stack: 'Flutter / React Native',
      },
    ]
  },
  {
    category: 'DIGITAL MARKETING',
    icon: '📊',
    services: [
      {
        id: 2,
        icon: '🎯',
        label: 'META',
        title: 'Meta Marketing',
        desc: 'Targeted Facebook & Instagram campaigns designed to maximize reach, engagement and conversion for your brand.',
        deliverables: ['Campaign strategy','Creative design & copywriting','Audience targeting','A/B testing','Performance tracking','Monthly reports'],
        timeline: 'Monthly Retainer',
        price: '₹8,000/mo',
        stack: 'Meta Ads Manager',
      },
    ]
  },
  {
    category: 'DIGITAL MEDIA',
    icon: '🎭',
    services: [
      {
        id: 3,
        icon: '🎬',
        label: 'VIDEO EDIT',
        title: 'Video Editing',
        desc: 'Professional video editing with effects, color grading and sound design for YouTube, social media and promotional content.',
        deliverables: ['Video cuts & assembly','Color grading','Sound mixing','Special effects','Motion graphics','Format delivery'],
        timeline: '3–7 Days',
        price: '₹4,000',
        stack: 'Premiere Pro / DaVinci',
      },
      {
        id: 4,
        icon: '📸',
        label: 'PHOTO EDIT',
        title: 'Photo Editing',
        desc: 'Professional photo retouching, color correction and enhancement to make your images stunning and publication-ready.',
        deliverables: ['Color grading & correction','Background removal','Retouching & enhancement','Batch processing','Format conversion','Quality assurance'],
        timeline: '2–5 Days',
        price: '₹2,000',
        stack: 'Lightroom / Photoshop',
      },
      {
        id: 5,
        icon: '✏️',
        label: 'GRAPHIC DESIGN',
        title: 'Graphic Designing',
        desc: 'Social media creatives, posters, banners, flyers and presentation decks that stop the scroll and communicate your brand.',
        deliverables: ['Social media templates','Event posters & banners','Presentation decks','Infographics','Product mockups','Print-ready files'],
        timeline: '3–7 Days',
        price: '₹3,000',
        stack: 'Figma / Photoshop',
      },
    ]
  },
  {
    category: 'SHOOT',
    icon: '📹',
    services: [
      {
        id: 6,
        icon: '📷',
        label: 'PHOTOGRAPHY',
        title: 'Photography',
        desc: 'Professional photography for products, events, brands and corporate needs with high-quality post-production and retouching.',
        deliverables: ['Professional shoots','Photo selection & editing','High-res delivery','Gallery delivery','Print-ready files','Digital backup'],
        timeline: 'Per Shoot',
        price: '₹6,000',
        stack: 'Professional gear',
      },
      {
        id: 7,
        icon: '🎥',
        label: 'VIDEOGRAPHY',
        title: 'Videography',
        desc: 'Professional video production including concept development, shooting and post-production for events, commercials and promotional content.',
        deliverables: ['Video shoot','Scripting & planning','Multiple angles','Raw footage backup','Quick turnaround edit','Delivery formats'],
        timeline: '1–2 Weeks',
        price: '₹12,000',
        stack: 'Professional cameras',
      },
    ]
  },
]

export const services = [
  {
    id: 0,
    icon: '💻',
    label: 'WEB DEV',
    title: 'Website Development',
    desc: 'Business sites, landing pages, e-commerce stores and portfolios built for speed, conversion and mobile-first performance.',
    deliverables: ['Responsive business website','Landing page & funnel','E-commerce + payments','SEO-optimized structure','Speed optimization','CMS integration'],
    timeline: '2–4 Weeks',
    price: '₹15,000',
    stack: 'React / Next.js',
  },
  {
    id: 1,
    icon: '🎨',
    label: 'BRANDING',
    title: 'Branding & Identity',
    desc: 'Logo design, complete brand systems, color palettes, typography and style guides that make your brand instantly recognizable.',
    deliverables: ['Primary & alternate logos','Brand color system','Typography kit','Business card & stationery','Brand style guide PDF','Social media kit'],
    timeline: '1–2 Weeks',
    price: '₹8,000',
    stack: 'Figma / Illustrator',
  },
  {
    id: 2,
    icon: '✏️',
    label: 'GRAPHIC DESIGN',
    title: 'Graphic Design',
    desc: 'Social media creatives, posters, banners, flyers and presentation decks that stop the scroll and communicate your brand.',
    deliverables: ['Social media templates','Event posters & banners','Presentation decks','Infographics','Product mockups','Print-ready files'],
    timeline: '3–7 Days',
    price: '₹3,000',
    stack: 'Figma / Photoshop',
  },
  {
    id: 3,
    icon: '📈',
    label: 'MARKETING',
    title: 'Digital Marketing',
    desc: 'SEO, social media strategy, content marketing and paid ad campaigns that drive real traffic and produce measurable ROI.',
    deliverables: ['SEO audit & optimization','Social media management','Content calendar','Google / Meta ads','Monthly analytics report','Competitor analysis'],
    timeline: 'Monthly Retainer',
    price: '₹12,000/mo',
    stack: 'Meta / Google Ads',
  },
  {
    id: 4,
    icon: '📱',
    label: 'UI/UX',
    title: 'UI/UX Design',
    desc: 'Wireframes, clickable prototypes and polished app & web interfaces that convert users. Beauty and function, combined.',
    deliverables: ['User journey mapping','Low & high-fi wireframes','Interactive prototype','Design system','Usability testing','Developer handoff'],
    timeline: '1–3 Weeks',
    price: '₹10,000',
    stack: 'Figma',
  },
]

export const portfolioItems = [
  { id: 1, title: 'StartupX Landing Page', service: 'Web Development', serviceId: 0, result: '+312% Traffic', desc: 'Full-funnel landing page with A/B tested hero, animated testimonials and integrated booking.', tags:['React','GSAP','Vercel'], color:'teal' },
  { id: 2, title: 'RetailMax Rebrand', service: 'Branding', serviceId: 1, result: '+280% Revenue', desc: 'Complete brand overhaul — logo, packaging, social kit and brand guidelines for a D2C retail brand.', tags:['Figma','Illustrator','Print'], color:'mag' },
  { id: 3, title: 'CreatorHub Platform', service: 'UI/UX Design', serviceId: 4, result: '5x Social Reach', desc: 'Creator dashboard UI with analytics, content scheduling and collab features. Figma to code delivery.', tags:['Figma','React','Design System'], color:'teal' },
  { id: 4, title: 'TastyBite Restaurant', service: 'Digital Marketing', serviceId: 3, result: '+4.2x Orders', desc: 'Full digital marketing package — SEO, Instagram growth, Google Ads and WhatsApp automation.', tags:['Meta Ads','SEO','n8n'], color:'mag' },
  { id: 5, title: 'ClinicAI Chatbot', service: 'AI & Automation', serviceId: 5, result: '80% Support Auto', desc: 'WhatsApp AI chatbot for a diagnostic clinic handling appointments, FAQs and lab result queries.', tags:['OpenAI','n8n','WhatsApp'], color:'teal' },
  { id: 6, title: 'HackFest 2025 Winner', service: 'Startup Support', serviceId: 6, result: '1st Place', desc: 'Full pitch deck + MVP landing page for a fintech startup that won the national hackathon.', tags:['Next.js','Figma','Pitch'], color:'mag' },
]

export const filterTabs = ['All','Web Development','Branding','UI/UX Design','Digital Marketing','AI & Automation','Startup Support']

export const processSteps = [
  { n:'01', title:'Discovery', icon:'🔍', desc:'We deep-dive into your goals, target audience and competitive landscape to form a clear picture of what success looks like.' },
  { n:'02', title:'Planning', icon:'📋', desc:'Strategy, sitemap, wireframes and a clear project roadmap with milestones. No surprises, no scope creep.' },
  { n:'03', title:'Design', icon:'🎨', desc:'Stunning, user-focused designs crafted for both aesthetics and conversion. Full Figma prototype for your review.' },
  { n:'04', title:'Development', icon:'💻', desc:'Clean, optimized, fully responsive code. We build fast, accessible and SEO-ready from day one.' },
  { n:'05', title:'Launch', icon:'🚀', desc:'QA, deployment, domain setup and a smooth, monitored go-live. We handle every technical detail.' },
  { n:'06', title:'Support', icon:'🛡️', desc:'Ongoing care, monthly updates, performance monitoring and continuous improvements post-launch.' },
]

export const tools = [
  { name:'React / Next.js', cat:'Dev' }, { name:'Figma', cat:'Design' },
  { name:'GSAP', cat:'Animation' }, { name:'Tailwind CSS', cat:'Styling' },
  { name:'OpenAI API', cat:'AI' }, { name:'n8n', cat:'Automation' },
  { name:'EmailJS', cat:'Comms' }, { name:'Vercel', cat:'Deploy' },
  { name:'Photoshop', cat:'Graphics' }, { name:'Illustrator', cat:'Brand' },
  { name:'Meta Ads', cat:'Marketing' }, { name:'Google Ads', cat:'Marketing' },
]

export const faqs = [
  { q:'How long does a project take?', a:'Typical website projects take 2–4 weeks. Branding 1–2 weeks. AI automations 1–4 weeks. We always give you a clear timeline before starting.' },
  { q:'Do you work with international clients?', a:'Yes — we work with clients across India and globally. All communication is in English and payments are accepted in INR and USD.' },
  { q:'What do you need from me to get started?', a:'Just a brief about your business, goals, and any references you like. We handle the rest — discovery call, planning, and a proposal within 48 hours.' },
  { q:'Do you offer post-launch support?', a:'Yes. All projects include 30 days of free bug-fix support. We also offer monthly maintenance plans starting at ₹2,500/mo.' },
  { q:'Can I see the design before development starts?', a:'Always. We deliver a full Figma prototype for your approval before writing a single line of code.' },
  { q:'What payment methods do you accept?', a:'Bank transfer, UPI, Razorpay, and international wire transfers. We work on a 50% advance, 50% on delivery model.' },
]

export const team = [
  { name:'Nascraft Team', role:'Founders & Creatives', bio:'A passionate team of designers, developers and marketers who build digital products that perform.', emoji:'⚡' },
]

export const STATS = [
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Core Services' },
  { value: 100, suffix: '%', label: 'Quality Focus' },
]

export const aboutTimeline = [
  { year:'2022', title:'The Beginning', desc:'Founded as Cyber Monk Studioz — two passionate creators building websites and designs from scratch.' },
  { year:'2023', title:'First 10 Clients', desc:'Expanded to branding and digital marketing. Delivered 10+ projects across retail, food and tech sectors.' },
  { year:'2025', title:'20 Projects Milestone', desc:'Hit 20+ delivered projects. Expanded team. Launched startup support vertical for founders and hackathon teams.' },
  { year:'2026', title:'Nascraft Digitals', desc:'Rebranded as Nascraft Digitals. New identity, expanded services, and a bold new digital presence.' },
]

export const values = [
  { icon:'⚡', title:'Speed Without Compromise', desc:'Most projects launch within 2–4 weeks. Your timeline is our deadline — every time.' },
  { icon:'🎯', title:'Premium Quality', desc:'Every pixel, interaction and line of code is crafted with obsessive attention to detail.' },
  { icon:'🤝', title:'Radical Transparency', desc:'Full visibility into your project. Real communication. Zero ghosting. Ever.' },
  { icon:'🚀', title:'Innovation First', desc:'We bring the latest AI and modern web tech so your brand always stays ahead of the curve.' },
]

export const projectTimeline = [
  { type: 'Small Projects', duration: '1–2 Weeks', desc: 'Logo design, landing pages, simple websites, social media graphics' },
  { type: 'Medium Projects', duration: '2–4 Weeks', desc: 'Multi-page websites, branding packages, UI/UX design, mobile apps' },
  { type: 'Large Projects', duration: '4–8 Weeks', desc: 'E-commerce platforms, custom web apps, full digital marketing campaigns' },
]

export const communicationMethods = [
  { icon: '💬', title: 'WhatsApp Updates', desc: 'Daily progress updates and quick responses for urgent queries' },
  { icon: '📧', title: 'Email Reports', desc: 'Weekly detailed reports with milestones, deliverables, and next steps' },
  { icon: '📞', title: 'Video Calls', desc: 'Bi-weekly check-ins for feedback, reviews, and strategic discussions' },
  { icon: '📱', title: 'Slack Channel', desc: 'Dedicated project channel for real-time collaboration (optional)' },
]

export const clientNeeds = [
  { 
    icon: '📁', 
    title: 'Brand Assets', 
    items: ['Logo files (AI, PNG, SVG)', 'Brand colors & fonts', 'Existing brand guidelines', 'Product images/photos'] 
  },
  { 
    icon: '✍️', 
    title: 'Content & Copy', 
    items: ['Website text/copy', 'About us & team info', 'Service descriptions', 'Contact details'] 
  },
  { 
    icon: '🔑', 
    title: 'Access & Credentials', 
    items: ['Domain & hosting login', 'Social media accounts', 'Analytics access', 'Third-party integrations'] 
  },
]

export const revisionPolicy = [
  'Up to 3 rounds of revisions included in all packages',
  'Revisions must be requested within 7 days of delivery',
  'Major scope changes may incur additional costs',
  'Additional revisions: ₹500–₹2,000 depending on complexity',
  'Unlimited minor tweaks during 30-day support period',
]

export const paymentStructure = [
  '50% advance payment to start the project',
  '50% on final delivery and approval',
  'For projects above ₹50,000: 40%-30%-30% milestone-based',
  'Accepted methods: UPI, Bank Transfer, Razorpay, Wire Transfer',
  'Invoice provided for all transactions',
  'Refund policy: 50% refund if cancelled before design phase',
]
