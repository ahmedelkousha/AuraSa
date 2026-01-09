import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Search, Target, Rocket, BarChart3, CheckCircle } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const MethodologySection = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isRTL = i18n.language === 'ar';
  const [swiperKey, setSwiperKey] = useState(0);

  // Re-render Swiper when language changes to fix RTL issues
  useEffect(() => {
    setSwiperKey(prev => prev + 1);
  }, [i18n.language]);

  const steps = [
    {
      icon: Search,
      number: '01',
      title: t('methodology.step1.title'),
      desc: t('methodology.step1.desc'),
      points: [
        t('methodology.step1.point1'),
        t('methodology.step1.point2'),
        t('methodology.step1.point3'),
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      number: '02',
      title: t('methodology.step2.title'),
      desc: t('methodology.step2.desc'),
      points: [
        t('methodology.step2.point1'),
        t('methodology.step2.point2'),
        t('methodology.step2.point3'),
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      number: '03',
      title: t('methodology.step3.title'),
      desc: t('methodology.step3.desc'),
      points: [
        t('methodology.step3.point1'),
        t('methodology.step3.point2'),
        t('methodology.step3.point3'),
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: BarChart3,
      number: '04',
      title: t('methodology.step4.title'),
      desc: t('methodology.step4.desc'),
      points: [
        t('methodology.step4.point1'),
        t('methodology.step4.point2'),
        t('methodology.step4.point3'),
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.methodology-title',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="methodology-title text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('methodology.title')}
          </h2>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          key={swiperKey}
          modules={[Autoplay, Pagination]}
          loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          dir={isRTL ? 'rtl' : 'ltr'}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="methodology-swiper !pb-14"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group">
                  {/* Step number */}
                  <div className={`absolute top-4 right-4 rtl:right-auto rtl:left-4 text-5xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-30`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {step.desc}
                  </p>

                  {/* Points */}
                  <ul className="space-y-3">
                    {step.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MethodologySection;
