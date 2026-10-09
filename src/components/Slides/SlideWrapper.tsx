import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react"; // 👈 PERBAIKAN: Tambahkan 'type'

interface SlideWrapperProps {
  children: ReactNode;
  slideKey: string;
  direction: "next" | "prev";
  className?: string; // 👈 TAMBAHAN: Optional custom className
  disableAnimation?: boolean; // 👈 TAMBAHAN: Optional disable animasi
}

export default function SlideWrapper({
  children,
  slideKey,
  direction,
  className = "",
  disableAnimation = false,
}: SlideWrapperProps) {
  const variants = {
    enter: (direction: "next" | "prev") => ({
      x: direction === "next" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "next" | "prev") => ({
      x: direction === "next" ? -300 : 300,
      opacity: 0,
    }),
  };

  // Jika animasi dinonaktifkan, render tanpa framer-motion
  if (disableAnimation) {
    return <div className={`w-full ${className}`}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        className={`w-full ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
