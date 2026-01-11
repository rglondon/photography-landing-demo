import { Beacon } from "@/components/Beacon";
import { HUD } from "@/components/HUD";
import { MissionBriefing } from "@/components/MissionBriefing";
import { Radar } from "@/components/Radar";
import { FilmStripGallery } from "@/components/FilmStripGallery";
import { SafariGallery } from "@/components/SafariGallery";
import { SpatialScatterGallery } from "@/components/SpatialScatterGallery";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState<"terminal" | "briefing" | "gallery" | "filmstrip" | "scatter">("terminal");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative selection:bg-destructive/20">
      <HUD />
      
      <AnimatePresence mode="wait">
        {view === "terminal" && (
          <motion.div
            key="terminal"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative w-full h-screen overflow-hidden"
          >
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
                location="Masai Mara"
                coordinates="01.48° S, 35.14° E"
                time="12:45 PM EAT"
                delay={0.5}
                onClick={() => setView("briefing")}
              />
              
              <Beacon 
                x={65} 
                y={25} 
                location="Varanasi"
                coordinates="25.31° N, 82.97° E"
                time="03:15 PM IST"
                delay={1.2}
              />
              
              <Beacon 
                x={45} 
                y={75} 
                location="Tokyo"
                coordinates="35.67° N, 139.65° E"
                time="06:45 PM JST"
                delay={2.0}
              />

              {/* Interactive "Enter" Prompt */}
              <motion.div 
                className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
                onClick={() => setView("briefing")}
              >
                <span className="font-mono text-xs tracking-[0.5em] text-muted-foreground group-hover:text-foreground transition-colors">
                  INITIALIZE SEQUENCE
                </span>
                <div className="h-[1px] w-0 group-hover:w-full bg-destructive transition-all duration-500 mt-2 mx-auto" />
              </motion.div>
            </main>
          </motion.div>
        )}

        {view === "briefing" && (
          <MissionBriefing key="briefing" onComplete={() => setView("gallery")} />
        )}

        {view === "gallery" && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <SafariGallery />
            
            {/* Navigation Controls */}
            <div className="fixed top-8 left-8 z-50 flex gap-8">
              <button 
                onClick={() => setView("terminal")}
                className="font-mono text-xs tracking-widest hover:text-destructive transition-colors"
              >
                ← TERMINAL
              </button>
              <div className="flex gap-4">
                <button onClick={() => setView("filmstrip")} className="font-mono text-xs tracking-widest opacity-50 hover:opacity-100 transition-opacity">
                  [VIEW: FILM]
                </button>
                <button onClick={() => setView("scatter")} className="font-mono text-xs tracking-widest opacity-50 hover:opacity-100 transition-opacity">
                  [VIEW: SCATTER]
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {view === "filmstrip" && (
          <motion.div key="filmstrip" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <FilmStripGallery />
            <button 
              onClick={() => setView("gallery")}
              className="fixed top-8 left-8 z-50 font-mono text-xs tracking-widest hover:text-destructive transition-colors"
            >
              ← BACK TO EXPEDITION
            </button>
          </motion.div>
        )}

        {view === "scatter" && (
          <motion.div key="scatter" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <SpatialScatterGallery />
            <button 
              onClick={() => setView("gallery")}
              className="fixed top-8 left-8 z-50 font-mono text-xs tracking-widest hover:text-destructive transition-colors text-white"
            >
              ← BACK TO EXPEDITION
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
