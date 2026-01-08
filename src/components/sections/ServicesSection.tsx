import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  Video, 
  Target, 
  ShoppingCart,
  ArrowLeft,
  ArrowRight 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isRTL = i18n.language === 'ar';

  const services = [
    {
      icon: Share2,
      title: t('services.social'),
      description: t('services.socialDesc'),
      href: '/services/social-media',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Video,
      title: t('services.motion'),
      description: t('services.motionDesc'),
      href: '/services/motion-graphics',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Target,
      title: t('services.ads'),
      description: t('services.adsDesc'),
      href: '/services/campaigns',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: ShoppingCart,
      title: t('services.websites'),
      description: t('services.websitesDesc'),
      href: '/services/ecommerce',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.service-card',
          { y: 80, opacity: 0, rotateX: 15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.1,
            duration: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-14 lg:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('services.title')}
          </h2>
           <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mt-6">
            {t('services.subtitle')}
          </span>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="service-card group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 card-hover"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center bg-primary justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary-foreground group-hover:text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  {t('services.learnMore')}
                  {isRTL ? (
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
