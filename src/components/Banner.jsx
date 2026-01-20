"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-black to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={false}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Manage Your Items <br />
            <span className="text-gray-300">Fast & Secure</span>
          </h1>

          <p className="text-gray-300 max-w-lg">
            Easily track, manage, and organize your items in one place.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={false}
          animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            initial={false}
            animate={mounted ? { y: [0, -12, 0] } : {}}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-full max-w-md h-[320px] md:h-[420px]
                       rounded-2xl overflow-hidden bg-white/5 backdrop-blur"
          >
            <Image
              src="/banner/hero.png"
              alt="Banner image"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
