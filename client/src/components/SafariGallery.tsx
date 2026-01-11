import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import safariLandscape1 from "@/assets/images/safari_landscape_1.webp";
import safariLandscape2 from "@/assets/images/safari_landscape_2.webp";
import safariBaggageTag from "@/assets/images/safari_baggage_tag_refined.webp";

export function SafariGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 px-20">
          {/* Intro Card */}
          <div className="relative h-[80vh] w-[40vw] flex-shrink-0 flex flex-col justify-center">
            <h2 className="text-[8vw] font-bold leading-none tracking-tighter text-foreground/10 select-none">
              MARA
            </h2>
            <div className="absolute top-1/2 left-0 -translate-y-1/2">
              <h3 className="text-4xl font-mono font-light tracking-widest mb-4">
                EXPEDITION 01
              </h3>
              <p className="max-w-md text-muted-foreground font-mono text-sm leading-relaxed mb-8">
                The Masai Mara is not just a location; it is a living, breathing entity. 
                This collection captures the silence before the storm, the weight of the air, 
                and the ancient rhythm of the migration.
              </p>
              
              {/* Scroll Hint */}
              <div className="flex items-center gap-4 text-muted-foreground/50">
                <div className="w-12 h-[1px] bg-current" />
                <span className="font-mono text-[10px] tracking-widest uppercase animate-pulse">
                  Scroll to Explore
                </span>
              </div>
            </div>
          </div>

          {/* Photo 1: Landscape */}
          <div className="relative h-[80vh] w-[70vw] flex-shrink-0 group">
            <motion.div 
              className="w-full h-full overflow-hidden"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={safariLandscape1} 
                alt="Safari Landscape 1" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            {/* Baggage Tag Overlay */}
            <div className="absolute bottom-8 right-8 bg-white text-black p-4 font-mono text-xs transform rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-xl">
              <div className="border-2 border-black p-2">
                <div className="flex justify-between items-center mb-2 border-b border-black pb-1">
                  <span className="font-bold text-lg">MRE</span>
                  <span className="text-[10px]">FLIGHT 002</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>ISO</span>
                    <span>400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>APERTURE</span>
                    <span>f/5.6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SHUTTER</span>
                    <span>1/1000</span>
                  </div>
                </div>
                <div className="mt-4 pt-2 border-t border-black text-center font-bold cursor-pointer hover:bg-black hover:text-white transition-colors">
                  ACQUIRE PRINT
                </div>
              </div>
            </div>
          </div>

          {/* Photo 2: Landscape */}
          <div className="relative h-[80vh] w-[70vw] flex-shrink-0 group">
            <motion.div 
              className="w-full h-full overflow-hidden"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={safariLandscape2} 
                alt="Safari Landscape 2" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            {/* Baggage Tag Overlay */}
            <div className="absolute top-8 left-8 bg-white text-black p-4 font-mono text-xs transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 shadow-xl">
              <div className="border-2 border-black p-2">
                <div className="flex justify-between items-center mb-2 border-b border-black pb-1">
                  <span className="font-bold text-lg">MRE</span>
                  <span className="text-[10px]">FLIGHT 003</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>ISO</span>
                    <span>200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>APERTURE</span>
                    <span>f/8.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SHUTTER</span>
                    <span>1/500</span>
                  </div>
                </div>
                <div className="mt-4 pt-2 border-t border-black text-center font-bold cursor-pointer hover:bg-black hover:text-white transition-colors">
                  ACQUIRE PRINT
                </div>
              </div>
            </div>
          </div>

          {/* Baggage Tag Detail */}
          <div className="relative h-[80vh] w-[30vw] flex-shrink-0 flex items-center justify-center">
             <img 
                src={safariBaggageTag} 
                alt="Baggage Tag Detail" 
                className="w-full object-contain transform rotate-90"
              />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
