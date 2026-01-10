import { motion } from "framer-motion";
import { useState } from "react";

interface MissionBriefingProps {
  onComplete: () => void;
}

export function MissionBriefing({ onComplete }: MissionBriefingProps) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-4xl w-full p-8">
        {/* Step 0: The Ticket */}
        {step === 0 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ x: "-100vw", opacity: 0 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-mono text-xs tracking-[0.5em] mb-8 text-muted-foreground uppercase">
              Mission Asset 01 // Boarding Pass
            </h2>
            <div className="relative group cursor-pointer" onClick={nextStep}>
              <img 
                src="/images/safari_baggage_tag.webp" 
                alt="Expedition Ticket" 
                className="w-full max-w-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-mono text-xs text-destructive tracking-widest animate-pulse">
                  [CLICK TO CONFIRM]
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 1: The Map */}
        {step === 1 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-mono text-xs tracking-[0.5em] mb-8 text-muted-foreground uppercase">
              Mission Asset 02 // Target Zone
            </h2>
            <div className="relative group cursor-pointer" onClick={nextStep}>
              <div className="relative overflow-hidden rounded-lg border border-border/50 bg-white p-4">
                <img 
                  src="/images/safari_map.webp" 
                  alt="Expedition Map" 
                  className="w-full max-w-xl mix-blend-multiply"
                />
                {/* Animated Target Reticle */}
                <motion.div 
                  className="absolute top-[60%] left-[45%] w-12 h-12 border-2 border-destructive rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-destructive rounded-full" />
                </motion.div>
              </div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-mono text-xs text-destructive tracking-widest animate-pulse">
                  [INITIATE DROP]
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
