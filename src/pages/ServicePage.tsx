import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Users, TrendingUp, Palette, Globe, Search, Target, Heart, BarChart3, Grid3X3, LineChart, Megaphone, MousePointer, RefreshCw, Code, Layout, ShoppingCart, Rocket, Cog } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import VideoCarousel from '@/components/VideoCarousel';

const serviceData: Record<string, { icon: typeof Users; color: string; translationKey: string; hasVideos?: boolean }> = {
  'social-media': {
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    translationKey: 'socialMedia',
  },
  'motion-graphics': {
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    translationKey: 'motionGraphics',
    hasVideos: true,
  },
  'campaigns': {
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    translationKey: 'campaigns',
  },
  'ecommerce': {
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    translationKey: 'ecommerce',
  },
};

const featureIcons: Record<string, typeof Search[]> = {
  socialMedia: [Search, Target, Heart, Grid3X3, Grid3X3, BarChart3],
  motionGraphics: [Palette, Megaphone, Users],
  campaigns: [Megaphone, MousePointer, RefreshCw, LineChart],
  ecommerce: [Layout, ShoppingCart, Code, Rocket, Cog],
};

const ServicePage = () => {
  const { service } = useParams<{ service: string }>();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const currentService = service ? serviceData[service as keyof typeof serviceData] : null;

  if (!currentService) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {isRTL ? 'الخدمة غير موجودة' : 'Service Not Found'}
            </h1>
            <Link to="/" className="text-primary hover:underline">
              {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = currentService.icon;
  const translationKey = currentService.translationKey;
  const icons = featureIcons[translationKey] || [];

  // Get number of features based on service
  const getFeatureCount = () => {
    if (translationKey === 'socialMedia') return 6;
    if (translationKey === 'motionGraphics') return 3;
    if (translationKey === 'campaigns') return 4;
    if (translationKey === 'ecommerce') return 5;
    return 0;
  };

  const featureCount = getFeatureCount();

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
            <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
          </Link>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentService.color} flex items-center justify-center mb-6`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t(`servicePage.${translationKey}.heroTitle`)}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              {t(`servicePage.${translationKey}.heroSubtitle`)}
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
              {t(`servicePage.${translationKey}.heroDesc`)}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <a
              href="https://wa.me/966539959221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-aura rounded-full text-primary-foreground px-8 py-4 text-lg font-bold"
            >
              {t('servicePage.startNow')}
            </a>
          </motion.div>

 {/* Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('servicePage.portfolioTitle')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(`servicePage.${translationKey}.portfolioDesc`)}
            </p>
          </motion.div>
          
          {/* Portfolio Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <PortfolioCarousel
              title=""
            />
          </motion.div>

          {/* Why Choose Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {t(`servicePage.${translationKey}.whyChoose`)}
            </h2>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {Array.from({ length: featureCount }).map((_, index) => {
              const FeatureIcon = icons[index] || Search;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${currentService.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <FeatureIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t(`servicePage.${translationKey}.feature${index + 1}Title`)}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {t(`servicePage.${translationKey}.feature${index + 1}Subtitle`)}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`servicePage.${translationKey}.feature${index + 1}Desc`)}
                  </p>
                </div>
              );
            })}
          </motion.div>

         
          {/* Video Carousel - Only for Motion Graphics */}
          {currentService.hasVideos && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <VideoCarousel
                title={isRTL ? 'فيديوهات الموشن جرافيك' : 'Motion Graphics Videos'}
              />
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('servicePage.readyToStart')}
            </h3>
            <a
              href="https://wa.me/966539959221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-aura rounded-full text-primary-foreground"
            >
              {t('servicePage.contactNow')}
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
