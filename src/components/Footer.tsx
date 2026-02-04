import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif mb-4">
              <span className="text-gradient-heat">RIFTOS</span>
            </h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Rift Integrated Futures & Thermodynamic Operating System. 
              Systems engineering at a civilizational scale.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Medium'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-foreground mb-4">
              SYSTEM
            </h4>
            <ul className="space-y-3">
              {['Geothermal', 'Climate Engine', 'Value Exchange', 'Governance', 'Culture'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium tracking-wider text-foreground mb-4">
              ENGAGE
            </h4>
            <ul className="space-y-3">
              {['Research', 'Partnership', 'Investment', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 RIFTOS. A civilizational platform.
          </p>
          <p className="text-sm text-muted-foreground">
            Part of the <span className="text-primary">Atlas Sanctum</span> network
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
