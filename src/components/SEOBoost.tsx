import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOBoostProps {
  baseUrl?: string;
}

/**
 * SEOBoost component adds additional SEO meta tags and canonical URLs to all pages
 */
const SEOBoost = ({ baseUrl = 'https://nishchay.online' }: SEOBoostProps) => {
  const location = useLocation();
  
  useEffect(() => {
    // Set canonical URL
    let canonicalUrl = document.querySelector('link[rel="canonical"]');
    if (!canonicalUrl) {
      canonicalUrl = document.createElement('link');
      canonicalUrl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalUrl);
    }
    canonicalUrl.setAttribute('href', `${baseUrl}${location.pathname}`);
    
    // Add language meta tag
    let langMeta = document.querySelector('meta[httpEquiv="content-language"]');
    if (!langMeta) {
      langMeta = document.createElement('meta');
      langMeta.setAttribute('httpEquiv', 'content-language');
      document.head.appendChild(langMeta);
    }
    langMeta.setAttribute('content', 'en');
    
    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, shrink-to-fit=no');
      document.head.appendChild(viewport);
    }
    
    // Add mobile-web-app-capable meta
    let webAppMeta = document.querySelector('meta[name="mobile-web-app-capable"]');
    if (!webAppMeta) {
      webAppMeta = document.createElement('meta');
      webAppMeta.setAttribute('name', 'mobile-web-app-capable');
      document.head.appendChild(webAppMeta);
    }
    webAppMeta.setAttribute('content', 'yes');
    
    // Add apple-mobile-web-app-capable meta
    let appleMeta = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!appleMeta) {
      appleMeta = document.createElement('meta');
      appleMeta.setAttribute('name', 'apple-mobile-web-app-capable');
      document.head.appendChild(appleMeta);
    }
    appleMeta.setAttribute('content', 'yes');
    
    // Add theme-color meta
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement('meta');
      themeMeta.setAttribute('name', 'theme-color');
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute('content', '#0070f3');
    
    return () => {
      // Clean up is not needed as these meta tags should persist
    };
  }, [location.pathname, baseUrl]);
  
  return null; // This component doesn't render anything
};

export default SEOBoost;