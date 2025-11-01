"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { person } from "@/lib/resume";
import { trackEngagement, trackSocial } from "@/lib/analytics";
import { Github, Linkedin, MessageCircle, FileDown, User, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = person.email;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailClick = () => {
    trackEngagement('email_copy', 'hero_section');
    copyToClipboard();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto w-full relative z-10">
        {/* Name */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 gradient-text leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {person.name}
        </motion.h2>

        {/* Title */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          I design & code for web
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {person.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
            <a
              href="/resume/resume.pdf"
              download="Tushank_Resume.pdf"
              onClick={() => trackEngagement('download_cv', 'hero_section')}
              className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-3.5 bg-white text-black rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Download resume PDF"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
              Download CV
            </a>
            <Link
              href="#about"
              className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-3.5 bg-white/10 text-white rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/20 hover:border-white/30"
              aria-label="Navigate to About Me section"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
              About Me
            </Link>
          </div>

          {/* Email with copy */}
          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2.5 sm:py-3 pl-8 sm:pl-10 pr-4 sm:pr-6 hover:bg-white/5 rounded-lg sm:rounded-xl transition-all cursor-pointer mt-2"
            aria-label={`Copy email address ${email} to clipboard`}
          >
            <div className="absolute left-0 flex items-center">
              <span className="text-base sm:text-lg font-mono text-gray-400 ml-3 sm:ml-4 group-hover:text-white transition-colors">~</span>
            </div>
            <span className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors ml-4 sm:ml-5">
              {email}
            </span>
            {copied ? (
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
            )}
          </button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 justify-center items-center gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href={person.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocial('github', 'hero_stats')}
            className="flex flex-col items-center group p-4 sm:p-6 rounded-xl hover:bg-white/5 transition-all"
            whileHover={{ y: -4, scale: 1.05 }}
            aria-label={`View ${person.stats.githubProjects} GitHub projects`}
          >
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors mb-3 sm:mb-4">
              <Github className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{person.stats.githubProjects}</span>
              <span className="text-xs sm:text-sm md:text-base text-gray-400 text-center">GitHub Projects</span>
            </motion.div>
          </motion.a>

          <motion.a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocial('linkedin', 'hero_stats')}
            className="flex flex-col items-center group p-4 sm:p-6 rounded-xl hover:bg-white/5 transition-all"
            whileHover={{ y: -4, scale: 1.05 }}
            aria-label={`View LinkedIn profile with ${person.stats.linkedinFollowers} followers`}
          >
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors mb-3 sm:mb-4">
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{person.stats.linkedinFollowers}</span>
              <span className="text-xs sm:text-sm md:text-base text-gray-400 text-center">LinkedIn Followers</span>
            </motion.div>
          </motion.a>

          <motion.a
            href={`https://wa.me/${person.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocial('whatsapp', 'hero_stats')}
            className="flex flex-col items-center group p-4 sm:p-6 rounded-xl hover:bg-white/5 transition-all"
            whileHover={{ y: -4, scale: 1.05 }}
            aria-label={`Contact via WhatsApp - ${person.stats.availability} availability`}
          >
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors mb-3 sm:mb-4">
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{person.stats.availability}</span>
              <span className="text-xs sm:text-sm md:text-base text-gray-400 text-center">WhatsApp Me</span>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
