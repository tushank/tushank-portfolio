"use client";
import { useEffect, useState } from "react";

const greetings = [
  "Hello",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "Ciao",
  "Olá",
  "Здравствуйте",
  "Merhaba",
  "Γειά",
  "Hej",
  "Hallo",
  "Salam",
];

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    // Cycle through all greetings
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => {
        const next = prev + 1;
        if (next >= greetings.length) {
          // All greetings shown, fade out
          clearInterval(greetingInterval);
          setShowGreeting(false);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
          return prev;
        }
        return next;
      });
    }, 800);

    return () => {
      clearInterval(greetingInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className="intro-overlay"
      role="status"
      aria-live="polite"
      aria-label="Introduction animation"
    >
      <div className="intro-container">
        {/* Greeting Text */}
        {showGreeting && (
          <div className="greeting-text">
            {greetings[currentGreeting]}
          </div>
        )}
      </div>
      
      {/* Screen reader announcement */}
      <span className="sr-only">
        Introduction animation playing
      </span>
    </div>
  );
}
