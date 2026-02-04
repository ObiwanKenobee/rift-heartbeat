import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LayerSystem from '@/components/LayerSystem';
import VisionStatement from '@/components/VisionStatement';
import AtlasSanctum from '@/components/AtlasSanctum';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <LayerSystem />
      <VisionStatement />
      <AtlasSanctum />
      <Footer />
    </div>
  );
};

export default Index;
