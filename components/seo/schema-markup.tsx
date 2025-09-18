export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ROTTAY",
    "alternateName": "ROTTAY AI",
    "url": "https://rottay.ai",
    "logo": "https://rottay.ai/logo.png",
    "sameAs": [
      "https://github.com/rottay",
      "https://linkedin.com/company/rottay",
      "https://twitter.com/rottay"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-305-555-0100",
      "contactType": "sales",
      "email": "hello@rottay.ai",
      "areaServed": ["US", "MX", "BR", "AR", "CO", "CL", "PE"],
      "availableLanguage": ["English", "Spanish", "Portuguese"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "FL"
    },
    "description": "AI and blockchain solutions for Latin American markets",
    "foundingDate": "2023",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 100
    },
    "slogan": "Building the future with AI and blockchain",
    "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Blockchain", "Web3", "Software Development"],
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": 4,
      "offers": [
        {
          "@type": "Offer",
          "name": "BitHire.ai",
          "description": "AI-powered recruitment platform"
        },
        {
          "@type": "Offer",
          "name": "TicketGenius",
          "description": "Smart ticketing system"
        },
        {
          "@type": "Offer",
          "name": "MarketFlow",
          "description": "Market intelligence platform"
        },
        {
          "@type": "Offer",
          "name": "DollarEx",
          "description": "Cross-border payment solution"
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function JobPostingSchema({ position }: { position: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": position.title,
    "description": position.description,
    "datePosted": new Date().toISOString(),
    "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    "employmentType": position.type,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "ROTTAY",
      "sameAs": "https://rottay.ai"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressRegion": "Remote"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": position.salaryMin,
        "maxValue": position.salaryMax,
        "unitText": "YEAR"
      }
    },
    "experienceRequirements": position.experience,
    "educationRequirements": position.education,
    "skills": position.skills,
    "responsibilities": position.responsibilities,
    "qualifications": position.requirements,
    "benefits": position.benefits,
    "industry": "Technology",
    "occupationalCategory": position.department
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://rottay.ai",
    "name": "ROTTAY",
    "description": "AI and blockchain solutions for Latin American markets",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://rottay.ai/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}