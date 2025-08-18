import React from "react";
import { motion } from "framer-motion";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col items-center gap-3 p-4 rounded-lg bg-transparent"
      aria-labelledby={`feature-${title}`}
    >
      <div
        className="w-12 h-12 rounded-md bg-gradient-to-b from-[#363636] to-[#161616] flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h4 id={`feature-${title}`} className="font-semibold">
        {title}
      </h4>
      <p className="text-sm text-gray-400 text-center">{desc}</p>
    </motion.div>
  );
}
