import { useEffect, useState } from "react";

export function HUD() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 p-8 font-mono text-[10px] tracking-widest text-muted-foreground uppercase flex flex-col justify-between">
      {/* Top Bar */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className="text-foreground font-bold">ARRIVAL TERMINAL</span>
          <span>SYS.VER.2.0.26</span>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span>{time.toLocaleTimeString()}</span>
          <span>{time.toLocaleDateString()}</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <span>COORDINATES</span>
          <span className="text-foreground">00°00'00"N 00°00'00"E</span>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span>STATUS: ONLINE</span>
          <span className="animate-pulse text-destructive">● LIVE FEED</span>
        </div>
      </div>
      
      {/* Center Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-border/50 opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border/50" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-border/50" />
      </div>
    </div>
  );
}
