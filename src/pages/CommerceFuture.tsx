import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CommerceFuture = () => {
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
            <span>{t('successStory.backToHome')}</span>
          </button>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t('commerceFuture.title')}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{t('commerceFuture.date')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{t('commerceFuture.readTime')} {isRTL ? 'دقائق قراءة' : 'min read'}</span>
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
                alt={t('commerceFuture.title')}
                loading="lazy"
                decoding="async"
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div> */}

            {/* Content */}
            <div className="prose prose-lg max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('commerceFuture.intro')}
                </p>

                {/* Section 1: Intent-Based Marketing */}
                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  {t('commerceFuture.section1Title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('commerceFuture.section1Intro')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
                  <li>
                    <strong className="text-foreground">{t('commerceFuture.section1Point1Title')}</strong> {t('commerceFuture.section1Point1')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('commerceFuture.section1Point2Title')}</strong> {t('commerceFuture.section1Point2')}
                  </li>
                </ul>

                {/* Section 2: Visual & Voice Search */}
                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  {t('commerceFuture.section2Title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('commerceFuture.section2Intro')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
                  <li>
                    <strong className="text-foreground">{t('commerceFuture.section2Point1Title')}</strong> {t('commerceFuture.section2Point1')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('commerceFuture.section2Point2Title')}</strong> {t('commerceFuture.section2Point2')}
                  </li>
                </ul>

                {/* Section 3: Data-Driven Loyalty */}
                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  {t('commerceFuture.section3Title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('commerceFuture.section3Intro')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
                  <li>
                    <strong className="text-foreground">{t('commerceFuture.section3Point1Title')}</strong> {t('commerceFuture.section3Point1')}
                  </li>
                  <li>
                    <strong className="text-foreground">{t('commerceFuture.section3Point2Title')}</strong> {t('commerceFuture.section3Point2')}
                  </li>
                </ul>

                {/* Section 4: Meta-Search Commerce */}
                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  {t('commerceFuture.section4Title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('commerceFuture.section4Intro')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
                  <li>
                    <strong className="text-foreground">{t('commerceFuture.section4Point1Title')}</strong> {t('commerceFuture.section4Point1')}
                  </li>
                </ul>

                {/* Section 5: Video SEO */}
                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                  {t('commerceFuture.section5Title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('commerceFuture.section5Content')}
                </p>

                {/* Conclusion Quote */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary rounded-r-xl">
                  <p className="text-foreground leading-relaxed font-medium">
                    {t('commerceFuture.conclusion')}
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

export default CommerceFuture;