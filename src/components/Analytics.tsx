"use client";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || !(window as any).gtag) return;
    
    // Track page views
    (window as any).gtag("config", GA_ID, {
      page_path: pathname + (searchParams?.toString() ? `?${searchParams}` : ""),
      page_title: document.title,
      page_location: window.location.href
    });
  }, [pathname, searchParams]);

  // Track custom events
  useEffect(() => {
    if (!GA_ID || !(window as any).gtag) return;

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        (window as any).gtag("event", "scroll", {
          event_category: "engagement",
          event_label: `${scrollPercent}%`,
          value: scrollPercent
        });
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      (window as any).gtag("event", "timing_complete", {
        name: "time_on_page",
        value: timeSpent
      });
    };

    window.addEventListener("scroll", trackScrollDepth);
    window.addEventListener("beforeunload", trackTimeOnPage);

    return () => {
      window.removeEventListener("scroll", trackScrollDepth);
      window.removeEventListener("beforeunload", trackTimeOnPage);
    };
  }, []);

  if (!GA_ID) {
    // Show a helpful message in development
    if (process.env.NODE_ENV === "development") {
      console.log("Google Analytics not configured. Add NEXT_PUBLIC_GA_ID to your environment variables.");
    }
    return null;
  }

  return (
    <>
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} 
        strategy="afterInteractive" 
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
