import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Users, TrendingUp, Palette, Globe, Search, Target, Heart, BarChart3, Grid3X3, LineChart, Megaphone, MousePointer, RefreshCw, Code, Layout, ShoppingCart, Rocket, Cog, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import VideoCarousel from '@/components/VideoCarousel';

// Social Media Hero and Gallery Images
import socialHero from '@/assets/smm-service/socialHero.png';
import smm1 from '@/assets/smm-service/smm1.png';
import smm2 from '@/assets/smm-service/smm2.png';
import smm3 from '@/assets/smm-service/smm3.png';
import smm4 from '@/assets/smm-service/smm4.png';
import smm5 from '@/assets/smm-service/smm5.png';

// Paid Ads Hero and Gallery Images
import adsHero from '@/assets/ads-service/adsHero.png';
import ads1 from '@/assets/ads-service/ads1.png';
import ads2 from '@/assets/ads-service/ads2.png';
import ads3 from '@/assets/ads-service/ads3.png';
import ads4 from '@/assets/ads-service/ads4.png';

// Motion Graphics Hero and Gallery Images
import motionHero from '@/assets/motion-graphics/motionHero.png';

// Motion Graphics Hero and Gallery Images
import ecommerceHero from '@/assets/ecommerce/ecommerceHero.png';


const socialMediaGallery = [
  { id: 1, image: smm1, title: 'Social Media Campaign 1' },
  { id: 2, image: smm2, title: 'Social Media Campaign 2' },
  { id: 3, image: smm3, title: 'Social Media Campaign 3' },
  { id: 4, image: smm4, title: 'Social Media Campaign 4' },
  { id: 5, image: smm5, title: 'Social Media Campaign 5' },
];

const adsGallery = [
  { id: 1, image: ads1, title: 'Ads Campaign 1' },
  { id: 2, image: ads2, title: 'Ads Campaign 2' },
  { id: 3, image: ads3, title: 'Ads Campaign 3' },
  { id: 4, image: ads4, title: 'Ads Campaign 4' },
];

const motionGraphicsGallery = [
  { id: 1, image: ads1, title: 'Ads Campaign 1' },
  { id: 2, image: ads2, title: 'Ads Campaign 2' },
  { id: 3, image: ads3, title: 'Ads Campaign 3' },
  { id: 4, image: ads4, title: 'Ads Campaign 4' },
];

const serviceData: Record<string, { icon: typeof Users; color: string; translationKey: string; hasVideos?: boolean; }> = {
  'social-media': {
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    translationKey: 'socialMedia',
    hasVideos: false,
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
    hasVideos: false,
  },
  'ecommerce': {
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    translationKey: 'ecommerce',
    hasVideos: false
  },
};

const heroImages: Record<string, string> = {
  'social-media': socialHero,
  'campaigns': adsHero,
  'motion-graphics': motionHero,
  'ecommerce': ecommerceHero
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const currentService = service ? serviceData[service as keyof typeof serviceData] : null;
  const isSocialMedia = service === 'social-media';
  const isCampaigns = service === 'campaigns';
  const isMotionGraphics = service === 'motion-graphics';
  const isWebDev = service === 'ecommerce';

  const heroImage = service ? heroImages[service] : null;


  const openLightbox = (image: string) => {
    setLightboxImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

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
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
          </Link>

          {/* Hero Section - Different layout for Social Media and Campaigns */}
          {(heroImage) ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

                {/* Hero Image */}
                <div className="flex-1 w-full max-w-md lg:max-w-lg">
                  <motion.img
                    src={heroImage}
                    alt={t(`servicePage.${translationKey}.heroTitle`)}
                    className="w-full h-auto object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  />

                </div>

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-start">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentService.color} flex items-center justify-center mb-6 mx-auto lg:mx-0`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    {t(`servicePage.${translationKey}.heroTitle`)}
                  </h1>
                  <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                    {t(`servicePage.${translationKey}.heroSubtitle`)}
                  </p>
                  <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
                    {t(`servicePage.${translationKey}.heroDesc`)}
                  </p>
                </div>

              </div>
            </motion.div>
          ) : (
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
          )}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16 text-center sm:text-right"
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

          {/* Video Carousel - Only for Motion Graphics */}
          {currentService.hasVideos && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <VideoCarousel
                title={''}
              />
            </motion.div>
          )}

          {/* Gallery Carousel with Lightbox for Social Media and Campaigns */}

          {(isSocialMedia || isCampaigns || isMotionGraphics || isWebDev) ? (!currentService.hasVideos &&
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <Swiper
                key={i18n.language}
                dir={isRTL ? 'rtl' : 'ltr'}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2.5 },
                  1280: { slidesPerView: 3 },
                }}
                className="portfolio-swiper !pb-12"
              >
                {(isSocialMedia ? socialMediaGallery : adsGallery).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className="relative group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border"
                      onClick={() => openLightbox(item.image)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <PortfolioCarousel title="" />
            </motion.div>

          )}

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
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            >
              <img
                src={lightboxImage}
                alt="Fullscreen view"
                className="max-w-full max-h-full object-contain"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicePage;
