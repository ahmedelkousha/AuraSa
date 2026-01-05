import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate} from 'react-router-dom';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const navigate = useNavigate()
  const sections = [
    { titleKey: 'section1Title', contentKey: 'section1Content' },
    { titleKey: 'section2Title', contentKey: 'section2Content' },
    { titleKey: 'section3Title', contentKey: 'section3Content' },
    { titleKey: 'section4Title', contentKey: 'section4Content' },
    { titleKey: 'section5Title', contentKey: 'section5Content' },
    { titleKey: 'section6Title', contentKey: 'section6Content' },
    { titleKey: 'section7Title', contentKey: 'section7Content' },
    { titleKey: 'section8Title', contentKey: 'section8Content' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            <span>{isRTL ? 'العودة للصفحة السابقة' : 'Back to Previous Page'}</span>
          </button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('terms.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('terms.lastUpdated')}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('terms.intro')}
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 lg:p-10"
              >
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {t(`terms.${section.titleKey}`)}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`terms.${section.contentKey}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
