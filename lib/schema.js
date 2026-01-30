// Schema.org structured data generators for SEO

export function generateHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Dekho",
    "url": "https://digitaldekho.com",
    "logo": "https://digitaldekho.com/logo.png",
    "description": "Leading global digital agency offering web development, app development, AI automation, video editing, photo editing, Meta ads, Google ads, and SEO services worldwide.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919996821315",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://facebook.com/digitaldekho",
      "https://twitter.com/digitaldekho",
      "https://linkedin.com/company/digitaldekho",
      "https://instagram.com/digitaldekho"
    ],
    "services": [
      "Web Development",
      "App Development", 
      "AI Automation",
      "Video Editing",
      "Photo Editing",
      "Meta Ads",
      "Google Ads",
      "SEO"
    ]
  };
}

export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Digital Dekho",
      "url": "https://digitaldekho.com"
    },
    "serviceType": service.title,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": "$$"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.title} Services`,
      "itemListElement": service.features?.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      })) || []
    }
  };
}

export function generateCityServiceSchema(service, city) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Digital Dekho - ${service.title} in ${city.name}`,
    "description": `Professional ${service.title.toLowerCase()} services in ${city.name}, ${city.country.name}. Expert solutions with local support.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressCountry": city.country.name
    },
    "geo": city.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat,
      "longitude": city.coordinates.lng
    } : undefined,
    "telephone": city.whatsappNumber || city.country.whatsappNumber,
    "url": `https://digitaldekho.com/services/${service.slug}-in-${city.slug}`,
    "priceRange": "$$",
    "serviceArea": {
      "@type": "City",
      "name": city.name
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.title} in ${city.name}`,
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "areaServed": {
          "@type": "City",
          "name": city.name
        }
      }]
    }
  };
}

export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBlogSchema(blog) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": blog.featuredImage,
    "author": {
      "@type": "Organization",
      "name": blog.author || "Digital Dekho Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Dekho",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digitaldekho.com/logo.png"
      }
    },
    "datePublished": blog.publishedAt,
    "dateModified": blog.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://digitaldekho.com/blog/${blog.slug}`
    }
  };
}

export function generateProjectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.featuredImage,
    "creator": {
      "@type": "Organization",
      "name": "Digital Dekho"
    },
    "url": project.liveUrl,
    "genre": project.service?.title,
    "keywords": project.technologies?.join(", ")
  };
}

export function generateProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "description": product.description,
    "image": product.logo,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100"
    },
    "downloadUrl": product.downloadUrl,
    "screenshot": product.screenshots
  };
}