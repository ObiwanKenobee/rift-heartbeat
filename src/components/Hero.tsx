import { motion } from 'framer-motion';
import GeothermalCore from './GeothermalCore';
import riftValleyHero from '@/assets/rift-valley-hero.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${riftValleyHero})` }}
      />
      
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      
      {/* Ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p 
              className="text-primary font-medium tracking-[0.3em] text-sm mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              RIFT INTEGRATED FUTURES
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] mb-8">
              <span className="block">The Rift</span>
              <span className="block text-gradient-heat">as Living</span>
              <span className="block">Infrastructure</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl mb-10">
              Not a company. Not a utility.
              <span className="block mt-2 text-foreground font-medium">
                A civilizational platform.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/layers/geothermal">
                <motion.button
                  className="px-8 py-4 bg-gradient-heat text-primary-foreground font-medium rounded-sm hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore the System
                </motion.button>
              </Link>
              <Link to="/vision">
                <motion.button
                  className="px-8 py-4 border border-primary/30 text-foreground font-medium rounded-sm hover:border-primary/60 hover:bg-primary/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read the Vision
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          {/* Geothermal visualization */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <GeothermalCore />
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-muted-foreground text-sm tracking-wider">SCROLL</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
