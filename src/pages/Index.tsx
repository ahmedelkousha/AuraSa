import { useState, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";

// Lazy load below-the-fold sections
const StatsSection = lazy(() => import("@/components/sections/StatsSection"));
const SecretSection = lazy(() => import("@/components/sections/SecretSection"));
const ServicesSection = lazy(
  () => import("@/components/sections/ServicesSection"),
);
const MethodologySection = lazy(
  () => import("@/components/sections/MethodologySection"),
);
const SatisfactionSection = lazy(
  () => import("@/components/sections/SatisfactionSection"),
);
const TestimonialsSection = lazy(
  () => import("@/components/sections/TestimonialsSection"),
);
const PartnersSection = lazy(
  () => import("@/components/sections/PartnersSection"),
);
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const MissionSection = lazy(
  () => import("@/components/sections/MissionSection"),
);
const ContactSection = lazy(
  () => import("@/components/sections/ContactSection"),
);
const ConsultationModal = lazy(() => import("@/components/ConsultationModal"));

// Lightweight loading skeleton
const SectionLoader = () => (
  <div className="w-full h-64 animate-pulse bg-muted/20" />
);

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero loads immediately - it's above the fold */}
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />

        {/* All other sections lazy load */}
        <Suspense fallback={<SectionLoader />}>
          <StatsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <SecretSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <MethodologySection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <SatisfactionSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <PartnersSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <CTASection onOpenModal={() => setIsModalOpen(true)} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <MissionSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />

      <Suspense fallback={null}>
        {isModalOpen && (
          <ConsultationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Index;
