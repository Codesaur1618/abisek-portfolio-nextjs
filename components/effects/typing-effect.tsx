"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { roleHeadlines } from "@/lib/data";

export function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roleHeadlines[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % roleHeadlines.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div className="h-8 md:h-10">
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-lg font-medium text-transparent md:text-2xl"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          {displayText}
          <span className="animate-pulse text-violet-400">|</span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
