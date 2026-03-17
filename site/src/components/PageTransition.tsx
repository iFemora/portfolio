"use client";

import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const transition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
