import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '@/config/site';
import { BRAND_LOGOS } from '@/utils/assets';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  schema?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title = SITE_CONFIG.tagline,
  description = SITE_CONFIG.description,
  keywords = "WhatsApp CRM, WhatsApp automation, WhatsApp store builder, SMB SaaS India, Shopify alternative India, WhatsApp loyalty program",
  canonicalUrl,
  ogImage = `${SITE_CONFIG.url}${BRAND_LOGOS.main}`,
  ogType = 'website',
  schema,
}) => {
  const fullTitle = title.includes('iEYAL') ? title : `${title} | ${SITE_CONFIG.shortName}`;
  const url = canonicalUrl ? `${SITE_CONFIG.url}${canonicalUrl}` : SITE_CONFIG.url;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "alternateName": SITE_CONFIG.shortName,
    "url": SITE_CONFIG.url,
    "logo": `${SITE_CONFIG.url}${BRAND_LOGOS.icon}`,
    "description": SITE_CONFIG.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "80/5, Nethaji Road",
      "addressLocality": "Thiruvarur",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SITE_CONFIG.contact.phone,
      "contactType": "sales",
      "email": SITE_CONFIG.contact.email
    },
    "sameAs": [
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.twitter
    ]
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured JSON-LD Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};
