import { motion } from 'framer-motion';

const GeothermalCore = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/20"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-4 rounded-full border border-primary/30"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border border-primary/40"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Core */}
      <motion.div
        className="absolute inset-12 rounded-full bg-gradient-heat glow-heat"
        animate={{ 
          boxShadow: [
            '0 0 40px hsl(35 90% 55% / 0.4)',
            '0 0 80px hsl(35 90% 55% / 0.6)',
            '0 0 40px hsl(35 90% 55% / 0.4)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Inner glow */}
      <motion.div
        className="absolute inset-16 rounded-full bg-sand/90"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default GeothermalCore;
