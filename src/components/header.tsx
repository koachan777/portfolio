"use client"

import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/60 backdrop-blur-sm z-50 border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Yoshiki Koakutsu
          </Link>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex space-x-8">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="text-gray-800 hover:text-blue-500 font-medium transition-colors">
                About
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/works" className="text-gray-800 hover:text-blue-500 font-medium transition-colors">
                Works
              </Link>
            </motion.li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
} 