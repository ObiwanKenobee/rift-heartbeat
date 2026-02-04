import { motion } from 'framer-motion';

const layers = [
  { id: 1, name: "Geothermal", y: 0, color: "from-magma to-primary" },
  { id: 2, name: "Climate", y: 1, color: "from-primary to-terracotta" },
  { id: 3, name: "Economy", y: 2, color: "from-terracotta to-deep-teal" },
  { id: 4, name: "Governance", y: 3, color: "from-deep-teal to-accent" },
  { id: 5, name: "Culture", y: 4, color: "from-accent to-primary" },
];

const EnergyFlowVisualization = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-obsidian">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium tracking-[0.3em] text-sm mb-4">
            SYSTEMS ARCHITECTURE
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Energy Flows Through All Layers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each layer anchors the next. Value circulates, compounds, and regenerates.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central flow line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-magma via-primary to-accent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Animated energy particles */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2"
              style={{ top: '0%' }}
              animate={{
                top: ['0%', '100%'],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear",
              }}
            />
          ))}

          {/* Layer nodes */}
          <div className="relative space-y-8">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    className="inline-block p-6 bg-card/80 backdrop-blur border border-border/50 rounded-sm"
                    whileHover={{ scale: 1.02, borderColor: 'hsl(var(--primary) / 0.5)' }}
                  >
                    <p className="text-xs text-primary tracking-wider mb-1">LAYER {layer.id}</p>
                    <h3 className="text-2xl font-serif mb-2">{layer.name}</h3>
                    <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${layer.color} ${index % 2 === 0 ? 'ml-auto' : ''}`} />
                  </motion.div>
                </div>

                {/* Center node */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-lg`}
                    animate={{
                      boxShadow: [
                        '0 0 20px hsl(var(--primary) / 0.3)',
                        '0 0 40px hsl(var(--primary) / 0.5)',
                        '0 0 20px hsl(var(--primary) / 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <span className="text-primary-foreground font-serif text-xl">{layer.id}</span>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>

          {/* Bottom convergence */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-heat rounded-sm text-primary-foreground"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="font-serif text-lg">Civilizational Stability</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnergyFlowVisualization;
