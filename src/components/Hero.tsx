import { motion } from "motion/react";
import {
  ArrowRight,
  Code,
  Palette,
  Globe,
} from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  onNavigateToProjects: () => void;
  onNavigateToAbout: () => void;
}

export function Hero({
  onNavigateToProjects,
  onNavigateToAbout,
}: HeroProps) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-12 pb-6 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-3"
            >
              <span
                style={{ fontFamily: "var(--font-script)" }}
                className="block text-7xl md:text-8xl text-[#012169] mb-1 leading-tight"
              >
                Nemuulen
              </span>
              <span className="block text-3xl md:text-4xl font-bold text-[#0F172A]">
                Togtbaatar
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-4"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-lg">
                <Code className="w-4 h-4 text-[#012169]" />
                <span className="text-sm font-medium text-[#475569]">
                  Developer
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-lg">
                <Palette className="w-4 h-4 text-[#00539B]" />
                <span className="text-sm font-medium text-[#475569]">
                  Designer
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E2E8F0] rounded-lg">
                <Globe className="w-4 h-4 text-[#012169]" />
                <span className="text-sm font-medium text-[#475569]">
                  Global Thinker
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-[#475569] mb-5 max-w-lg leading-relaxed"
            >
              Duke Kunshan University student passionate about
              creating innovative, impactful, and
              culturally-aware digital experiences that bridge
              technology and human connection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={onNavigateToProjects}
                className="group inline-flex items-center px-6 py-3 bg-[#012169] hover:bg-[#00539B] text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={onNavigateToAbout}
                className="inline-flex items-center px-6 py-3 border-2 border-[#012169] hover:bg-[#012169] hover:text-white text-[#012169] text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                About Me
              </button>
            </motion.div>
          </motion.div>

          {/* Profile - Right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-80 h-80 md:w-96 md:h-96"
              style={{ perspective: 1200 }}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Front side - icon */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#012169] shadow-2xl bg-gradient-to-br from-[#012169]/10 to-[#00539B]/10"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src="/images/nemuulen-icon.png"
                    alt="Nemuulen Togtbaatar icon"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back side - profile photo */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#012169] shadow-2xl bg-gradient-to-br from-[#012169]/10 to-[#00539B]/10"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <img
                    src="/images/nemuulen-profile.jpg"
                    alt="Nemuulen Togtbaatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Simple Emoji Line - Centered under picture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-3xl space-x-3">
                🇲🇳 💻 🌏
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
