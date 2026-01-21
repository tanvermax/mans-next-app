"use client";

import { motion } from "framer-motion";

export default function AnimationWrapper({ children, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15, // Staggered entry
        ease: "easeOut" 
      }}
      className="h-full" // Ensures the grid items keep their height
    >
      {children}
    </motion.div>
  );
}