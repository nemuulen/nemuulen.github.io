import { motion } from 'motion/react';

export function ForFun() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-6 lg:px-12 bg-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4">
            <span
              style={{ fontFamily: 'var(--font-script)' }}
              className="text-[#012169] text-6xl md:text-7xl"
            >
              Coming Soon
            </span>
          </h1>
          <p className="text-lg text-[#475569]">
            This page is currently being put together.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
