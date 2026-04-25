export const pricingData = {
  webApp: [
    { name: 'Starter Pack', price: '₹7,999', note: '3–5 page website', popular: false },
    { name: 'Business Pack', price: '₹14,999', note: '8–10 page website', popular: true },
    { name: 'Premium Pack', price: '₹24,999', note: 'Custom + upto 20pg + billing', popular: false },
  ],
  
  mobileApp: [
    { name: 'Starter Pack', price: '₹15,999', iosPrice: 'iOS: ₹23,500', popular: false },
    { name: 'Business Pack', price: '₹22,999', iosPrice: 'iOS: ₹39,999', popular: true },
    { name: 'Premium Pack', price: '₹31,999', iosPrice: 'iOS: ₹49,999', popular: false },
  ],
  
  graphicDesign: [
    { name: 'Logo', sub: 'e-design', price: '₹900' },
    { name: 'Business Card', sub: 'e-design only', price: '₹600' },
    { name: 'Business Card', sub: 'with print (100 cards)', price: '₹500' },
    { name: 'Letter Head', sub: 'e-design', price: '₹589' },
    { name: 'Brochure', sub: 'e-design', price: '₹789' },
    { name: 'Banner Design', sub: 'e-design', price: '₹799' },
    { name: 'Post Design', sub: 'e-design', price: '₹699' },
    { name: 'Thumbnail', sub: 'e-design', price: '₹699' },
    { name: 'Ads Creative', sub: 'e-design', price: '₹799' },
    { name: 'Poster', sub: 'e-design', price: '₹499' },
    { name: 'Flyer', sub: 'e-design', price: '₹499' },
    { name: 'Event Banner', sub: 'e-design', price: '₹899' },
    { name: 'Business Ads', sub: 'e-design', price: '₹999' },
  ],
  
  videoEditing: [
    { name: 'Instagram Reels', detail: '60 sec', price: '₹399' },
    { name: 'Ads (Business)', detail: '60 sec', price: '₹999' },
    { name: 'YouTube Full Video', detail: '10 min', price: '₹699' },
    { name: 'Montage', detail: '', price: '₹399' },
    { name: 'AI Reels', detail: 'AI-powered', price: '₹3,999' },
  ],
  
  photoEditing: [
    { name: 'Social Media Posts', detail: 'All platforms', price: '₹299' },
    { name: 'General Edits', detail: '5 pics', price: '₹159' },
  ],
  
  shoot: [
    { name: 'Videography', price: '₹499' },
    { name: 'Photography', price: '₹399' },
  ],
  
  combos: [
    { name: 'Starter Combo', includes: 'Logo + Business Card + Banner + 3 Posts', price: '₹2,999' },
    { name: 'Business Launch', includes: 'Website + Logo + 3 Posts', price: '₹14,999' },
    { name: 'Digital Growth', includes: 'Website + 10 Reels + Ads (5)', price: '₹23,999' },
    { name: 'Premium Brand', includes: 'Website + Branding + Social Media (6)', price: '₹29,999' },
  ],
  
  monthlyPlans: [
    { tier: 'Starter', price: '1,999', features: ['6 Posts', '6 Reels'] },
    { tier: 'Business', price: '4,999', features: ['15 Posts', '15 Reels'] },
    { tier: 'Premium', price: '9,999', features: ['15 AI Ads / Ads', '5 Posts', '10 Reels'] },
  ],
}
