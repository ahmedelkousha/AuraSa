import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const MissionSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Target className="w-8 h-8 text-[#cc2ba6]" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('mission.title')}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative p-8 lg:p-12 rounded-3xl bg-card border border-border text-[#cc2ba6]"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />

            <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed text-center">
              {t('mission.desc')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
