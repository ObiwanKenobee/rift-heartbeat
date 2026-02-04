import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 py-6 px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-heat flex items-center justify-center">
            <span className="text-primary-foreground font-serif text-lg">R</span>
          </div>
          <span className="font-serif text-xl text-foreground">RIFTOS</span>
        </a>
        
        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          {['System', 'Vision', 'Network', 'Engage'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        
        {/* CTA */}
        <motion.button
          className="px-5 py-2.5 border border-primary/40 text-sm text-foreground rounded-sm hover:bg-primary/10 hover:border-primary/60 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Join Network
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
