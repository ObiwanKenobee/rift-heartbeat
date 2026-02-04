import { motion } from 'framer-motion';

const AtlasSanctum = () => {
  return (
    <section className="relative py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-medium tracking-[0.3em] text-sm mb-4">
              ATLAS SANCTUM ALIGNMENT
            </p>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              A Cornerstone Node of Planetary Regeneration
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Atlas Sanctum doesn't "build a project" here. It declares the Rift a cornerstone node of a planetary regenerative network.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                { title: "Africa's energy spine", desc: "24/7 geothermal baseload for the continent" },
                { title: "Earth's geothermal heart", desc: "Thermodynamic sovereignty without depletion" },
                { title: "Humanity's adaptation laboratory", desc: "Where civilization learns to heal itself" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-1 bg-gradient-heat rounded-full" />
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Quote card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-12 bg-background border border-primary/20 rounded-sm relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent" />
              
              <p className="text-3xl md:text-4xl font-serif italic leading-snug mb-8 text-foreground">
                "History will later say: Civilization learned to heal itself here first."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-heat flex items-center justify-center text-primary-foreground font-serif text-xl">
                  R
                </div>
                <div>
                  <p className="font-medium text-foreground">RIFTOS</p>
                  <p className="text-sm text-muted-foreground">
                    Rift Integrated Futures & Thermodynamic Operating System
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AtlasSanctum;
