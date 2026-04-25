import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title = 'Nascraft Digitals - Premium Digital Agency',
  description = 'Full-service digital agency specializing in web development, branding, UI/UX design, and digital marketing. Transform your business with premium digital solutions.',
  keywords = 'web development, branding, digital marketing, UI/UX design, graphic design, SEO, social media marketing',
  image = '/og-image.jpg',
  url = 'https://nascraftdigitals.com',
  type = 'website'
}) {
  const siteTitle = title.includes('Nascraft') ? title : `${title} | Nascraft Digitals`
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Nascraft Digitals" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Nascraft Digitals" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
