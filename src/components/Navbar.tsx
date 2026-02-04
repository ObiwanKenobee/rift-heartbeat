import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-heat flex items-center justify-center">
            <span className="text-primary-foreground font-serif text-lg">R</span>
          </div>
          <span className="font-serif text-xl text-foreground">RIFTOS</span>
        </Link>
        
        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/layers/geothermal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            System
          </Link>
          <Link to="/vision" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Vision
          </Link>
          <a href="/#partnership" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Partner
          </a>
        </div>
        
        {/* CTA */}
        <Link to="/vision#partnership">
          <motion.button
            className="px-5 py-2.5 border border-primary/40 text-sm text-foreground rounded-sm hover:bg-primary/10 hover:border-primary/60 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Network
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
