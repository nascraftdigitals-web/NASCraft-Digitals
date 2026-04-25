# Nascraft Digitals — React Website

Full multi-page React site with Vite, React Router v6, CSS Modules, EmailJS and WhatsApp integration.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home — hero switcher, stats, services, portfolio, why us, CTA |
| `/about` | About — story, values, timeline, team |
| `/services` | Services — interactive selector, pricing, industry match |
| `/portfolio` | Portfolio — filterable case study grid |
| `/process` | Process — 6-step timeline, tools, FAQ |
| `/contact` | Contact — terminal form with EmailJS |
| `/booking` | Booking — date/time slot picker |
| `/forum` | Forum — community discussion board |

## 🔧 Configuration

### 1. EmailJS (Contact Form)
In `src/pages/Contact.jsx`, replace:
```js
const EMAILJS_SERVICE  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC   = 'YOUR_PUBLIC_KEY'
```
Get these at https://www.emailjs.com

### 2. WhatsApp Number
Search for `919999999999` and replace with your actual WhatsApp number (country code + number, no +).

### 3. Contact Info
Search for `hello@nascraft.com` and update your real email.

## 🎨 Design Tokens (src/styles/globals.css)

| Token | Value | Use |
|-------|-------|-----|
| `--teal` | `#00F5D4` | Primary accent |
| `--mag` | `#FF00C8` | Secondary accent |
| `--bg` | `#000000` | Base background |
| `--white` | `#E8E8FF` | Body text |

## 📦 Build for Production

```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.

## 🌐 Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Add this `vercel.json` for SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## 📱 Features

- ✅ Custom magnetic cursor
- ✅ Preloader with letter animation
- ✅ Sticky responsive navbar + mobile hamburger
- ✅ Industry-switching hero headline
- ✅ Live results ticker
- ✅ Animated stats counters
- ✅ Interactive service selector (7 services)
- ✅ Filterable portfolio grid
- ✅ Terminal-style contact form + EmailJS
- ✅ Date/time booking system
- ✅ Community forum with replies
- ✅ WhatsApp floating button
- ✅ Availability badge
- ✅ Scroll reveal animations
- ✅ Full mobile responsive

## 🏗 Tech Stack

- React 18 + Vite
- React Router DOM v6
- CSS Modules
- EmailJS
- React Icons
