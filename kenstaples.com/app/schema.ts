export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ken Staples",
  "url": "https://kenstaples.com",
  "image": "https://kenstaples.com/og-image.png",
  "sameAs": [
    "https://github.com/kenstaplesonline",
    "https://linkedin.com/in/kenstaples",
  ],
  "jobTitle": "Web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "CACNAE Studios"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "addressCountry": "CA"
  },
  "knowsAbout": [
    "Web Development",
    "HTML",
    "CSS",
    "JavaScript",
    "Photography",
    "Science Fiction",
    "Roman Catholic Faith"
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ken Staples",
  "url": "https://kenstaples.com",
  "description": "Personal website of Ken Staples, a Calgary-based web developer",
  "publisher": {
    "@type": "Person",
    "name": "Ken Staples"
  }
}
