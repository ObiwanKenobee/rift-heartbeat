import { motion } from 'framer-motion';
import { useState } from 'react';

const layers = [
  {
    id: 1,
    title: "Geothermal Baseload",
    subtitle: "Thermodynamic Sovereignty",
    description: "24/7 baseload stabilizes grids. Excess heat powers desalination, fertilizer synthesis, data centers. The heat regenerates without depletion.",
    highlight: "Africa's first post-fossil, always-on energy spine.",
    color: "from-magma to-primary",
    icon: "🌋"
  },
  {
    id: 2,
    title: "Climate Adaptation Engine",
    subtitle: "Energy as Means, Not End",
    description: "Geothermal + wind + hydro powers climate-resilient agriculture, cold chains, water recycling, urban cooling, and early-warning systems.",
    highlight: "Adaptation becomes infrastructure, not aid.",
    color: "from-primary to-terracotta",
    icon: "🌿"
  },
  {
    id: 3,
    title: "Regenerative Value Exchange",
    subtitle: "The Economic Flip",
    description: "Nature produces value → systems regenerate → value circulates locally → surplus compounds globally. Carbon drawdown, biodiversity preservation, water security become financial instruments.",
    highlight: "The Rift sells planetary stability.",
    color: "from-terracotta to-deep-teal",
    icon: "♻️"
  },
  {
    id: 4,
    title: "Political Power Without Violence",
    subtitle: "Indispensable Governance",
    description: "When national grids, food systems, and climate adaptation depend on Rift stability, political alignment follows automatically.",
    highlight: "Power without force.",
    color: "from-deep-teal to-accent",
    icon: "⚖️"
  },
  {
    id: 5,
    title: "Culture & Identity",
    subtitle: "The Global Classroom",
    description: "Human origin story. Geological wonder. Biodiversity archive. Climate research sanctuaries, indigenous knowledge archives, eco-civilization tourism.",
    highlight: "People learn how civilization survives.",
    color: "from-accent to-primary",
    icon: "🌍"
  }
];

const LayerSystem = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-medium tracking-[0.3em] text-sm mb-4">
            THE OPERATING SYSTEM
          </p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Five Integrated Layers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Systems engineering at a civilizational scale. Each layer anchors the next.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Layer navigation */}
          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.button
                key={layer.id}
                className={`w-full text-left p-6 rounded-sm border transition-all duration-300 ${
                  activeLayer === index
                    ? 'border-primary/50 bg-card'
                    : 'border-border/50 hover:border-primary/30 hover:bg-card/50'
                }`}
                onClick={() => setActiveLayer(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{layer.icon}</span>
                  <div>
                    <p className="text-xs text-primary tracking-wider mb-1">
                      LAYER {layer.id}
                    </p>
                    <h3 className="text-xl font-serif text-foreground">
                      {layer.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active layer detail */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              key={activeLayer}
              className="p-10 rounded-sm bg-card border border-border/50 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${layers[activeLayer].color}`} />
              
              <span className="text-6xl mb-6 block">
                {layers[activeLayer].icon}
              </span>
              
              <p className="text-primary text-sm tracking-wider mb-2">
                LAYER {layers[activeLayer].id}
              </p>
              
              <h3 className="text-3xl md:text-4xl font-serif mb-4">
                {layers[activeLayer].title}
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {layers[activeLayer].description}
              </p>
              
              <p className="text-xl font-serif text-gradient-heat">
                {layers[activeLayer].highlight}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LayerSystem;
