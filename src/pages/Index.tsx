import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LayerGrid from '@/components/LayerGrid';
import EnergyFlowVisualization from '@/components/EnergyFlowVisualization';
import VisionStatement from '@/components/VisionStatement';
import AtlasSanctum from '@/components/AtlasSanctum';
import PartnershipForm from '@/components/PartnershipForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <LayerGrid />
      <EnergyFlowVisualization />
      <VisionStatement />
      <AtlasSanctum />
      <PartnershipForm />
      <Footer />
    </div>
  );
};

export default Index;
