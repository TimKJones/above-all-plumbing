import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  formatPageTitle, 
  truncateDescription, 
  createCanonicalUrl, 
  createOgImageUrl 
} from '@/lib/seo-utils';

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  siteName?: string;
}

/**
 * SEOHead is a reusable component that handles all SEO-related metadata
 * for service pages and other content pages.
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  siteName = 'Nashville Plumbing Vista',
}) => {
  // Ensure description is properly truncated to recommended length
  const truncatedDescription = truncateDescription(description);

  // Format page title consistently
  const formattedTitle = formatPageTitle(title, siteName);

  // Use the fallback URL directly since process.env is not available in the browser
  const baseUrl = 'https://nashville-plumbing-vista.com';
  
  // Construct absolute canonical URL if provided
  const fullCanonicalUrl = canonicalUrl 
    ? createCanonicalUrl(canonicalUrl, baseUrl)
    : undefined;

  // Construct full image URL for OG image if provided
  const fullOgImage = ogImage 
    ? createOgImageUrl(ogImage, baseUrl)
    : undefined;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{formattedTitle}</title>
      <meta name="description" content={truncatedDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Open Graph Metadata */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={truncatedDescription} />
      <meta property="og:type" content={ogType} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      {fullOgImage && <meta property="og:image" content={fullOgImage} />}
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card Metadata */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={truncatedDescription} />
      {fullOgImage && <meta name="twitter:image" content={fullOgImage} />}
    </Helmet>
  );
};

export default SEOHead; 