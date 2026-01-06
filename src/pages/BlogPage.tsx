import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Check } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Blog configuration - maps slugs to their i18n keys
const blogConfig: Record<string, {
  i18nKey: string;
  sections: number;
  hasQuote?: boolean;
  hasSubtitle?: boolean;
  hasSummary?: boolean;
  hasConclusion?: boolean;
}> = {
  'gulf-trend': {
    i18nKey: 'gulfTrend',
    sections: 5,
    hasSubtitle: true,
    hasSummary: true,
  },
  'ecommerce-guide': {
    i18nKey: 'ecommerce',
    sections: 5,
    hasQuote: true,
  },
  'commerce-future-2026': {
    i18nKey: 'commerceFuture',
    sections: 5,
    hasConclusion: true,
  },
  '360k-success': {
    i18nKey: 'successStory',
    sections: 0, // Success story has custom structure
  },
};

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const navigate = useNavigate();
  const [showCopied, setShowCopied] = useState(false);

  // Get blog configuration
  const blogData = slug ? blogConfig[slug] : null;

  // Copy link handler
  const handleCopyLink = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!blogData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {isRTL ? 'المقال غير موجود' : 'Article Not Found'}
            </h1>
            <button
              onClick={() => navigate('/')}
              className="text-primary hover:underline"
            >
              {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { i18nKey, sections, hasQuote, hasSubtitle, hasSummary, hasConclusion } = blogData;

  // Helper function to safely get translation
  const getBlogText = (key: string) => {
    const fullKey = `${i18nKey}.${key}`;
    const text = t(fullKey);
    // Return empty string if translation key not found
    return text === fullKey ? '' : text;
  };

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
                {getBlogText('title')}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{getBlogText('date')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{getBlogText('readTime')} {isRTL ? 'دقائق قراءة' : 'min read'}</span>
                </div>
                <button 
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 hover:text-primary transition-colors relative"
                >
                  <Share2 className="w-5 h-5" />
                  <span>{isRTL ? 'مشاركة' : 'Share'}</span>
                  
                  {/* Copy Success Notification */}
                  <AnimatePresence>
                    {showCopied && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -10 }}
                        className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-full mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 whitespace-nowrap z-10`}
                      >
                        <Check className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {isRTL ? 'تم نسخ الرابط!' : 'Link copied!'}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </header>

            {/* Featured Image */}
            {/* <div className="mb-12 rounded-2xl overflow-hidden border border-border">
              <img
                src="/placeholder.svg"
                alt={getBlogText('title')}
                loading="lazy"
                decoding="async"
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div> */}

            {/* Content */}
            <div className="prose prose-lg max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
                
                {/* Subtitle (if exists) */}
                {hasSubtitle && getBlogText('subtitle') && (
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {getBlogText('subtitle')}
                  </h2>
                )}

                {/* Introduction */}
                {getBlogText('intro') && (
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {getBlogText('intro')}
                  </p>
                )}

                {/* Dynamic Sections */}
                {Array.from({ length: sections }, (_, i) => i + 1).map((sectionNum) => {
                  const sectionTitle = getBlogText(`section${sectionNum}Title`);
                  const sectionIntro = getBlogText(`section${sectionNum}Intro`);
                  const sectionContent = getBlogText(`section${sectionNum}Content`);
                  
                  // Skip if section doesn't exist
                  if (!sectionTitle) return null;

                  return (
                    <div key={sectionNum}>
                      <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                        {sectionTitle}
                      </h3>
                      
                      {sectionIntro && (
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {sectionIntro}
                        </p>
                      )}

                      {/* Check for section content (used in some sections like commerceFuture section5) */}
                      {sectionContent && (
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {sectionContent}
                        </p>
                      )}

                      {/* Dynamic Points */}
                      <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6">
                        {[1, 2, 3].map((pointNum) => {
                          const pointTitle = getBlogText(`section${sectionNum}Point${pointNum}Title`);
                          const pointText = getBlogText(`section${sectionNum}Point${pointNum}`);
                          
                          if (!pointTitle && !pointText) return null;

                          return (
                            <li key={pointNum}>
                              {pointTitle && (
                                <strong className="text-foreground">{pointTitle}</strong>
                              )}
                              {pointText && ` ${pointText}`}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}

                {/* Summary Section (for Gulf Trend) */}
                {hasSummary && getBlogText('summaryTitle') && (
                  <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {getBlogText('summaryTitle')}
                    </h3>
                    {getBlogText('summaryIntro') && (
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        {getBlogText('summaryIntro')}
                      </p>
                    )}
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {[1, 2].map((pointNum) => {
                        const pointTitle = getBlogText(`summaryPoint${pointNum}Title`);
                        const pointText = getBlogText(`summaryPoint${pointNum}`);
                        
                        if (!pointTitle && !pointText) return null;

                        return (
                          <li key={pointNum}>
                            {pointTitle && (
                              <strong className="text-foreground">{pointTitle}</strong>
                            )}
                            {pointText && ` ${pointText}`}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Quote Section (for E-commerce) */}
                {hasQuote && getBlogText('quote') && (
                  <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-xl">
                    <p className="text-muted-foreground leading-relaxed italic">
                      {getBlogText('quote')}
                    </p>
                  </div>
                )}

                {/* Conclusion Section (for Commerce Future) */}
                {hasConclusion && getBlogText('conclusion') && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary rounded-r-xl">
                    <p className="text-foreground leading-relaxed font-medium">
                      {getBlogText('conclusion')}
                    </p>
                  </div>
                )}

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

export default BlogPage;