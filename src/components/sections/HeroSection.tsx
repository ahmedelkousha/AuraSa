import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import heroDesktop from '@/assets/hero-desktop.png';
import heroMobile from '@/assets/hero-mobile.png';
import './HeroSection.css'

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

  const whatsappLink = "https://wa.me/966539959221";

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Full-screen Background Image with responsive sizing */}
      <div className="absolute inset-0">
        <img
          src={heroDesktop}
          alt="Aura Marketing Hero"
          className="w-full h-full object-cover object-left hidden sm:block"
          sizes="100vw"
        />
        <img
          src={heroMobile}
          alt="Aura Marketing Hero"
          className="w-[500px] h-[580px] absolute top-[120px] object-cover sm:block md:hidden lg:hidden block"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40 lg:from-background/80 lg:via-background/50 lg:to-transparent" /> */}
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse animation-delay-400" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 text-center">
        <div ref={textRef} className={`max-w-2xl ${isRTL ? 'mr-0 ml-auto sm:text-right' : 'ml-0 mr-auto text-left'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="animate-item"
          >
            {/* <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Aura Marketing
            </span> */}
          </motion.div>

          <motion.div initial={{opacity:0.4}}
            animate={{opacity:1}}
            transition={{duration:0.8, repeat: Infinity,repeatType:"reverse"}}>
            <h1 className="heroContentHeading animate-item text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              <span className="">{t('hero.title')}</span>
            </h1>
</motion.div>

           <p className="hidden sm:block heroContentParagraph animate-item text-lg md:text-xl text-foreground/90 mb-4 leading-relaxed">
              {t('hero.subtitle1') + ' ' + t('hero.subtitle2')}
            </p>

           <div className="sm:hidden heroContentParagraph animate-item text-lg md:text-xl text-foreground/90 mb-4 leading-relaxed">
           <p>{t('hero.subtitle1')}</p>
           <p>{t('hero.subtitle2')}</p>
            </div>

          <p className="animate-item text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 sm:block hidden">
            {t('hero.description')}
          </p>

          <div className="ctaButtons animate-item flex flex-row gap-3 sm:gap-4 sm:justify-start justify-center">
            <button
              onClick={onOpenModal}
              className="btn-aura rounded-full flex items-center justify-center gap-2 text-primary-foreground text-[0.8rem] sm:text-base"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('hero.cta')}
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-aura rounded-full flex items-center justify-center gap-2 text-[0.8rem] sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('hero.reachUs')}
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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