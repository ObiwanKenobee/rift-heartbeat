import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { layersData } from '@/components/LayerGrid';

const LayerDetail = () => {
  const { slug } = useParams();
  const layer = layersData.find(l => l.slug === slug);
  
  if (!layer) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Layer Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const currentIndex = layersData.findIndex(l => l.slug === slug);
  const prevLayer = currentIndex > 0 ? layersData[currentIndex - 1] : null;
  const nextLayer = currentIndex < layersData.length - 1 ? layersData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ background: 'var(--gradient-glow)' }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <span>←</span>
              <span>Back to Overview</span>
            </Link>
            
            <div className="flex items-center gap-6 mb-6">
              <span className="text-7xl">{layer.icon}</span>
              <div>
                <p className="text-primary tracking-wider text-sm mb-2">LAYER {layer.id}</p>
                <h1 className="text-5xl md:text-6xl font-serif">{layer.title}</h1>
              </div>
            </div>
            
            <p className="text-2xl text-muted-foreground max-w-3xl mb-4">
              {layer.subtitle}
            </p>
            
            <p className="text-3xl font-serif text-gradient-heat">
              {layer.highlight}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif mb-6">Overview</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {layer.details.overview}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-medium mb-6 text-primary">Key Points</h3>
              <ul className="space-y-4">
                {layer.details.keyPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-1 bg-gradient-heat rounded-full flex-shrink-0" />
                    <p className="text-foreground">{point}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif">Key Metrics</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {layer.details.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="p-6 bg-background border border-border/50 rounded-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-3xl font-serif text-gradient-heat mb-2">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif mb-8 text-center">Implementation Phases</h2>
            
            <div className="space-y-6">
              {layer.details.implementation.map((phase, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-primary-foreground font-serif">{i + 1}</span>
                  </div>
                  <p className="text-lg text-foreground">{phase}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {prevLayer ? (
              <Link to={`/layers/${prevLayer.slug}`}>
                <motion.div 
                  className="group"
                  whileHover={{ x: -4 }}
                >
                  <p className="text-sm text-muted-foreground mb-1">← Previous Layer</p>
                  <p className="text-xl font-serif group-hover:text-primary transition-colors">
                    {prevLayer.title}
                  </p>
                </motion.div>
              </Link>
            ) : <div />}
            
            {nextLayer ? (
              <Link to={`/layers/${nextLayer.slug}`}>
                <motion.div 
                  className="group text-right"
                  whileHover={{ x: 4 }}
                >
                  <p className="text-sm text-muted-foreground mb-1">Next Layer →</p>
                  <p className="text-xl font-serif group-hover:text-primary transition-colors">
                    {nextLayer.title}
                  </p>
                </motion.div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LayerDetail;
