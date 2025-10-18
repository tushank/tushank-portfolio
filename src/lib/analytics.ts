// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track custom events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
      page_title: title || document.title,
      page_location: window.location.href
    });
  }
};

// Track conversions (for important actions)
export const trackConversion = (conversionName: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: process.env.NEXT_PUBLIC_GA_ID,
      event_category: 'conversion',
      event_label: conversionName,
      value: value || 1
    });
  }
};

// Track user engagement
export const trackEngagement = (action: string, label: string, value?: number) => {
  trackEvent('engagement', {
    event_category: 'user_interaction',
    event_label: label,
    action: action,
    value: value
  });
};

// Track social interactions
export const trackSocial = (platform: string, action: string) => {
  trackEvent('social_interaction', {
    event_category: 'social',
    event_label: platform,
    action: action
  });
};

// Track contact interactions
export const trackContact = (method: string, location: string) => {
  trackEvent('contact_interaction', {
    event_category: 'contact',
    event_label: method,
    location: location
  });
};
