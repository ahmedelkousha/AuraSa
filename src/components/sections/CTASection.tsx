import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, ArrowLeft, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onOpenModal: () => void;
}

const CTASection = ({ onOpenModal }: CTASectionProps) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const whatsappLink = "https://wa.me/966539959221";

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('cta.title')}
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t('cta.desc')}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="btn-aura rounded-full flex items-center gap-2 animate-pulse-glow text-primary-foreground"
            >
              <MessageCircle className="w-5 h-5" />
              {t('cta.button')}
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-aura rounded-full flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {t('cta.reachUs')}
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
