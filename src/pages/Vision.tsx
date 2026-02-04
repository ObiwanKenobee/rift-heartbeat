import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnershipForm from '@/components/PartnershipForm';
import { Link } from 'react-router-dom';

const Vision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ background: 'var(--gradient-glow)' }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <span>←</span>
              <span>Back to Home</span>
            </Link>
            
            <p className="text-primary tracking-wider text-sm mb-4">THE VISION</p>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              A Prototype for How Humanity Lives on a{' '}
              <span className="text-gradient-heat">Finite Planet</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg text-muted-foreground leading-relaxed"
            >
              <p className="text-2xl text-foreground font-serif">
                Think of the Rift not as a resource basin, but as a self-regulating system—an organism that produces energy, food, data, culture, and stability if treated correctly.
              </p>
              
              <h2 className="text-3xl font-serif text-foreground mt-16 mb-6">Why Energy Projects Fail</h2>
              <p>Energy projects fail when they ignore culture, centralize wealth, and fragment ecosystems. The conventional approach treats regions as extraction sites—pulling value out and leaving dysfunction behind.</p>
              
              <h2 className="text-3xl font-serif text-foreground mt-16 mb-6">Why RIFTOS Succeeds</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-primary">→</span>
                  <span>Energy anchors adaptation</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary">→</span>
                  <span>Adaptation anchors economics</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary">→</span>
                  <span>Economics anchors politics</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary">→</span>
                  <span>Politics anchors stability</span>
                </li>
              </ul>
              <p>This is systems engineering at a civilizational scale.</p>
              
              <h2 className="text-3xl font-serif text-foreground mt-16 mb-6">The Ambitious Question</h2>
              <p className="text-2xl text-foreground font-serif italic">
                What if the Great Rift Valley becomes the world's first region where energy, ecology, economy, and governance are designed as one system?
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { label: "Not greenwashed" },
                  { label: "Not aid-dependent" },
                  { label: "Not externally controlled" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-foreground">
                    <span className="text-primary">✦</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              
              <h2 className="text-3xl font-serif text-foreground mt-16 mb-6">Atlas Sanctum Alignment</h2>
              <p>Atlas Sanctum doesn't "build a project" here. It declares the Rift a cornerstone node of a planetary regenerative network.</p>
              
              <p className="text-foreground font-medium">The Rift becomes:</p>
              <ul className="space-y-2">
                <li>• Africa's energy spine</li>
                <li>• Earth's geothermal heart</li>
                <li>• Humanity's adaptation laboratory</li>
              </ul>
              
              <motion.div 
                className="mt-16 p-8 bg-card border border-primary/20 rounded-sm"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-serif italic text-foreground mb-4">
                  "History will later say: Civilization learned to heal itself here first."
                </p>
                <p className="text-primary">— RIFTOS Manifesto</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <PartnershipForm />
      <Footer />
    </div>
  );
};

export default Vision;
