import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BeaconProps {
  x: number;
  y: number;
  label: string;
  subLabel: string;
  delay?: number;
  onClick?: () => void;
}

export function Beacon({ x, y, label, subLabel, delay = 0, onClick }: BeaconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute z-10"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1 }}
    >
      <div 
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {/* The Pulsating Dot */}
        <div className="relative flex items-center justify-center w-6 h-6">
          <motion.div
            className="absolute w-full h-full rounded-full bg-destructive/20"
            animate={{
              scale: [1, 2],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <div className="w-2 h-2 rounded-full bg-destructive" />
        </div>

        {/* The HUD Tag */}
        <div className={cn(
          "absolute left-8 top-0 flex flex-col transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-70 -translate-x-2"
        )}>
          <span className="font-mono text-xs font-medium tracking-widest text-foreground">
            [{label}]
          </span>
          <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
            {subLabel}
          </span>
        </div>

        {/* Wireframe Reveal (Simulated) */}
        {isHovered && (
          <motion.div
            className="absolute -left-20 -top-20 w-40 h-40 border border-border/50 rounded-full pointer-events-none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 border-t border-l border-border/30 rounded-full animate-spin-slow" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
