import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, TrendingUp, Target, Users, DollarSign, AlertCircle, Lightbulb, CheckCircle2, BarChart3, FileText, X, ZoomIn } from 'lucide-react';
import googleCampaigns from '@/assets/case-study/google-campaigns.webp';
import metaCampaigns from '@/assets/case-study/meta-campains.webp';
import tiktokCampaigns from '@/assets/case-study/tiktok-campaigns.webp';
import snapchatCampaigns from '@/assets/case-study/snapchat-campaigns.webp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import secretImage from '@/assets/backstage/backstage.webp'

// Platform logos as simple styled badges
const PlatformBadge = ({ name }: { name: string }) => {
  const colors: Record<string, string> = {
    'Meta': 'bg-blue-600',
    'TikTok': 'bg-black',
    'Google': 'bg-red-500',
    'Snapchat': 'bg-yellow-400 text-black',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${colors[name] || 'bg-primary'}`}>
      {name}
    </span>
  );
};

const SuccessStoryPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);


  const metrics = [
    {
      icon: DollarSign,
      value: '316K+',
      label: t('successStory.metric1Label'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      value: '690%',
      label: t('successStory.metric2Label'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      value: '4.8+',
      label: 'ROAS',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      value: '65K',
      label: t('successStory.result2').split(':')[0],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const challenges = [
    t('successStory.challenge1'),
    t('successStory.challenge2'),
    t('successStory.challenge3'),
    t('successStory.challenge4'),
    t('successStory.challenge5'),
  ];

  const strategies = [
    t('successStory.strategy1'),
    t('successStory.strategy2'),
    t('successStory.strategy3'),
    t('successStory.strategy4'),
    t('successStory.strategy5'),
    t('successStory.strategy6'),
  ];

  const results = [
    t('successStory.result1'),
    t('successStory.result2'),
    t('successStory.result3'),
    t('successStory.result4'),
    t('successStory.result5'),
    t('successStory.result6'),
  ];

  const campaignImages = [
    { src: googleCampaigns, alt: 'Google Ads Campaigns', platform: 'Google' },
    { src: metaCampaigns, alt: 'Meta Ads Campaigns', platform: 'Meta' },
    { src: tiktokCampaigns, alt: 'TikTok Ads Campaigns', platform: 'TikTok' },
    { src: snapchatCampaigns, alt: 'Snapchat Ads Campaigns', platform: 'Snapchat' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            <span>{t('successStory.backToPreviousPage')}</span>
          </Link>

          <img src={secretImage} alt="Secret Image" loading="lazy"
            decoding="async" />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            {/* <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              {t('successStory.caseStudy')}
            </span> */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-relaxed">
              {t('successStory.mainTitle')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              {t('successStory.mainSubtitle')}
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <PlatformBadge name="Meta" />
              <PlatformBadge name="TikTok" />
              <PlatformBadge name="Google" />
              <PlatformBadge name="Snapchat" />
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {metrics.map((metric, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-muted-foreground text-sm">{metric.label}</div>
              </div>
            ))}
          </motion.div>

          {/* About Client */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {t('successStory.aboutClient')}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t('successStory.aboutClientDesc')}
            </p>
          </motion.div>

          {/* Situation Before */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {t('successStory.situationBefore')}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t('successStory.situationBeforeDesc')}
            </p>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-red-500/30 rounded-2xl p-8 lg:p-12 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {t('successStory.challenges')}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('successStory.challengesIntro')}
            </p>
            <ul className="space-y-4 mb-6">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-muted/50 rounded-xl border border-border">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('successStory.challengesConclusion')}
              </p>
            </div>
          </motion.div>

          {/* Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="bg-card border border-blue-500/30 rounded-2xl p-8 lg:p-12 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {t('successStory.strategy')}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('successStory.strategyIntro')}
            </p>
            <ul className="space-y-4">
              {strategies.map((strategy, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-500 text-xs font-bold">{index + 1}</span>
                  </span>
                  <span className="text-muted-foreground">{strategy}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8 lg:p-12 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {t('successStory.results')}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('successStory.resultsIntro')}
            </p>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{result}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Campaign Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {isRTL ? 'نتائج الحملات على المنصات' : 'Campaign Results Across Platforms'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {campaignImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <div className="absolute top-3 right-3 z-10">
                    <PlatformBadge name={image.platform} />
                  </div>
                  {/* Click to zoom indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl flex items-center justify-center z-[5]">
                    <div className="opacity-100 transition-opacity duration-300 bg-black rounded-full p-3 shadow-lg">
                      <ZoomIn className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-xl border border-border shadow-lg transition-shadow duration-300" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card border border-primary/30 rounded-2xl p-8 lg:p-12 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {t('successStory.conclusion')}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              {t('successStory.conclusionText')}
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t('successStory.conclusionText2')}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12"
          >
            <div className="p-6 bg-primary/10 rounded-xl border border-primary/20 text-center">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                {t('successStory.wantResults')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('successStory.wantResultsDesc')}
              </p>
              <a
                href="https://wa.me/966539959221"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-aura rounded-full text-primary-foreground"
              >
                {t('successStory.bookConsultation')}
              </a>
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-hidden"
            onClick={() => setLightboxImage(null)}

          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={lightboxImage}
              alt="Fullscreen view"
              loading="lazy"
              decoding="async"
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SuccessStoryPage;
