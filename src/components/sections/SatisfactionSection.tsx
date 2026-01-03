import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const SatisfactionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <Heart className="w-10 h-10 text-primary text-[#cc2ba6]" />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            {t('satisfaction.title')}
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            {t('satisfaction.desc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SatisfactionSection;
