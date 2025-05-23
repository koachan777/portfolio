"use client"

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

export function Modal({ isOpen, onClose, title, description, technologies, imageUrl }: ModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-64">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white/95 transition-all duration-300 shadow-lg"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50/80 text-blue-600 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 