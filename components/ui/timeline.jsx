"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Timeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-24 md:gap-10">
            {/* Sticky left column with year and dot */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* The dot */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#0f1115] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(50,167,255,0.15)]">
                <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-teal-300 to-cyan-500 shadow-[0_0_12px_rgba(45,212,191,0.5)]" />
              </div>
              {/* Year label */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-black text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.3)]">
                {item.title}
              </h3>
            </div>

            {/* Content card */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile-only year label */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-black text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.3)]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* The vertical line track */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.06)_4%,rgba(255,255,255,0.06)_96%,transparent_100%)]"
        >
          {/* Animated glowing beam */}
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-cyan-400 via-teal-300 to-transparent rounded-full shadow-[0_0_12px_4px_rgba(45,212,191,0.4)]"
          />
        </div>
      </div>
    </div>
  );
}
