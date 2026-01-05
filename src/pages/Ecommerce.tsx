import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Ecommerce = () => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const navigate = useNavigate();

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
            <span>{t('successStory.backToPreviousPage')}</span>
          </button>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t('ecommerce.title')}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{t('ecommerce.date')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{t('ecommerce.readTime')} {isRTL ? 'دقائق قراءة' : 'min read'}</span>
                </div>
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>{isRTL ? 'مشاركة' : 'Share'}</span>
                </button>
              </div>
            </header>

            {/* Featured Image */}
            {/* <div className="mb-12 rounded-2xl overflow-hidden border border-border">
              <img
                src="/placeholder.svg"
                alt={t('ecommerce.title')}
                loading="lazy"
                decoding="async"
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div> */}

            {/* Content */}
            <div className="prose prose-lg max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('ecommerce.intro')}
                </p>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  {t('ecommerce.section1Title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('ecommerce.section1Intro')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section1Point1Title')}</strong> {t('ecommerce.section1Point1')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section1Point2Title')}</strong> {t('ecommerce.section1Point2')}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  {t('ecommerce.section2Title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('ecommerce.section2Intro')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section2Point1Title')}</strong> {t('ecommerce.section2Point1')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section2Point2Title')}</strong> {t('ecommerce.section2Point2')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section2Point3Title')}</strong> {t('ecommerce.section2Point3')}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  {t('ecommerce.section3Title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('ecommerce.section3Intro')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section3Point1Title')}</strong> {t('ecommerce.section3Point1')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section3Point2Title')}</strong> {t('ecommerce.section3Point2')}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  {t('ecommerce.section4Title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('ecommerce.section4Intro')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section4Point1Title')}</strong> {t('ecommerce.section4Point1')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section4Point2Title')}</strong> {t('ecommerce.section4Point2')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section4Point3Title')}</strong> {t('ecommerce.section4Point3')}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  {t('ecommerce.section5Title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('ecommerce.section5Intro')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section5Point1Title')}</strong> {t('ecommerce.section5Point1')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section5Point2Title')}</strong> {t('ecommerce.section5Point2')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('ecommerce.section5Point3Title')}</strong> {t('ecommerce.section5Point3')}
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-xl">
                  <p className="text-muted-foreground leading-relaxed italic">
                    {t('ecommerce.quote')}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <a
              href="https://wa.me/966539959221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-aura rounded-full text-primary-foreground"
            >
              {t('cta.reachUs')}
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ecommerce;