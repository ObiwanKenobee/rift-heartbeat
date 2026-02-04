import { motion } from 'framer-motion';

const VisionStatement = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full opacity-20"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p 
            className="text-primary font-medium tracking-[0.3em] text-sm mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            THE AMBITIOUS QUESTION
          </motion.p>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12">
            What if the Great Rift Valley becomes the world's first region where{' '}
            <span className="text-gradient-heat">
              energy, ecology, economy, and governance
            </span>{' '}
            are designed as one system?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { label: "Not greenwashed", icon: "✦" },
              { label: "Not aid-dependent", icon: "✦" },
              { label: "Not externally controlled", icon: "✦" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center justify-center gap-3 text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <span className="text-primary">{item.icon}</span>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            className="text-2xl md:text-3xl font-serif text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            A prototype for how humanity lives on a finite planet.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionStatement;
