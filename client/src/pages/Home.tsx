import { Beacon } from "@/components/Beacon";
import { HUD } from "@/components/HUD";
import { Radar } from "@/components/Radar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-destructive/20">
      <HUD />
      <Radar />
      
      <main className="relative z-10 w-full h-screen">
        {/* Central Title - Subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none opacity-10">
          <h1 className="text-[12vw] font-bold tracking-tighter leading-none font-sans">
            EXPEDITION
          </h1>
        </div>

        {/* Floating Beacons */}
        <Beacon 
          x={25} 
          y={35} 
          label="MRE // MARA" 
          subLabel="01.48° S // 12:45 PM" 
          delay={0.5}
        />
        
        <Beacon 
          x={65} 
          y={25} 
          label="VNS // VARANASI" 
          subLabel="25.26° N // 03:15 PM" 
          delay={1.2}
        />
        
        <Beacon 
          x={45} 
          y={75} 
          label="TKY // TOKYO" 
          subLabel="35.67° N // 06:45 PM" 
          delay={2.0}
        />

        {/* Interactive "Enter" Prompt */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <span className="font-mono text-xs tracking-[0.5em] text-muted-foreground group-hover:text-foreground transition-colors">
            INITIALIZE SEQUENCE
          </span>
          <div className="h-[1px] w-0 group-hover:w-full bg-destructive transition-all duration-500 mt-2 mx-auto" />
        </motion.div>
      </main>
    </div>
  );
}
