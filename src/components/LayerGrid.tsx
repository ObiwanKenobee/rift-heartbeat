import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface LayerData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  description: string;
  highlight: string;
  details: {
    overview: string;
    keyPoints: string[];
    metrics: { label: string; value: string }[];
    implementation: string[];
  };
}

export const layersData: LayerData[] = [
  {
    id: 1,
    slug: 'geothermal',
    title: 'Geothermal Baseload',
    subtitle: 'Thermodynamic Sovereignty',
    icon: '🌋',
    color: 'from-magma to-primary',
    description: 'Geothermal here is not just electricity. It is thermodynamic sovereignty. The heat regenerates without depletion.',
    highlight: "Africa's first post-fossil, always-on energy spine.",
    details: {
      overview: 'The Rift Valley sits atop one of Earth\'s most powerful geothermal reservoirs. Unlike solar or wind, geothermal provides 24/7 baseload power—the foundation for everything else. This isn\'t extractive mining; the heat regenerates perpetually.',
      keyPoints: [
        '24/7 baseload stabilizes national grids',
        'Excess heat powers desalination and fertilizer synthesis',
        'Data centers cooled by geothermal loops',
        'Predictable output enables long-term planning',
      ],
      metrics: [
        { label: 'Potential Capacity', value: '15+ GW' },
        { label: 'Uptime', value: '95%+' },
        { label: 'Carbon Intensity', value: 'Near Zero' },
        { label: 'Regeneration', value: 'Perpetual' },
      ],
      implementation: [
        'Phase 1: Core geothermal plant expansion',
        'Phase 2: Industrial heat integration',
        'Phase 3: Regional grid stabilization',
        'Phase 4: Continental energy export',
      ],
    },
  },
  {
    id: 2,
    slug: 'climate',
    title: 'Climate Adaptation Engine',
    subtitle: 'Energy as Means, Not End',
    icon: '🌿',
    color: 'from-primary to-terracotta',
    description: 'Energy is not the end. Energy is the means. Use geothermal + wind + hydro to power climate-resilient systems.',
    highlight: 'Adaptation becomes infrastructure, not aid.',
    details: {
      overview: 'Most projects stop at energy generation. RIFTOS goes further—energy powers a complete climate adaptation system. From food security to disaster response, every watt serves planetary resilience.',
      keyPoints: [
        'Climate-resilient agriculture systems',
        'Cold chains for food and medicine preservation',
        'Water recycling and desalination at scale',
        'Urban cooling and heat resilience infrastructure',
        'Disaster early-warning systems',
      ],
      metrics: [
        { label: 'Agricultural Yield Increase', value: '40-60%' },
        { label: 'Water Security', value: 'Year-round' },
        { label: 'Cold Chain Coverage', value: '500km radius' },
        { label: 'Early Warning Lead Time', value: '72 hours' },
      ],
      implementation: [
        'Agricultural cooling and irrigation networks',
        'Regional cold chain infrastructure',
        'Desalination plant deployment',
        'Climate monitoring sensor grid',
      ],
    },
  },
  {
    id: 3,
    slug: 'economy',
    title: 'Regenerative Value Exchange',
    subtitle: 'The Economic Flip',
    icon: '♻️',
    color: 'from-terracotta to-deep-teal',
    description: 'Nature produces value → systems regenerate → value circulates locally → surplus compounds globally.',
    highlight: 'The Rift sells planetary stability.',
    details: {
      overview: 'The current model: Nature produces value → humans extract → profits leave. The RIFTOS inversion: Value circulates locally, surplus compounds globally. Carbon drawdown, biodiversity preservation, water security become tradeable instruments.',
      keyPoints: [
        'Carbon drawdown from geothermal offsets',
        'Biodiversity preservation becomes tokenized yield',
        'Water security as a financial instrument',
        'Agricultural resilience earns long-term returns',
      ],
      metrics: [
        { label: 'Carbon Market Size', value: '$100B+ annually' },
        { label: 'Biodiversity Credits', value: 'New asset class' },
        { label: 'Water Security Value', value: 'Incalculable' },
        { label: 'Local Value Retention', value: '80%+' },
      ],
      implementation: [
        'Carbon credit verification infrastructure',
        'Biodiversity monitoring and tokenization',
        'Water security derivatives market',
        'Local value circulation mechanisms',
      ],
    },
  },
  {
    id: 4,
    slug: 'governance',
    title: 'Political Power Without Violence',
    subtitle: 'Indispensable Governance',
    icon: '⚖️',
    color: 'from-deep-teal to-accent',
    description: 'When national systems depend on Rift stability, political alignment follows automatically. No coups. No coercion.',
    highlight: 'Power without force.',
    details: {
      overview: 'The Rift already holds political gravity. Presidents come from here. Policy flows through here. Instead of fighting for power: make the Rift indispensable. When systems depend on Rift stability, alignment follows naturally.',
      keyPoints: [
        'National grids depend on Rift baseload',
        'Food systems depend on Rift stability',
        'Climate adaptation depends on Rift data',
        'Regional cooperation through shared infrastructure',
      ],
      metrics: [
        { label: 'Grid Dependency', value: '5+ nations' },
        { label: 'Food System Coverage', value: 'Regional' },
        { label: 'Political Stability Index', value: '+40%' },
        { label: 'Cross-border Cooperation', value: 'Unprecedented' },
      ],
      implementation: [
        'Multi-national energy agreements',
        'Shared infrastructure governance',
        'Regional stability monitoring',
        'Conflict prevention mechanisms',
      ],
    },
  },
  {
    id: 5,
    slug: 'culture',
    title: 'Culture & Identity',
    subtitle: 'The Global Classroom',
    icon: '🌍',
    color: 'from-accent to-primary',
    description: 'Human origin story. Geological wonder. Biodiversity archive. Turn the Rift into where humanity learns how civilization survives.',
    highlight: 'People learn how civilization survives.',
    details: {
      overview: 'Tourism in the Rift is treated like decoration. That\'s a mistake. The Rift is humanity\'s origin story, a geological wonder, and a biodiversity archive. It becomes a global classroom for planetary stewardship.',
      keyPoints: [
        'Climate research sanctuaries',
        'Indigenous knowledge archives',
        'Eco-civilization tourism (not safaris)',
        'Living museums of planetary stewardship',
      ],
      metrics: [
        { label: 'Research Institutions', value: '50+' },
        { label: 'Annual Visitors', value: '2M+' },
        { label: 'Knowledge Archives', value: 'Growing' },
        { label: 'Educational Programs', value: 'Global reach' },
      ],
      implementation: [
        'Research sanctuary establishment',
        'Indigenous knowledge digitization',
        'Eco-tourism infrastructure',
        'Global education partnerships',
      ],
    },
  },
];

interface LayerCardProps {
  layer: LayerData;
  index: number;
}

const LayerCard = ({ layer, index }: LayerCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link to={`/layers/${layer.slug}`}>
      <motion.div
        className="group p-8 bg-card border border-border/50 rounded-sm relative overflow-hidden h-full"
        whileHover={{ borderColor: 'hsl(var(--primary) / 0.5)', y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${layer.color}`} />
        
        <span className="text-5xl mb-6 block">{layer.icon}</span>
        
        <p className="text-primary text-xs tracking-wider mb-2">LAYER {layer.id}</p>
        
        <h3 className="text-2xl font-serif mb-2 group-hover:text-gradient-heat transition-all">
          {layer.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">{layer.subtitle}</p>
        
        <p className="text-muted-foreground mb-6 line-clamp-3">{layer.description}</p>
        
        <p className="text-sm font-medium text-primary">
          Explore Layer →
        </p>
      </motion.div>
    </Link>
  </motion.div>
);

const LayerGrid = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layersData.map((layer, index) => (
            <LayerCard key={layer.id} layer={layer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayerGrid;
