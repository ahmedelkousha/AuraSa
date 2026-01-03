import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, vw } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import heroDesktop from '@/assets/hero-desktop.png';
import heroMobileImage from '@/assets/hero-mobile.png';

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          textRef.current?.querySelectorAll('.animate-item'),
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.2, 
            duration: 0.8, 
            ease: 'power3.out',
            delay: 0.3
          }
        );
      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  const whatsappLink = "https://wa.me/966554444444";

 const sectionStyle = {
    backgroundImage: `url(${heroDesktop})`, // use template literals or string concatenation
    height: '100vh',
    backgroundSize: 'cover', // camelCase for 'background-size'
    backgroundRepeat: 'no-repeat', // camelCase for 'background-repeat'
     backgroundAttachment: 'fixed',
  };

  return (
    <section
      ref={heroRef}
      id="home"
      style={sectionStyle}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse animation-delay-400" />

      {/* Mobile Layout - Image with buttons only */}
      <div className="lg:hidden absolute inset-0">
        <div className="relative h-full w-full">
          {/* Image Background */}
          <img
            src={heroMobileImage}
            alt="Aura Marketing Hero"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          
          {/* Buttons positioned at bottom */}
          <div className="absolute bottom-40 left-0 right-0 z-10 px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row gap-3 justify-center"
            >
              <button
                onClick={onOpenModal}
                className="btn-aura rounded-full flex items-center justify-center gap-1.5 text-primary-foreground px-4 py-2.5 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                {t('hero.cta')}
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-aura rounded-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm"
              >
                <Phone className="w-4 h-4" />
                {t('hero.reachUs')}
              </a>
            </motion.div>
            
            {/* Scroll indicator for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-6 flex justify-center"
            >
              <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="container mx-auto px-4 relative z-10 hidden lg:block">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? '' : 'lg:grid-flow-dense'}`}>
          {/* Text Content */}
          <div className={`${isRTL ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="animate-item"
            >
              {/* <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                Aura Marketing
              </span> */}
            </motion.div>

            <h1 className="animate-item text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="">{t('hero.title')}</span>
            </h1>

            <p className="animate-item text-lg md:text-xl text-foreground/90 mb-4 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <p className="animate-item text-muted-foreground mb-8">
              {t('hero.description')}
            </p>

            <div className="animate-item flex flex-wrap gap-4">
              <button
                onClick={onOpenModal}
                className="btn-aura rounded-full flex items-center gap-2 text-primary-foreground"
              >
                <MessageCircle className="w-5 h-5" />
                {t('hero.cta')}
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-aura rounded-full flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t('hero.reachUs')}
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
            </div>
          </div>

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${isRTL ? 'order-1 lg:order-2' : 'order-1 lg:order-1'} relative`}
          >
            <div className="relative">
              {/* Glow effect behind video */}
              <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
              
              {/* <img
                src={heroDesktop
                }
                width={'100vw'}
                height={'100vh'}
                className="relative z-10 w-full max-w-lg mx-auto rounded-2xl"
              /> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
