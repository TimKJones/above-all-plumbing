/**
 * Utility functions for SEO optimization
 */

/**
 * Formats a page title consistently with the site name
 * @param title The page title to format
 * @param siteName The name of the website/company
 * @returns Formatted title string
 */
export const formatPageTitle = (
  title: string, 
  siteName: string = 'Nashville Plumbing Vista'
): string => {
  // If title already includes site name, return as is
  if (title.includes(siteName)) {
    return title;
  }
  
  // Otherwise append site name with separator
  return `${title} | ${siteName}`;
};

/**
 * Truncates a description to the recommended length for SEO
 * @param description The description to truncate
 * @param maxLength The maximum length to allow (default: 160 characters)
 * @returns Truncated description with ellipsis if needed
 */
export const truncateDescription = (
  description: string, 
  maxLength: number = 160
): string => {
  if (description.length <= maxLength) {
    return description;
  }
  
  // Truncate and add ellipsis, being careful not to cut words
  const truncated = description.substring(0, maxLength - 3);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > maxLength - 20) {
    // If there's a space near the end, cut at the space
    return `${truncated.substring(0, lastSpaceIndex)}...`;
  }
  
  // Otherwise just cut at the max length
  return `${truncated}...`;
};

/**
 * Creates a canonical URL from a path
 * @param path The path relative to the domain
 * @param baseUrl The base URL of the site
 * @returns Full canonical URL
 */
export const createCanonicalUrl = (
  path: string,
  baseUrl: string = 'https://nashville-plumbing-vista.com'
): string => {
  // Handle case where path already starts with http (absolute URL)
  if (path.startsWith('http')) {
    return path;
  }
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Remove trailing slash from baseUrl if it exists
  const normalizedBaseUrl = baseUrl.endsWith('/')
    ? baseUrl.slice(0, -1)
    : baseUrl;
  
  return `${normalizedBaseUrl}${normalizedPath}`;
};

/**
 * Creates a full image URL for Open Graph images
 * @param imagePath The path to the image
 * @param baseUrl The base URL of the site
 * @returns Full image URL
 */
export const createOgImageUrl = (
  imagePath: string,
  baseUrl: string = 'https://nashville-plumbing-vista.com'
): string => {
  // Handle case where imagePath already starts with http (absolute URL)
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Ensure imagePath starts with /
  const normalizedImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  // Remove trailing slash from baseUrl if it exists
  const normalizedBaseUrl = baseUrl.endsWith('/')
    ? baseUrl.slice(0, -1)
    : baseUrl;
  
  return `${normalizedBaseUrl}${normalizedImagePath}`;
}; 