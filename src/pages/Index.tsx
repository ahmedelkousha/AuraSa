import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import HeroSection from '@/components/sections/HeroSection';
import PartnersSection from '@/components/sections/PartnersSection';
import StatsSection from '@/components/sections/StatsSection';
import SecretSection from '@/components/sections/SecretSection';
import ServicesSection from '@/components/sections/ServicesSection';
import MethodologySection from '@/components/sections/MethodologySection';
import SatisfactionSection from '@/components/sections/SatisfactionSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import MissionSection from '@/components/sections/MissionSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <StatsSection />
        <SecretSection />
        <ServicesSection />
        <MethodologySection />
        <SatisfactionSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection onOpenModal={() => setIsModalOpen(true)} />
        <MissionSection />
        <ContactSection />
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
