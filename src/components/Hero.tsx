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
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Name */}
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {person.name}
        </motion.h2>

        {/* Title */}
        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          I design & code for web
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {person.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <a
              href="/resume/resume.pdf"
              download="Tushank_Resume.pdf"
              onClick={() => trackEngagement('download_cv', 'hero_section')}
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
              Download CV
            </a>
            <Link
              href="#education"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
              About Me
            </Link>
          </div>

          {/* Email with copy */}
          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-white/5 rounded-lg transition-all cursor-pointer"
          >
            <div className="absolute left-0 flex items-center">
              <span className="text-lg font-mono text-gray-400 ml-3 group-hover:text-white transition-colors">~</span>
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors ml-4 sm:text-base">
              {email}
            </span>
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
            )}
          </button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href={person.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocial('github', 'hero_stats')}
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-base sm:text-lg font-semibold">20+</span>
              <span className="text-xs sm:text-sm text-gray-400">GitHub Projects</span>
            </motion.div>
          </motion.a>

          <motion.a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSocial('linkedin', 'hero_stats')}
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-base sm:text-lg font-semibold">1500+</span>
              <span className="text-xs sm:text-sm text-gray-400">LinkedIn Followers</span>
            </motion.div>
          </motion.a>

          <motion.a
            href={`https://wa.me/${person.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-base sm:text-lg font-semibold">24x7</span>
              <span className="text-xs sm:text-sm text-gray-400">WhatsApp Me</span>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
