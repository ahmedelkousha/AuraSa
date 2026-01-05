import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Megaphone, Palette, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = '', duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isRTL = i18n.language === 'ar';

  const stats = [
    {
      icon: Users,
      value: 120,
      suffix: '+',
      label: t('stats.clients'),
      color: 'from-primary/20 to-primary/5',
    },
    {
      icon: Megaphone,
      value: 1050,
      suffix: '+',
      label: t('stats.campaigns'),
      color: 'from-primary/20 to-primary/5',
    },
    {
      icon: Palette,
      value: 10500,
      suffix: '+',
      label: t('stats.designs'),
      color: 'from-primary/20 to-primary/5',
    },
    {
      icon: Globe,
      value: 250,
      suffix: '+',
      label: t('stats.websites'),
      color: 'from-primary/20 to-primary/5',
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.stat-card',
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
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
    <section ref={sectionRef} className="py-2 md:py-20 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-normal">
            {t('stats.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-b from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-500 card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary-foreground group-hover:text-primary" />
              </div>

              {/* Value */}
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-muted-foreground text-sm lg:text-base">
                {stat.label}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
